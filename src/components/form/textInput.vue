<template>
  <div class="text-field">
    <label v-if="label !== null" :for="inputName">{{ inputName }}</label>
    <input
      ref="input"
      v-bind="comAttr"
      @keydown="$emit('input', $event.target.value)"
      @blur="$emit('blur')"
    >
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    inputName: { type: String, default: null },
    inputValue: { type: String, default: null },
    placeholder: { type: String, default: null },
    lable: { type: Boolean, default: false },
    type: { type: String, default: "text" }
  },
  data() {
    return {
      searchResults: ""
    };
  },
  computed: {
    comAttr() {
      return {
        name: this.inputName,
        type: this.type,
        lable: this.lable,
        placeholder: this.placeholder,
        value: this.inputValue
      };
    }
  },
  methods: {
    submitResults($event) {
      this.$emit("newSearch", this.searchResults);
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/_mixins.scss";

.text-field {
  text-align: left;
  margin: 5px 4px;
  label {
    margin-right: 10px;
    font-size: 14px;
    font-size: 1.4rem;
  }
  input {
    @include breakpoint(lg) {
      width: 93%;
    }
    @include breakpoint(md) {
      width: 92%;
    }

    padding: 5px;
  }
}
</style>
