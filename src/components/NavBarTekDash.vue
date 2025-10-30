<template>
    <nav class="navbar-container">
        <div class="navbar-content">
            <p class="navbar-title">TekDashboard</p>
            <div class="navbar-link">
                <a class="fundo" href="https://tekdashboard.teksystem.com.br/" target="_blank">Login</a>
                <router-link to="/documentacao" class="fundo">Documentação</router-link> 
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
}

.navbar-content {
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--vt-c-red);
}

.navbar-title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}

.navbar-link, a {
    color: var(--vt-c-red);
    text-decoration: none;
    font-size: 15px;
    padding: 0px 16px;
    height: 21px;
    align-items: center;
    font-weight: bold;
}
</style>