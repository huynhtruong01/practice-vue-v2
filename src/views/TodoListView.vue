<template>
    <div class="container">
        <TodoAddForm />
        <TodoList />
    </div>
</template>

<script>
import TodoAddForm from "../components/TodoList/TodoForm.vue"
import TodoList from "../components/TodoList/TodoList.vue"

export default {
    name: "todo-list-view",
    components: {
        TodoAddForm,
        TodoList,
    },
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 550px;
    width: 100%;
    padding: 16px;
    margin: auto;
}
</style>
