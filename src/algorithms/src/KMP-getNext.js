

/**
 * KMP算法求Next数组
 * @param {*} str 
 */
const getNext = str => {
    //j:前缀初始值  i:后缀初始值
    let i = 0, j = -1;
    const next = [-1];
    while (i < str.length - 1) {
        if (j < 0 || str[i] === str[j]) {
            i++;
            j++;
            //j表示相等前后缀长度
            next[i] = j //一直更新，直到它变成最长前后缀
        } else {
            j = next[j];//前后缀末尾指针不匹配时，回溯j
        }
    }
    return next;
}

const getNextVal = str => {
    //j:前缀初始值  i:后缀初始值
    let i = 0, j = -1;
    const nextVal = [-1];
    while (i < str.length - 1) {
        if (j < 0 || str[i] === str[j]) {
            i++;
            j++;
            //nextVal数组是对next数组的优化
            // str[i] 与 str[next[i]]比较，如果相同，取next[next[i]]
            nextVal[i] = str[i] === str[j] ? nextVal[j] : j;
        } else {
            j = nextVal[j];//前后缀末尾指针不匹配时，回溯j
        }
    }
    return nextVal;
}

let ret = getNext('ababaa')
console.log(ret)
// export {
//     getNext
// };