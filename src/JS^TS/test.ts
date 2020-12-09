let num: number;
let str: string;
let bool: boolean;

let boolArray: boolean[];
boolArray = [true,false]


interface Name {
    first: string;
    second: string;
  }
  
  
  let aaa: Name;
  aaa = {
    first: 'John',
    second: 'Doe'
  };

  let name2: {
    first: string;
    second: string;
  };

  let power: any;
  power = 1
  power = "23"
  power = {}
//   let bbb:name2;

enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}
let lcard = CardSuit.Diamonds
// lcard =='hello'

const enum Tristate {
  False,
  True,
  Unknown
}

const lie = Tristate.False;

enum Weekday {
  Monday,
  Tuseday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

let mon = Weekday.Monday,
    sun = Weekday.Sunday;
    console.log(Weekday.isBusinessDay(mon))
    console.log(Weekday.isBusinessDay(sun))

    enum Color {
      Red,
      Green,
      Blue
    }
    
    enum Color {
      DarkRed = 3,
      DarkGreen,
      DarkBlue
    }

    const foo = 123;
const bar = foo.toString();

interface Window {
  helloWorld(): void;
}

// Add it at runtime
window.helloWorld = () => console.log('hello world');

// Call it
window.helloWorld();

// 滥用会导致错误
// window.helloWorld('gracius'); // Error: 提供的参数与目标不匹配