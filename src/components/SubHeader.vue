<template>
    <h2>{{content}}</h2>
</template>

<script>
export default {
  name: "SubHeader",
  props: {
      content: String
  }
};
</script>

<style scoped>
h2 {
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 36pt;
  padding-bottom: 32px;
  color: rgb(0, 8, 53);
}
</style>
