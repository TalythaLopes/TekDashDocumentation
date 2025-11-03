<template>
    <nav class="navbar-container">
        <div class="navbar-content">
            <h4 class="navbar-title">TekDashboard</h4>
            <div class="nav-links">
                <a class="fundo" href="https://tekdashboard.teksystem.com.br/" target="_blank">Login</a>
                <router-link to="/documentacao" class="fundo" :style="{ paddingRight: '0' }">Documentação</router-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.navbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
    padding: 8px;
    position: relative;
    background-color: var(--color-background);
    position: sticky;
    top: 0;
    z-index: 1000;
    /*box-shadow: 0 2px 6px var(--color-border);*/
}

.navbar-content {
    width: 80%;
    width: 1067px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--vt-c-red);
}

.nav-links {
    padding: 0 0 0 16px;
    gap: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

:global(main),
:global(.page-content) {
    padding-top: 45px;
}
</style>