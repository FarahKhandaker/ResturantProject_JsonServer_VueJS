<template>
  <div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}

.logo {
  width: 6%;
}

.register input,
.login input, .add input, .update input {
  width: 16%;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  border-radius: 8px;
}

.register button,
.login button, .add button, .update button {
  width: 18%;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
  border-radius: 8px;
}
button {
  margin-left: 8px;
    background: red;
    color: white;
    border: none;
}
</style>
