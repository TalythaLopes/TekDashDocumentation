/*  VIBE CODING, REFAZ ESSE TREM */

<template>
  <section class="vantagens-section">
    <h2 class="title">Vantagens da conta Nu Empresas</h2>

    <div class="vantagens-container">
      <div
        v-for="(item, index) in vantagens"
        :key="index"
        class="vantagem-card"
      >
        <img :src="item.icon" :alt="item.title" class="icon" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Vantagem {
  icon: string
  title: string
  description: string
}

const vantagens: Vantagem[] = [
  {
    icon: '/icons/phone.svg',
    title: 'Praticidade e facilidade',
    description:
      'Crie a sua conta PJ em poucos minutos e sem precisar daquela papelada toda.'
  },
  {
    icon: '/icons/money.svg',
    title: 'Zero taxas de manutenção',
    description:
      'Você não paga nada para manter nem movimentar o próprio dinheiro.'
  },
  {
    icon: '/icons/pix.svg',
    title: 'Pix gratuito e ilimitado',
    description:
      'Você não paga nada nem para receber nem para fazer pagamentos e transferências.'
  }
]
</script>

<style scoped>
.vantagens-section {
  background-color: #f2f2f2; /* cinza claro do fundo */
  padding: 80px 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 50px;
}

.vantagens-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 90%;
  max-width: 1200px;
}

.vantagem-card {
  background-color: #fff;
  border-radius: 24px;
  padding: 40px 30px;
  flex: 1 1 300px;
  max-width: 360px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  transition: transform 0.2s ease;
}

.vantagem-card:hover {
  transform: translateY(-4px);
}

.icon {
  width: 36px;
  height: 36px;
}

.vantagem-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #000;
  margin: 0;
}

.vantagem-card p {
  font-size: 1rem;
  color: #333;
  line-height: 1.4;
}

/* Responsividade */
@media (max-width: 900px) {
  .vantagens-container {
    flex-direction: column;
    align-items: center;
  }

  .vantagem-card {
    max-width: 90%;
  }
}
</style>
