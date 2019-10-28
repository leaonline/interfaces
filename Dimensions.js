export const Dimensions = {
  name: 'dimensions',
  label: 'dimensions.title',
  icon: 'cubes'
}

Dimensions.helpers = {}

Dimensions.helpers.resolveField = function (value) {
  const type = Dimensions.types[value]
  return type && type.label
}

const types = {}

types.writing = {
  name: 'writing',
  label: 'dimensions.writing.title',
  icon: 'pen-alt',
  type: 'primary',
  index: 1,
  descriptions: {
    easy: 'dimensions.writing.easy',
    medium: 'dimensions.writing.medium',
    hard: 'dimensions.writing.hard'
  }
}

types.reading = {
  name: 'reading',
  label: 'dimensions.reading.title',
  icon: 'book-open',
  type: 'danger',
  index: 2,
  descriptions: {
    easy: 'dimensions.reading.easy',
    medium: 'dimensions.reading.medium',
    hard: 'dimensions.reading.hard'
  }
}

types.math = {
  name: 'math',
  label: 'dimensions.math.title',
  icon: 'calculator',
  type: 'success',
  index: 3,
  descriptions: {
    easy: 'dimensions.math.easy',
    medium: 'dimensions.math.medium',
    hard: 'dimensions.math.hard'
  }
}

types.understand = {
  name: 'understand',
  label: 'dimensions.understand.title',
  icon: 'comments',
  type: 'warning',
  index: 4,
  descriptions: {
    easy: 'dimensions.understand.easy',
    medium: 'dimensions.understand.medium',
    hard: 'dimensions.understand.hard'
  }
}

Dimensions.types = types
