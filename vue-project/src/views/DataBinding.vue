<!--HTML 영역-->
<template>
  <!--바인딩: Vue 컴포넌트의 data, props, computed 같은 값들을 화면(template)에 연결해서 보여주는 것-->

  <!--바인딩 방법 1) 텍스트 바인딩-->
  <h1>Hello, {{ msg }}</h1>
  <!--{{ msg }} : data-->

  <!--바인딩 방법 2) 속성 바인딩-->
  <h1 v-text="msg"></h1>
  <!-- v- : vue의 지시자-->

  <h2 v-html="htmlStr"></h2>

  <!--바인딩 방법 3) 양방향 바인딩	-->
  <!--사용자가 input에 값을 입력하면 입력값이 바로 valueModel의 값으로 바뀜: 양방향 -> 화면에서 값이 바뀌면 데이터에도 바뀜.-->
  <p><input type="text" v-model="valueModel" /></p>
  <!--value에 바인딩 하려면 v-model 사용-->

  <P><input type="number" v-model.number="numberModel" /></P>
  <!--v-model은 text, v-model.number은 number 타입.-->

  <p>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="042">대전</option>
      <option value="052">부산</option>
    </select>
  </p>

  <p>
    <label>{{ checking }}</label>
    <input
      type="checkbox"
      true-value="yes"
      false-value="no"
      v-model="checking"
    />
    <!--checkbox는 checked라는 속성에 매핑. true/false -->
  </p>
  <p>{{ valueModel }}, {{ numberModel }}, {{ city }}</p>
</template>

<!--JS 영역-->
<script>
// view-model 바인딩
export default {
  data() {
    // data(): 메소드.
    return {
      // 바인딩 할 값.
      msg: "World",
      htmlStr: '<span style="color: red;">Red Text</span>',
      valueModel: "홍길동",
      numberModel: 10,
      city: "042",
      checking: "yes",
    };
  },
};
</script>

<!--Style 영역-->
<!--scopeed: 현재 페이지의 HTML 영역에만 스타일 적용.-->
<style scoped>
h1 {
  color: green;
}
</style>
