<template>
  <div class="main">
      <clock/>
  </div>
</template>

<script>
import Clock from "@/components/Clock.vue"

export default {
  name: "Root",
  components: {
    Clock
  },
}
</script>

<style scoped>
</style>
