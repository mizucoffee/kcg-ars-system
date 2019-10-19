<template>
  <div>
    <input type="radio" :name="name" :id="id" hidden @input="check"/>
    <label :for="id">{{text}}</label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    name: String,
    id: String,
    text: String
  },
  methods: {
      check: function(e) {
          this.$emit('input', e.target.id)
      }
  }
};
</script>

<style scoped>
label {
  display: block;
  border-radius: 50%;
  width: 48px;
  margin: 8px;
  font-size: 12pt;
  padding: 15px 0;
  background: rgb(236, 249, 255);
  cursor: pointer;
}
input:checked ~ label {
  background: rgb(177, 243, 255);
}
</style>
