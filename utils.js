/* global AutoForm */

export const toOption = entry => ({ value: entry.name, label: entry.label })

export const isVisible = (fieldName, expectedTypes) => {
  const fieldValue = AutoForm.getFieldValue(fieldName)
  if (!expectedTypes.includes(fieldValue)) {
    return 'hidden'
  }
}
