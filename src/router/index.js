import { createRouter, createWebHistory } from "vue-router";
import allPage from "../views/allPage.vue";
import facilities from "../views/facilities.vue";
import room from "../views/room.vue";
import contact from "../views/contact.vue";
import notFound from "../views/notFound.vue";

const routes = [{
        path: "/",
        name: "allPage",
        component: allPage,
    },
    {
        path: "/facilities",
        name: "facilities",
        component: facilities,
    },
    {
        path: "/room",
        name: "room",
        component: room,
    },
    {
        path: "/contact",
        name: "contact",
        component: contact,
    },
    {
        path: "/:catchAll(.*)",
        name: "notFound",
        component: notFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;