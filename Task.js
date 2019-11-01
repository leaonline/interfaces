import { Dimensions } from './Dimensions'
import { Status } from './Status'
import {toOption} from './utils'

const dimensionOptions = Object.values(Dimensions.types).map(toOption)
const statusOptions = Object.values(Status.types).map(toOption)

export const Task = {
  name: 'task',
  label: 'task.title',
  icon: 'cube',
  methods: {},
  publications: {}
}

Task.schema = {
  dimension: {
    name: 'dimension',
    type: String,
    label: 'dimensions.dimension',
    autoform: {
      options: dimensionOptions
    }
  },
  taskId: {
    name: 'taskId',
    type: String,
    label: 'task.taskId'
  },
  legacyId: {
    name: 'legacyId',
    type: String,
    label: 'task.legacyId'
  },
  title: {
    type: String,
    label: 'common.title'
  },
  status: {
    type: String,
    label: 'status.title',
    defaultValue: Status.types.inProgress.name,
    autoform: {
      firstOption: false,
      options: statusOptions
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

Task.httpRoutes = {}

Task.httpRoutes.byTaskId = {
  name: 'task.httpRoutes.byTaskId',
  path: '/task',
  method: 'get',
  schema: {
    taskId: String
  },
  projection: {},
  numRequests: 10,
  timeInterval: 1000
}

Task.helpers = {}
