const { setting, theme, network } = require('./default')

const config = require('./config')

module.exports = Object.assign({}, setting, theme, network, config)
