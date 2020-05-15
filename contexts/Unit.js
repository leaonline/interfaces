import { Labels } from '../common/Labels'
import { Status } from '../types/Status'

export const Unit = {}

Unit.name = 'unit'
Unit.label = 'unit.title'
Unit.icon = 'cube'
Unit.representative = 'shortCode'
Unit.useHistory = true

Unit.schema = {
  status: {
    type: Number,
    label: {
      name: Status.label,
      list: false,
      form: true,
      preview: true
    },
    allowedValues: Status.allowedValues,
    defaultValue: Status.defaultValue,
    dependency: {
      context: Status.name,
      field: Status.representative
    }
  },
  [Unit.representative]: {
    type: String,
    label: Labels[Unit.representative]
  },
  legacyId: {
    type: String,
    optional: true
  },
  title: {
    type: String,
    label: Labels.title
  },
  story: {
    type: Array,
    optional: true,
    list: false
  },
  'story.$': {
    type: Object
  },
  stimuli: {
    type: Array,
    optional: true,
    list: false
  },
  'stimuli.$': {
    type: Object,
  },
  instructions: {
    type: Array,
    optional: true,
    list: false
  },
  'instructions.$': {
    type: Object,
  },
  pages: {
    type: Array,
    optional: true,
    list: false
  },
  'pages.$': {
    type: Array
  },
  'pages.$.$': {
    type: Object
  }
}

const pageSchema = (fieldBase) => ({
  [`${fieldBase}.type`]: String,
  [`${fieldBase}.subtype`]: String,
  [`${fieldBase}.value`]: String,
  [`${fieldBase}.width`]: String
})

const storyPageSchema = pageSchema('story.$')
const stimuliPageSchema = pageSchema('stimuli.$')
const instructionsPageSchema = pageSchema('instructions.$')
const pagesPageSchema = pageSchema('pages.$.$')

Object.assign({}, Unit.schema, storyPageSchema, stimuliPageSchema, instructionsPageSchema, pagesPageSchema)
