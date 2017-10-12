const mapError = (
  {
    meta: { touched, error, warning } = {},
    input,
    ...props
  },
  sendHelperText = true
) => {
  const errorProps = {}

  if (touched && (error || warning)) {
    errorProps.error = Boolean(error || warning)

    if (sendHelperText) {
      errorProps.helperText = error || warning
    }
  }

  return { ...props, ...input, ...errorProps }
}

export default mapError
