import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'
import NumberSection from '@/views/NumberSection.vue'
import NonNumberSection from '@/views/NonNumberSection.vue'

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
		path: '/this-is/:orderId(\\d+)',
		component: NumberSection,
		props: true
	},
	{
		path: '/this-is/:str',
		component: NonNumberSection,
		props: true
	},
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
