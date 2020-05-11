export const ColorType = {
  name: 'colorType',
  label: 'colorType.title',
  icon: 'palette',
  isType: true,
  representative: 'index'
}

ColorType.types = {
  primary: {
    index: 0,
    name: 'primary',
    label: 'colorTypes.primary',
    type: 'primary',
    icon: 'star',
  },
  secondary: {
    index: 1,
    name: 'secondary',
    label: 'colorTypes.secondary',
    type: 'secondary',
    icon: 'paragraph',
  },
  success: {
    index: 2,
    name: 'success',
    label: 'colorTypes.success',
    type: 'success',
    icon: 'check',
  },
  warning: {
    index: 3,
    name: 'warning',
    label: 'colorTypes.warning',
    type: 'warning',
    icon: 'exclamation',
  },
  danger: {
    index: 4,
    name: 'danger',
    label: 'colorTypes.danger',
    type: 'danger',
    icon: 'times',
  },
  info: {
    index: 5,
    name: 'info',
    label: 'colorTypes.info',
    type: 'info',
    icon: 'info-circle',
  },
  light: {
    index: 6,
    name: 'light',
    label: 'colorTypes.light',
    type: 'light',
    icon: 'sun',
  },
  dark: {
    index: 7,
    name: 'dark',
    label: 'colorTypes.dark',
    type: 'dark',
    icon: 'moon',
  },
}

ColorType.allowedValues = Object.keys(ColorType.types)
