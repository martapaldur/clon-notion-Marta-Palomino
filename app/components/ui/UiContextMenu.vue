
<!--
    UI CONTEXT MENU
    este componente genera los menús contextuales, soy consciente de que podía haberlo separado más, y no solo separar la searchbar
    igual que he hecho con la sidebar pero es que no he tenido tiempo de hacerlo mejor, además solo he hecho dos menus contextuales 
    porque no son todos igiuales y habría sido un lío (de apellido Liez).
    sOLO utilizo uno en el header y los de los bloques de contenido de la page (este tiene submenú (TOMA YA!!))
    El contenido viene de los arrays de menú de header y de page.
-->

<script setup>
import UiIcon from './UiIcon.vue'
import UiSearchbar from './UiSearchbar.vue'

// recibimos las props del menú desde el componente padre 
defineProps({
    items: {
        type: Array,
        required: true
    }
})

// evento para comunicar qué opción se ha seleccionado
defineEmits(['select'])
</script>

<template>
    <div class="ui_context_menu">

        <!-- searchbar -->
        <UiSearchbar placeholder="Search actions..." />

        <div class="ui_context_menu_items">

            <!-- pintamos los elementos del menú desde el array -->
            <template v-for="item in items" :key="item.id">

                <!-- separador -->
                <div v-if="item.type === 'separator'" class="ui_context_menu_separator"></div>

                <!-- título de grupo -->
                <span v-else-if="item.type === 'title'" class="ui_context_menu_title">
                    {{ item.label }}
                </span>

                <!-- opción del menú -->
                <div v-else class="ui_context_menu_option">

                    <button
                        type="button"
                        class="ui_context_menu_item"
                        @click="!Array.isArray(item.submenu) && $emit('select', item)"
                    >

                        <!-- icono -->
                        <UiIcon v-if="item.icon" :name="item.icon" :size="16" />

                        <!-- texto -->
                        <span class="ui_context_menu_label">{{ item.label }}</span>

                        <!-- atajo de teclado -->
                        <span v-if="item.shortcut" class="ui_context_menu_shortcut">
                            {{ item.shortcut }}
                        </span>

                        <!-- chevron de submenú -->
                        <UiIcon v-if="item.submenu" name="chevron-right" :size="14" />

                    </button>

                    <!-- submenú, si existe (solo he hecho el primero del menú de bloques) -->
                    <div v-if="Array.isArray(item.submenu)" class="ui_context_submenu">

                        <!-- pintamos las opciones del submenú -->
                        <button
                            v-for="subitem in item.submenu"
                            :key="subitem.id"
                            type="button"
                            class="ui_context_menu_item"
                            @click="$emit('select', subitem)"
                        >

                            <!-- icono -->
                            <UiIcon v-if="subitem.icon" :name="subitem.icon" :size="16" />

                            <!-- texto -->
                            <span class="ui_context_menu_label">{{ subitem.label }}</span>

                            <!-- opción seleccionada -->
                            <span v-if="subitem.selected">✓</span>

                        </button>

                    </div>

                </div>

            </template>

        </div>

    </div>
</template>
