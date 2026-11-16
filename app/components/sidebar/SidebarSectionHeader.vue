
<!--
    SIDEBAR SECTION HEADER
    este componente muestra el header de cada sección de la sidebar
    contiene el título, un chevron para desplegar o contraer la sección y los iconos/botones que tiene cada header (no todos tienen los mismos)
    recibe los datos desde SidebarSection.vue.
-->

<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'

// propiedades 
defineProps({
    title: {
        type: String,
        required: true
    },
    variant: {
        type: String,
        default: 'pages'
    },
    expanded: {
        type: Boolean,
        default: true
    },
    actions: {
        type: Array,
        default: () => []
    }
})

// evento para desplegar o contraer la sección
defineEmits(['toggle'])
</script>

<template>
    <div class="sidebar_section_header" :class="`is_${variant}`">

        <!-- botón para desplegar o contraer la sección -->
        <button
            type="button"
            class="sidebar_section_header_toggle"
            :aria-expanded="expanded"
            @click="$emit('toggle')"
        >

            <!-- título de la sección -->
            <span class="sidebar_section_header_title">{{ title }}</span>

            <!-- chevron que cambia según el estado de la sección -->
            <span class="sidebar_section_header_chevron">
                <UiIcon :name="expanded ? 'chevron-down' : 'chevron-right'" :size="14" />
            </span>

        </button>

        <div class="sidebar_section_header_actions" aria-hidden="true"> <!-- iconos de acciones -->

            <!-- generamos los iconos desde el array -->
            <span
                v-for="iconName in actions"
                :key="iconName"
                class="sidebar_section_header_action"
            >
                <UiIcon :name="iconName" :size="16" />
            </span>

        </div>

    </div>
</template>
