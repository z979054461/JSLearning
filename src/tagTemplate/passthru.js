/**
 * 标签模板替换函数
 * @param {Array} stringArr 
 * @param  {...any} rest 
 * @example 
 * let total = 30;
 * let msg = passthru`The total is ${total} (${total*1.05} with tax)`;
 */
export default function passthru(stringArr, ...rest) {
    let ret = '',
        i = -1;
    while (++i < rest.length) {
        ret += stringArr[i] + rest[i]
    }
    ret += stringArr[i]
    return ret
}