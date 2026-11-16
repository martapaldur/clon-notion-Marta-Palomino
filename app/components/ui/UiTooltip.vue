
<!--
    UI TOOLTIP
    Tooltips que aparecn en hover de algunos elementos, recibe los datos de texto, un atajo de teclado (a veces) y la posición
    en la que debe aparecer el tooltip.
    utilizo un slot para mostrar el elemento que contiene.
-->

<script setup>
// propiedades del tooltip
defineProps({
    text: {
        type: String,
        required: true
    },
    shortcut: {
        type: String,
        default: ''
    },
    position: {
        type: String,
        default: 'bottom'
    }
})
</script>

<template>
    <span class="ui_tooltip">

        <!-- elemento sobre el que aparece el tooltip -->
        <slot />

        <!-- contenido del tooltip -->
        <span
            role="tooltip"
            class="ui_tooltip_content"
            :class="`is_${position}`"
        >
            {{ text }}

            <!-- atajo de teclado, si existe -->
            <span v-if="shortcut">{{ shortcut }}</span>

        </span>

    </span>
</template>
