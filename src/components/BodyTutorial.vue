/*  VIBE CODING, REFAZ ESSE TREM */

<template>
  <section class="tutorial-section">
    <!-- título -->
    <h2 class="tutorial-title">
      Como abrir uma conta <br />
      <span>Nu Empresas</span> se você já tem conta no Nubank?
    </h2>

    <!-- card principal -->
    <div ref="cardRef" class="tutorial-card">
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ height: progress + '%' }"
        ></div>
      </div>

      <div class="tutorial-steps">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="step"
        >
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Step {
  title: string
  text: string
}

const steps: Step[] = [
  {
    title: '1. Acesse o aplicativo do Nubank',
    text: 'Entre na sua conta pessoal do Nubank e vá até o menu “Perfil”.'
  },
  {
    title: '2. Escolha “Conta PJ”',
    text: 'No menu, selecione a opção “Conta PJ” e siga as instruções exibidas na tela.'
  },
  {
    title: '3. Preencha os dados da empresa',
    text: 'Informe as informações do seu negócio e conclua a abertura da conta pelo app.'
  }
]

const cardRef = ref<HTMLElement | null>(null)
const progress = ref(0)

function updateProgress() {
  const el = cardRef.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const sectionHeight = rect.height

  // ponto da tela que ativa o preenchimento (metade da viewport)
  const startPoint = windowHeight / 3

  // quanto da seção passou do ponto de início
  const distancePassed = sectionHeight - Math.max(rect.bottom - startPoint, 0)

  // converte em porcentagem
  let progressPercent = (distancePassed / sectionHeight) * 100

  // limita entre 0 e 100
  progress.value = Math.min(Math.max(progressPercent, 0), 100)
}


onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<style scoped>
/* ===== Estrutura geral ===== */
.tutorial-section {
  background-color: #efefef;
  padding: 120px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.tutorial-title {
  text-align: center;
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1.3;
  color: #111;
  margin-bottom: 60px;
}

.tutorial-title span {
  color: #8a05be; /* roxo Nubank */
}

/* ===== Card principal ===== */
.tutorial-card {
  position: relative;
  width: 100%;
  max-width: 850px;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  padding: 60px 80px;
  display: flex;
  gap: 40px;
  overflow: hidden;
}

/* barra lateral interna */
.progress-bar {
  width: 3px;
  background-color: #e2e2e2;
  border-radius: 3px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.progress-fill {
  position: absolute;
  top: 0; /* muda de bottom:0 para top:0 */
  left: 0;
  width: 100%;
  height: 0%;
  background-color: #8a05be;
  border-radius: 3px;
  transition: height 0.25s ease;
}

/* texto dos passos */
.tutorial-steps {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.step h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 8px;
}

.step p {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  max-width: 600px;
}

/* ===== Responsivo ===== */
@media (max-width: 768px) {
  .tutorial-card {
    flex-direction: row;
    padding: 40px 24px;
    gap: 24px;
  }

  .tutorial-steps {
    gap: 40px;
  }

  .tutorial-title {
    font-size: 1.8rem;
  }
}
</style>