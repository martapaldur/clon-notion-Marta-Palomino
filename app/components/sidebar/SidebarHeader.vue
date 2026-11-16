<!--
    SIDEBAR HEADER
    parte superior de la sidebar, el botón del workspace con su avatar, nombre y
    chevron desplegable y botón para cerrar la sidebar
    los datos del workspace se reciben desde AppSidebar.vue.
-->

<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'
import UiTooltip from '~/components/ui/UiTooltip.vue'

// recibimos los datos del workspace
defineProps({
    workspace: {
        type: Object,
        required: true
    }
})

// evento para cerrar la sidebar
const emit = defineEmits(['collapse'])
</script>

<template>
    <div class="sidebar_header">

        <div class="sidebar_workspace_header">

            <!-- botón del workspace -->
            <button
                type="button"
                class="sidebar_workspace_button"
                aria-label="Opciones del espacio de trabajo"
            >
                <!-- avatar -->
                <span class="sidebar_workspace_avatar">
                    {{ workspace.avatar }}
                    <span class="sidebar_workspace_status" aria-hidden="true"></span>
                </span>

                <!-- nombre del workspace -->
                <span class="sidebar_workspace_name">{{ workspace.name }}</span>

                <!-- chevron -->
                <span class="sidebar_workspace_chevron">
                    <UiIcon name="chevron-down" :size="14" />
                </span>

            </button>

            <!-- botón para cerrar la sidebar -->
            <UiTooltip text="Close sidebar" shortcut="⌘\" position="right">

                <button
                    type="button"
                    class="sidebar_header_collapse"
                    aria-label="Cerrar la barra lateral"
                    @click="emit('collapse')"
                >
                    <UiIcon name="chevrons-left" :size="16" />
                </button>

            </UiTooltip>

        </div>

    </div>
</template>
