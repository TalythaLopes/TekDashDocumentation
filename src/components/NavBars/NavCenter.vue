<template>
  <li class="navbar-links" v-for="link in links" :key="link.label">
    <a class="zoom" :href="link.url" target="_blank" rel="noopener">{{ link.label }}</a>
  </li>
</template>

<script lang="ts" setup>
const links = [
  { label: "HOME", url: "https://homepage.teksystem.com.br/" },
  { label: "SOBRE", url: "https://homepage.teksystem.com.br/sobre/" },
  { label: "ERP TEK-SYSTEM", url: "https://homepage.teksystem.com.br/erp-tek-system/" },
  { label: "BLOG", url: "https://homepage.teksystem.com.br/blog/" },
  { label: "DOWNLOADS E LINKS", url: "https://homepage.teksystem.com.br/downloads-e-links/" },
  { label: "CONTATO", url: "https://homepage.teksystem.com.br/contato/" },
  { label: "ATENDIMENTO WEB", url: "https://www.atendimento.teksystem.com.br/#/login" }
];
</script>

<style scoped>
.navbar-links {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 0px;
}

.navbar-links li {
  margin: 0 15px;
}

@media (max-width: 1200px) {
  .navbar-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    width: 100%;
  }

  .navbar-links li {
    margin: 0;
  }
}
</style>