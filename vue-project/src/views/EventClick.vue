<template>
  <h3>Event</h3>
  <p :key="i" v-for="(num, i) in list">
    <!-- v-bind: 생략 가능-->
    <button v-on:click="ClickFnc(num)">이벤트클릭</button>
    <!-- v-on: @로 사용 가능-->
  </p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      list: [10, 20, 30],
    };
  },
  methods: {
    ClickFnc(num) {
      alert(num + "클릭함");
    },
  },
};
</script>
