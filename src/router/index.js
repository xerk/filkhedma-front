
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('@/views/Job/Jobs.vue')
    },
    {
        path: "/jobs/:slug",
        name: "job-details",
        component: () => import('@/views/Job/components/JobDetails.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;