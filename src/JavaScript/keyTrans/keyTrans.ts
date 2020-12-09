enum KeyMap {
    C = 1,
    Db,
    D,
    Eb,
    E,
    F,
    Gb,
    G,
    Ab,
    A,
    Bb,
    B,
}
function trans(oldKey: string, newKey: string, instr: string) {
    const diff: any = KeyMap[newKey] - KeyMap[oldKey];
    const forward = (val: string) => KeyMap[(diff + KeyMap[val]) % 12]

    return instr.split(' ').map(item => KeyMap[item] ? forward(item) : item.split('').map(val => KeyMap[val] ? forward(val) : val).join('')).join(',')
}


let ret = trans('C', 'E', 'C Dm Em F G Am B7')
console.log(ret)