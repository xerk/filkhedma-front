
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('@/views/Job/Jobs.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;