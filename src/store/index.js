import Vuex from "vuex"
import todoStore from "./todoStore"
import userStore from "./userStore"
import Vue from "vue"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        userStore,
        todoStore,
    },
})

export default store
