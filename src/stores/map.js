import { defineStore } from 'pinia'

import { useRouter } from "vue-router";
import { shallowRef } from "vue";

export const useMenuStore = defineStore({
  id: 'map',
  state: () => ({ // state表示这个store里的状态，也就是存放数据的地方
    map: {}
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    // actions 中可通过 this 来获取state中的数据
    // val 调用时时传过来的数据
    login() {
      this.map = ''
    }
  }
})
