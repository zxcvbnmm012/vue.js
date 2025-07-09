<template>
  <h3>watch</h3>
  <textarea v-bind:disabled="charFull" v-model="messageContent"></textarea>
  <p>현재: {{ charCount }}자/ 최대 50자</p>
  <p>{{ feebMessage }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      messageContent: "",
      charCount: 0,
      charFull: false,
      feebMessage: "메세지를 입력하세요.",
    };
  },
  // watch: 값이 바꾸는 것을 감시하고 있음.
  watch: {
    // nv: 바뀐 값
    // ov: 바뀌기 이전의 값
    messageContent(nv, ov) {
      console.log(nv + "," + ov);
      this.charCount = nv.length;
      // 50자가 되면 charFull: true, feebMessage: "더이상 입력할 수 없습니다."
      if (nv.length >= 50) {
        this.charFull = true;
        this.feebMessage = "더이상 입력할 수 없습니다.";
      }
    },
  },
};
</script>
