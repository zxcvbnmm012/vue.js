<template>
  <div>
    <input v-model="newItem" placeholder="할 일 입력..." />
    <button @click="submitTodo">추가</button>

    <ul>
      <li
        v-for="(item, index) in todoList"
        :key="index"
        @click="$emit('toggle', index)"
        :style="{ textDecoration: item.checked ? 'line-through' : 'none' }"
      >
        {{ item.todo }}
        <span @click.stop="$emit('delete', index)">❌</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChildTodo",
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newItem: "",
    };
  },
  methods: {
    submitTodo() {
      const trimmed = this.newItem.trim();
      if (trimmed) {
        this.$emit("add", trimmed);
        this.newItem = "";
      }
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  list-style: none;
}
li {
  margin: 5px 0;
  cursor: pointer;
}
span {
  margin-left: 10px;
  color: red;
  font-weight: bold;
  cursor: pointer;
}
</style>
