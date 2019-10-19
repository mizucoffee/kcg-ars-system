<template>
  <div class="main">
      <datas v-bind:data="data"/>
  </div>
</template>

<script>
import Data from "@/components/Data.vue"

export default {
  name: "Root",
  props: {
      data: Array
  },
  components: {
    Datas: Data
  },
}
</script>

<style scoped>
</style>
