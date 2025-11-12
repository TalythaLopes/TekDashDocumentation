<template>
  <a class="btn-especialista zoom-btn" target="_blank"
    href="https://api.whatsapp.com/send?phone=5532999724221&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es">
    <span class="btn-text">Fale com um especialista do setor comercial</span>
  </a>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.btn-especialista {
  background-color: var(--vt-c-red);
  color: var(--color-background);
  padding: 12px 24px;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  max-width: 250px;
}

.btn-text {
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1;
}
</style>