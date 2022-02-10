import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'
import NumberSection from '@/views/NumberSection.vue'
import NonNumberSection from '@/views/NonNumberSection.vue'
import ParamPage1 from '@/views/ParamPage1.vue'
import ParamPage2 from '@/views/ParamPage2.vue'

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
	// /:param -> matches /one, /one/two, /one/two/three, etc
	{
		path: '/param-page-1/:param+',
		component: ParamPage1,
		props: true,
	},
	// /:param -> matches /, /one, /one/two, /one/two/three, etc
	{
		path: '/param-page-2/:param*',
		component: ParamPage2,
		props: true,
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
