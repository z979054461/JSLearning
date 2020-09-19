<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />

    <div id="counter">Counter: {{ counter }}</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { createApp } from "vue";
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }

const Counter = {
    data() {
        return {
            counter: 2
        };
    }
};

createApp(Counter).mount("#counter");
</script>
