<template>
  <h1 class="LStyleDocumentation">Instruções (ERP / Servidor)</h1>
  <p>Um tutorial <bold>passo a passo</bold> estruturado para configurar a aplicação de forma correta.</p>
  <Timeline :items="timelineItems">
    <template #step-0>
      <p>
        Garantir que o ERP está atualizado para a <bold>versão v162.08</bold> ou superior. Versões antigas não oferecem
        compatibilidade total com o TekDashboard. Caso o sistema esteja desatualizado, <bold>realize a atualização</bold> antes de
        continuar.
      </p>
    </template>

    <template #step-1>
      <p>
        Habilite o <bold>protocolo HTTP (via Rest - API Horse)</bold> no TekServer para permitir o uso do TekDashboard. A imagem
        abaixo serve de exemplo como referência de configuração.
      </p>
      <img
        class="LStyleDocumentation"
        src="/img/DocInstrucoesConfigTekServer.png"
        alt="Tela de configuração do TekServer destacando o campo Protocolo HTTP (via Rest - API Horse) marcado."
      />
      <p>
        Após ajustar o serviço é necessário <bold>reiniciar o TekServer</bold> e verificar se a
        <bold>porta configurada está aberta e acessível</bold>. Recomenda-se o uso de um
        <bold>verificador de portas online</bold> para confirmar se a comunicação está liberada.
        <bold>Se a porta estiver bloqueada, os usuários não conseguirão se autenticar na aplicação.</bold>
      </p>
    </template>

    <template #step-2>
      <p>
        Solicite a <bold>liberação do módulo TekDashboard</bold> ao nosso setor responsável. Assim que confirmarmos a liberação, o
        recurso ficará disponível na licença.
      </p>
    </template>

    <template #step-3>
      <p>
        Após configurar o TekServer e liberar a funcionalidade, é importante garantir o pleno funcionamento. Para isso, deve-se
        testar a aderencia e a submissão de dados um cenário menor. Inicalmente <bold>crie um usuário</bold> TEKDASHBOARD que
        tenha apenas o módulo 36 - TekDashboard liberado. Para isso, basta acessar o
        <bold>gerenciamento de usuários do próprio ERP</bold> e conceder acesso ao <bold> módulo 36</bold> referente ao
        TekDashboard, conforme a imagem abaixo.
      </p>
      <img
        class="LStyleDocumentation"
        src="/img/DocInstrucoesUsuarioTekDashboard.png"
        alt="Tela de Cadastro de Usuário na sub-aba Módulos da aba Permissões Gerais com o módulo 36 referente ao TekDashboard"
      />
      <p>
        <bold>Importante:</bold> Mesmo sendo uma aplicação independente e multiplataforma,
        <bold>o TekDashboard segue rigorosamente o controle de acesso do ERP.</bold> Se o usuário
        <bold>não tem permissão</bold> no ERP, ele também <bold>não terá acesso</bold> no TekDashboard.
      </p>
    </template>

    <template #step-4>
      <p>Com tudo configurado, crie os agendamentos responsáveis por enviar os dados para o TekDashboard.</p>
      <p>
        O processo segue <bold>o mesmo padrão de qualquer agendamento</bold> no ERP: criar um arquivo .bat e associá-lo ao
        Agendador de Tarefas do Windows. A estrutura básica é:
      </p>
      <CodeBlock>
        C:\\Tek-System\\Exec\\ExecMetodoInterpERP.exe -T:<var>SEU_TOKEN</var> -P:<var>SUA_PORTA</var> -E:<var>SUA_EMPRESA</var>
        -M:TEK_WEBDASHBOARD_TEMA_VENDAS.Main;
      </CodeBlock>
      <p>Onde:</p>
      <ul class="LStyleCheckList">
        <li>
          <p>
            <bold>-T:</bold>
            Token do <bold>usuário responsável</bold> pela execução. Necessário que ele tenha as permissões adequadas.
          </p>
        </li>
        <li>
          <p>
            <bold>-P: </bold>
            <bold>Porta</bold> configurada no TekServer (a mesma usada pelos módulos do ERP).
          </p>
        </li>
        <li>
          <p>
            <bold>-E:</bold>
            Refere-se ao <bold>código da empresa</bold> no ERP. Embora não seja usado no envio, é necessário para a execução do
            comando.
          </p>
        </li>
        <li>
          <p><bold>-M:</bold> É o <bold>nome da UNIT</bold> e o <bold>método</bold> que deve ser chamado.</p>
        </li>
      </ul>
      <p>
        Também é possível <bold>combinar diferentes recursos</bold> em um único agendamento, como a
        <bold>retroação e o envio de dados.</bold> Essa combinação mantém as informações sempre atualizadas,
        <bold> removendo dados antigos antes de enviar dados novos.</bold> Exemplo de agendamento combinado:
      </p>
      <CodeBlock>
        C:\\Tek-System\\Exec\\ExecMetodoInterpERP.exe -T:<var>SEU_TOKEN</var> -P:<var>SUA_PORTA</var> -E:<var>SUA_EMPRESA</var>
        -M:TEK_WEBDASHBOARD_TEMA_VENDAS.RetroagirTema('Mes','1'); <br /><br />
        C:\\Tek-System\\Exec\\ExecMetodoInterpERP.exe -T:<var>SEU_TOKEN</var> -P:<var>SUA_PORTA</var> -E:<var>SUA_EMPRESA</var>
        -M:TEK_WEBDASHBOARD_TEMA_VENDAS.Main;
      </CodeBlock>
      <p>
        <bold> Nesse exemplo</bold>, antes de cada novo envio, o sistema <bold>remove os dados do mês atual</bold> para em seguida
        <bold>enviar novamente os dados do mês anterior.</bold> Esse processo mantém a aplicação
        <bold>sincronizada com as mudanças</bold> registradas no ERP. As unidades de tempo disponíveis são 'Dia', 'Mes' e 'Ano'.
      </p>
      <p>
        <bold>Importante:</bold> como mencionado na seção
        <a href="#" :style="{ color: 'var(--color-principal)' }" @click.prevent="goToReleases"> <bold>Funcionamento</bold> </a>,
        alguns parâmetros são obtidos diretamente da aplicação TekDashboard. Deve-se
        <bold>configurar esses parâmetros</bold> dentro da própria aplicação <bold>antes</bold> de iniciar os envios.
      </p>
    </template>
  </Timeline>
</template>

<script setup lang="ts">
import Timeline from './Timeline.vue';
import CodeBlock from '../../common/CodeBlock.vue';

const emit = defineEmits<{ (e: 'navigate', payload: { section: string; item?: string }): void }>();

const goToReleases = () => {
  emit('navigate', { section: 'funcionamento' });
};

const timelineItems = [
  { title: 'Pré-Requisitos' },
  { title: 'Liberação e configuração Horse' },
  { title: 'Liberar funcionalidade no TekProt' },
  { title: 'Criar usuário TEKDASBOARD' },
  { title: 'Configurar agendamento Windows' },
];
</script>
