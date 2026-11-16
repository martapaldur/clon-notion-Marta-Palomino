<!--
    APP.VUE
    componente principal del proyecto
    Organiza la interfaz en tres partes:
    - Sidebar
    - Header
    - Page
    La lógica de la sidebar está definida en composables/sidebar.js.
-->

<script setup>
import AppSidebar from '~/components/sidebar/AppSidebar.vue'
import AppHeader from '~/components/header/AppHeader.vue'
import Page from '~/components/page/Page.vue'
import { controlarSidebar } from '~/composables/sidebar.js'

// variables y funciones para controlar la sidebar
const {
    isSidebarOpen,
    sidebarWidth,
    cerrarSidebar,
    abrirSidebar,
    cambiarAncho
} = controlarSidebar()
</script>

<template>
    <div class="app_layout">

        <!-- SIDEBAR -->
        <AppSidebar v-show="isSidebarOpen" :width="sidebarWidth" @collapse="cerrarSidebar" @resize="cambiarAncho" />

        <div class="app_layout_content">

            <!-- HEADER -->
            <div class="app_layout_header">

                <!-- Recibe el estado de la sidebar y permite volver a abrirla -->
                <AppHeader :is-sidebar-open="isSidebarOpen" @open-sidebar="abrirSidebar" />

            </div>

            <!-- MAIN -->
            <main class="app_layout_main">
                <Page />
            </main>

        </div>

    </div>
</template>
