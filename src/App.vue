<template>
  <div id="app" class="container">
    <div id="TopBar"></div>
    <div id="mainResult"><MainResult /></div>
    <div id="makeSide"><MakeSideBar /></div>
    <div id="modelSide" class="sideBar"><ModelSideBar /></div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import MainResult from './components/MainResult';
import MakeSideBar from './components/MakeSideBar';
import ModelSideBar from './components/ModelSideBar';
import axios from 'axios';
import { getFullInventory } from './api/Mock_CarInventory';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    //HelloWorld,
    MakeSideBar,
    ModelSideBar,
    MainResult
  },
  mounted() {
    this.$store.commit('populateInventory', getFullInventory());

    /*axios
      .get('http://sleekstreetdesigns.com/ModelsRest/viewMake.json')
      .then(response => {
        this.inventory = response.data.payload;
        getMakes(response.data.payload);
      })
      .catch(error => console.log('Axios ' + error));
      */
  },
  computed: mapState(['inventory', 'checkedMakers', 'models', 'makes']),
  methods: {
    iniOptions: (inv, option) => {
      let availOptions = [];
      this.inv.forEach((car, index) => {
        //console.log(car.make);
        if (!availOptions.includes(car[option])) {
          availOptions.push(car[option]);
        }
      });
      return availOptions;
    }
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
#makeSide {
  background-color: #333;
  grid-area: makeSide;
  input[type='checkbox'] {
    //display: none;
  }
}
#modelSide {
  background-color: #ddd;
  grid-area: modelSide;
}
#mainResult {
  background-color: #fff;
  grid-area: main;
  table tr td {
    text-align: left;
  }
  td.lgt {
    background-color: #eee;
  }
  td.drk {
    background-color: #ddd;
  }
}
#TopBar {
  background-color: #00f;
  grid-area: topbar;
}
.container {
  @include box(1920px, 1080px);
  display: grid;
  grid-template-columns: 60px 200px auto 1120px;
  grid-template-rows: 60px auto 140px;
  grid-template-areas:
    'topbar topbar topbar topbar'
    'makeSide modelSide main main'
    'footer footer footer footer';
}
</style>
