function Template(Str, Parameters) {
    if (typeof Str !== 'string' || typeof Parameters !== 'string') throw new Error(`参数类型错误 ${typeof Str} ${typeof Parameters}`)
    function passthu(strArr, ...rest) {
        let i = -1, ret = '';
        while (++i < rest.length) {
            ret += strArr[i] + rest[i]
        }
        ret += strArr[i]
        return ret
    }
    const strArr = Str.split('?'),
        argus = Parameters.split(',').map(item => {
            let strIdx = item.indexOf('(String)'),
                intIdx = item.indexOf('(Integer)');
            if (~strIdx) {
                return item.slice(0, strIdx)
            } else if (~intIdx) {
                return item.slice(0, intIdx)
            } else {
                return '[Error]'
            }
        });
    if (strArr.length !== argus.length + 1) throw new Error(`参数长度不匹配 ?:${strArr.length - 1} params:${argus.length}`)
    return passthu(strArr, ...argus)
}

a = 'select ?,?,?,? from ? ?';
b = '999988888(String), 999988888(String), 999988888(String), 999988888(String), 20201014(Integer), 20201014(Integer)';
Template(a, b)