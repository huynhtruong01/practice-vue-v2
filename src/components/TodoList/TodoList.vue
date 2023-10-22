<template>
    <div class="container">
        <TodoItem v-for="todo in todoList" v-bind:key="todo.id" v-bind:todo="todo" />
    </div>
</template>

<script>
import { mapState } from "vuex";
import TodoItem from "./TodoItem.vue"

export default {
    name: "todo-list",
    components: {
        TodoItem,
    },
    data() {
        return {
            todoEdit: ''
        }
    },
    computed: mapState({
        todoList: state => state.todoStore.todoList
    })
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 16px;
}
</style>
