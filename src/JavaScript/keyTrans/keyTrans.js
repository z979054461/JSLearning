var KeyMap;
(function (KeyMap) {
    KeyMap[KeyMap["C"] = 0] = "C";
    KeyMap[KeyMap["Db"] = 1] = "Db";
    KeyMap[KeyMap["D"] = 2] = "D";
    KeyMap[KeyMap["Eb"] = 3] = "Eb";
    KeyMap[KeyMap["E"] = 4] = "E";
    KeyMap[KeyMap["F"] = 5] = "F";
    KeyMap[KeyMap["Gb"] = 6] = "Gb";
    KeyMap[KeyMap["G"] = 7] = "G";
    KeyMap[KeyMap["Ab"] = 8] = "Ab";
    KeyMap[KeyMap["A"] = 9] = "A";
    KeyMap[KeyMap["Bb"] = 10] = "Bb";
    KeyMap[KeyMap["B"] = 11] = "B";
})(KeyMap || (KeyMap = {}));
function trans(oldKey, newKey, instr) {
    var diff = KeyMap[newKey] - KeyMap[oldKey];
    Array.from({ length: 12 }).forEach(function (item,index) {
        instr = instr.replace(KeyMap[index], KeyMap[(KeyMap[KeyMap[index]] + diff) % 12]);
    });
    return instr;
}
var ret = trans('C', 'E', 'C D E F');
console.log(ret);
