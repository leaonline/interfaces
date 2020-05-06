import { check, Match } from 'meteor/check'

/*
const isObject = x => typeof x === 'object' && x !== null
const isContent = ({ type, name, label, description, schema, content }) => {
  check(type, String)
  check(label, Match.Maybe(String))
  check(description, Match.Maybe(String))
  check(schema, Match.Maybe(Match.Where(isObject)))
  check(content, Match.Where(isContent))
  return true
}
*/

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

export const BackendConfig = {}

BackendConfig.types = {
  list: 'list',
  form: 'form',
  children: 'children',
  gallery: 'gallery',
  document: 'document'
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

BackendConfig.add = function (content) {
  if (!cache.get('initialized')) throw new Error('[BackendConfig] not initialized')
  const _content = cache.get('content')
  _content.push(content)
  cache.set('content', _content)
}

function replacer (name, val) {
  if (typeof val === 'function') {
    return val.prototype.constructor.name
  } else {
    return val
  }
}

BackendConfig.replacer = replacer

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
