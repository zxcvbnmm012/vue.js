<template>
  <ChildComponent1 @send-message="sendMessage" ref="child_component" />
</template>

<script>
import ChildComponent1 from "./ChildComponent1.vue";
export default {
  components: { ChildComponent1 },
  mounted() {
    // 부모컴포넌트가 자식컴포넌트에 있는 버튼을 강제로 클릭시켜서 이벤트를 발생시킴.
    this.$refs.child_component.$refs.btn.click();
    // this: ParentComponent1
    // this.$refs.child-component: ChildComponent1
    // this.$refs.child-component.$refs.btn: ChildComponent1에 있는 버튼
  },
};
</script>
