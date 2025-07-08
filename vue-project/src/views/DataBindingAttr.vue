<template>
  <h3>DataBindingAttr.vue</h3>
  <p>attribute 바인딩하기.</p>
  <img v-bind:src="imgSrc" v-bind:width="imgWid" />
  <!--v-bind: attribute를 바인딩할때 사용하는 지시자.-->
  <!--v-on: 이벤트에 바인딩할때 사용하는 지시자.-->
  <!--src라는 속성에 imgSrv를 바인딩-->
  <!--width라는 속성에 imgWid를 바인딩-->

  <p><input type="number" v-model.number="widVal" v-on:change="changeWid" /></p>

  <p>
    <input type="text" v-model="msg" />
    <button v-bind:disabled="msg == '' ? true : false" v-on:click="alertFnc">
      클릭
    </button>
    <!--v-bind: 연산식 가능. / v-model은 불가능.-->
  </p>
  <h3 v-bind:class="{ 'text-red': isRed, active: isActive }">김해민</h3>
  <p>배열을 활용한 바인딩.</p>
  <h3 v-bind:class="classAry">김길동</h3>
  <p><button v-on:click="showFnc">에러스타일</button></p>
</template>

<script>
export default {
  // data 영역
  data() {
    return {
      imgSrc: "https://vuejs.org/images/logo.png",
      imgWid: "130px",
      widVal: 100,
      btnShow: true,
      msg: "",

      isRed: true, // 객체방식, {'클래스명': true, '클래스명': false}
      isActive: true,

      activeClass: "active", // 배열을 이용한 방식.
      errorClass: "text-red",

      classAry: ["active", "text-red"],
    };
  },
  // 함수 바인딩 영역
  methods: {
    alertFnc() {
      alert(this.msg);
    },
    showFnc() {
      this.isRed = this.isRed == true ? false : true;
      // this.isRed = !this.isRed;
    },
    changeWid() {
      this.imgWid = this.widVal + "px";
    },
  },
  mounted() {
    // mount라는 훅이 발생하면,
    // mounted() : 컴포넌트가 화면에 렌더링되고 나서 실행되는 함수. 즉, 컴포넌트가 완전히 준비되고, HTML 요소들이 DOM에 그려진 이후에 호출
    console.log(this);
    this.msg = "홍길동";
    this.imgWid = "230px";
  },
};
</script>

<style scoped>
.text-red {
  color: rgb(255, 115, 0);
}
.active {
  background-color: aquamarine;
}
</style>
