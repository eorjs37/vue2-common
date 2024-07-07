import { date, parse, setInterval } from '@breejs/later'
const cronTab = {
  jobList: [],
  tempJobList: [],
  init() {
    date.timezone(new Date())
  },
  changeExpression(interval = {}) {
    const keys = Object.keys(interval)
    let sec = '0'
    let min = '*'
    let hour = '*'
    let week = '*' // 1(Monday) to 7(Sunday)
    if (keys.includes('seconds')) {
      const secondslist = interval['seconds']
        .split(',')
        .map((item) => parseInt(item))
        .join(',')
      sec = secondslist
    }

    if (keys.includes('minutes')) {
      const minlist = interval['minutes']
        .split(',')
        .map((item) => parseInt(item))
        .join(',')
      min = minlist
    }

    if (keys.includes('hours')) {
      const hourlist = interval['hours']
        .split(',')
        .map((item) => parseInt(item))
        .join(',')
      hour = hourlist
    }

    if (keys.includes('week')) {
      const weeklist = interval['week']
        .split(',')
        .map((item) => parseInt(item))
        .join(',')
      week = weeklist
    }
    return `${sec} ${min} ${hour} * * ${week}`
  },

  addJob(params) {
    if (typeof params === 'object') {
      const isArray = Array.isArray(params)

      if (isArray) {
        //Array
        const len = params.length
        for (let index = 0; index < len; index++) {
          const { name, interval, job } = params[index]
          this._addJob(name, interval, job)
        }
      } else {
        //Object
        const { name, interval, job } = params
        this._addJob(name, interval, job)
      }
    }
  },
  _addJob(name, interval, task) {
    const find = this.jobList.find((item) => item.name === name)
    if (find) {
      this.deleteJob(name)
    }
    const expression = this.changeExpression(interval)
    const schedule = parse.cron(expression, true)
    const job = setInterval(task, schedule)
    this.jobList.push({
      name,
      intervals: [interval],
      job,
      task
    })
  },
  getJobList() {
    return this.jobList
  },
  getJob(jobName) {
    const find = this.jobList.findIndex((item) => item.name === jobName)
    return find
  },
  deleteJob(jobName) {
    const idx = this.getJob(jobName)
    if (idx > -1) {
      this.jobList[idx].job.clear()
      this.jobList.splice(idx, 1)
    }
  },
  enableJob(jobName) {
    const find = this.tempJobList.find((item) => item.name === jobName)
    const idx = this.tempJobList.findIndex((item) => item.name === jobName)
    if (find) {
      const { intervals, task } = find
      console.log(find)
      this._addJob(jobName, intervals, task)
      this.tempJobList.splice(idx, 1)
    }
  },
  disableJob(jobName) {
    const find = this.jobList.find((item) => item.name === jobName)
    if (find) {
      this.tempJobList.push({
        name: jobName,
        intervals: find.intervals,
        task: find.task
      })
      this.deleteJob(jobName)
    }
  },
  clearAll() {
    this.jobList.forEach((_, index) => {
      this.jobList[index].job.clear()
    })
  }
}

export { cronTab }
