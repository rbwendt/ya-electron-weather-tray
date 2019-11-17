const { convertFile } = require('convert-svg-to-png');

const d = 24
const opts = {width: d, height: d}

module.exports = async(pth) => await convertFile(pth, opts)