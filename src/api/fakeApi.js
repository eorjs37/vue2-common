const fakeApi = async (value = 112) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: ++value
      })
    }, 2000)
  })
}

export { fakeApi }
