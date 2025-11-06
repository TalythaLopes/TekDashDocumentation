/* responsividade e botoões = vibe coded *mudar urgente* aaa a a aaaaaaaaaaaaaaa*/

<template>
  <section>
    <div class="container">
      <div class="text text-top">
        <div class="animate-block block-1">
          <h4>ERP Tek-System na palma da mão</h4>
        </div>
        <div class="animate-block block-2">
          <h2>
            <!-- Com o TekDashboard, o seu ERP Tek-System vai com você.-->
            Visualize indicadores, acompanhe resultados e mantenha o
            <strong>controle total do seu negócio em qualquer lugar.</strong>
          </h2>
        </div>
      </div>
      <div class="image animate-img">
        <img src="/img/TelaTekDash.png" alt="Mulher loira de costas olhando o TekDashboard no celular e no notebook" />
      </div>
      <div class="text form">
        <div class="animate-block block-3 form">
          <router-link to="/documentacao" class="btn-doc">Mais informações sobre o TekDashboard</router-link>
        </div>
        <div class="animate-block block-4 form">
          <a href="https://tekdashboard.teksystem.com.br/" target="_blank" class="btn-login">Fazer login no
            TekDashboard
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-block {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease forwards;
}

.block-1 { animation-delay: 0.2s; }
.block-2 { animation-delay: 0.4s; }
.block-3 { animation-delay: 0.6s; }
.block-4 { animation-delay: 0.8s; }

.animate-img img {
  opacity: 0;
  transform: scale(1.15);
  animation: zoomOut 1.5s ease forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes zoomOut {
  from { opacity: 1; transform: scale(1.15); }
  to   { opacity: 1; transform: scale(1); }
}

section {
  padding-top: 30px;
}

.container {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 760px;
  grid-template-areas: "text-top image"
                       "form     image";
  gap: 40px;
  align-items: center;
  transition: all 0.3s ease;
}

.text-top {
  grid-area: text-top;
  display: flex;
  flex-direction: column;
  max-width: 600px;
}

.form {
  grid-area: form;
  display: flex;
  flex-direction: column;
  max-width: 350px;
}

.image {
  grid-area: image;
  width: 760px;
  height: 550px;
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  transition: all 0.4s ease;
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

.text-top h4 {
  color: var(--vt-c-red);
  margin-bottom: 10px;
}

/* ==================== BOTÕES ==================== */
.form {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 12px;
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
  transform: scale(1.06);
}

@media (max-width: 1330px) {
  .container { grid-template-columns: 1fr 620px; }
  .image { width: 620px; height: 450px; }
}

@media (max-width: 1250px) {
  .container { grid-template-columns: 1fr 520px; }
  .image { width: 520px; height: 380px; }
}

@media (max-width: 1200px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "text-top"
      "image"
      "form";
    text-align: center;
    justify-items: center;
    gap: 24px;
  }

  .text-top {
    max-width: 90%;
    margin: 0 auto;
    align-items: center;
  }

  .image {
    width: 100%;
    height: 200px;
    margin: 0;
  }
  
  .image img {
    height: 200px;
    width: 100%;
  }
}
</style>
