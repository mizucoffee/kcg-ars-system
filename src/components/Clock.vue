<template>
  <div class="clock">
    <span>{{ hour | zeroPad }}</span>
    <span>:</span>
    <span>{{ minute | zeroPad }}</span>
    <span class="mini">:</span>
    <span class="mini">{{ second | zeroPad }}</span>
  </div>
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      timer: null,
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds()
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.hour = new Date().getHours();
      this.minute = new Date().getMinutes();
      this.second = new Date().getSeconds();
    }, 100);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  filters: {
    zeroPad(t) {
      return ("00" + t).slice(-2);
    }
  }
};
</script>

<style scoped>
span {
  line-height: 1em;
  font-size: 48pt;
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
}
.mini {
  font-size: 32pt;
  color: #afafaf;
}
</style>
