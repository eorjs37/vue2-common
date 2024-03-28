import instance from './springAxios'

const getSchedule = async () => {
  return await instance.get(`api/getschedule`)
}

export { getSchedule }
