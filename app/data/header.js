//Array de botones del header
export const headerButtons = [
    {
        id: 'edited',
        label: 'Edited Nov 9'
    },
    {
        id: 'share',
        label: 'Share',
        icon: 'lock',
        tooltip: 'Only you can access',
        shortcut: '⌘⇧O'
    },
    {
        id: 'link',
        icon: 'link',
        tooltip: 'Copy link',
        shortcut: '⌘⌥L'
    },
    {
        id: 'favorite',
        icon: 'star',
        tooltip: 'Add to your favorites'
    },
    {
        id: 'options',
        icon: 'ellipsis',
        tooltip: 'Page settings & actions'
    }
]


// Array del menú contextual del header
export const headerMenuItems = [
    {
        id: 'copy-link',
        label: 'Copy link',
        icon: 'link',
        shortcut: '⌘⌥L'
    },
    {
        id: 'copy-content',
        label: 'Copy page contents',
        icon: 'file'
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
        id: 'history',
        label: 'Version history',
        icon: 'calendar'
    },
    {
        id: 'analytics',
        label: 'Updates & analytics',
        icon: 'shapes'
    },
    {
        id: 'separator-1',
        type: 'separator'
    },
    {
        id: 'appearance',
        label: 'Appearance & layout',
        icon: 'settings',
        submenu: true
    },
    {
        id: 'separator-2',
        type: 'separator'
    },
    {
        id: 'ai',
        label: 'Use with AI',
        icon: 'sparkles',
        submenu: true
    },
    {
        id: 'suggest',
        label: 'Suggest edits',
        icon: 'square-pen'
    },
    {
        id: 'notify',
        label: 'Notify me',
        icon: 'inbox',
        submenu: true
    },
    {
        id: 'lock',
        label: 'Lock page',
        icon: 'lock'
    },
    {
        id: 'trash',
        label: 'Move to Trash',
        icon: 'trash'
    },
    {
        id: 'separator-3',
        type: 'separator'
    },
    {
        id: 'more',
        label: 'More',
        icon: 'ellipsis',
        submenu: true
    },
    {
        id: 'separator-4',
        type: 'separator'
    },
    {
        id: 'last-edited',
        label: 'Last edited',
        type: 'title'
    }
]
