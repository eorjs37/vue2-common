import later from '@breejs/later'

const cronTab = {
  jobList: [],
  init() {
    later.date.localTime()
  },

  addJob(task, expression, jobName) {
    const schedule = later.parse.cron(expression)
    const job = later.setInterval(task, schedule)

    this.jobList.push({
      jobName,
      schedule,
      job
    })
    console.log(this.jobList)
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
