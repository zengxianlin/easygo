<template>
<div id="app">
  <Goods></Goods>
  <Screen></Screen>
  <Keyboard></Keyboard>
</div>
</template>

<script>
import Goods from './components/goods'
import Screen from './components/screen'
import Keyboard from './components/keyboard'

export default {
  name: 'app',
  components: {
    Goods,
    Screen,
    Keyboard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1000px;
  height: 600px;
  position: absolute;
  overflow: hidden;
  border: #fff 1px solid;
  padding: 10px;
  background-color: #F2F2FD;
  border-radius: 20px;
  margin:auto;
  top: 0; left: 0; bottom: 0; right: 0;
}
body {
  margin: 0;
  padding: 0;
  background: #000;
}

body,
html {
  height: 100%;
  width: 100%;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

button,
input,
select,
textarea {
  outline: none;
}
h1 {
    margin: 0;
    font-size: 18px;
}
li{
  list-style:none;
}
</style>
