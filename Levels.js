export const Levels = {
  name: 'levels',
  label: 'levels.title',
  icon: 'cubes'
}

Levels.helpers = {}

Levels.helpers.resolveField = function (name) {
  const type = Levels.types[name]
  return type && type.label
}

const types = {}

types.easy = {
  name: 'easy',
  label: 'levels.easy',
  index: 1
}

types.medium = {
  name: 'medium',
  label: 'levels.medium',
  index: 2
}

types.hard = {
  name: 'hard',
  label: 'levels.hard',
  index: 3
}

Levels.types = types
