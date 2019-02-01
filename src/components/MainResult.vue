<template>
  <table id="mainResults">
    <tr>
      <label for="searchQuery">search</label
      ><input type="text" name="searchQuery" />
    </tr>
    <tr v-for="item in items" :key="items.id">
      <td v-for="(val, key) in item" :key="key">{{ val }}</td>
    </tr>
  </table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'mainResult',
  //props: ['checkedMakers', 'inventory'],
  data() {
    return {
      items: []
    };
  },
  watch: {
    checkedMakers() {
      this.refreshResult();
    },
    checkedModels() {
      this.refreshResult();
    }
  },
  computed: {
    inventory() {
      return this.$store.state.inventory;
    },
    checkedMakers() {
      return this.$store.state.checkedMakers;
    },
    checkedModels() {
      return this.$store.state.checkedModels;
    }
  },
  methods: {
    refreshResult() {
      let availResults = [];
      this.inventory.forEach((car, index) => {
        //console.log(car.make);
        if (this.checkedMakers.length > 0 || this.checkedModels.length > 0)
          if (
            (this.checkedMakers.includes(car.make) &&
              this.checkedModels.includes(car.model)) ||
            (this.checkedMakers.includes(car.make) ||
              this.checkedModels.includes(car.model))
          ) {
            availResults.push(car);
          } else {
            availResults.push(car);
          }
      });
      this.items = availResults;
    }
  }
};
</script>
