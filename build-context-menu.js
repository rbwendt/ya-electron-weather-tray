const { Menu } = require('electron')

module.exports = temperature => Menu.buildFromTemplate([
  { label: temperature, id: 'Temperature' },
  { label: 'Exit', click: () => { app.exit() } }
])
