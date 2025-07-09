<template>
  <h3>자식컴포넌트(ChildComponent.vue)</h3>
  <p><input type="text" v-model="msg" /></p>
  <button v-on:click="sendMessage">메세지 보내기.</button>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    sendMessage() {
      // $emit: 방출.
      this.$emit("send-message", this.msg); // this.msg를 전달함.
      // this.$root.msg = this.msg; // $root: 젤 상위 컴포넌트 -> HomeView.vue
    },
    mounted() {
      console.log(this.$parent);
    },
  },
};
</script>
