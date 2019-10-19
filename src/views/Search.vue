<template>
  <div class="main">
    <sub-header content="Search" />
    <search-form @search="search"/>
  </div>
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import SearchForm from "@/components/SearchForm.vue";

export default {
  name: "Root",
  props: {
    data: Array
  },
  components: {
    SubHeader,
    SearchForm
  },
  methods: {
      search: function(a,b) {
          console.log(a,b)
      }
  }
};
</script>

<style scoped>
</style>
