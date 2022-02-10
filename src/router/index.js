import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import User from '@/views/User.vue'
import UserProfile from '@/views/UserProfile.vue'
import UserPosts from '@/views/UserPosts.vue'
import UserEmpty from '@/views/UserEmpty.vue'

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/user/:id',
		component: User,
		props: true,
		children:[
			{
        path: '',
        component: UserEmpty,
      },
			{
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'profile',
        component: UserProfile,
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'posts',
        component: UserPosts,
      },
		]
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
