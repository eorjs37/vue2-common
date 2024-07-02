import { date, parse, setInterval } from '@breejs/later'
const cronTab = {
  jobList: [],
  init() {
    date.timezone(new Date())
  },

  addJob(task, expression, jobName) {
    const find = this.jobList.find((item) => item.jobName === jobName)
    if (find) {
      this.deleteJob(jobName)
    }
    const schedule = parse.cron(expression, true)
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
  },
  clearAll() {
    this.jobList.forEach((_, index) => {
      this.jobList[index].job.clear()
    })
  }
}

export { cronTab }
