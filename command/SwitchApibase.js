const chalk = require('chalk')
const notifier = require('node-notifier')
const apibase = require('../static/config/config.js').apibase
const { resolve } = require('path')
const { writeJsonSync } = require('fs-extra')

class SwitchApibase {
  constructor() {
    this.file_path = 'static/config/apibase.json'
  }

  set(mode) {
    writeJsonSync(this.file_path, { apibase: apibase[mode] })
    const modeDescription = mode == 'prod' ? 'production' : 'develop'

    const notifyMessage = `The apibase has been switch to ${modeDescription} mode`
    console.log(chalk.greenBright(notifyMessage))
    console.log('__dirname', __dirname)
    notifier.notify({
      title: 'Ciao!',
      message: notifyMessage,
      icon: resolve(__dirname, '../static/logo.png')
    })
  }
}

module.exports = new SwitchApibase()