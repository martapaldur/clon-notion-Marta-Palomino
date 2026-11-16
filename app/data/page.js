//Array de bloques de contenido de page
export const pageBlocks = [
    {
        id: 'block-1',
        tag: 'h2',
        text: '¡Esto es un Heading 1!'
    },
    {
        id: 'block-2',
        tag: 'h3',
        text: '1. Esto es un Heading 2'
    },
    {
        id: 'block-3',
        tag: 'h4',
        text: 'A) Esto es un heading 3 para el clon de notion'
    },
    {
        id: 'block-4',
        tag: 'p',
        text: 'Lorem ipsum dolor sit amet consectetur, adipiscing elit litora tortor arcu erat, libero curae torquent mi. Dictum sociis sociosqu vulputate taciti curabitur iaculis nulla rutrum.'
    },
    {
        id: 'block-5',
        tag: 'h5',
        text: 'Esto es un heading 4'
    },
    {
        id: 'block-6',
        tag: 'p',
        text: 'Dui netus fames litora suscipit nunc augue semper vitae, viverra faucibus varius massa primis tristique lobortis. Lectus lacus nostra ut turpis parturient placerat vehicula dui tincidunt gravida duis, semper ullamcorper sollicitudin consequat arcu conubia purus tempor sociis at. Porta rutrum ultrices posuere ad quis turpis per sollicitudin morbi, fusce donec nec habitant facilisis vehicula penatibus duis laoreet, placerat aenean curae tristique vulputate viverra aliquet.'
    }
]

//MENÚ CONTEXTUAL DE LOS BLOQUES DE PAGE

// Nombres de los tipos de bloque de Notion
const nombresBloque = {
    p: 'Text',
    h2: 'Heading 1',
    h3: 'Heading 2',
    h4: 'Heading 3',
    h5: 'Heading 4'
}

// Array de opciones del submenú Turn into
const tiposBloque = [
    { id: 'text', label: 'Text', tag: 'p' },
    { id: 'heading1', label: 'Heading 1', tag: 'h2' },
    { id: 'heading2', label: 'Heading 2', tag: 'h3' },
    { id: 'heading3', label: 'Heading 3', tag: 'h4' },
    { id: 'heading4', label: 'Heading 4', tag: 'h5' },
    { id: 'page', label: 'Page' },
    { id: 'bulleted', label: 'Bulleted list' },
    { id: 'numbered', label: 'Numbered list' },
    { id: 'todo', label: 'To-do list' },
    { id: 'toggle', label: 'Toggle list' },
    { id: 'code', label: 'Code' },
    { id: 'quote', label: 'Quote' },
    { id: 'callout', label: 'Callout' },
    { id: 'equation', label: 'Block equation' },
    { id: 'synced', label: 'Synced block' },
    { id: 'columns2', label: '2 columns' },
    { id: 'columns3', label: '3 columns' }
]

// Crear el menú contextual de cada bloque
export function obtenerMenuBloque(tag) {

    // Marca como seleccionado el tipo actual del bloque
    const opciones = tiposBloque.map(item => ({
        ...item,
        selected: item.tag === tag
    }))

    return [
        {
            id: 'block-type',
            type: 'title',
            label: nombresBloque[tag] || 'Text'
        },
        {
            id: 'turn-into',
            label: 'Turn into',
            icon: 'shapes',
            submenu: opciones
        },
        {
            id: 'color',
            label: 'Color',
            icon: 'sparkles',
            submenu: true
        },
        { id: 'separator-1', type: 'separator' },
        {
            id: 'copy',
            label: 'Copy link to block',
            icon: 'link',
            shortcut: '⌘⌥L'
        },
        {
            id: 'duplicate',
            label: 'Duplicate',
            icon: 'file',
            shortcut: '⌘D'
        },
        {
            id: 'move',
            label: 'Move to',
            icon: 'folder'
        },
        {
            id: 'delete',
            label: 'Delete',
            icon: 'trash',
            shortcut: 'Del'
        },
        { id: 'separator-2', type: 'separator' },
        {
            id: 'comment',
            label: 'Comment',
            icon: 'message-circle'
        },
        {
            id: 'suggest',
            label: 'Suggest edits',
            icon: 'square-pen'
        },
        { id: 'separator-3', type: 'separator' },
        {
            id: 'ai',
            label: 'Ask AI',
            icon: 'sparkles'
        },
        {
            id: 'skills',
            label: 'Skills',
            icon: 'shapes',
            submenu: true
        }
    ]
}
