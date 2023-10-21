<template>
    <form class="todo-form" v-on:submit.prevent="submitFormTodo">
        <input type="text" placeholder="Add todo..." v-model="todoName" />
        <div class="btns">
            <button type="submit">{{ todo && todo.id ? 'Update' : '+ Add' }}</button>
            <button type="button" class="btn-cancel" v-if="todo" v-on:click="cancelUpdate">Cancel</button>
        </div>
    </form>
</template>

<script>
import store from "../../store"
import TodoBus from "../../emits/TodoBus"

export default {
    name: "todo-form",
    setup() {
        return {
            store,
        }
    },
    data() {
        return {
            todoName: "",
            todo: null
        }
    },
    created() {
        TodoBus.$on('todo-update', (todo) => {
            this.todo = todo
            this.todoName = todo.name
        })
    },
    methods: {
        addTodo() {
            if (this.todoName) {
                this.store.dispatch('todoStore/addTodo', {
                    name: this.todoName,
                })
            }
        },
        updateTodo() {
            this.store.dispatch('todoStore/updateTodo', {
                ...this.todo,
                name: this.todoName
            })
        },
        submitFormTodo() {
            if (this.todo) {
                this.updateTodo()
            } else {
                this.addTodo()
            }
            this.todoName = ''
            this.todo = null
        },
        cancelUpdate() {
            this.todo = null
            this.todoName = ''
        }
    },
}
</script>

<style lang="scss" scoped>
.todo-form {
    position: relative;
    display: flex;
    gap: 12px;
    height: 56px;
    border-radius: 6px;
    overflow: hidden;

    input {
        position: absolute;
        inset: 0;
        height: 100%;
        font-size: 18px;
        padding: 12px;
        overflow: hidden;
    }



    .btns {
        display: flex;
        gap: 4px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        flex: 1;


        button {
            padding: 8px 16px;
            background-color: #45474b;
            color: #fff;
            border-radius: 6px;
            font-weight: 600;

            &.btn-cancel {
                background: none;
                color: #45474b;
                border: 1px solid #45474b;
            }
        }
    }
}
</style>
