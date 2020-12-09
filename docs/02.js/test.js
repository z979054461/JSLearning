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
var PATH = require('path');  /*nodejs自带的模块*/
var join = PATH.join;
const extname = PATH.extname
var pinyin = require("node-pinyin");

pinyin('中国', { style: 'normal' })

function getJsonFiles(searchPath = './') {
    let jsonFiles = {};
    function findJsonFile(path, deep = 0) {
        let files = fs.readdirSync(path);
        files.forEach(function (item, index) {
            const fPath = join(path, item);
            const stat = fs.statSync(fPath);
            if (stat.isDirectory() === true) {
                if ('.vuepress' !== fPath) {
                    jsonFiles[`/${fPath}/`] = []
                    findJsonFile(fPath, deep + 1);
                }
            } else if (stat.isFile() === true) {
                const extName = PATH.extname(fPath);
                const baseName = PATH.basename(fPath, extName);
                if (extName === '.md' && baseName.toUpperCase() !== 'README') {
                    baseNamePY = pinyin(baseName, { style: 'normal' }).join('-')
                    if (deep === 0) {
                        jsonFiles[`/${baseNamePY}`] = baseName;
                    } else {
                        jsonFiles[`/${path}/`].push({ title: baseName, path: baseNamePY });
                    }
                }


            }
        });
    }
    findJsonFile(searchPath);
    // console.log(jsonFiles);
    return jsonFiles
}

console.log(getJsonFiles())
return;
//readme也要排除
let ret = getJsonFiles('./').filter(file => path.extname(file) == '.md').map(file => {
    const fileName = path.basename(file, path.extname(file));
    return { title: fileName, path: fileName }
})
console.log(ret)