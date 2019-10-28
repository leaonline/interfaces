import { Dimensions } from './Dimensions'
import { Levels } from './Levels'
import { Status } from './Status'
import {toOption} from './utils'

const dimensionOptions = Object.values(Dimensions.types).map(toOption)
const levelOptions = Object.values(Levels.types).map(toOption)
const statusOptions = Object.values(Status.types).map(toOption)

export const Task = {
  name: 'task',
  label: 'task.title',
  icon: 'cube',
  methods: {},
  publications: {}
}

Task.schema = {
  status: {
    type: String,
    label: 'status.title',
    defaultValue: Status.types.inProgress.name,
    autoform: {
      firstOption: false,
      options: statusOptions
    }
  },
  taskId: {
    name: 'taskId',
    type: String,
    label: 'task.taskId'
  },
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
  description: {
    type: String,
    label: 'common.description',
    optional: true,
    autoform: {
      type: 'textarea',
      rows: 4
    }
  },
  story: {
    type: Array,
    label: 'task.story',
    optional: true
  },
  'story.$': {
    type: Object,
    blackbox: true
  },
  stimuli: {
    type: Array,
    label: 'task.stimuli',
    optional: true
  },
  'stimuli.$': {
    type: Object,
    blackbox: true
  },
  instructions: {
    type: Array,
    optional: true,
    label: 'task.instructions'
  },
  'instructions.$': {
    type: Object,
    blackbox: true
  },
  pages: {
    type: Array,
    optional: true,
    label: 'task.pages'
  },
  'pages.$': {
    type: Array,
    label: 'tasks.page',
  },
  'pages.$.$': {
    type: Object,
    blackbox: true
  }
}

Task.collection = () => {
  throw new Error('Not implemented - You need to override this method to be able to use it.')
}