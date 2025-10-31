<template>
    <v-app>
        <v-app-bar style="padding-left: 20px;">
            <Logo />
            <h1>Documentation</h1>
        </v-app-bar>
        <v-navigation-drawer app permanent width="300">
            <v-list nav class="items-start">
                <v-list-item v-for="(item, index) in contents" :key="item.title" link @click="activeIndex = index"
                    :class="{ 'active-item': activeIndex === index }">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main :style="{ width: '100vw' }">
            <v-container class="texto-item">
                <component :is="activeComponent" />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { DefineComponent } from 'vue'
import Logo from '@/components/Logo.vue'

// Lista de componentes
import VamosComecar from '../components/DocVamosComecar.vue'
import Configuracoes from '../components/DocConfiguracoes.vue'
import Temas from '../components/DocTemas.vue'
import PoliticaPrivacidade from '../components/DocPoliticaPrivacidade.vue'
const contents: {
    icon: string;
    title: string;
    component: DefineComponent<{}, {}, any>;
}[] = [
        {
            icon: 'mdi-arrow-right-circle-outline',
            title: 'Vamos Começar?',
            component: VamosComecar
        },
        {
            icon: 'mdi-cog-outline',
            title: 'Configurações',
            component: Configuracoes
        },
        {
            icon: 'mdi-file-document-multiple-outline',
            title: 'Temas Disponíveis',
            component: Temas
        },
        {
            icon: 'mdi-lock-outline',
            title: 'Política de Privacidade',
            component: PoliticaPrivacidade
        }
    ]

const activeIndex = ref(0)
const activeComponent = computed(() => contents[activeIndex.value]!.component)
</script>

<style scoped>
.items-start {
    align-items: flex-start;
    padding-top: 20px;
    flex-direction: row;
    font-size: 16px;
}

.active-item {
    color: var(--vt-c-red);
    border-radius: 4px;
}

.horizontal-item {
    display: flex;
    align-items: center;
}

.v-list-item {
    display: flex;
    align-items: center;
    flex-direction: row;
}

.v-container.texto-item {
    max-width: 1200px;
    padding: 20px;
}
</style>