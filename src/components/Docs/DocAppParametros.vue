<template>
  <h1 class="LStyleDocumentation">Configuração de Parâmetros de Execução</h1>
  <p>
    Após o login a aplicação te direciona para a <bold>lista de temas disponíveis.</bold> Para configurar os parâmetros
    clique no ícone com as iniciais do seu usuário, localizado no canto superior direito.
  </p>
  <p>
    Acesse o menu <bold>Configurações</bold> e clique em <bold>Incluir Parâmetro</bold>, em seguida, escolha o tema que
    deseja configurar. Preencha os campos exibidos na tela conforme as informações do seu processo. Esses parâmetros
    determinam como os dados serão <bold>enviados, interpretados e atualizados</bold> pelo TekDashboard.
  </p>
  <img class="LStyleDocumentation" src="/img/DocAppTelaParametros.png" alt="Tela de Parâmetro no TekDashboard" />
  <p>
    <bold>Importante:</bold> preencha todos os parâmetros com <bold>cuidado e muita atenção</bold> porque eles definem o
    comportamento da sincronização e <bold>impactam diretamente os dados exibidos nos dashboards.</bold>
  </p>
  <h3 class="LStyleDocumentation">Estratégias de Processamento</h3>
  <p>Ao configurar um tema, deve-se escolher a estratégia de envio de dados. Existem duas opções:</p>
  <h5 class="LStyleDocumentation">Incremental</h5>
  <p>
    Use essa estratégia quando quiser enviar <bold>somente os dados novos</bold> a cada execução.
    <bold>Na primeira execução</bold>, são enviados <bold>todos os dados</bold> dentro do período configurado e
    <bold>nas execuções seguintes</bold>, o sistema usa a <bold>data final anterior como nova data inicial</bold>,
    coletando apenas o que foi gerado desde então. A Data Final deve sempre usar uma macro dinâmica, como “Data Atual”,
    “Ontem” ou “Final do Mês”. <bold>Não altere os parâmetros após a primeira execução.</bold> Isso garante
    <bold>continuidade </bold> e
    <bold>evita dados duplicados.</bold>
  </p>
  <p><bold>Resumo:</bold> coleta apenas dados novos, sem sobrescrever o histórico.</p>
  <h5 class="LStyleDocumentation">Versionamento</h5>
  <p>
    Use essa estratégia quando você precisa manter sempre a <bold>versão mais atualizada</bold> do conjunto de dados.
    Cada execução <bold>cria uma nova versão</bold> dos dados e <bold>substitui completamente</bold> a anterior. Assim
    como na estratégia Incremental, <bold>não é permitido alterar os parâmetros</bold> depois da primeira execução.
  </p>
  <p><bold>Resumo:</bold> sempre mantém a versão mais recente dos dados para aquele grupo de parâmetros.</p>
  <p>
    Se tiver dúvidas durante o preenchimento, clique no ícone
    <v-icon :color="'var(--color-principal)'" icon="mdi-help-circle" /> disponível em pontos estratégicos da aplicação ou
    <a :style="{ color: 'var(--color-principal)' }" href="https://www.atendimento.teksystem.com.br">
      entre em contato com nosso suporte </a
    >.
  </p>
</template>
<script setup lang="ts"></script>
