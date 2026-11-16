<!--
    UI SEARCHBAR
    searxhbar con icono, input y placeholder
-->

<script setup>
// propiedades del buscador
defineProps({
    placeholder: {
        type: String,
        default: 'Search...'
    }
})
</script>

<template>
    <div class="ui_searchbar">

        <!-- icono de búsqueda -->
        <UiIcon name="search" :size="16" />

        <!-- input de búsqueda -->
        <input
            type="search"
            class="ui_searchbar_input"
            :placeholder="placeholder"
            :aria-label="placeholder"
        />

    </div>
</template>
