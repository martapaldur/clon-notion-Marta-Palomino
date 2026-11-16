<!--
    PAGE CONTENT
    muestra el contenido principal de la página de main, contiene el emoji, el título y los bloques de contenido
-->

<script setup>
import PageBlock from './PageBlock.vue'
import { pageBlocks } from '~/data/page.js'
</script>

<template>
    <section class="page_content">

        <!-- emoji de la página -->
        <span class="page_content_emoji">👀</span>

        <!-- título -->
        <h1 class="page_content_title">Clon de notion</h1>

        <div class="page_content_blocks"> <!-- contenedor de los bloques -->

            <!-- generamos los bloques desde el array de data/page.js -->
            <PageBlock
                v-for="block in pageBlocks"
                :key="block.id"
                :block="block"
            />

        </div>

    </section>
</template>
