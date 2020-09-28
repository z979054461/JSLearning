<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />

    <div id="counter">Counter: {{ counter }}</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { createApp, ref } from "vue";
export default {
    name: "App",
    components: {
        HelloWorld,
    },
    setup() {
        const counter = ref(22);
        setInterval(() => counter.value++, 1000);
        return {
            counter,
        };
    },
};

// const Counter = {
//     data() {
//         return {
//             counter: 2,
//         };
//     },
// };

// createApp(Counter).mount("#counter");
</script>
