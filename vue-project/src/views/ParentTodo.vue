<template>
  <div>
    <h2>📋 To Do List (부모 컴포넌트)</h2>
    <ChildTodo
      :todoList="todoList"
      @add="addTodo"
      @toggle="toggleTodo"
      @delete="deleteTodo"
    />
  </div>
</template>

<script>
import ChildTodo from "./ChildTodo.vue";

export default {
  name: "ParentTodo",
  components: {
    ChildTodo,
  },
  data() {
    return {
      todoList: [
        { todo: "Vue 공부하기", checked: false },
        { todo: "점심 먹기", checked: true },
      ],
    };
  },
  methods: {
    addTodo(newItem) {
      this.todoList.push({ todo: newItem, checked: false });
    },
    toggleTodo(index) {
      this.todoList[index].checked = !this.todoList[index].checked;
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },
  },
};
</script>
