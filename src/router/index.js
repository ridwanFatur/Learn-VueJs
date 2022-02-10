import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import User from '@/views/User.vue'
import NotFound from '@/views/NotFound.vue'
import UserGeneric from '@/views/UserGeneric.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/user/:id',
		component: User
	},
	// will match anything starting with `/user-` and put it under `$route.params.afterUser`
	{ path: '/usergeneric:afterUser(.*)', component: UserGeneric },
	{
		path: '/:pathMatch(.*)*',
		component: NotFound
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
