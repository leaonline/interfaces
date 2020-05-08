import { Icon } from './types/Icon'
import { ColorType } from './types/ColorType'

export const Dimension = {}

Dimension.name = 'dimension'
Dimension.label = 'dimension.title'
Dimension.icon = 'th-large'
Dimension.representative = 'title'

Dimension.schema = {
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
    type: String,
    allowedValues: ColorType.allowedValues
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
