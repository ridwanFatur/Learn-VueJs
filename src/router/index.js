import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import MyScreen from '@/views/MyScreen.vue'
import EmptyQueryScreen from '@/views/EmptyQueryScreen.vue'

function removeQueryParams(to) {
	if (Object.keys(to.query).length)
		return { path: to.path, query: {}, hash: to.hash }
}

function removeHash(to) {
	if (to.hash) return { path: to.path, query: to.query, hash: '' }
}

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		alias: ["/about-me", "/about-us"],
		component: About
	},
	{ path: '/home', redirect: '/' },
	{
		path: '/my-screen/ridwan',
		component: MyScreen,
		meta: { requiresAuth: true }
	},
	{
		path: '/empty-query',
		component: EmptyQueryScreen,
		beforeEnter: [removeQueryParams],
	},
	{
		path: '/empty-hash',
		component: EmptyQueryScreen,
		beforeEnter: [removeHash],
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && true) {
		next("/home");
	} else {
		next()
	}

});

export default router
