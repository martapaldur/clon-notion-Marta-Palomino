/*
    THEME.JS
    este archivo controla el cambio entre modo claro y oscuro, el tema inicial es dark y al pulsar el botón del header
    se cambia el valor de data-theme y se puede poner light
    los colores de cada modo están definidos en tokens.css.
*/

import { ref } from 'vue'

// función para cambiar el tema
export function controlarTema() {

    const theme = ref('dark') // por defecto es dark (notion emo)

    function cambiarTema() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
        document.documentElement.dataset.theme = theme.value
    }

    return {
        theme,
        cambiarTema
    }
}
