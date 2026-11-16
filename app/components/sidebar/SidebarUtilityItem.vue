<!--
    SIDEBAR UTILITY ITEM
    este componente muestra los elementos de utilities de la sidebar, que son los últimos (los de abajo)
    como notion calendar, library, help o trash
    cada elemento tiene un icono, un label y da veces un indicador de enlace externo.
    los datos se reciben desde SidebarSection.vue.
-->

<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'

// recibimos los datos 
defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="sidebar_utility_item">

        <!-- icono -->
        <span class="sidebar_utility_item_icon">
            <UiIcon :name="item.icon || 'file'" :size="18" />
        </span>

        <!-- nombre -->
        <span class="sidebar_utility_item_label">{{ item.label }}</span>

        <!-- enlace si tiene -->
        <span
            v-if="item.external"
            class="sidebar_utility_item_external"
            aria-hidden="true"
        >
            <UiIcon name="arrow-up-right" :size="16" />
        </span>

    </div>
</template>
