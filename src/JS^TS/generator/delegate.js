function* foo() {
    console.log('*foo() begining')
    yield 3;
    yield 4;
    console.log('*foo() finished')
}

function* bar() {
    yield 1;
    yield 2;
    yield* foo();//yield 委托！！
    yield 5;
}
const it = bar();
it.next().value  // 1
it.next().value  // 2
it.next().value  // *foo() begining \n 3
it.next().value  // 4
it.next().value  // *foo() finished \n 5
it.next().value  // 6