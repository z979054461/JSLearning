// const {resolve} = require('path')


// console.log('__dirname : ' + __dirname)
// console.log('resolve   : ' + resolve('./'))
// console.log('cwd       : ' + process.cwd())
// __dirname：返回运行文件所在的目录
// resolve('./')：当前命令所在的目录
// process.cwd()：当前命令所在的目录

//path模块
// var path=require('path');  /*nodejs自带的模块*/
// var extname=path.extname("123.html");	 //获取文件的后缀名


var fs = require('fs');
var path=require('path');  /*nodejs自带的模块*/
var join = path.join;
const extname=path.extname
 
function getJsonFiles(jsonPath){
    let jsonFiles = [];
    function findJsonFile(path){
        let files = fs.readdirSync(path);
        files.forEach(function (item, index) {
            let fPath = join(path,item);
            let stat = fs.statSync(fPath);
            if(stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            if (stat.isFile() === true) { 
              jsonFiles.push(fPath);
            }
        });
    }
    findJsonFile(jsonPath);
    // console.log(jsonFiles);
    return jsonFiles
}
 
//readme也要排除
let ret = getJsonFiles('./').filter(file => path.extname(file) == '.md').map(file => {
    const fileName = path.basename(file,path.extname(file));
    return {title:fileName,path:fileName}
})
console.log(ret)