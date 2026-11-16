<!--
    PAGE BLOCK
    este componente genera cada bloque de contenido de la página (en mi caso solo uso bloques de texto, pero podrían ser
    imagenes, bases de datos, quotes o cualqueir otra cosilla, esto es una implementación futura interesante, añadir variantes
    para cada una e estas opciones :) )
    el contenido se recibe del array que está en data/page.js.
    la lógica del menú que se despliega al clickar en el boton de dragger está en composables/menu.js.
-->

<script setup>
import UiButton from '~/components/ui/UiButton.vue'
import UiContextMenu from '~/components/ui/UiContextMenu.vue'
import { obtenerMenuBloque } from '~/data/page.js'
import { controlarMenuBloque } from '~/composables/menu.js'

// recibimos los datos de cada bloque desde PageContent.vue
const props = defineProps({
    block: {
        type: Object,
        required: true
    }
})

// obtenemos las opciones del menú según el tipo de bloque (cambia dependiendo de que tipo de bloque sea)
const menuItems = obtenerMenuBloque(props.block.tag)

// variables y funciones del menú contextual
const {
    menuAbierto,
    contenedorMenu,
    alternarMenu,
    cerrarMenu
} = controlarMenuBloque()
</script>

<template>
    <div class="page_block" :class="{ is_menu_open: menuAbierto }">

        <div class="page_block_buttons"> <!-- botones de la izq del bloque -->

            <!-- botón para añadir bloques + -->
            <UiButton
                icon="plus"
                tooltip="Click to add below"
                shortcut="Option-click to add above"
            />

            <!-- botón dragger y su menú contextual -->
            <div ref="contenedorMenu" class="page_block_menu_anchor">

                <UiButton
                    icon="grip-vertical"
                    tooltip="Drag to move"
                    shortcut="Click or ⌘/ to open menu"
                    @click="alternarMenu"
                />

                <!-- menú contextual del bloque -->
                <UiContextMenu
                    v-if="menuAbierto"
                    :items="menuItems"
                    @select="cerrarMenu"
                />

            </div>

        </div>

        <div class="page_block_content">

            <!-- genera la etiqueta html según el tipo de bloque -->
            <component :is="block.tag">
                {{ block.text }}
            </component>

        </div>

    </div>
</template>
