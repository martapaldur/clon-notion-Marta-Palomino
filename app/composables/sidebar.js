/*
    SIDEBAR.JS
    este archivo contiene las funciones que controlan la sidebar y
    se divide en cuatro partes:
    - controlarSidebar: abrir, cerrar y cambiar el ancho.
    - redimensionarSidebar: arrastrar el borde para cambiar su tamaño.
    - controlarNavegacion: seleccionar los botones de navegación.
    - controlarSeccion: desplegar y contraer las secciones.
    Para la de controlarsidebar y redimensionarSidebar, he utilizado ayuda de IA para hacerlas porque de primeras no sabía,
    lo he entendido bien (nunca te acostarás sin saber una cosa más!!), pero no me pidas que lo repita yo solita porfi.
*/

import { ref } from 'vue'


// ========================================
// apertura, cierre y ancho de la sidebar
// ========================================

export function controlarSidebar() {

    const isSidebarOpen = ref(true)
    const sidebarWidth = ref(270)

    // cerrar la sidebar
    function cerrarSidebar() {
        isSidebarOpen.value = false
    }

    // abrir la sidebar
    function abrirSidebar() {
        isSidebarOpen.value = true
    }

    // actualizar su ancho
    function cambiarAncho(nuevoAncho) {
        sidebarWidth.value = nuevoAncho
    }

    return {
        isSidebarOpen,
        sidebarWidth,
        cerrarSidebar,
        abrirSidebar,
        cambiarAncho
    }
}


// ========================================
// redimensionamiento de la sidebar
// ========================================

export function redimensionarSidebar(cambiarAncho) {

    const isResizing = ref(false)
    let sidebarLeft = 0

    // límites del ancho
    const minWidth = 270
    const maxWidth = 600

    // limitar el ancho entre el mínimo y el máximo
    function limitarAncho(valor) {
        return Math.min(maxWidth, Math.max(minWidth, valor))
    }

    // comenzar el arrastre
    function empezarArrastre(event) {

        if (event.button !== 0) return

        isResizing.value = true

        // obtener la posición izquierda de la sidebar
        sidebarLeft = event.currentTarget
            .closest('.app_sidebar')
            .getBoundingClientRect().left

        // seguir detectando el puntero durante el arrastre
        event.currentTarget.setPointerCapture(event.pointerId)

        event.preventDefault()
    }

    // actualizar el ancho mientras arrastramos
    function moverArrastre(event) {

        if (!isResizing.value) return

        const nuevoAncho = event.clientX - sidebarLeft

        cambiarAncho(limitarAncho(nuevoAncho))
    }

    // terminar el arrastre
    function terminarArrastre(event) {

        isResizing.value = false

        // liberar el puntero
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId)
        }
    }

    return {
        isResizing,
        empezarArrastre,
        moverArrastre,
        terminarArrastre
    }
}


// ========================================
// navegación principal de la sidebar
// ========================================

export function controlarNavegacion(items) {

    // botón seleccionado por defecto
    const activeItem = ref('home')

    // separar los botones de navegación y de acción
    const navigationItems = items.filter(item => item.type === 'navigation')
    const actionItems = items.filter(item => item.type === 'action')

    // cambiar el botón seleccionado
    function selectItem(item) {
        if (item.type === 'navigation') {
            activeItem.value = item.id
        }
    }

    return {
        activeItem,
        navigationItems,
        actionItems,
        selectItem
    }
}


// ========================================
// secciones de la sidebar
// ========================================

export function controlarSeccion() {

    const expanded = ref(true)

    // desplegar o contraer la sección
    function alternarSeccion() {
        expanded.value = !expanded.value
    }

    return {
        expanded,
        alternarSeccion
    }
}
