<!--
    SIDEBAR NAV BUTTON
    botones de navegación superiores de la sidebar: home, chat, meetings, inbox y search.
    cada botón tiene un icono, un tooltip y a veces badge de noti.

    recibe los datos y el estado activo desde SidebarPrimaryNav.vue.
-->

<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'
import UiTooltip from '~/components/ui/UiTooltip.vue'

// propiedades
defineProps({
    item: {
        type: Object,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    showLabel: {
        type: Boolean,
        default: false
    }
})

// evento para comunicar qué botón se ha pulsado y así saber cual está active
defineEmits(['select'])
</script>

<template>
    <!-- tooltip del botón -->
    <UiTooltip :text="item.label" :shortcut="item.shortcut" position="bottom">

        <!-- botón -->
        <button
            type="button"
            class="sidebar_nav_button"
            :class="{ is_active: active }"
            :aria-label="item.label"
            :aria-pressed="item.type === 'navigation' ? active : undefined"
            @click="$emit('select', item)"
        >

            <span class="sidebar_nav_button_icon"> <!-- icono -->

                <UiIcon :name="item.icon" :size="16" />

                <!-- badge de notificaciones -->
                <span v-if="item.badge" class="sidebar_nav_button_badge">
                    {{ item.badge }}
                </span>

            </span>

            <!-- texto del botón -->
            <span
                v-if="showLabel && item.type === 'navigation'"
                class="sidebar_nav_button_label"
            >
                {{ item.label }}
            </span>

        </button>

    </UiTooltip>
</template>
