// require('babel-core/register')({
//     presets: ['stage-3']
// });

const model = require('./model.js');
//自动创建数据库
console.log('\n_____________________________init db begin.')
model.sync().then(res => console.log('\n_____________________________init db ok.'));


// process.exit(0);