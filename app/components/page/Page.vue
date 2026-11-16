<!--
    PAGE
    Aquí se organiza la estructura de la página de notion donde van los bloques drageables, la imagen de portada, el título y demás
-->

<script setup>
import PageCover from './PageCover.vue'
import PageContent from './PageContent.vue'
</script>

<template>
    <!-- portada de la página -->
    <PageCover />

    <!-- contenido de la página -->
    <PageContent />
</template>
