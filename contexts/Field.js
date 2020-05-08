export const Field = {}

Field.name = 'field'
Field.label = 'field.title'
Field.icon = 'wrench'

Field.schema = {
  title: String,
  shortCode: {
    label: 'model.shortCode',
    type: String,
    min: 2,
    max: 2,
    custom: function () {
      const context = this
      const { value } = context
      if (!context.isSet || !value || value.length !== 2 || value !== value.toUpperCase() || Field.collection().findOne({ shortCode: value })) {
        return 'invalid'
      }
    }
  },
  jobs: {
    type: Array,
    label: 'field.jobs',
    optional: true
  },
  'jobs.$': {
    type: String,
    label: 'common.entry'
  }
}
