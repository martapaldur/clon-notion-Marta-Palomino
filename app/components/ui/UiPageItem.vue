
<!--
    UI PAGE ITEM
    este componente genera los elementos de página de la interfaz.
    se reutiliza tanto en la sidebar como en los breadcrumbs por eso hay dos variantes:
    - sidebar: con chevron y botones en hover.
    - breadcrumb: muestra únicamente el icono y el nombre.

    recibe los datos de cada página y su variante desde el componente padre.
-->

<script setup>
import UiIcon from './UiIcon.vue'

// propiedades de la página
defineProps({
    item: {
        type: Object,
        required: true
    },
    variant: {
        type: String,
        default: 'sidebar'
    }
})
</script>

<template>
    <div
        class="ui_page_item"
        :class="{
            is_sidebar: variant === 'sidebar',
            is_breadcrumb: variant === 'breadcrumb',
            is_active: item.active === true && variant === 'sidebar'
        }"
    >

        <!-- chevron-->
        <span
            v-if="variant === 'sidebar'"
            class="ui_page_item_chevron"
            aria-hidden="true"
        >
            <UiIcon name="chevron-right" :size="14" />
        </span>

        <div class="ui_page_item_content"> 

            <!-- emoji, si existe -->
            <span v-if="item.emoji" class="ui_page_item_emoji">
                {{ item.emoji }}
            </span>

            <!-- icono, si no hay emoji -->
            <span v-else class="ui_page_item_icon">
                <UiIcon :name="item.icon || 'file'" :size="18" />
            </span>

            <!-- nombre de la página -->
            <span class="ui_page_item_label">{{ item.label }}</span>

        </div>

        <!-- botones de acción, solo en la sidebar -->
        <div v-if="variant === 'sidebar'" class="ui_page_item_actions">

            <!-- añadir página -->
            <button
                type="button"
                class="ui_page_item_action"
                aria-label="Añadir página"
                disabled
            >
                <UiIcon name="plus" :size="16" />
            </button>

            <!-- más opciones -->
            <button
                type="button"
                class="ui_page_item_action"
                aria-label="Más opciones"
                disabled
            >
                <UiIcon name="ellipsis" :size="16" />
            </button>

        </div>

    </div>
</template>
