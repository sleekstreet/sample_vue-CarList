// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    inventory: [],
    checkedMakers: [],
    checkedModels: []
  },
  mutations: {
    populateInventory(state, Inventory) {
      this.state.inventory = Inventory;
    },
    changeMakes(state, changes) {
      this.state.checkedMakers = changes;
    },
    changeModels(state, changes) {
      this.state.checkedModels = changes;
    }
  }
});
/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
});
