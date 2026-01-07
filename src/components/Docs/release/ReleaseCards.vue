<template>
  <div class="LStyleCardsList">
    <div v-for="release in sortedReleases" :key="release.id" class="LStyleCardListItem">
      <div class="LStyleCardIconCircle" :style="{ backgroundColor: typeMap[release.tipo]?.color }">
        <v-icon size="24" class="LStyleIcon">
          {{ typeMap[release.tipo]?.icon || 'mdi-help-circle' }}
        </v-icon>
      </div>
      <div class="LStyleCardContent">
        <div class="LStyleCardHeader">
          <h5>{{ release.titulo }}</h5>
          <v-chip size="small" :color="typeMap[release.tipo]?.color" variant="outlined" class="LStyleChip">
            {{ typeMap[release.tipo]?.tag || 'Outro' }}
          </v-chip>
        </div>
        <p>{{ release.descricao }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { releases } from './releases.data';
import { computed, ref } from 'vue';

const orderBy = ref<'id' | 'status'>('status'); // padrão: por status
orderBy.value = 'status';

const typeMap = {
  em_desenvolvimento: {
    tag: 'Em desenvolvimento',
    icon: 'mdi-hammer-wrench',
    color: '#00695C' /* 2F1368 FF9800 D8880B 00695C */,
  },
  planejado: {
    tag: 'Planejado',
    icon: 'mdi-calendar',
    color: '#1E3C72',
  },
  bloqueado: {
    tag: 'Bloqueado',
    icon: 'mdi-cancel',
    color: '#92171B',
  },
  em_teste: {
    tag: 'Em teste',
    icon: 'mdi-flask-outline',
    color: '#D8880B',
  },
};

const statusOrder = {
  em_teste: 1,
  em_desenvolvimento: 2,
  planejado: 3,
  bloqueado: 4,
};

const sortedReleases = computed(() => {
  const items = [...releases];

  if (orderBy.value === 'id') {
    return items.sort((a, b) => a.id - b.id);
  }

  return items.sort((a, b) => {
    const statusDiff = statusOrder[a.tipo] - statusOrder[b.tipo];
    return statusDiff !== 0 ? statusDiff : a.id - b.id;
  });
});
</script>

<style scoped>
.LStyleCardsList {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.LStyleCardListItem {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.LStyleIcon {
  color: var(--color-background);
}

.LStyleCardIconCircle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.LStyleCardContent h5 {
  font-weight: 400;
  padding: 0;
}

.LStyleCardContent p {
  margin: 4px 0 0;
}

.LStyleCardHeader {
  display: flex;
  align-items: center;
  gap: 8px;
}

.LStyleChip {
  font-size: 14px;
  flex-shrink: 0; /* Impede encolhimento */
  overflow: visible;
}

@media (max-width: 600px) {
  .LStyleChip {
    font-size: 12px !important;
    height: 24px !important;
  }
}
</style>
