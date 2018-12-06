// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import getFullInventory from './api/Mock_CarInventory';

Vue.config.productionTip = false;

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  data() {
    return {
      inventory: null,
      checkedMakers: []
    };
  },
  mounted() {
    this.inventory = getFullInventory();
    /*axios
      .get('http://sleekstreetdesigns.com/ModelsRest/viewMake.json')
      .then(response => {
        //this.inventory = response.data.payload;
      })
      .catch(error => console.log(error));*/
  },
  api() {
    this.inventory = getFullInventory();
  },
  watch: {
    checkedMakers: () => {}
  },
  methods: {},
  components: { App },
  template: '<App/>'
});
