import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			count: 0,
			todos: [
				{ id: 1, text: 'Ridwan', done: true },
				{ id: 2, text: 'Fatur', done: false }
			]
		}
	},
	getters: {
		doneTodos(state) {
			return state.todos.filter(todo => todo.done)
		},
		doneTodosCount(state, getters) {
			return getters.doneTodos.length
		},
		getTodoById: (state) => (id) => {
			return state.todos.find(todo => todo.id === id)
		}
	},
	mutations: {
		increment(state) {
			state.count++
		},
		incrementWithPayload(state, n) {
			state.count += n
		},
		incrementObjectStyle(state, payload) {
			state.count += payload.amount
		},
	},
	actions: {
		// increment(context) {
		// 	context.commit('increment')
		// }
		increment({ commit }) {
			commit('increment')
		},
		incrementAsync({ commit }) {
			setTimeout(() => {
				commit('increment')
			}, 1000)
		},
		incrementWithPayload({ commit }, payload) {
			commit('incrementWithPayload', payload.amount)
		},
		actionAsync({ commit }) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('increment')
					resolve()
				}, 1000)
			})
		}
	}
})

createApp(App).use(router).use(store).mount('#app')
