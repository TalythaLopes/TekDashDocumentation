/*  VIBE CODING, REFAZ ESSE TREM */

<template>
  <section class="hero">
    <div class="hero-container">
      <!-- Coluna de texto -->
      <div class="hero-text">
        <h2>Conta Nu Empresas</h2>
        <h1>
          Uma conta PJ prática e confiável para você focar no que realmente importa:
          <strong>seu negócio.</strong>
        </h1>

        <div class="hero-form">
          <p>Abra sua conta PJ em minutos</p>
          <input type="text" placeholder="Digite seu CNPJ" />
          <button>Continuar</button>
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
  background-color: #fff;
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
  color: #8a05be;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.hero-text h1 {
  font-size: 2rem;
  color: #242424;
  font-weight: 600;
  line-height: 1.3;
}

.hero-text strong {
  color: #8a05be;
}

.hero-form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 350px;
}

.hero-form p {
  font-weight: 500;
  color: #555;
}

.hero-form input {
  padding: 12px 16px;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.hero-form button {
  background-color: #8a05be;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  padding: 12px 16px;
  cursor: pointer;
  transition: 0.3s;
}

.hero-form button:hover {
  background-color: #6b0494;
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
