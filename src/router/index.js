import { createRouter, createWebHashHistory } from 'vue-router'

import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import path from 'path'

const routes = [
    {   path: '/',
        name: 'notes',
        component: ViewNotes
    },
    {
        path: '/stats',
        name: 'stats',
        component: ViewStats
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router