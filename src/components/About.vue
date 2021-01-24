<template>
    <div class="about">
        <div v-if="their_name === 'prcki'">
            <h1> Hello {{ their_name }}, This is an about page</h1>
            <p>Mario Halas je prcki koji zivi u Jermenovcima selo u Juznom Banatu! Predsednik sela mu je stric pod nazivom Halas Tibor, doneo je mnogo doprinosa selu i svi su mu zahvalni na tome!</p>
        </div>
        <div v-else>
            <h1>About page</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            their_name: this.$route.params.name
        }
    },
    mounted() {
        console.log(this.$route)
    }
}
</script>
