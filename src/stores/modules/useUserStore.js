import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    token: '',
  }),
  getters: {
    // finishedTodos(state) {
    //   // 自动完成! ✨
    //   return state.todos.filter((todo) => todo.isFinished)
    // },
  },
  actions: {
    // 任何数量的参数，返回一个 Promise 或者不返回
    setToken(token) {
      // 你可以直接改变状态
      this.token = token
    },
  },
  persist: true,
})
