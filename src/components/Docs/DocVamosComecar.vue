<template>
  <h1 class="LStyleDocumentation">Apresentação do produto</h1>
  <p>
    O <bold>TekDashboard</bold> é uma solução integrada ao ecossistema Tek-System que
    <bold>utiliza diretamente os dados do ERP Tek-System</bold> para visualizar, analisar e acompanhar
    <bold>indicadores essenciais</bold> do seu negócio de forma <bold>simples, rápida e centralizada</bold>.
  </p>
  <p>Os dashboards são organizados nos temas:</p>
  <ul>
    <li><p>Vendas</p></li>
    <li><p>Financeiro</p></li>
    <li>
      <p>Estoque <em>(em desenvolvimento)</em></p>
    </li>
    <li>
      <p>Produção <em>(em desenvolvimento)</em></p>
    </li>
  </ul>
  <p>
    Cada tema apresenta <bold>métricas consolidadas, visualizações dinâmicas e filtros simultâneos</bold> para que você interprete
    resultados com precisão e <bold>acompanhe tendências</bold> do seu negócio.
  </p>
  <p>
    Os dados são sincronizados com o ERP Tek-System por agendamento de execuções automáticas ou manualmente, garantindo que as
    <bold>informações exibidas estejam sempre atualizadas</bold> de acordo com sua rotina operacional. Estamos evoluindo para
    permitir atualizações com <bold>intervalos de até 1 minuto</bold> para permitir que você tome decisões com mais
    <bold>confiança</bold> usando <bold>indicadores consistentes</bold> e alinhados com os dados do ERP.
  </p>
  <p>
    O TekDashboard organiza as informações do ERP Tek-System em temas, cada um preparado para garantir
    <bold>informações completas, consistentes e atualizadas</bold>. Novos temas e melhorias são adicionados continuamente,
    acompanhe a evolução na seção
    <a href="#" :style="{ color: 'var(--color-principal)' }" @click.prevent="goToEmBreve"> <bold>Em Breve</bold> </a>.
  </p>
  <h3 class="LStyleDocumentation">Onde acessar a aplicação</h3>
  <p>
    A aplicação TekDashboard é <bold>multiplataforma</bold>, e você pode acessá-la no ambiente que preferir. Todas as
    funcionalidades são publicadas <bold>simultaneamente em todas as plataformas</bold>, garantindo a mesma experiência de uso e
    performance. Acesse pelos seguintes meios:
  </p>
  <p>
    <a href="https://tekdashboard.teksystem.com.br/" target="_blank">
      <v-icon>mdi-laptop</v-icon>
      Diretamente pelo navegador ou instale como aplicativo no seu computador.
    </a>
    <br />
    <a href="https://play.google.com/store/apps/details?id=br.com.teksystem.tekdashboard.twa" target="_blank">
      <v-icon>mdi-android</v-icon>
      Instale o aplicativo no seu dispositivo Android.
    </a>
    <br />
    <a href="https://apps.apple.com/app/6749776923" target="_blank">
      <v-icon>mdi-apple</v-icon>
      Instale o aplicativo no seu iPhone ou iPad.
    </a>
  </p>
  <h3 class="LStyleDocumentation">Informações comerciais</h3>
  <p>
    Se você deseja <bold>expandir o uso</bold> do TekDashboard e <bold>adaptar a solução</bold> à sua operação, entre em contato
    conosco. Oferecemos:
  </p>
  <ul>
    <li><p>Implantação assistida</p></li>
    <li><p>Treinamentos para equipes</p></li>
    <li>
      <p>Desenvolvimento de dashboards personalizados <em>(em desenvolvimento)</em></p>
    </li>
    <li><p>Expansão de funcionalidades sob demanda</p></li>
  </ul>
  <p>
    <bold>Importante:</bold> funcionalidades personalizadas podem gerar orçamento adicional na mensalidade, de acordo com a
    complexidade.
  </p>
  <p>
    Para esclarecer dúvidas ou solicitar propostas, <bold>entre em contato com nosso setor comercial</bold> pelo e-mail:
    <a
      :style="{ color: 'var(--color-principal)' }"
      href="mailto:comercial@teksystem.com.br?subject=Or%C3%A7amento%20TekDashboard&body=Ol%C3%A1%20quero%20mais%20informa%C3%A7%C3%B5es."
    >
      <bold>comercial@teksystem.com.br</bold>
    </a>
  </p>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'navigate', payload: { section: string; item?: string }): void }>();

const goToEmBreve = () => {
  emit('navigate', { section: 'emBreve' });
};
</script>
