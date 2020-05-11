import { ColorType } from './types/ColorType'
import { Status } from './types/Status'

export const Dimension = {}

Dimension.name = 'dimension'
Dimension.label = 'dimension.title'
Dimension.icon = 'th-large'
Dimension.representative = 'title'

Dimension.schema = {
  status: {
    type: Number,
    allowedValues: Status.allowedValues,
    dependency: {
      context: Status.name,
      field: Status.representative
    }
  },
  [Dimension.representative]: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  icon: {
    type: String
  },
  colorType: {
    type: Number,
    allowedValues: ColorType.allowedValues,
    dependency: {
      context: ColorType.name,
      field: ColorType.representative
    }
  },
  shortCode: {
    type: String,
    min: 1,
    max: 1,
    unique: true
  },
  shortNum: {
    type: Number,
    min: 1,
    max: 1,
    unique: true
  }
}
