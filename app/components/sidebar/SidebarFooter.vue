<!--
    SIDEBAR FOOTER
    PARTE FIJA DE LA SIDEBAR, CONTIENE EL botón de NEW
-->

<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'
</script>

<template>
    <footer class="sidebar_footer">

        <!-- botón d NEW -->
        <button type="button" class="sidebar_footer_new_button" aria-disabled="true">
			
            <!-- ICONO -->
            <UiIcon
                name="square-pen"
                :size="18"
            />

            <span>New</span>

        </button>

    </footer>
</template>
