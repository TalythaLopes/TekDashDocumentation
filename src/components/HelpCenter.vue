<template>
    <v-app-bar class="help-bar">
        <div class="logo-area">
            <Logo />
            <div class="divider"></div>
            <h5 class="help-center pb-0">TekDashboard</h5>
        </div>

        <div class="bar-center">
            <div class="search-box">
                <v-icon size="20" color="grey">mdi-magnify</v-icon>
                <input type="text" placeholder="Buscar" />
            </div>
        </div>

        <div class="bar-right">
            <div class="right-item">
                <v-icon size="24">mdi-dots-grid</v-icon>
                <span>Menu</span>
            </div>
            <div class="right-item">
                <v-icon size="24">mdi-arrow-top-right</v-icon>
                <span>Feedback</span>
            </div>
        </div>
    </v-app-bar>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'
</script>

<style scoped>
.help-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    padding: 0 32px !important;
    gap: 24px;
}

.logo-area {
    display: flex;
    align-items: center;
}

.divider {
    width: 1px;
    height: 42px;
    background-color: var(--vt-c-red);
    margin: 0 8px;
}

.help-center {
    color: var(--vt-c-red);
}

.bar-center {
    flex: 1;
    display: flex;
    justify-content: center;
}

.search-box {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--color-background-site);
    padding: 8px 12px;
    border-radius: 20px;
    width: 280px;
    transition: all 0.4s;
    border: 1px solid transparent;
}

.search-box input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 15px;
    width: 100%;
}

.search-box:focus-within {
    background: var(--color-background);
    border: 1px solid var(--vt-c-gray-mute);
    width: 450px;
}

.bar-right {
    display: flex;
    align-items: center;
    gap: 16px;
}

.right-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--vt-c-gray);
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    transition: 0.2s;
}

.right-item:hover {
    color: var(--vt-c-red);
}
</style>
