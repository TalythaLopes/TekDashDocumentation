<template>
  <section class="LStyleGaleriaSection">
    <div ref="wrapperRef" class="LStyleGaleriaWrapper" tabindex="0" aria-label="Galeria de dashboards">
      <div class="LStyleGaleriaRow">
        <h1 class="LStyleTextStart LStyleFadeIn" :class="{ 'LStyleInView': inViewStart }">Explore os Dashboards</h1>
        <div v-for="(foto, i) in fotos" :key="i" class="LStyleFotoItem LStyleFadeIn" :class="{ 'LStyleInView': cardInView[i] }">
          <img :src="foto.src" :alt="foto.alt" />
          <div class="LStyleHoverOverlay">
            <v-icon size="42" class="LStyleHoverIcon">{{ foto.icon }}</v-icon>
            <p class="LStyleHoverDescription">{{ foto.texto }}</p>
          </div>
        </div>
        <h1 class="LStyleTextEnd LStyleFadeIn" :class="{ 'LStyleInView': inViewEnd }">e muito mais...</h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const wrapperRef = ref<HTMLElement | null>(null);

const inViewStart = ref(false);
const inViewEnd = ref(false);
const cardInView = ref<boolean[]>([]);

interface FotoItem {
  src: string;
  alt?: string;
  icon: string;
  texto: string;
}

const fotos = ref<FotoItem[]>([
  {
    src: '../../../img/SectionGaleria2.png',
    alt: '',
    icon: 'mdi-wallet-bifold',
    texto: 'Tenha uma visão completa da carteira de clientes de cada supervisor e consultor. Identifique rapidamente clientes novos, ativos, quase inativos e inativos para agir com estratégia e precisão.'

  },
  {
    src: '../../../img/SectionGaleria5.png',
    alt: '',
    icon: 'mdi-abacus',
    texto: 'Acompanhe suas vendas com dashboards visuais e inteligentes: análises por cidade, estado, origem, empresa, órgão, mapas de incidência de pedidos e muito mais em um só lugar.'

  },
  {
    src: '../../../img/SectionGaleria3.png',
    alt: '',
    icon: 'mdi-cash-multiple',
    texto: 'Compare facilmente períodos de vendas mensais ou anuais com gráficos claros que revelam oportunidades e tendências em poucos segundos.'
  },
  {
    src: '../../../img/SectionGaleria4.png',
    alt: '',
    icon: 'mdi-card-account-details-star',
    texto: 'Explore rankings avançados: pedidos de maior valor, desempenho por região, clientes mais rentáveis e total de vendas por consultor. Ideal para criar estratégias de bonificação e incentivo.'
  },
  {
    src: '../../../img/SectionGaleria1.png',
    alt: '',
    icon: 'mdi-account-tie',
    texto: 'Gerencie permissões com segurança e permita que supervisores e consultores visualizem apenas suas próprias áreas, criando autonomia para definirem estratégias personalizadas.'
  }
]);

onMounted(() => {
  const wrapper = wrapperRef.value;
  if (!wrapper) return;

  let isMouseInside = false;

  const handleWheel = (event: WheelEvent) => {
    if (!isMouseInside) return;
    event.preventDefault();
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
    wrapper.scrollLeft += event.deltaY;
    if (wrapper.scrollLeft >= maxScrollLeft && event.deltaY > 0) {
      isMouseInside = false;
    }
  };

  const handleMouseEnter = () => { isMouseInside = true; };
  const handleMouseLeave = () => { isMouseInside = false; };

  wrapper.addEventListener("mouseenter", handleMouseEnter);
  wrapper.addEventListener("mouseleave", handleMouseLeave);
  window.addEventListener("wheel", handleWheel, { passive: false });

  onBeforeUnmount(() => {
    wrapper.removeEventListener("mouseenter", handleMouseEnter);
    wrapper.removeEventListener("mouseleave", handleMouseLeave);
    window.removeEventListener("wheel", handleWheel);
  });

  cardInView.value = fotos.value.map(() => false);

  const row = wrapperRef.value;
  if (!row) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0]?.isIntersecting) return;
      inViewStart.value = true;
      const initialDelay = 250;
      const interval = 400;
      fotos.value.forEach((_, i) => {
        setTimeout(() => {
          cardInView.value[i] = true;
        }, initialDelay + i * interval);
      });
      setTimeout(() => {
        inViewEnd.value = true;
      }, initialDelay + fotos.value.length * interval);
      observer.disconnect();
    },
    { threshold: 0.5 }
  );
  if (wrapperRef.value) observer.observe(wrapperRef.value);
});
</script>

<style scoped>
.LStyleGaleriaSection {
  width: 100%;
  height: 72vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.LStyleGaleriaWrapper {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
}

.LStyleFadeIn {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .6s ease, transform .6s ease;
}

.LStyleInView {
  opacity: 1;
  transform: translateY(0);
}

.LStyleGaleriaRow { display: flex; gap: 24px; padding: 0 40px; height: 100%; align-items: center; }
h1 { color: var(--color-text); }
.LStyleTextStart { text-align: end; min-width: 280px; margin-left: 15%; }
.LStyleTextEnd   { min-width: 450px; padding-right: 15%; }

.LStyleFotoItem {
  position: relative;
  width: 380px;
  height: 420px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden;
}

.LStyleFotoItem img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.LStyleFotoItem:hover img { transform: scale(1.06); }

.LStyleHoverOverlay {
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.7);
  color: var(--color-background);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 32px 24px;
  text-align: center;

  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.LStyleFotoItem:hover .LStyleHoverOverlay {
  opacity: 1;
  transform: translateY(0);
}

.LStyleHoverIcon,
.LStyleHoverDescription {
  opacity: 0;
  transition: opacity .45s ease, transform .45s ease;
}

.LStyleHoverIcon {
  margin-bottom: 20px;
  transform: translateY(-10px);
}

.LStyleHoverDescription {
  font-size: 20px;
  max-width: 280px;
  line-height: 1.45;
  transform: translateY(10px);
}

.LStyleFotoItem:hover .LStyleHoverIcon,
.LStyleFotoItem:hover .LStyleHoverDescription {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1200px) {
  .LStyleGaleriaSection { height: auto; }
  .LStyleFotoItem { width: 300px; height: 340px; }
  .LStyleTextStart { min-width: 250px; }
  .LStyleTextEnd { min-width: 280px; padding-right: 10%; }
}

@media (max-width: 600px) {
  .LStyleFotoItem { width: 260px; height: 300px; }
  .LStyleTextStart { min-width: 150px; }
}
</style>