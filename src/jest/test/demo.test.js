test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
    expect(z).not.toBeGreaterThan(3);
    expect(z).not.toBeGreaterThanOrEqual(3);
    expect(z).toBeLessThan(5);
    expect(z).toBeLessThanOrEqual(4.5);
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});



test('the shopping list has beer on it', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'beer',
    ];
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
});

test('map has 2', () => {
    const map = new Map([
        [1, 'a'],
        [2, 'b']
    ])
    expect(map.size).toBe(2)
    expect(map.has(2)).toBeTruthy()
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});

function fetchData(callback) {
    // throw new Error('error !!')
    callback('peanut butter')
    // Promise.resolve('peanut butter').then(res => callback(res))
}

function fetchDataAsync() {
    return Promise.resolve('peanut butter')
}

function fetchData1() {
    return new Promise(function (resolve, reject) {
        setTimeout(reject('peanut butter11'), 1000);
    });
}


test('test callback', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

test('test promise resolve', () => {
    return fetchDataAsync().then(data => {
        expect(data).toBe('peanut butter');
    })
});
test('test promise reject', () => {
    expect.assertions(1);
    return fetchData1().then(data => {
        expect(data).toBe('peanut butter11');
    }, (err) => {
        expect(err).toBe('peanut butter11');
    });
});

// test('test promise resolve async', async () => {
//     const data = await fetchDataAsync();
//     expect(data).toBe('peanut butter');
// });
// test('test promise reject async', async () => {
//     expect.assertions(1);
//     try {
//         const data = await fetchData1()
//     } catch (e) {
//         expect(e).toBe('peanut butter11');
//     }
// });

test('expect resolves', () => {
    return expect(fetchDataAsync()).resolves.toBe('peanut butter');
})
test('expect rejects', () => {
    return expect(fetchData1()).rejects.toBe('peanut butter11');
})


// test('the data is peanut butter', async () => {
//     await expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//     await expect(fetchData()).rejects.toThrow('error');
// });


function isTrueOrFasle(bool) {
    return !!bool
}
describe('true or false', () => { //测试集

    it('should return true when input true', () => {
        let result = isTrueOrFasle(true);
        expect(result).toBeTruthy(); // toBeTruthy 匹配器
    })

    test('should return false when input fasle', () => {
        let result = isTrueOrFasle(false);
        expect(result).toBeFalsy(); // toBeFalsy 匹配器
    })
})