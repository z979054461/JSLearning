<template>
    <div>
        <div>UserHome {{ $route.params.id }}</div>
    </div>
</template>

<script>
export default {
    beforeRouteLeave(to, from, next) {
        const answer = window.confirm(
            "Do you really want to leave? you have unsaved changes!"
        );
        if (answer) {
            next();
        } else {
            next(false);
        }
    }
};
</script>

<style>
</style>