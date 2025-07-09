<template>
  <button type="button" @click="childFunc" ref="btn">click</button>
  <!--ref : 템플릿에서 특정 DOM 요소나 컴포넌트 인스턴스를 직접 참조하기 위한 식별자-->
</template>

<script>
export default {
  methods: {
    childFunc() {
      console.log("부모 컴포넌트에서 직접 발생시킨 이벤트.");
    },
  },
};
</script>
