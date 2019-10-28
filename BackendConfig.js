import { check, Match } from 'meteor/check'

const isObject = x => typeof x === 'object' && x !== null
const isContent = ({ type, name, label, description, schema, content }) => {
  check(type, String)
  check(label, Match.Maybe(String))
  check(description, Match.Maybe(String))
  check(schema, Match.Maybe(Match.Where(isObject)))
  check(content, Match.Where(isContent))
  return true
}

let _src
let _langs = {}

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
  _src = {}
  _src = { icon, label, description, content: [] }
}

BackendConfig.addLang = function (locale, config) {
  _langs[ locale ] = config
}

BackendConfig.add = function (content) {
  if (!_src) throw new Error('[BackendConfig] not initialized')
  _src.content.push(content)
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
  _src.lang = _langs[ lang ]
  return _src
}

BackendConfig.methods = {}

BackendConfig.methods.get = {
  name: 'backendConfig.methods.get',
  schema: {
    lang: {
      type: String
    }
  },
  isPublic: true,
  numRequests: 1,
  timeInterval: 1000,
  run: function ({ lang }) {
    return BackendConfig.get(lang)
  }
}