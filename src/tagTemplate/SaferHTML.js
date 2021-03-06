/**
 * HTML过滤
 * @param {Array} stringArr 
 * @param  {...any} rest 
 * @example
 * let sender = '<p>?.hello</p>'
 * let aaa = SaferHTML `<p>${sender} has sent you a message.</p>`;
 */
export default function SaferHTML(stringArr, ...rest) {
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