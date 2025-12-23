// releases.data.ts
export interface Release {
  id: number;
  titulo: string;
  descricao: string;
  tipo: 'planejado' | 'em_desenvolvimento' | 'bloqueado' | 'em_teste';
  observacao?: string;
}

export const releases: Release[] = [
  {
    id: 1,
    titulo: 'Erro ao atualizar filtros do painel',
    descricao: 'Mapeamos o problema que impedia que os filtros do dashboard fossem aplicados corretamente em tempo real.',
    tipo: 'planejado',
  },
  {
    id: 2,
    titulo: 'Novo gráfico de tendências de vendas',
    descricao:
      'Está em desenvolvimento um gráfico interativo que mostra a evolução das vendas ao longo do tempo, com filtros personalizáveis por período e categoria.',
    tipo: 'em_desenvolvimento',
  },
  {
    id: 3,
    titulo: 'Remoção do gráfico antigo de vendas por produto',
    descricao: 'O gráfico foi removido para reduzir redundâncias e simplificar o dashboard.',
    tipo: 'bloqueado',
  },
  {
    id: 4,
    titulo: 'Gravar preferências do usuário',
    descricao: 'A aplicação passa a lembrar filtros e visualizações escolhidos, melhorando a experiência.',
    tipo: 'em_teste',
  } /*
  {
    id: 5,
    titulo: 'Favoritar filtros',
    descricao: 'Possibilidade de marcar filtros como favoritos para acesso rápido às configurações mais utilizadas.',
    tipo: 'em_teste',
  },
  {
    id: 6,
    titulo: 'Layouts de filtros personalizáveis',
    descricao: 'Funcionalidade para criar, editar e organizar layouts de filtros de acordo com a necessidade de cada usuário.',
    tipo: 'em_desenvolvimento',
  },
  {
    id: 7,
    titulo: 'Tema estoque',
    descricao: 'Visualizações específicas para acompanhamento de indicadores de estoque.',
    tipo: 'planejado',
  },
  {
    id: 8,
    titulo: 'Tema produção',
    descricao: 'Visualizações específicas para acompanhamento de indicadores de produção.',
    tipo: 'planejado',
  },*/,
];
