export const Status = {
  name: 'status',
  label: 'status.title',
  icon: 'cubes'
}

Status.helpers = {}

Status.helpers.resolveField = function (name) {
  const type = Status.types[name]
  return type && type.label
}

const types = {
  inProgress: {
    index: 0,
    name: 'inProgress',
    label: 'status.inProgress',
    type: 'secondary'
  },
  inReview: {
    index: 1,
    name: 'inReview',
    label: 'status.inReview',
    type: 'info'
  },
  deprecated: {
    index: 2,
    name: 'deprecated',
    label: 'status.deprecated',
    type: 'warning'
  },
  published: {
    index: 3,
    name: 'published',
    label: 'status.published',
    type: 'success'
  }
}

Status.types = types
