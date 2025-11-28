<template>
  <h1 class="LStyleDocumentation">Como funciona?</h1>
  <p>
    A aplicação TekDashboards é uma <bold>ferramenta de visualização de dados</bold> integrada ao ERP Tek-System. Ela te
    permite acessar informações de forma rápida e intuitiva, facilitando a análise dos resultados e a tomada de decisões
    no dia a dia.
  </p>
  <p>
    Embora funcione de maneira <bold>independente do ERP</bold>, a aplicação utiliza os
    <bold>dados que já existem no Tek-System</bold> para gerar <bold>dashboards dinâmicos e interativos</bold>. Acesse
    <bold>diretamente pelo navegador</bold> ou <bold>instale a versão móvel</bold> em teu dispositivo, conforme tua
    preferência.
  </p>
  <p>
    Os dados chegam ao TekDashboards por meio de envios realizados pelo TekServer, utilizando as units instaladas com
    esta funcionalidade. <bold>Defina os agendamentos</bold> de sincronização conforme sua rotina ou
    <bold>dispare uma atualização manual</bold> sempre que precisar. Essa flexibilidade garante que visualize
    <bold>informações atualizadas</bold> no momento certo.
  </p>
  <p>
    Os dashboards são <bold>organizados por temas</bold> e cada tema oferece gráficos, tabelas e indicadores pensados
    para mostrar os pontos mais importantes do teu negócio. O <bold>envio dos dados</bold> é realizado por agendamentos
    independentes <bold>para cada tema</bold>. Assim, é possível controlar a
    <bold>frequência de atualização conforme a necessidade da empresa</bold>, seja em <bold>tempo real</bold> ou em
    <bold>horários programados</bold>.
  </p>
  <p>
    Para que o envio funcione corretamente, é necessário <bold>configurar o TekServer</bold> conforme orientamos na
    seção <bold :style="{ color: 'var(--color-principal)' }">Instalação e Configurações</bold> e
    <bold>ajustar os parâmetros de execução</bold> dentro da própria aplicação TekDashboard seguindo as orientações da
    seção <bold :style="{ color: 'var(--color-principal)' }">Paramêtros</bold>.
  </p>
  <h3 class="LStyleDocumentation">Diagrama de Funcionamento Resumido</h3>
  <img
    class="LStyleDocumentation"
    src="/img/DocFuncionamentoDiagrama.png"
    alt="Diagrama ilustrado, explicação no parágrafo abaixo."
  />
  <p>
    O diagrama ilustra o <bold>fluxo de funcionamento do processo automatizado</bold>. O agendamento dispara a execução
    no TekServer, que comunica com o <bold>banco de dados do ERP</bold> para obter as informações necessárias. Em
    seguida, <bold>o TekServer coleta</bold> os parâmetros, executa o processamento e
    <bold>envia os dados para o TekDashboard</bold>. O TekDashboard envia para a <bold>camada de validações</bold> que
    realiza as <bold> verificações de segurança e de permissões</bold> antes de permitir o envio das informações ao
    <bold>banco de dados em nuvem</bold>.
  </p>
  <h3 class="LStyleDocumentation">Principais Recursos e Funcionalidades</h3>
  <ul class="LStyleCheckList">
    <li>
      <p>
        <v-icon>mdi-check-circle-outline</v-icon> <bold>Dashboards organizados</bold> por temas: vendas, financeiro,
        estoque e produção.
      </p>
    </li>
    <li>
      <p>
        <v-icon>mdi-check-circle-outline</v-icon> Visualizações dinâmicas com <bold>gráficos e tabelas interativas.</bold>
      </p>
    </li>
    <li>
      <p>
        <v-icon>mdi-check-circle-outline</v-icon> Uso de <bold>filtros simultâneos</bold> para análises detalhadas e
        personalizadas.
      </p>
    </li>
    <li>
      <p>
        <v-icon>mdi-check-circle-outline</v-icon> <bold>Restrição de dados</bold> conforme o nível do usuário no ERP.
      </p>
    </li>
    <li>
      <p>        
        <v-icon>mdi-check-circle-outline</v-icon> <bold>Gestão centralizada de acessos</bold> diretamente pelo Tek-System.
      </p>
    </li>
    <li>
      <p>
        <v-icon>mdi-check-circle-outline</v-icon> <bold>Atualização de dados em tempo real</bold> ou programada, de acordo
        com os agendamentos.
      </p>
    </li>
    <li>
      <p>        
        <v-icon>mdi-check-circle-outline</v-icon> Acesso <bold>multiplataforma</bold>, disponível no navegador e em
        aplicativo móvel.
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts"></script>
