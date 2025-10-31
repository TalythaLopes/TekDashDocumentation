/* VIBE CODING, REFAZ ESSE TREM */

<template>
  <section class="tutorial-section">
    <!-- título -->
    <h2 class="tutorial-title">
      Como adquirir o <span>TekDashboard</span><br />se você já usa o ERP Tek-System?
    </h2>

    <!-- card principal -->
    <div ref="cardRef" class="tutorial-card">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ height: progress + '%' }"></div>
      </div>

      <div class="tutorial-steps">
        <div v-for="(step, index) in steps" :key="index" class="step">
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
    title: '1. Contato com a equipe comercial',
    text: 'Entre em contato com a equipe comercial da Tek-System para solicitar um orçamento e realizar uma análise de aderência, garantindo que o TekDash atenda às necessidades da sua empresa.'
  },
  {
    title: '2. Treinamento e orientação',
    text: 'Receba suporte da equipe Tek-System com treinamentos e orientações para aproveitar o máximo do TekDash desde o primeiro acesso.'
  },
  {
    title: '3. Upload de dados',
    text: 'Com o auxílio técnico da Tek-System, faça o upload dos dados do seu ERP para o TekDash e comece a visualizar as informações em tempo real.'
  },
  {
    title: '4. Definição de usuários e acessos',
    text: 'Configure os usuários, permissões e níveis de acesso conforme as funções e responsabilidades de cada equipe.'
  },
  {
    title: '5. Personalização e uso estratégico',
    text: 'Personalize o dashboard para que cada usuário visualize os dados da forma mais eficiente e possa utilizá-los para discutir e definir melhores estratégias de negócio.'
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
  background-color: var(--color-background-site);
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
  color: var(--vt-c-gray);
  margin-bottom: 60px;
}

.tutorial-title span {
  color: var(--vt-c-red)
}

.tutorial-card {
  position: relative;
  width: 100%;
  max-width: 850px;
  background-color: var(--color-background);
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
  background-color: var(--color-background);
  border-radius: 3px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.progress-fill {
  position: absolute;
  top: 0;
  /* muda de bottom:0 para top:0 */
  left: 0;
  width: 100%;
  height: 0%;
  background-color: var(--vt-c-red);
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
  color: var(--vt-c-gray);
  margin-bottom: 8px;
}

.step p {
  font-size: 1rem;
  color: var(--vt-c-gray);
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