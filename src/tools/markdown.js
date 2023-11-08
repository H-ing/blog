// markdown解析模块
const md = require('markdown-it')()

const token = md.render("# test")
console.log(token)