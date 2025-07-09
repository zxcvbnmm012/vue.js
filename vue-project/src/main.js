// 가장 먼저 시작하는 곳.
// 페이지를 하나 만들어서 index.html의 app에 쓰여진 html을 써준다.

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
// public/index.html에서 id값이 app인 것을 찾아 인스턴스를 할당해준다.
// mount: 만들어진 컴포넌트들을 적용해줌.
// mount('#app')은 Vue 앱을 #app이라는 DOM 요소에 연결하고 렌더링하는 동작
// 랜더링: 어떤 값을 해석해서 데이터를 만들어 주는 것.
// Vue 컴포넌트의 템플릿(HTML 구조)이 실제 브라우저의 DOM에 붙는 것. 즉, 화면에 실제로 그려지는 시점
// App.vue의 template 태그에 있는 값들을 가져와서 public.index.html의 <div id='app'></div>에 써준다.
// 같은 코드>
// const app = createApp(App);
// app.use(router);
// app.mount("#app");
