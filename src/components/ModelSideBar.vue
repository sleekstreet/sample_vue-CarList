<template>
  <div id="modelName">
    <select v-model="selectedModel" multiple>
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>


<script>
export default {
  name: 'mainResult',
  props: ['inventory', 'checkedMakers'],
  data() {
    return {
      selectedModel: [],
      options: []
    };
  }
};
</script>
