<template>
    <table>
        <thead>
            <tr>
                <th scope="col" v-for="item in header" :key="item">
                    {{ item }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(i, idx) in gridData" :key="i + idx">
                <td v-for="(j, idx) in i" :key="j + idx" v-text="j"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'componentBlock',
    props: {
        header: {
            type: Array,
            default: () => []
        },
        gridData: {
            type: Array,
            default: () => []
        },
    },  
}
</script>

<style>
</style>