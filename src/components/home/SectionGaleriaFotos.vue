/* Ajustar responsividade */

<template>
  <section ref="sectionRef" class="LStyleGaleriaSection">
    <div ref="wrapperRef" class="LStyleGaleriaWrapper">
      <div class="LStyleGaleriaRow">
        <h1 class="LStyleTextStart">Explore os Dashboards</h1>
        <div v-for="(foto, i) in fotos" :key="i" class="LStyleFotoItem">
          <img :src="foto.src" :alt="foto.alt" />
          <div class="LStyleHoverOverlay">
            <v-icon size="42" class="LStyleHoverIcon">{{ foto.icon }}</v-icon>
            <p class="LStyleHoverDescription">{{ foto.texto }}</p>
          </div>
        </div>
        <h1 class="LStyleTextEnd">e muito mais...</h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const sectionRef = ref<HTMLElement | null>(null);
const wrapperRef = ref<HTMLElement | null>(null);

interface FotoItem {
  src: string;
  alt: string;
  icon: string;
  texto: string;
}

const fotos = ref<FotoItem[]>([
  {
    src: '../../../img/Galeria2.png',
    alt: '',
    icon: 'mdi-wallet-bifold',
    texto: 'Tenha uma visão completa da carteira de clientes de cada supervisor e consultor. Identifique rapidamente clientes novos, ativos, quase inativos e inativos para agir com estratégia e precisão.'

  },
  {
    src: '../../../img/Galeria5.png',
    alt: '',
    icon: 'mdi-abacus',
    texto: 'Acompanhe suas vendas com dashboards visuais e inteligentes: análises por cidade, estado, origem, empresa, órgão, mapas de incidência de pedidos e muito mais em um só lugar.'

  },
  {
    src: '../../../img/Galeria3.png',
    alt: '',
    icon: 'mdi-cash-multiple',
    texto: 'Compare facilmente períodos de vendas mensais ou anuais com gráficos claros que revelam oportunidades e tendências em poucos segundos.'
  },
  {
    src: '../../../img/Galeria4.png',
    alt: '',
    icon: 'mdi-card-account-details-star',
    texto: 'Explore rankings avançados: pedidos de maior valor, desempenho por região, clientes mais rentáveis e total de vendas por consultor. Ideal para criar estratégias de bonificação e incentivo.'
  },
  {
    src: '../../../img/Galeria1.png',
    alt: '',
    icon: 'mdi-account-tie',
    texto: 'Gerencie permissões com segurança e permita que supervisores e consultores visualizem apenas suas próprias áreas, criando autonomia para definirem estratégias personalizadas.'
  }
]);

onMounted(() => {
  const el = wrapperRef.value;
  if (!el) return;

  let isInside = false;

  const onWheel = (e: WheelEvent) => {
    if (!isInside) return;

    e.preventDefault();

    const maxScroll = el.scrollWidth - el.clientWidth;

    el.scrollLeft += e.deltaY;

    if (el.scrollLeft >= maxScroll && e.deltaY > 0) {  isInside = false;
    }
  };

  const onEnter = () => { isInside = true; };
  const onLeave = () => { isInside = false; };

  el.addEventListener("mouseenter", onEnter);
  el.addEventListener("mouseleave", onLeave);
  window.addEventListener("wheel", onWheel, { passive: false });

  onBeforeUnmount(() => {
    el.removeEventListener("mouseenter", onEnter);
    el.removeEventListener("mouseleave", onLeave);
    window.removeEventListener("wheel", onWheel);
  });
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

.LStyleGaleriaRow { display: flex; gap: 24px; padding: 0 40px; height: 100%; align-items: center; }

h1 {
  min-width: 300px;
  color: var(--color-text);
}

.LStyleTextStart { margin-left: 15%; }
.LStyleTextEnd { min-width: 500px; padding-right: 15%; }

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

.LStyleFotoItem:hover img {
  transform: scale(1.06);
}

.LStyleHoverOverlay {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  color: var(--color-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 24px;
  text-align: center;

  inset: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.LStyleFotoItem:hover .LStyleHoverOverlay {
  opacity: 1;
  transform: translateY(0);
}

.LStyleHoverIcon {
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
}

.LStyleFotoItem:hover .LStyleHoverIcon {
  opacity: 1;
  transform: translateY(0);
}

.LStyleHoverDescription {
  font-size: 20px;
  line-height: 1.45;
  max-width: 280px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.45s ease 0.15s, transform 0.45s ease 0.15s;
}

.LStyleFotoItem:hover .LStyleHoverDescription {
  opacity: 1;
  transform: translateY(0);
}
</style>