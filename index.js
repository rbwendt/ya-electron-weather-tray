const { app, Tray } = require('electron')

const convert = require('./convert')
const gw = require('./gw')

const pth = 'node_modules/weather-icons/svg/wi-alien.svg'
let appIcon = null
const HOUR = 3600000
const MINUTE = 60000

app.dock.hide()

app.on('ready', async () => {
  const png = await convert(pth)
  appIcon = new Tray(png)

  await gw(appIcon)
  const itv = setInterval(() => gw(appIcon), 30 * MINUTE)
})
