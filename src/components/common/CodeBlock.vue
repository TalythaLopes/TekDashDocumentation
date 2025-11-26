<template>
  <div class="LStyleCodeContainer">
    <div class="LStyleCodeHeader">
      <span class="LStyleDot red"></span>
      <span class="LStyleDot yellow"></span>
      <span class="LStyleDot green"></span>
    </div>

    <button class="LStyleCopyButton" @click="copyCode">
      {{ copied ? 'Copiado!' : 'Copiar' }}
    </button>

    <pre><code ref="codeRef"><slot /></code></pre>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const copied = ref(false);
const codeRef = ref<any>(null);

function copyCode() {
  const text = codeRef.value?.innerText ?? '';

  navigator.clipboard.writeText(text).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  });
}
</script>

<style scoped>
.LStyleCodeContainer {
  background: #1e1e1e;
  border-radius: 12px;
  padding: 0;
  overflow: hidden;
  position: relative;
  font-family: 'Fira Code', monospace;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  margin: 10px 20px 30px 20px;
}

.LStyleCodeHeader {
  display: flex;
  gap: 8px;
  padding: 10px;
  background: #2b2b2b;
}

.LStyleDot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.red {
  background: #ff5f5a;
}

.yellow {
  background: #ffbe2e;
}

.green {
  background: #2aca44;
}

pre {
  margin: 0;
  padding: 20px;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.5;
}

code {
  color: #a3a9b6;
}

.LStyleCopyButton {
  position: absolute;
  top: 5px;
  right: 10px;
  color: var(--color-background);
  border: none;
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
