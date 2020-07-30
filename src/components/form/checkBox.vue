<template>
  <div class="checkBox">
    <input type="checkbox" v-model="checkedModel" :value="value">
    <label>{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    label: { type: String, default: "" },
    value: { type: String, default: "" }
  }
};
</script>