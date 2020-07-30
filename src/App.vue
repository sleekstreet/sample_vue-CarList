<template>
  <div id="app" class="container">
    <div id="TopBar">
      <h1>Car Selector</h1>
    </div>
    <div id="searchBar">
      <SearchField inputName="search" @input="querySearch($event)" type="text" :label="True"/>
    </div>
    <div id="mainResult">
      <MainResult/>
    </div>
    <div id="makeSide">
      <MakeSideBar/>
    </div>
    <div id="modelSide" class="sideBar">
      <ModelSideBar/>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import MainResult from "./components/MainResult";
import MakeSideBar from "./components/MakeSideBar";
import ModelSideBar from "./components/ModelSideBar";
import SearchField from "./components/form/textInput";
import { getFullInventory } from "./api/Mock_CarInventory";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    //HelloWorld,
    SearchField,
    MakeSideBar,
    ModelSideBar,
    MainResult
  },
  data() {
    return {
      searchParams: ""
    };
  },
  mounted() {
    this.$store.commit("populateInventory", getFullInventory());

    /*axios
      .get('http://sleekstreetdesigns.com/ModelsRest/viewMake.json')
      .then(response => {
        this.inventory = response.data.payload;
        getMakes(response.data.payload);
      })
      .catch(error => console.log('Axios ' + error));
      */
  },
  computed: mapState(["inventory", "checkedMakers", "checkedModels"]),
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
    },
    querySearch(query) {
      this.searchParams = query;
      this.$store.commit("addQuery", query);
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/_mixins.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#makeSide {
  background-color: #333;
  grid-area: makeSide;
  input[type="checkbox"] {
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
  color: #fff;
  grid-area: topbar;
  text-align: left;
}
#searchBar {
  background-color: #aaa;
  grid-area: searchBar;
  border-bottom: 1px solid #aaa;
}
.container {
  @include breakpoint(md) {
    @include box(1380px, 1080px);
    display: grid;
    grid-template-columns: 60px 200px auto 1120px;
    grid-template-rows: 60px 43px auto 140px;
    grid-template-areas:
      "topbar topbar topbar topbar"
      "makeSide modelSide searchBar searchBar"
      "makeSide modelSide main main"
      "footer footer footer footer";
  }
  @include breakpoint(lg) {
    @include box(1200px, 1080px);
    display: grid;
    grid-template-columns: 60px 200px auto 1120px;
    grid-template-rows: 60px 43px auto 140px;
    grid-template-areas:
      "topbar topbar topbar topbar"
      "makeSide modelSide searchBar searchBar"
      "makeSide modelSide main main"
      "footer footer footer footer";
  }
}
</style>
