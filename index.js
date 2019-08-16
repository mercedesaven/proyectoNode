const dateYesterday = require('./modules/sarasa')
console.log(dateYesterday())

const dateTomorrow=require('moment')
console.log(dateTomorrow(new Date()).add(1, 'days').calendar())
