<template>
  <div id="make" v-on:change="">
    <input type="checkbox" id="ford" value="ford" v-model="checkedMakers">
    <label for="ford">Ford</label>
    <input type="checkbox" id="Chevrolet" value="Chevrolet" v-model="checkedMakers">
    <label for="Chevrolet">Chevrolet</label>
    <input type="checkbox" id="BMW" value="BMW" v-model="checkedMakers">
    <label for="BMW">BMW</label>
    <input type="checkbox" id="ram" value="ram" v-model="checkedMakers">
    <label for="ram">Ram</label>
    <input type="checkbox" id="Toyota" value="Toyota" v-model="checkedMakers">
    <label for="Toyota">Toyota</label>
    <input type="checkbox" id="Dodge" value="Dodge" v-model="checkedMakers">
    <label for="Dodge">Dodge</label>
  </div>
</template>

<script>
export default {
  name: 'mainResult',
  props: ['inventory'],
  data() {
    return {
      checkedMakers: []
    };
  }
};
</script>
