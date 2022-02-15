import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import MyScreen from '@/views/MyScreen.vue'
import axios from 'axios';

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
		path: '/my-screen',
		component: MyScreen
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

// router.beforeEach(async (to, from, next) => {
// 	if (to.path == "/my-screen") {
// 		const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
// 		console.log(response)
// 		console.log("My Screen")
// 		next()
// 	} else {
// 		next()
// 	}
// });

export default router
