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
const labelStore = {}

function registerLabel (keyPath, labelStr) {
  
}

function resolveLabels (lang) {

}

export const BackendConfig = {}

BackendConfig.init = function ({ label, description }) {
  check(label, Match.Maybe(String))
  check(description, Match.Maybe(String))
  _src = {}
  _src = { label, description, content: [] }
}

BackendConfig.add = function (content) {
  // TODO make dynamic check
  if (!_src) BackendConfig.init({})
  _src.content.push(content)
}

BackendConfig.get = function (lang) {
  resolveLabels(lang)
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