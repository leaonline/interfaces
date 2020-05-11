import { check, Match } from 'meteor/check'

const cache = new Map()
const langs = new Map()

const getSrc = () => {
  return {
    icon: cache.get('icon'),
    label: cache.get('label'),
    description: cache.get('description'),
    content: cache.get('content')
  }
}

function extract (source = {}, { schemaStr }) {
  const target = {}
  const entries = Object.entries(source)
  entries.forEach(([key, value]) => {
    target[key] = {}
    target[key].name = value.name

    const valueSchemaStr = JSON.stringify(value.schema, BackendConfig.replacer, 0)
    target[key].schema = valueSchemaStr === schemaStr ? null : value.schema
  })
  return target
}

function getDependencies (schema) {
  const dependencies = new Set()
  Object.values(schema).forEach(field => {
    if (!field.dependency) return
    if (field.dependency.collection) dependencies.add(field.dependency.collection)
    if (field.dependency.context) dependencies.add(field.dependency.context)
  })
  return Array.from(dependencies)
}

function clean (context) {
  const cleaned = {
    name: context.name,
    label: context.label,
    icon: context.icon,
    isFilesCollection: !!context.isFilesCollection,
    isConfigDoc: !!context.isConfigDoc,
    isType: !!context.isType
  }

  if (context.schema) {
    cleaned.schema = context.schema
    cleaned.dependencies = getDependencies(context.schema)

    const schemaStr = JSON.stringify(context.schema, BackendConfig.replacer, 0)

    if (context.methods) {
      cleaned.methods = extract(context.methods, { schemaStr })
    }

    if (context.publications) {
      cleaned.publications = extract(context.publications, { schemaStr })
    }
  }

  if (context.types) {
    cleaned.types = context.types
  }

  return JSON.stringify(cleaned, BackendConfig.replacer, 0)
}

export const BackendConfig = {}

BackendConfig.types = {
  list: 'list',
  form: 'form',
  children: 'children',
  gallery: 'gallery',
  document: 'document',
  typeView: 'typeView'
}

BackendConfig.fieldTypes = {
  keyMap: 'keyMap',
  context: 'context',
  collection: 'collection'
}

BackendConfig.filterTypes = {
  publication: 'publication',
  postPublication: 'postPublication'
}

BackendConfig.init = function ({ icon, label, description }) {
  check(icon, String)
  check(label, String)
  check(description, Match.Maybe(String))
  cache.set('icon', icon)
  cache.set('label', label)
  cache.set('description', description)
  cache.set('content', [])
  cache.set('initialized', true)
}

BackendConfig.addLang = function (locale, config) {
  langs.set(locale, config)
}

BackendConfig.add = function (context) {
  if (!cache.get('initialized')) throw new Error('[BackendConfig] not initialized')
  const _content = cache.get('content')
  const cleaned = clean(context)
  console.log(cleaned)
  _content.push(cleaned)
  cache.set('content', _content)
}

BackendConfig.replacer = function replacer (name, val) {
  if (typeof val === 'function') {
    return val.prototype.constructor.name
  } else {
    return val
  }
}

BackendConfig.get = function (lang) {
  if (!cache.get('initialized')) throw new Error('[BackendConfig] not initialized')
  const src = getSrc()
  src.lang = langs.get(lang)
  return src
}

BackendConfig.methods = {}

BackendConfig.methods.get = {
  name: 'backendConfig.methods.get',
  schema: {
    lang: {
      type: String
    }
  },
  numRequests: 1,
  timeInterval: 1000,
  run: function ({ lang }) {
    return BackendConfig.get(lang)
  }
}
