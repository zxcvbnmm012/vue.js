<!-- v-if는 매번 DOM을 생성/제거하므로 mounted()도 계속 실행됨-->
<!-- v-show는 DOM이 항상 존재하므로 mounted()는 한 번만 실행됨-->
<!-- 부모 컴포넌트(ShowVue.vue) : 훅이 처음 한 번만 실행 -->
<!-- v-if로 제어하는 자식 컴포넌트 :	조건마다 생성/파괴될 때마다 훅이 실행 -->
<!-- v-show로 제어하는 자식 컴포넌트:	훅이 한 번만 실행, 이후 토글 때는 실행 안 됨 -->

<template>
  <div>
    <button @click="toggle">토글 ({{ visible ? "숨기기" : "보이기" }})</button>

    <div style="margin-top: 20px">
      <div v-if="visible">v-if 렌더링 횟수: {{ ifRenderCount }}</div>

      <div v-show="visible" style="margin-top: 10px">
        v-show 렌더링 횟수: {{ showRenderCount }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      ifRenderCount: 0,
      showRenderCount: 0,
    };
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.ifRenderCount++;
      }
    },
  },
  mounted() {
    this.showRenderCount++;
    this.ifRenderCount++;
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
};
</script>
