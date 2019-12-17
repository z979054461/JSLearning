var num;
var str;
var bool;
var boolArray;
boolArray = [true, false];
var aaa;
aaa = {
    first: 'John',
    second: 'Doe'
};
var name2;
var power;
power = 1;
power = "23";
power = {};
//   let bbb:name2;
var CardSuit;
(function (CardSuit) {
    CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
    CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
    CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
    CardSuit[CardSuit["Spades"] = 3] = "Spades";
})(CardSuit || (CardSuit = {}));
var lcard = CardSuit.Diamonds;
var lie = 0 /* False */;
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuseday"] = 1] = "Tuseday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
(function (Weekday) {
    function isBusinessDay(day) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
    Weekday.isBusinessDay = isBusinessDay;
})(Weekday || (Weekday = {}));
var mon = Weekday.Monday, sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon));
console.log(Weekday.isBusinessDay(sun));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
(function (Color) {
    Color[Color["DarkRed"] = 3] = "DarkRed";
    Color[Color["DarkGreen"] = 4] = "DarkGreen";
    Color[Color["DarkBlue"] = 5] = "DarkBlue";
})(Color || (Color = {}));
var foo = 123;
var bar = foo.toString();
// Add it at runtime
window.helloWorld = function () { return console.log('hello world'); };
// Call it
window.helloWorld();
// 滥用会导致错误
// window.helloWorld('gracius'); // Error: 提供的参数与目标不匹配
