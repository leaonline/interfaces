import { Field } from './Field'

export const UnitSet = {}

UnitSet.name = 'unitSet'
UnitSet.label = 'unitSet.title'
UnitSet.icon = 'cubes'

UnitSet.schema = {
  title: {
    type: String,
    optional: true
  },
  shortCode: {
    type: String,
  },
  field: {
    type: String
  },
  dimension: {
    type: String
  },
  level: {
    type: String
  },
  sequence: {
    type: String
  },
  job: {
    type: String,
    optional: true
  },
  units: {
    type: Array,
    optional: true
  },
  'units.$': String
}