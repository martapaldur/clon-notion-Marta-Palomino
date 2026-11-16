<!--
    APP SIDEBAR
    organiza la barra de navegación lateral de notion en tres partes:
    - header con el workspace y la navegación principal
    - secciones centrales con scroll
    - footer con el botón new

    los elementos se generan desde data/sidebar.js
    el js para redimensionar la sidebar está en composables/sidebar.js

    Soy consciente de que para esta parte podría haber usado menos componentes, pero me lié un poquito.
    Tambien me parece importante que he usado IA para que me ayudase a hacer lo del redimensionamiento porque no sabía hacerlo sola
-->

<script setup>
import SidebarHeader from './SidebarHeader.vue'
import SidebarPrimaryNav from './SidebarPrimaryNav.vue'
import SidebarSection from './SidebarSection.vue'
import SidebarFooter from './SidebarFooter.vue'

import { workspace, primaryNavigation, sidebarSections } from '~/data/sidebar.js'
import { redimensionarSidebar } from '~/composables/sidebar.js'

// recibimos el ancho de la sidebar desde app.vue
defineProps({
    width: {
        type: Number,
        default: 270
    }
})

// eventos para cerrar y redimensionar la sidebar
const emit = defineEmits(['collapse', 'resize'])

// funciones para controlar el arrastre del borde
const {
    isResizing,
    empezarArrastre,
    moverArrastre,
    terminarArrastre
} = redimensionarSidebar(nuevoAncho => emit('resize', nuevoAncho))
</script>

<template>
    <!-- contenedor principal de la sidebar -->
    <aside
        class="app_sidebar"
        :class="{ is_resizing: isResizing }"
        :style="{ '--sidebar_width': `${width}px` }"
    >

        <div class="shrink-0"> <!-- parte superior fija con el workspace y la navegación con botones -->

            <!-- workspace -->
            <SidebarHeader :workspace="workspace" @collapse="emit('collapse')" />

            <!-- navegación principal -->
            <SidebarPrimaryNav :items="primaryNavigation" :show-all-labels="width >= 460" />

        </div>

        <div class="min-h-0 flex-1 overflow-y-auto px-2 py-3"> <!-- secciones con scroll -->

            <!-- pintamos las secciones desde el array -->
            <SidebarSection
                v-for="section in sidebarSections"
                :key="section.id"
                :section="section"
            />

        </div>

        <!-- footer fijo -->
        <SidebarFooter />

        <!--
            redimensionamiento de la sidebar:
            detecta el borde y actualiza el ancho de la sidebar
            las funciones están definidas en composables/sidebar.js.
        -->
        <div
            class="sidebar_resize_handle"
            aria-hidden="true"
            @pointerdown="empezarArrastre"
            @pointermove="moverArrastre"
            @pointerup="terminarArrastre"
            @pointercancel="terminarArrastre"
            @lostpointercapture="terminarArrastre"
        />

    </aside>
</template>
