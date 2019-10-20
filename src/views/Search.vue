<template>
  <div class="main">
    <sub-header content="Search" />
    <search-form @search="search" />
    <result :rooms="rooms" />
  </div>
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import SearchForm from "@/components/SearchForm.vue";
import Result from "@/components/Result.vue";

export default {
  name: "Root",
  data() {
    return {
      rooms: []
    };
  },
  props: {
    data: Array
  },
  components: {
    SubHeader,
    SearchForm,
    Result
  },
  methods: {
    search: function(week, period) {
      this.rooms = this.data.filter(room => room.free[week][period]);
    }
  }
};
</script>

<style scoped>
.result {
  margin-top: 32px;
}
</style>
