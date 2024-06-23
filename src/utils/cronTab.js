import { parse, date, setInterval } from '@breejs/later'

const cronTab = {
  jobList: [],
  init() {
    date.localTime()
  },

  addJob(task, expression, jobName) {
    const schedule = parse.cron(expression)
    const job = setInterval(task, schedule)

    this.jobList.push({
      jobName,
      schedule,
      job
    })
  },
  getJobList() {
    return this.jobList
  },
  getJob(jobName) {
    const find = this.jobList.findIndex((item) => item.jobName === jobName)
    return find
  },
  deleteJob(jobName) {
    const idx = this.getJob(jobName)
    if (idx > -1) {
      this.jobList[idx].job.clear()
      this.jobList.splice(idx, 1)
    }
  }
}

export { cronTab }
