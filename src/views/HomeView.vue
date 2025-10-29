<template>
    <section class="top-bar">
        <NavBar />
    </section>
    <div>
        <h1>Home View</h1>
    </div>
</template>

<script lang="ts" setup>
import NavBar from '../components/NavBar.vue'
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}
</style>