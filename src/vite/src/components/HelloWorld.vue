<template>
    <!-- <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>-->
    <p>HelloWorld: {{time}}</p>
    <button @click="click">Clear time</button>
    <h1 :style="{ background:color }">x: {{position.x}} y: {{position.y}}</h1>
</template>

<script>
import { reactive, computed, ref, unref, watch, watchEffect } from "vue";
export default {
    name: "HelloWorld",
    setup() {
        //响应式对象
        const position = reactive({});
        window.addEventListener("mousemove", e => {
            // console.log(`mousemove:(${e.pageX},${e.pageY})`);

            position.x = e.pageX;
            position.y = e.pageY;
        });
        //计算属性
        const color = computed(() => {
            const hex = num => (num % 255).toString(16);
            return `#${hex(position.x) + hex(position.x) + "00"}`;
        });

        //ref拆箱装箱
        const time = ref(0);
        setInterval(() => (time.value = Date.now()), 1000);

        //watch
        watch(time, (newVal, oldVal) => {
            // console.log({ newVal, oldVal })
        });

        watchEffect(() => {
            // console.log("time", time.value, unref(time))
        });

        const click = () => {
            time.value = 0;
        };

        return { position, color, time, click };
    }
    // props: {
    //     msg: String
    // },
    // data() {
    //     return {
    //         count: 0
    //     };
    // }
};
</script>
