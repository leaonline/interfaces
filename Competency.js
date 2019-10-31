import { Dimensions } from './Dimensions'
import { toOption } from './utils'

const dimensionOptions = Object.values(Dimensions.types).map(toOption)

export const Competency = {
  name: 'competency',
  label: 'competency.title',
  icon: 'star'
}

Competency.schema = {
  competencyId: {
    type: String,
    label: 'competency.competencyId',
  },
  dimension: {
    type: String,
    label: 'dimensions.dimension',
    autoform: {
      options: dimensionOptions
    }
  },
  descriptionTeacher: {
    type: String,
    label: 'competency.descriptionTeacher',
    autoform: {
      type: 'textarea',
      rows: 4
    }
  },
  descriptionLearner: {
    type: String,
    label: 'competency.descriptionLearner',
    autoform: {
      type: 'textarea',
      rows: 4
    }
  }
}


Competency.helpers = {}
Competency.methods = {}
Competency.publications = {}
