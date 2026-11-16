<!--
    SIDEBAR SECTION
    Aquí generamos las diferentes secciones de la sidebar utilizando los datos del array de data/sidebar.js
    se pueden desplegar y contraer.
    y el js está en composables/sidebar.js.
-->

<script setup>
import SidebarSectionHeader from './SidebarSectionHeader.vue'
import SidebarUtilityItem from './SidebarUtilityItem.vue'
import UiPageItem from '~/components/ui/UiPageItem.vue'
import { controlarSeccion } from '~/composables/sidebar.js'

// recibimos los datos de la sección desde AppSidebar.vue
defineProps({
    section: {
        type: Object,
        required: true
    }
})

// variables y funciones para desplegar y contraer la sección
const { expanded, alternarSeccion } = controlarSeccion()
</script>

<template>
    <section class="sidebar_section" :class="`is_${section.id}`">

        <!-- cabecera de la sección si tiene título -->
        <SidebarSectionHeader
            v-if="section.title"
            :title="section.title"
            :variant="section.headerVariant || 'pages'"
            :expanded="expanded"
            :actions="section.headerActions || []"
            @toggle="alternarSeccion"
        />

        <!-- contenido de la sección -->
        <nav
            v-if="expanded"
            class="sidebar_section_content"
            :aria-label="section.title || 'Utilidades'"
        >

            <!-- elegimos el componente que va a usar según el tipo de elemento, porque utilities tiene otras propiedades-->
            <component
                v-for="item in section.items"
                :key="item.id"
                :is="section.itemVariant === 'utility' ? SidebarUtilityItem : UiPageItem"
                :item="item"
            />

        </nav>

    </section>
</template>
