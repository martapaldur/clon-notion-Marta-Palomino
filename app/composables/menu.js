/*
    MENU.JS
    este archivo contiene las funciones para  los menús contextuales del header y de los pageblocks
    hay dos funciones que en verdad son casi iguales:
    - controlarMenu: gestiona el menú contextual del header.
    - controlarMenuBloque: gestiona los menús de los bloques.

    las dos permiten abrir y cerrar los menús, y cerrarlos automáticamente al hacer clic fuera.
*/

import { ref, onMounted, onUnmounted } from 'vue'


// ========================================
// MENÚ CONTEXTUAL DEL HEADER
// ========================================

export function controlarMenu() {

    const menuAbierto = ref(false)

    // abrir o cerrar el menú
    function alternarMenu() {
        menuAbierto.value = !menuAbierto.value
    }

    // cerrar el menú
    function cerrarMenu() {
        menuAbierto.value = false
    }

    // comprobar qué botón del header hemos pulsado
    function pulsarBoton(item) {
        if (item.id === 'options') {
            alternarMenu()
        } else {
            cerrarMenu()
        }
    }

    // cerrar el menú al hacer clic fuera
    function comprobarClickFuera(event) {
        if (!event.target.closest('.app_header_button_item.is_menu')) {
            cerrarMenu()
        }
    }

    // activar el evento cuando aparece el componente
    onMounted(() => {
        document.addEventListener('click', comprobarClickFuera)
    })

    // eliminar el evento cuando desaparece el componente
    onUnmounted(() => {
        document.removeEventListener('click', comprobarClickFuera)
    })

    return {
        menuAbierto,
        pulsarBoton,
        cerrarMenu
    }
}


// ========================================
// MENÚ CONTEXTUAL DE LOS BLOQUES
// ========================================

export function controlarMenuBloque() {

    const menuAbierto = ref(false)
    const contenedorMenu = ref(null)

    // abrir o cerrar el menú
    function alternarMenu() {
        menuAbierto.value = !menuAbierto.value
    }

    // cerrar el menú
    function cerrarMenu() {
        menuAbierto.value = false
    }

    // cerrar el menú al hacer clic fuera de su contenedor
    function comprobarClickFuera(event) {
        if (!contenedorMenu.value?.contains(event.target)) {
            cerrarMenu()
        }
    }

    // activar el evento cuando aparece el componente
    onMounted(() => {
        document.addEventListener('click', comprobarClickFuera)
    })

    // eliminar el evento cuando desaparece el componente
    onUnmounted(() => {
        document.removeEventListener('click', comprobarClickFuera)
    })

    return {
        menuAbierto,
        contenedorMenu,
        alternarMenu,
        cerrarMenu
    }
}
