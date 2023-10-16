import instance from "./axios";

const list = async () => {
  return await instance.get('/api/list')
}

export { list }
