<template>
  <div class="main">
    <sub-header content="Clock" />
      <clock/>
  </div>
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import Clock from "@/components/Clock.vue"

export default {
  name: "Root",
  components: {
    SubHeader,
    Clock
  },
}
</script>

<style scoped>
</style>
