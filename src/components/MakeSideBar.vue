<template>
  <div id="make">
    <div class="makeBtn" v-for="(make, k) in makes" :key="k">
      <input
        type="checkbox"
        class="makersCkBox"
        :id="make.id"
        :value="make"
        v-model="checkedMakers"
      >
      <div class="Make-Icon">
        <img :src="logos[make]">
        <br>
        <label :for="make">{{ make }}</label>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "MakeSideBar",
  data() {
    return {
      makes: [],
      logos: {
        BMW: require("@/assets/BMW.png"),
        Ram: require("@/assets/Ram.png"),
        Chevrolet: require("@/assets/Chevrolet.png"),
        Ford: require("@/assets/Ford.png"),
        Dodge: require("@/assets/Dodge.png"),
        Toyota: require("@/assets/Toyota.png"),
        Pontiac: require("@/assets/Pontiac.png"),
        Ferrari: require("@/assets/Ferrari.png")
      }
    };
  },
  watch: {
    inventory() {
      let availOptions = [];
      this.inventory.forEach((car, index) => {
        //console.log(car.make);
        if (!availOptions.includes(car.make)) {
          availOptions.push(car.make);
        }
      });
      this.makes = availOptions;
    }
  },
  methods: {
    ChangeMake() {
      this.$emit("changeMakers", this.checkedMakers);
    }
  },
  computed: {
    inventory() {
      return this.$store.state.inventory;
    },
    checkedMakers: {
      get() {
        return this.$store.state.checkedMakers;
      },
      set(value) {
        this.$store.commit("changeMakes", value);
      }
    }
  }
};
</script>

<style lang="scss">
#make {
  .makeBtn {
    height: 70px;
    color: #eee;
    font-size: 0.6rem;
    border-bottom: 1px solid #eee;
    padding: 10px 0 20px 0;
  }
  .makeBtn input[text="checkbox"] {
    position: absolute;
    visibility: hidden;
  }
  .Make-Icon img {
    width: 35px;
  }
  // .makersCkBox:checked + .MakeIcon {}
}
</style>
