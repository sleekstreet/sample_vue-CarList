<template>
  <div id="make">
    <div class="makeBtn" v-for="make in makes">
      <input
        type="checkbox"
        class="makersCkBox"
        :id="make.id"
        :value="make"
        v-model="checkedMakers"
      />
      <div class="MakeIcon">
        <label :for="make">{{ make }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MakeSideBar',
  data() {
    return {
      makes: []
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
      this.$emit('changeMakers', this.checkedMakers);
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
        this.$store.commit('changeMakes', value);
      }
    }
  }
};
</script>

<style lang="scss">
#make {
  .makeBtn {
    height: 60px;
    color: #eee;
    font-size: 0.6rem;
  }
  .makeBtn input[text='checkbox'] {
    position: absolute;
    visibility: hidden;
  }
  .makersCkBox:checked + .MakeIcon {
  }
}
</style>
