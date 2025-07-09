<template>
  <h3>부모컴포넌트(ParentComponent.vue)</h3>
  <p class="parent-component">{{ msg }}</p>
  <ChildComponent v-on:send-message="sendMessage"></ChildComponent>
  <!--send-message: 사용자가 임의로 정한 이벤트.-->
  <!--하위 컴포넌트에서 상의 컴포넌트로 값을 전달하기 위해 사용.-->
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  data() {
    return {
      msg: "김해민",
    };
  },
  components: { ChildComponent },
  methods: {
    sendMessage(data) {
      console.log(data);
    },
  },
};
</script>
