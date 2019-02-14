<template>
  <table id="mainResults">
    <!--
      <tr>
        <label for="searchQuery">search</label
        ><input type="text" name="searchQuery" />
      </tr>
    -->
    <tr v-for="item in items" :key="items.id">
      <td v-for="(val, key) in item" :key="key">{{ val }}</td>
    </tr>
  </table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'mainResult',
  data() {
    return {
      items: []
    };
  },
  watch: {
    inventory() {
      this.refreshResult();
    },
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
      //let availResults = [];
      if (this.checkedMakers.length == 0 && this.checkedModels.length == 0) {
        this.items = this.inventory;
      } else {
        if (this.checkedMakers.length > 0 && this.checkedModels.length > 0) {
          console.log('both');
          this.items = this.inventory.filter(car => {
            if (
              this.checkedMakers.indexOf(car.make) != -1 &&
              this.checkedModels.indexOf(car.model) != -1
            )
              return true;
          });
        } else if (
          this.checkedMakers.length > 0 &&
          this.checkedModels.length == 0
        ) {
          console.log('maker');
          this.items = this.inventory.filter(car => {
            if (this.checkedMakers.indexOf(car.make) != -1) return true;
          });
        } else {
          console.log('model');
          this.items = this.inventory.filter(car => {
            if (this.checkedModels.indexOf(car.model) != -1) return true;
          });
        }
      }
      /*this.inventory.forEach((car, index) => {
          //console.log(car.make);
          this.checkedMakers.includes(car.make) &&
          this.checkedModels.includes(car.model)
            ? availResults.push(car)
            : this.checkedMakers.includes(car.make)
            ? availResults.push(car)
            : availResults.push(car);
        });
      }*/
      //this.items = availResults;
    }
  }
};
</script>
