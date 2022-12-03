import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LogIn from './components/LogIn.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: "LogIn",
        component: LogIn,
        path: '/login'
    },
    {
        name: 'Add',
        component: Add,
        path: '/add'
    },
    {
        name: 'Update',
        component: Update,
        path: '/update/:id'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;