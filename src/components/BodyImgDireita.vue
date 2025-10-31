/* VIBE CODING, REFAZ ESSE TREM */

<template>
  <section class="hero">
    <div class="hero-container">
      <!-- Coluna de texto -->
      <div class="hero-text">
        <h2>Dashboard Empresarial</h2>
        <h1>
          Acompanhe as vendas, o financeiro, o estoque e o transporte da sua empresa de forma fácil e eficiente.
          <strong>Tenha o controle de tudo em um só lugar, em tempo real.</strong>
        </h1>

        <div class="hero-form">
          <button>Fazer login no TekDash</button>
        </div>
      </div>

      <!-- Coluna de imagem -->
      <div class="hero-image">
        <img src="/img/BrasilComS_00029.jpg" alt="Pessoas trabalhando" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: var(--color-background);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 80px 0;
}

.hero-container {
  width: 90%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.hero-text h2 {
  color: var(--vt-c-red);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.hero-text h1 {
  font-size: 2rem;
  color: var(--vt-c-gray);
  font-weight: 600;
  line-height: 1.3;
}

.hero-text strong {
  color: var(--vt-c-red);
}

.hero-form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 350px;
}

.hero-form button {
  background-color: var(--vt-c-red);
  color: var(--color-background);
  font-weight: 600;
  border: none;
  border-radius: 20px;
  padding: 12px 16px;
  cursor: pointer;
  transition: 0.3s;
}

.hero-form button:hover {
  background-color: var(--vt-c-red);
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

/* Responsividade */
@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-form {
    margin: 0 auto;
  }
}
</style>
