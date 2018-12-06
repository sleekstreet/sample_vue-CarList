<template>
  <table id="mainResults">
      <tr v-for="item in inventory" v-bind:key="item.id">
        <td>{{item.year}}</td>
        <td>{{item.make}}</td>
        <td>{{item.model}}</td>
        <td>{{item.trim}}</td>
        <td>{{item.style}}</td>
      </tr>
  </table>
</template>

<script>
export default {
  name: 'mainResult',
  props: ['checkedMakers', 'inventory'],
  data() {
    return {
      items: []
    };
  },
  watch: {
    inventory: () => {}
  }
};
</script>
