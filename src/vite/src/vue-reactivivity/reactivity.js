/**
 * 
 * @param {Number} base 
 */
function ref(base) {
    return reactive({
        value: base
    })
}

// eg:
// targetMap:{
//     obj1 => {
//         key1: [fn1,fn2,...], //computed or effect
//         key2: [],
//     },
//     obj2 => {
//         key1: [],
//         key2: [],
//     }
// }

let targetMap = new WeakMap()
let effectStack = [] //存储effect


function track(target, key) {
    const effect = effectStack[effectStack.length - 1]
    if (effect) {
        // 需要收集
        let depMap = targetMap.get(target)
        if (depMap === undefined) {
            depMap = new Map()
            targetMap.set(target, depMap)
        }

        let dep = depMap.get(key)
        if (dep === undefined) {
            dep = new Set()
            depMap.set(key, dep)
        }
        // 完成了初始化
        // 下面就需要收集了


        // 双向缓存
        if (!dep.has(effect)) {
            dep.add(effect) // 把effect放在dep里面 村塾
            effect.deps.push(dep)
        }
    }
}

function trigger(target, key, info) {
    let depMap = targetMap.get(target)
    if (depMap === undefined) {
        return // 没有effect副作用
    }
    const effects = new Set()
    const computeds = new Set() // computed是一个特殊的effect

    if (key) {
        let deps = depMap.get(key)
        deps.forEach(effect => {
            if (effect.computed) {
                computeds.add(effect)
            } else {
                effects.add(effect)
            }
        })
    }
    console.log({
        effects,
        computeds
    })
    effects.forEach(effect => effect())
    computeds.forEach(computed => computed())

}

function reactive(obj) {
    if (obj === null) return null
    return new Proxy(obj, {
        get: (target, p, receiver) => {
            //do sth
            track(target, p)

            const ret = Reflect.get(target, p, receiver)
            return typeof ret === 'object' ? reactive(ret) : ret

        },
        set: (target, p, value, receiver) => {
            //to sth
            const ret = Reflect.set(target, p, value, receiver)
            const info = {
                newVal: value,
                oldVal: ret
            }
            trigger(target, p, info)


            return ret
        }
    })
}

function createReactiveEffect(fn, options) {
    // effect扩展配置
    const effect = function effect(...args) {
        return run(effect, fn, args)
    }
    effect.deps = []
    effect.computed = options.computed
    effect.lazy = options.lazy
    return effect
}

function effect(fn, options = {}) {
    // 只考虑执行的逻辑，
    let e = createReactiveEffect(fn, options)
    if (!options.lazy) {
        e()
    }
    return e
}

function run(effect, fn, args) {
    // 执行
    if (effectStack.indexOf(effect) === -1) {
        try {
            effectStack.push(effect)
            return fn(...args)
        } finally {
            effectStack.pop()
        }
    }
}

function computed(fn) {
    const runner = effect(fn, {
        computed: true,
        lazy: true
    })
    return {
        effect: runner,
        get value() {
            return runner()
        }
    }
}

export {
    ref,
    effect,
}