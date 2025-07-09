<template>
  <div class="home">
    <!--HomeView 컴포넌트 안에 HelloWorld라는 컴포넌트가 존재.-->
    <!--HelloWorld: 또 다른 컴포넌트-->
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="환영합니다!!" />
    <!--상위 컴포넌트에서 하위 컴포넌트로 값을 전달할때 attribute 사용.-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"; // 하위 컴포넌트 import.

export default {
  name: "HomeView",
  components: {
    // components 속성에 import해서 쓰는 컴포넌트 이름의 태그들을 넣어줘야함.
    HelloWorld,
  },
};
</script>
