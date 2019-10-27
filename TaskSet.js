import { Dimensions } from './Dimensions'
import { toOption } from './utils'
import { Levels } from './Levels'
import { Task } from './Task'

const dimensionOptions = Object.values(Dimensions).map(toOption)
const levelOptions = Object.values(Levels).map(toOption)

export const TaskSet = {
  name: 'taskSet',
  label: 'taskSet.title',
  icon: 'cubes'
}

TaskSet.schema = {
  dimension: {
    type: String,
    label: 'dimensions.dimension',
    autoform: {
      options: dimensionOptions
    }
  },
  level: {
    type: String,
    label: 'levels.level',
    autoform: {
      options: levelOptions
    }
  },
  tasks: Array,
  'tasks.$': {
    type: String,
    autoform: {
      options: {
        collectionName: Task.name,
        query: {
          dimension: 1,
          level: 1
        },
        map: {
          valueSrc: '_id',
          labelSrc: 'taskId'
        },
        projection: {
          sort: { itemId: 1 }
        }
      }
    }
  }
}
