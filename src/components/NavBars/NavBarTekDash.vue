<template>
  <nav class="navbar-container">
    <div class="navbar-content">
      <a href="/"><h4 class="navbar-title">TekDashboard</h4></a>
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
  z-index: 999; 
  /*box-shadow: 0 2px 6px var(--color-border);*/
}

.navbar-content {
  width: 1087px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--vt-c-red);
}

.navbar-title {
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

@media (max-width: 1200px) {
  .navbar-container{
    padding: 5px 24px;
  }
  .navbar-content {
  width: 100%;}

}
</style>