import { createWebHistory, createRouter } from "vue-router";
import Contracts from "../components/contracts/Contracts";
import Login from "../components/login/Login";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Contracts,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;