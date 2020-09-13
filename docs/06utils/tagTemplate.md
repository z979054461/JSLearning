# 标签模板

```js
/**
 * 标签模板替换函数
 * @param {Array} stringArr 
 * @param  {...any} rest 
 * @example 
 * let total = 30;
 * let msg = passthru`The total is ${total} (${total*1.05} with tax)`;
 */
function passthru(stringArr, ...rest) {
    let ret = '',
        i = -1;
    while (++i < rest.length) {
        ret += stringArr[i] + rest[i]
    }
    ret += stringArr[i]
    return ret
}
```

```js
/**
 * HTML过滤
 * @param {Array} stringArr 
 * @param  {...any} rest 
 * @example
 * let sender = '<p>?.hello</p>'
 * let aaa = SaferHTML `<p>${sender} has sent you a message.</p>`;
 */
function SaferHTML(stringArr, ...rest) {
    let ret = '',
        i = -1;
    while (++i < rest.length) {
        ret += stringArr[i] + rest[i].replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
    }
    ret += stringArr[i]
    return ret
}
```

```js
/**
 * i18n 国际化
 */
```