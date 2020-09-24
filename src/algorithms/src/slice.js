// 实现类似 python 数组分片语法
// const arr = slice([1, '2', 3, '4', 5, '6', 7, '8', 9, '0']);
// arr['2:5'];  // [3, '4', 5] 请注意使用的语法，不是小括号，而是中括号
// arr['0:-1']; // [1, "2", 3, "4", 5, "6", 7, "8", 9]
// arr['-2:-1']; // [9]

function slice(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('input must be an array!')
    }

    return new Proxy(arr, {
        get: (target, key, receiver) => {
            if ((key + '').includes(':')) {
                const tmpArr = (key + '').split(':')
                if (tmpArr.length !== 2) {
                    throw new Error('slice format Error: `:` must be one')
                }
                let first = +tmpArr[0], second = +tmpArr[1];
                if (Number.isNaN(first) || Number.isNaN(second)) {
                    throw new Error('slice format Error: start or end must be an Integer')
                } else {
                    first < 0 && (first += target.length);
                    second < 0 && (second += target.length)

                    return target.slice(first, second)
                }
            }

            return Reflect.get(target, key, receiver)
        }
    })
}