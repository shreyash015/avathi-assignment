<template>
  <div id="app">
    <h1><span class="company-name"> Avathi </span> Assignment</h1>
    <router-view />
  </div>
</template>

<style>
body,
html {
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.company-name {
  color: #ffd042;
}

</style>
