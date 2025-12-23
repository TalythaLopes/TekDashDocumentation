<template>
  <h1 class="LStyleDocumentation">Como funciona?</h1>
  <p>
    A aplicação TekDashboard é uma <bold>ferramenta de visualização de dados</bold> integrada ao ERP Tek-System. Ela te permite
    acessar informações de forma rápida e intuitiva, facilitando a análise dos resultados e a tomada de decisões no dia a dia.
  </p>
  <p>
    Embora funcione de maneira <bold>independente do ERP</bold>, a aplicação utiliza os
    <bold>dados que já existem no Tek-System</bold> para gerar <bold>dashboards dinâmicos e interativos</bold>. Acesse
    <bold>diretamente pelo navegador</bold> ou <bold>instale a versão móvel</bold> em teu dispositivo, conforme tua preferência.
  </p>
  <p>
    Os dados exibidos no TekDashboard são enviados automaticamente a partir de processamentos instaladas, garantindo que as
    <bold>informações do seu negócio estejam sempre disponíveis</bold> para análise. Definir horários de atualização conforme a
    sua rotina ou, se preferir, deixe por nosso conta que estamos trabalhando em métodos de sincronização que rodem de 1 em 1
    minuto. Essa flexibilidade garante que visualize <bold>informações atualizadas</bold> no momento certo.
  </p>
  <p>
    Os dashboards são <bold>organizados por temas</bold> e cada tema reúne gráficos, tabelas e indicadores pensados para destacar
    o que realmente importa para a gestão da sua empresa. O <bold>envio dos dados</bold> é realizado por agendamentos
    independentes <bold>para cada tema</bold>. Assim, é possível controlar a
    <bold>frequência de atualização conforme a necessidade da empresa</bold>, seja em <bold>tempo real</bold> ou em
    <bold>horários programados</bold>.
  </p>
  <p>
    Para que tudo funcione corretamente, é importante que o ambiente responsável pelo envio dos dados esteja configurado conforme
    as orientações da seção
    <a href="#" :style="{ color: 'var(--color-principal)' }" @click.prevent="goToInstalacaoConfiguracoes">
      <bold>Instalação e Configurações</bold></a
    >. Além disso, os <bold>parâmetros de funcionamento</bold> podem ser ajustados diretamente no TekDashboard, seguindo as
    instruções da seção
    <a href="#" :style="{ color: 'var(--color-principal)' }" @click.prevent="goToParametros"> <bold>Parâmetros </bold></a>.
  </p>
  <h3 class="LStyleDocumentation">Diagrama de Funcionamento Resumido</h3>
  <img
    class="LStyleDocumentation"
    src="/img/DocFuncionamentoDiagrama.png"
    alt="Diagrama ilustrado, explicação no parágrafo abaixo."
  />
  <p>
    O diagrama ilustra o <bold>fluxo de funcionamento do processo automatizado</bold>. O agendamento dispara a execução no
    TekServer, que comunica com o <bold>banco de dados do ERP</bold> para obter as informações necessárias. Em seguida,
    <bold>o TekServer coleta</bold> os parâmetros, executa o processamento e <bold>envia os dados para o TekDashboard</bold>. O
    TekDashboard envia para a <bold>camada de validações</bold> que realiza as
    <bold> verificações de segurança e de permissões</bold> antes de permitir o envio das informações ao
    <bold>banco de dados em nuvem</bold>.
  </p>
  <h3 class="LStyleDocumentation">Principais Recursos e Funcionalidades</h3>
  <ul class="LStyleCheckList">
    <li>
      <p>
        <v-icon>mdi-check-circle-outline</v-icon> <bold> Dashboards organizados</bold> por temas como Vendas e Financeiro, além
        dos módulos de Estoque e Produção em desenvolvimento.
      </p>
    </li>
    <li>
      <p><v-icon>mdi-check-circle-outline</v-icon> Visualizações dinâmicas com <bold>gráficos e tabelas interativas.</bold></p>
    </li>
    <li>
      <p>
        <v-icon>mdi-check-circle-outline</v-icon> Uso de <bold>filtros simultâneos</bold> para análises detalhadas e
        personalizadas.
      </p>
    </li>
    <li>
      <p><v-icon>mdi-check-circle-outline</v-icon> <bold>Restrição de dados</bold> conforme o nível do usuário no ERP.</p>
    </li>
    <li>
      <p><v-icon>mdi-check-circle-outline</v-icon> <bold>Gestão centralizada de acessos</bold> diretamente pelo Tek-System.</p>
    </li>
    <li>
      <p>
        <v-icon>mdi-check-circle-outline</v-icon> <bold>Atualização de dados em tempo real</bold> ou programada, de acordo com os
        agendamentos.
      </p>
    </li>
    <li>
      <p>
        <v-icon>mdi-check-circle-outline</v-icon> Acesso <bold>multiplataforma</bold>, disponível no navegador e em aplicativo
        móvel.
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'navigate', payload: { section: string; item?: string }): void }>();

const goToInstalacaoConfiguracoes = () => {
  emit('navigate', { section: 'instalacao' });
};

const goToParametros = () => {
  emit('navigate', { section: 'instrucoes', item: 'parametros' });
};
</script>
