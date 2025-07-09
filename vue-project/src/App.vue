<!--하나의 컴포넌트-->
<!--SPA-->

<!--HTML 영역-->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/data">Data link</router-link>
  </nav>
  <router-view />
  <!--router 정보에 해당하는 컴포넌트가 그려지는 곳-->
  <p>App.vu : {{ msg }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
};
</script>

<!--style 영역-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
