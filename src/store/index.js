import { createLogger, createStore } from "vuex"
import userStore from "./userStore"
import todoStore from "./todoStore"

const store = createStore({
    modules: {
        userStore,
        todoStore,
    },
    plugins: [createLogger()],
})

export default store
