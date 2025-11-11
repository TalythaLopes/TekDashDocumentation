/* VIBE CODING, REFAZ ESSE TREM */

<template>
  <section ref="sectionRef">
    <h1 ref="titleRef" :class="{ 'in-view': inViewTitle }">
      Como adquirir o <strong>TekDashboard</strong> se você já usa o ERP Tek-System?
    </h1>

    <div ref="cardRef" class="tutorial-card" :class="{ 'in-view': inViewCard }">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ height: progress + '%' }"></div>
      </div>

      <div class="tutorial-steps">
        <div v-for="(step, index) in steps" :key="index" class="step" :class="{ 'in-view': inViewSteps }"
          :style="{ animationDelay: `${0.2 * index}s` }">
          <p :style="{ fontSize: '40px' }">0{{ index + 1 }}</p>
          <div class="step-text">
            <h5>{{ step.title }}</h5>
            <p class="pb-0">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue';

interface Step {
  title: string;
  text: string;
};

const steps: Step[] = [
  {
    title: 'Contato com a equipe comercial',
    text: 'Entre em contato com a equipe comercial da Tek-System para solicitar um orçamento e realizar uma análise de aderência, garantindo que o TekDash atenda às necessidades da sua empresa.'
  },
  {
    title: 'Treinamento e orientação',
    text: 'Receba suporte da equipe Tek-System com treinamentos e orientações para aproveitar o máximo do TekDash desde o primeiro acesso.'
  },
  {
    title: 'Upload de dados',
    text: 'Com o auxílio técnico da Tek-System, faça o upload dos dados do seu ERP para o TekDash e comece a visualizar as informações em tempo real.'
  },
  {
    title: 'Definição de usuários e acessos',
    text: 'Configure os usuários, permissões e níveis de acesso conforme as funções e responsabilidades de cada equipe.'
  },
  {
    title: 'Personalização e uso estratégico',
    text: 'Personalize o dashboard para que cada usuário visualize os dados da forma mais eficiente e possa utilizá-los para discutir e definir melhores estratégias de negócio.'
  }
];

const sectionRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);
const cardRef = ref<HTMLElement | null>(null);

const inViewTitle = ref(false);
const inViewCard = ref(false);
const inViewSteps = ref(false);

const progress = ref(0);
const activeIndex = ref(0);

let interval: number | undefined;
let observer: IntersectionObserver | null = null;

function createObserver(refElement: typeof sectionRef, callback: () => void, threshold = 0.2, rootMargin = "0px") {
  const obs = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry?.isIntersecting) {
      callback();
      obs.unobserve(entry.target);
    }
  }, { threshold, rootMargin });

  if (refElement.value) obs.observe(refElement.value);
  return obs;
}

function updateProgress() {
  const el = cardRef.value;
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const sectionHeight = rect.height;
  let startPoint;

  if (window.innerWidth > 400) {
    startPoint = (windowHeight / 4) * 3;
  } else {
    startPoint = (windowHeight / 2);
  }

  let distancePassed = sectionHeight - Math.max(rect.bottom - (startPoint), 0);
  let progressPercent = (distancePassed / sectionHeight) * 100;
  progress.value = Math.min(Math.max(progressPercent, 0), 100);
}

onMounted(() => {
  interval = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % steps.length;
  }, 8000);

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  observer = createObserver(titleRef, () => {
    inViewTitle.value = true;

    setTimeout(() => {
      inViewCard.value = true;
      setTimeout(() => {
        inViewSteps.value = true;
      }, 300);
    }, 200);
  }, 0.2);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateProgress);
  if (interval) clearInterval(interval);
});

onUnmounted(() => {
  if (observer && sectionRef.value) observer.unobserve(sectionRef.value);
});
</script>

<style scoped>
section {
  background-color: var(--color-background-site);
}

h1 {
  color: var(--color-text);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  max-width: 835px;
  text-align: center;
}

h1.in-view {
  opacity: 1;
  transform: translateY(0);
}

.tutorial-title strong {
  color: var(--vt-c-red);
}

.tutorial-card {
  position: relative;
  width: 100%;
  max-width: 1050px;
  background-color: var(--color-background);
  border-radius: 50px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  padding: 60px 60px;
  display: flex;
  gap: 30px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
}

.tutorial-card.in-view {
  animation: slideUp 0.8s ease forwards;
}

.progress-bar {
  width: 3px;
  background-color: var(--color-background-site);
  border-radius: 3px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: var(--vt-c-red);
  border-radius: 3px;
  transition: height 0.25s ease;
}

.tutorial-steps {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  opacity: 0;
  transform: translateY(30px);
}

.step.in-view {
  animation: slideUp 0.8s ease forwards;
}

@media (max-width: 1100px) {
  .tutorial-card {
    flex-direction: row;
    padding: 30px 24px;
    gap: 20px;
    width: 80%;
  }

  .tutorial-steps {
    gap: 20px;
  }
  
  h1 {
    text-align: center;
    padding: 0 32px; 
    margin: 0 auto;
  }
}

@media (max-width: 400px) {
  .tutorial-card {
    flex: 1 1 auto;
    padding: 24px;
    gap: 15px;
    width: 90%;
    border-radius: 30px;
  }

  .tutorial-steps { gap: 15px; }
  .step { gap: 15px; }
  .step p { font-size: 22px !important; }
  .step-text p { font-size: 16px !important; }
  .step-text h5 { padding-bottom: 5px; }
}
</style>