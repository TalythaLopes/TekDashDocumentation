/* responsividade e botoões = vibe coded *mudar urgente* */

<template>
  <section>
    <div class="container">
      <div class="text">
        <h4>ERP Tek-System na palma da mão</h4>
        <h2>
          <!-- Com o TekDashboard, o seu ERP Tek-System vai com você.-->
          Visualize indicadores, acompanhe resultados e mantenha o
          <strong>controle total do seu negócio em qualquer lugar.</strong>
        </h2>

        <div class="form">
          <router-link to="/documentacao" class="btn-doc">Mais informações sobre o TekDashboard</router-link>
          <a href="https://tekdashboard.teksystem.com.br/" target="_blank" class="btn-login">Fazer login no
            TekDashboard</a>
        </div>
      </div>

      <div class="image">
        <img src="/img/TelaTekDash.png" alt="Mulher loira de costas olhando o TekDashboard no celular e no notebook" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  width: 90%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  align-items: center;
}

.image {
  width: 760px;
  height: 550px;
  overflow: hidden;
  border-radius: 16px;
  position: relative;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image:hover img {
  transform: scale(1.05);
}

.text {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}

.text h4 {
  color: var(--vt-c-red);
  margin-bottom: 10px;
}

.form {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 350px;
}

.form .btn-doc,
.form .btn-login {
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 20px;
  font-weight: 600;
  transition: 0.3s ease;
  text-align: center;
  cursor: pointer;
  font-size: 15px;
}

.form .btn-doc {
  background-color: var(--color-background);
  color: var(--vt-c-red);
  border: var(--vt-c-red) 1.5px solid;
}

.form .btn-login {
  background-color: var(--vt-c-red);
  color: var(--color-background);
  border: none;
}

.form .btn-doc:hover,
.form .btn-login:hover {
  transform: scale(1.10);
}

@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .form {
    margin: 0 auto;
  }
}
</style>
