const fs = require('fs')
const path = require('path')
let res = fs.readFileSync(path.join(__dirname, '../key/public.pub'), 'utf-8')
console.log(res)
