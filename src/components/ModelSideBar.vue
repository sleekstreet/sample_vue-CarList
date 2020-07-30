<template>
  <div id="modelName">
    <div v-for="(option, i) in options" :key="i">
      <input type="checkbox" v-model="checkedModel" :value="option">
      <label>{{ option }}</label>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "models",
  data() {
    return {
      selectedModel: [],
      options: []
    };
  },
  watch: {
    inventory() {
      this.refreshModels();
    },
    checkedMakers() {
      this.refreshModels();
    }
  },
  computed: {
    inventory() {
      return this.$store.state.inventory;
    },
    checkedMakers() {
      return this.$store.state.checkedMakers;
    },
    checkedModel: {
      get() {
        return this.$store.state.checkedModels;
      },
      set(value) {
        this.$store.commit("changeModels", value);
      }
    }
  },
  methods: {
    refreshModels() {
      let models = [];
      this.inventory.forEach((car, index) => {
        if (this.checkedMakers.length == 0) {
          models.push(car.model);
        } else {
          if (
            this.checkedMakers.length > 0 &&
            this.checkedMakers.includes(car.make)
          ) {
            if (!models.includes(car.model)) {
              models.push(car.model);
            }
          }
        }
      });
      this.options = models;
    },
    ChangeModels() {
      this.$emit("changeModels", this.checkedModels);
    }
  }
};
</script>
<style lang="scss">
#modelName div {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #aaa;
  transition: 0.5s;
}
#modelName div:hover {
  background-color: #ccc;
}
</style>
