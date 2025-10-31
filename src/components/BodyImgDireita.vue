/* VIBE CODING, REFAZ ESSE TREM */

<template>
  <section class="hero">
    <div class="hero-container">
      <!-- Coluna de texto -->
      <div class="hero-text">
        <h2>ERP Tek-System na palma da mão</h2>
        <h1>
          <!-- Com o TekDashboard, o seu ERP Tek-System vai com você.-->
          Visualize indicadores, acompanhe resultados e mantenha o 
          <strong>controle total do seu negócio em qualquer lugar.</strong>
        </h1>

        <div class="hero-form">
          <router-link to="/documentacao" class="btn-doc">Mais informações sobre o TekDashboard</router-link>
          <a href="https://tekdashboard.teksystem.com.br/" target="_blank" class="btn-login">Fazer login no TekDashboard</a>
        </div>
      </div>

      <!-- Coluna de imagem -->
      <div class="hero-image">
        <img src="/img/TelaTekDash.png" alt="Mulher loira de costas olhando o TekDashboard no celular e no notebook" />
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
  max-width: 1400px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}

.hero-text h2 {
  color: var(--vt-c-red);
  font-size: 28px;
  font-weight: 500;
}

.hero-text h1 {
  font-size: 38px;
  color: var(--vt-c-gray);
  font-weight: 600;
  line-height: 1.1;
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

.hero-form .btn-doc,
.hero-form .btn-login {
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 20px;
  font-weight: 600;
  transition: 0.3s ease;
  text-align: center;
  cursor: pointer;
  font-size: 15px;
}

.hero-form .btn-doc {
  background-color: var(--color-background);
  color: var(--vt-c-red);
  border: var(--vt-c-red) 1.5px solid;
}

.hero-form .btn-login {
  background-color: var(--vt-c-red);
  color: var(--color-background);
  border: none;
}

.hero-form .btn-doc:hover,
.hero-form .btn-login:hover,
.hero-image img:hover {
  transform: scale(1.10);
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease;
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
