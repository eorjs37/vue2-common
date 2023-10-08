const withSpinner = (url, component) => {
  const originalProps = component.props || {};
  return {
    name: "withSpinner",
    props: originalProps
  }
}

export { withSpinner }
