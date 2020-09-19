<template>
    <transition :name="transitionName">
        <div id="app">
            <div id="nav">
                <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
                <router-link to="/">Home</router-link>|
                <router-link to="/about">About</router-link>|
                <router-link to="/user/ytx">user/ytx</router-link>|
                <router-link to="/user/ytx/posts">user/ytx/posts</router-link>|
                <router-link to="/user/ytx/profile">user/ytx/profile</router-link>|
                <router-link :to="{ name: 'user', params: { id: 123 } }">User123</router-link>
            </div>
            <input v-model="step" />
            <button @click="$router.go(step)">gogogo</button>
            <button @click="test">test</button>
            <button @click="$router.push({ name: 'user', params: { id: 123 }})">gouser123</button>
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <!-- <router-view/> -->
            <div style="display:flex;justify-content: center;">
                <transition>
                    <router-view class="view one"></router-view>
                </transition>
                <router-view class="view two" name="a"></router-view>
                <router-view class="view three" name="b"></router-view>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            step: 1
        };
    },
    methods: {
        test() {
            console.log(1);
            console.log(1);
            console.log(1);
        }
    },
    watch: {
        $route(to, from) {
            const toDepth = to.path.split("/").length;
            const fromDepth = from.path.split("/").length;
            this.transitionName =
                toDepth < fromDepth ? "slide-right" : "slide-left";
        }
    }
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
