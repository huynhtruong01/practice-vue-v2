<template>
    <div class="container">
        <TodoItem v-for="todo in [...store.state.todoStore.todoList]" v-bind:key="todo.id" v-bind:todo="todo" />
    </div>
</template>

<script>
import store from "../../store"
import TodoItem from "./TodoItem.vue"

export default {
    name: "todo-list",
    components: {
        TodoItem,
    },
    setup() {
        return {
            store
        }
    },
    data() {
        return {
            todoEdit: ''
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 16px;
}
</style>
