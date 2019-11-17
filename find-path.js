const fs = require("fs")
const dir = 'node_modules/weather-icons/svg'
module.exports = (wth) => {
  const files = fs.readdirSync(dir)

  const hrs = (new Date()).getHours();
  const inDay = ((hrs -6) % 24) < 12

  const timeFiles = files.filter(x => x.includes(inDay? 'day' : 'night') )

  const candidates = [timeFiles, files]

  const ls = candidates.map(sources => {

    wp = wth.split(' ').reverse()
    pth = sources.reduce((a, r) => {
      if (r.includes(wth)) {
        a = r
      }
      wp.forEach((w) => {
        if (r.includes(w)) {
          a = r
        }  
      })
      return a
    }, null)
    if (pth != null) {
      return dir + '/' + pth
    }
  })

  // always 0, 1, or many. Never 2.
  if (ls[0]) {
    return ls[0]
  }
  if (ls[1]) {
    return ls[1]
  }

  if (wth == 'mainly clear') {
    return `${dir}/wi-stars.svg`  
  }
  return `${dir}/wi-na.svg`
}
