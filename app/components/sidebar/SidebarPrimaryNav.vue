<!--
    SIDEBAR PRIMARY NAV
    Navegación principal de la sidebar, tiene dentro los sidebarNavButtons

    los botones se generan desde el array de data/sidebar.js
    y el js está en composables/sidebar.js.
-->

<script setup>
import SidebarNavButton from './SidebarNavButton.vue'
import { controlarNavegacion } from '~/composables/sidebar.js'

// recibimos los datos y si los textos se van a ver desde AppSidebar.vue
const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    showAllLabels: {
        type: Boolean,
        default: false
    }
})

// variables y funciones de la nav
const {
    activeItem,
    navigationItems,
    actionItems,
    selectItem
} = controlarNavegacion(props.items)
</script>

<template>
    <nav class="sidebar_primary_nav" aria-label="Navegación principal">

        <div class="sidebar_primary_nav_group"> <!-- botones de navegación -->

            <!-- generamos los botones desde el array -->
            <SidebarNavButton
                v-for="item in navigationItems"
                :key="item.id"
                :item="item"
                :active="activeItem === item.id"
                :show-label="showAllLabels || activeItem === item.id"
                @select="selectItem"
            />

        </div>

        <div class="sidebar_primary_nav_actions"> <!-- botón de búsqueda -->

            <SidebarNavButton
                v-for="item in actionItems"
                :key="item.id"
                :item="item"
                :active="false"
                :show-label="false"
                @select="selectItem"
            />

        </div>

    </nav>
</template>
