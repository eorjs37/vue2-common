const fakeApi = async (value = 1) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: ++value
      })
    }, 2000)
  })
}

export { fakeApi }
