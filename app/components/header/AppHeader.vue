<!--
    APP HEADER
    El header se divide en dos partes
    - Izquierda: botón para abrir la sidebar y breadcrumbs.
    - Derecha: botones de navegación (uno tiene menu contextual) menú contextual y el botón de cambio de tema de dark a light

    Los botones y las opciones del menú se pintan desde los arrys de data/header.js.
    La lógica de los menús y del tema está en composables/.
-->

<script setup>
import HeaderBreadcrumbs from './HeaderBreadcrumbs.vue'
import UiIcon from '~/components/ui/UiIcon.vue'
import UiTooltip from '~/components/ui/UiTooltip.vue'
import UiButton from '~/components/ui/UiButton.vue'
import UiContextMenu from '~/components/ui/UiContextMenu.vue'

import { headerButtons, headerMenuItems } from '~/data/header.js'
import { controlarTema } from '~/composables/theme.js'
import { controlarMenu } from '~/composables/menu.js'

// Funciones y variables para cambiar el tema
const { theme, cambiarTema } = controlarTema()

// Funciones y variables del menú contextual
const { menuAbierto, pulsarBoton, cerrarMenu } = controlarMenu()

// Recibimos el estado de la sidebar desde app.vue
defineProps({
    isSidebarOpen: {
        type: Boolean,
        required: true
    }
})

// Evento para abrir la sidebar
defineEmits(['open-sidebar'])
</script>

<template>
    <header class="app_header">

        <div class="app_header_left">

            <!-- Botón para abrir la sidebar -->
            <UiTooltip v-if="!isSidebarOpen" text="Open sidebar" position="bottom">

                <button
                    type="button"
                    class="app_layout_open_button"
                    aria-label="Abrir barra lateral"
                    @click="$emit('open-sidebar')"
                >
                    <span class="app_layout_open_icon">
                        <UiIcon name="chevrons-left" :size="18" />
                    </span>
                </button>

            </UiTooltip>

            <!-- breadcrumbs -->
            <HeaderBreadcrumbs />

        </div>

        <div class="app_header_buttons"> <!-- Btones de la derecha -->

            <!--botones generados desdel array -->
            <div
                v-for="item in headerButtons"
                :key="item.id"
                class="app_header_button_item"
                :class="{ is_menu: item.id === 'options' }"
            >

                <UiButton
                    :label="item.label"
                    :icon="item.icon"
                    :tooltip="item.tooltip"
                    :shortcut="item.shortcut"
                    @click="pulsarBoton(item)"
                />

                <!-- Menú contectual del boton de treS puntos -->
                <UiContextMenu
                    v-if="item.id === 'options' && menuAbierto"
                    :items="headerMenuItems"
                    @select="cerrarMenu"
                />

            </div>

            <!-- Botón para cambiar el tema de dark a light -->
            <button
                type="button"
                class="app_header_theme_button"
                @click="cambiarTema"
            >
                {{ theme === 'dark' ? 'Light mode' : 'Dark mode' }}
            </button>

        </div>

    </header>
</template>
