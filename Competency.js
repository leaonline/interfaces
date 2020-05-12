import { Dimension } from './Dimension'
import { Labels } from './common/Labels'

export const Competency = {
  name: 'competency',
  label: 'competency.title',
  icon: 'star',
  representative: 'shortCode'
}

Competency.schema = {
  [Competency.representative]: {
    type: String,
    label: Labels[Competency.representative],
    max: 6
  },
  dimension: {
    type: String,
    label: Dimension.label,
    dependency: {
      collection: Dimension.name,
      field: Dimension.representative
    }
  },
  description: {
    type: String,
    label: Labels.description,
    max: 1000
  },
  descriptionSimple: {
    type: String,
    max: 1000
  },
  shortCode_legacy: {
    type: String,
    optional: true,
    list: false,
    max: 10
  },
  description_legacy: {
    type: String,
    optional: true,
    list: false,
    max: 1000
  },
  descriptionSimple_legacy: {
    type: String,
    optional: true,
    list: false,
    max: 1000
  }
}

Competency.helpers = {}
Competency.methods = {}
Competency.publications = {}
