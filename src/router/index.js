import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Post from '@/views/Post.vue'
import PostBeforeNavigation from '@/views/PostBeforeNavigation.vue'

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
	// AFTER NAVIGATION
	{
		path: '/post/:id',
		component: Post
	},
	{
		path: '/post-before/:id',
		component: PostBeforeNavigation
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
