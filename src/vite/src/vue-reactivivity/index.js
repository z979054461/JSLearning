import {
    ref,
    effect,
    reactive,
} from '@vue/reactivity'
// } from './reactivity'
// 独立的包是可以放在任何框架用
let count = ref(1),
    obj = reactive({
        a: 0
    });

effect(() => {
    // 副作用
    console.log('count是', count.value, `obj.a:${obj.a}`)
})
effect(() => {
    // // 副作用
    // console.log('count22是', count.value, `obj.a:${obj.a}`)
})

setInterval(() => {
    count.value++
    obj.a++
}, 1000)