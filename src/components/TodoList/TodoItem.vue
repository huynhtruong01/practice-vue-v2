<template>
    <div class="todo" v-bind:class="{ complete: todo.isCompleted }">
        <div class="inner-left">
            <div class="info">
                <h3 v-bind:class="{ complete: todo.isCompleted }" v-on:click="handleCheckedTodo">{{ todo.name }}</h3>
                <time v-bind:class="{ complete: todo.isCompleted }">{{
                    formatDate(todo.createdAt)
                }}</time>
            </div>
        </div>
        <div class="actions">
            <button class="btn-edit" v-on:click="handleUpdateTodo" v-bind:disabled="todo.isCompleted">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn-delete" v-on:click="handleDeleteTodo">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    </div>
</template>

<script>
import { formatDate } from "../../utils"
import TodoBus from '../../emits/TodoBus'

export default {
    name: "todo-item",
    props: ["todo"],
    setup() {
        return {
            formatDate,
        }
    },
    data() {
        return {
            todoItem: null
        }
    },
    mounted() {
        this.todoItem = { ...this.todo }
    },
    methods: {
        handleCheckedTodo() {
            this.$store.dispatch('todoStore/updateTodo', {
                id: this.todo.id,
                name: this.todo.name,
                createdAt: this.todo.createdAt,
                isCompleted: !this.todo.isCompleted
            })
        },
        handleUpdateTodo() {
            TodoBus.$emit('todo-update', this.todo)
        },
        handleDeleteTodo() {
            this.$store.dispatch('todoStore/deleteTodo', this.todo.id)
        }
    },
}
</script>

<style lang="scss" scoped>
.todo {
    padding: 16px;
    border: 1px solid #00000026;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    margin-bottom: 12px;

    &.complete {
        opacity: 0.7;

    }

    .inner-left {
        display: flex;
        gap: 8px;

        .info {
            position: relative;
            left: 14px;

            h3 {
                color: #444444;
                cursor: pointer;

                &.complete {
                    text-decoration: line-through;
                }
            }

            time {
                font-size: 14px;
                color: #6e6d6d;

                &.complete {
                    text-decoration: line-through;
                }
            }
        }

        .round {
            position: relative;
        }

        .round label {
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 50%;
            cursor: pointer;
            height: 25px;
            left: 0;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 25px;
        }

        .round label:after {
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: "";
            height: 6px;
            left: 6px;
            opacity: 0;
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 12px;
        }

        .round input[type="checkbox"] {
            visibility: hidden;
        }

        .round input[type="checkbox"]:checked+label {
            background-color: #66bb6a;
            border-color: #66bb6a;
        }

        .round input[type="checkbox"]:checked+label:after {
            opacity: 1;
        }
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 8px;

        button {
            padding: 12px;
            color: #fff;
            border-radius: 4px;

            &.btn-delete {
                background-color: #C70039cc;

                &:hover {
                    background-color: #C70039;
                }
            }

            &.btn-edit {
                background-color: #3876bfcc;

                &:hover {
                    background-color: #3876bf;
                }

                &:disabled:hover {
                    background-color: #3876bfcc;
                }
            }
        }
    }
}
</style>
