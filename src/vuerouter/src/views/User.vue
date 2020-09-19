<template>
    <div>
        <div>User {{ $route.params.id }}</div>
        <div>User id = {{ id }}</div>
        <span>User的子组件 begin</span>
        <router-view></router-view>
        <span>User的子组件 end</span>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: "default"
        }
    }
};
</script>

<style>
</style>