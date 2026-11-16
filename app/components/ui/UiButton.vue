<!--
    UI BUTTON
    botones con tres variantes:
    - botón de solo texto, sin tooltip.
    - botón de solo icono, con tooltip.
    - botón con icono y texto, con tooltip.
-->

<script setup>
import UiIcon from './UiIcon.vue'
import UiTooltip from './UiTooltip.vue'

// propiedades del botón
defineProps({
    label: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    tooltip: {
        type: String,
        default: ''
    },
    shortcut: {
        type: String,
        default: ''
    }
})

// evento de click al pulsar el botón
defineEmits(['click'])
</script>

<template>
    <!-- variante de solo texto -->
    <button
        v-if="!icon"
        type="button"
        class="ui_button"
        @click="$emit('click', $event)"
    >
        {{ label }}
    </button>

    <!-- variantes con icono y tooltip -->
    <UiTooltip v-else :text="tooltip || label" :shortcut="shortcut">

        <button
            type="button"
            class="ui_button has_icon"
            :aria-label="label || tooltip"
            @click="$emit('click', $event)"
        >
            <!-- icono -->
            <UiIcon :name="icon" :size="18" />

            <!-- texto si hay -->
            <span v-if="label">{{ label }}</span>

        </button>

    </UiTooltip>
</template>
