// sidebar.data.ts
import type { Component } from 'vue';
import VamosComecar from '../../docs/DocVamosComecar.vue';
import Funcionamento from '../../docs/DocFuncionamento.vue';
import Instalacao from '../../docs/DocInstalacaoConfiguracao.vue';
import AppAcessoLogin from '../../docs/DocAppAcessoLogin.vue';
import AppParametros from '../../docs/DocAppParametros.vue';
import ProximosReleases from '../../docs/release/DocProximosReleases.vue';
import PoliticaPrivacidade from '../../docs/DocPoliticaPrivacidade.vue';

export interface SidebarItem {
  key: string;
  title: string;
  component: Component;
}

export interface SidebarSection {
  key: string;
  title: string;
  icon: string;
  component?: Component;
  items?: SidebarItem[];
  default?: boolean;
}

export const sidebarSections: SidebarSection[] = [
  {
    key: 'vamosComecar',
    title: 'Vamos Começar?',
    icon: 'mdi-arrow-right-circle-outline',
    component: VamosComecar,
    default: true,
  },
  {
    key: 'funcionamento',
    title: 'Funcionamento',
    icon: 'mdi-cog-outline',
    component: Funcionamento,
  },
  {
    key: 'instalacao',
    title: 'Instalação e Configurações',
    icon: 'mdi-server-outline',
    component: Instalacao,
  },
  {
    key: 'instrucoes',
    title: 'Instruções',
    icon: 'mdi-application-brackets-outline',
    items: [
      { key: 'login', title: 'Acesso e login', component: AppAcessoLogin },
      { key: 'parametros', title: 'Parâmetros', component: AppParametros },
    ],
  } /*
  {
    key: 'vendas',
    title: 'Tema Vendas',
    icon: 'mdi-invoice-text-check',
    component: TemaVendas,
    items: [
      { key: 'vendasVisaoGeral', title: 'Visão Geral', component: TemaVendasResumo },
      { key: 'vendasEvolucao', title: 'Evolução', component: TemaVendasEvolucao },
      { key: 'vendasAnaliseGeografica', title: 'Análise Geográfica', component: TemaVendasAnaliseGeografica },
      { key: 'vendasCarteiraClientes', title: 'Carteira de Clientes', component: TemaVendasCarteiraDeClientes },
      { key: 'vendasMetas', title: 'Metas', component: TemaVendasMetas },
      { key: 'vendasRankingGeral', title: 'Ranking Geral', component: TemaVendasRankingGeral },
      { key: 'vendasRankingItens', title: 'Ranking de Itens', component: TemaVendasRankingItens },
      { key: 'vendasAcompanhamento', title: 'Acompanhamento', component: TemaVendasAcompanhamento },
    ],
  },
  {
    key: 'financeiro',
    title: 'Tema Financeiro',
    icon: 'mdi-finance',
    component: TemaFinanceiro,
    items: [
      { key: 'financeiroReceber', title: 'Contas a Receber', component: TemaFinanceiroReceber },
      { key: 'financeiroPagar', title: 'Contas a Pagar', component: TemaFinanceiroPagar },
      { key: 'financeiroPagarReceber', title: 'Pagar x Receber', component: TemaFinanceiroPagarReceber },
      { key: 'financeiroInadimplencia', title: 'Inadimplência', component: TemaFinanceiroInadimplencia },
    ],
  },
  {
    key: 'estoque',
    title: 'Tema Estoque',
    icon: 'mdi-package-variant',
    component: TemaEstoque,
  },
  {
    key: 'producao',
    title: 'Tema Produção',
    icon: 'mdi-factory',
    component: TemaProducao,
  },
  {
    key: 'filtros',
    title: 'Filtros Disponíveis',
    icon: 'mdi-filter-multiple-outline',
    component: Filtros,
  },
  {
    key: 'exportar',
    title: 'Exportar Conteúdo',
    icon: 'mdi-file-export-outline',
    component: ExportarGraficos,
  },*/,
  {
    key: 'emBreve',
    title: 'Em Breve',
    icon: 'mdi-clock-outline',
    component: ProximosReleases,
  },
  {
    key: 'politicaPrivacidade',
    title: 'Política de Privacidade',
    icon: 'mdi-lock-outline',
    component: PoliticaPrivacidade,
  },
];
