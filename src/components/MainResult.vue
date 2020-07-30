<template>
  <table id="mainResults">
    <tr v-for="(item, e) in items" :key="e">
      <td v-for="(val, key) in item" :key="key">{{ val }}</td>
    </tr>
  </table>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: "mainResult",
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
    },
    query() {
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
    },
    query() {
      return this.$store.state.query;
    }
  },
  methods: {
    refreshResult() {
      //let availResults = [];
      if (this.checkedMakers.length === 0 && this.checkedModels.length === 0) {
        this.items = this.inventory.filter(car => {
          return (
            car.style.includes(this.query) || car.trim.includes(this.query)
          );
        });
      } else {
        if (this.checkedMakers.length > 0 && this.checkedModels.length > 0) {
          // console.log('both');
          this.items = this.inventory.filter(car => {
            return (
              this.checkedMakers.indexOf(car.make) !== -1 &&
              this.checkedModels.indexOf(car.model) !== -1 &&
              (car.style.includes(this.query) || car.trim.includes(this.query))
            );
          });
        } else if (
          this.checkedMakers.length > 0 &&
          this.checkedModels.length === 0
        ) {
          // console.log('maker');
          this.items = this.inventory.filter(car => {
            return (
              this.checkedMakers.indexOf(car.make) !== -1 &&
              (car.style.includes(this.query) || car.trim.includes(this.query))
            );
          });
        } else {
          // console.log('model');
          this.items = this.inventory.filter(car => {
            return (
              this.checkedModels.indexOf(car.model) !== -1 &&
              (car.style.includes(this.query) || car.trim.includes(this.query))
            );
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
