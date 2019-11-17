const fetch = require('node-fetch')
const convert = require('./convert')
const findPath = require('./find-path')

const buildContextMenu = require('./build-context-menu')
const { url } = require('./config.json')

module.exports = async (appIcon) => {
  const resp = await fetch(url);
  const txt = await resp.text()
  
  let mtch = txt.match(/<p class\="visible-xs text-center">([^<]+)<\/p>/)
  const wth = mtch[1].replace('Light ', '').toLowerCase()

  mtch = txt.match(/<span class="wxo-metric-hide">([^<]+)<abbr title="Celsius">/)
  const tmp = `${mtch[1]}C`
  const msg = `${tmp} ${wth}`
  appIcon.setContextMenu(buildContextMenu(msg))
  appIcon.setToolTip(msg)
  const pth = findPath(wth)
  console.log(`${(new Date()).toISOString()} ${wth} ${tmp} ${pth}`)
  const png = await convert(pth)
  appIcon.setImage(png)
}
