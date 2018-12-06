<template>
  <div id="app" class="container">
    <div id="TopBar"></div>
    <div id="mainResult">
      <MainResult:value=checkedMakers/>
    </div>
    <div id="sideBar" class="sideBar">
      <MakeSideBar/>
      <ModelSideBar/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import MainResult from './components/MainResult';
import MakeSideBar from './components/MakeSideBar';
import ModelSideBar from './components/ModelSideBar';
import CarInventory from './api/CarInventory';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MakeSideBar,
    ModelSideBar,
    MainResult
  }
};
</script>

<style lang="scss">
@mixin box($width, $height) {
  width: $width;
  height: $height;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#sideBar {
  background-color: #33f;
  grid-area: sidebar;
}
#mainResults {
  grid-area: main;
}
#TopBar {
  background-color: #00f;
  grid-area: topbar;
}
.container {
  @include box(1920px, 1080px);
  display: inline-grid;
  grid-template-columns: 200px 230px 1120px;
  grid-template-rows: 0px 60px auto 140px;
  grid-template-areas:
    'topbar topbar topbar'
    'sidebar main main'
    'footer footer footer';
}
</style>
