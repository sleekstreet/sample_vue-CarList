import axios from 'axios';
import VueAxios from 'vue-axios';

export default {
  getInventory() {
    axios({
      method: 'get',
      url: 'http://sleekstreetdesigns.com/ModelsRest/viewMake.json',
      responseType: 'json'
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
