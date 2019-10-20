<template>
  <div class="main">
    <sub-header content="Clock" />
    <clock/>
    <h3 v-show="isOpen">Current Period</h3>
    <span v-show="isOpen" class="mini">{{currentPeriod | nth}} Period</span>
    <result v-show="isOpen" :rooms="now"/>
    <h3 v-show="isOpen && nextPeriod <= 7">Next Period</h3>
    <span v-show="isOpen && nextPeriod <= 7" class="mini">{{nextPeriod | nth}} Period</span>
    <result v-show="isOpen && nextPeriod <= 7" :rooms="next"/>
    <h3 v-show="!isOpen">Closed</h3>
  </div>
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import Clock from "@/components/Clock.vue"
import Result from "@/components/Result.vue"

const periods = [ {hour: 9, min: 30, period: 1, isBreak: false}, {hour: 11, min: 0, period: 1, isBreak: true}, {hour: 11, min: 10, period: 2, isBreak: false}, {hour: 12, min: 40, period: 2, isBreak: true}, {hour: 13, min: 30, period: 3, isBreak: false}, {hour: 15, min: 0, period: 3, isBreak: true}, {hour: 15, min: 10, period: 4, isBreak: false}, {hour: 16, min: 40, period: 4, isBreak: true}, {hour: 16, min: 50, period: 5, isBreak: false}, {hour: 18, min: 20, period: 5, isBreak: true}, {hour: 18, min: 30, period: 6, isBreak: false}, {hour: 20, min: 0, period: 6, isBreak: true}, {hour: 20, min: 10, period: 7, isBreak: false}]

export default {
  name: "Root",
  components: {
    SubHeader,
    Clock,
    Result
  },
  data() {
    return {
      timer: null,
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
      week: new Date().getDay()
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.hour = new Date().getHours()
      this.minute = new Date().getMinutes()
      this.second = new Date().getSeconds()
      this.week = new Date().getDay()
    }, 100);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  props: {
    data: Array
  },
  filters: {
    nth: function(n) {
      return n + (["st","nd","rd"][((n+90)%100-10)%10-1]||"th")
    }
  },
  computed: {
    currentPeriod: function() {
      const period = periods.reduce((res, e) => e.hour == this.hour && e.min <= this.minute || e.hour < this.hour ? e : res, null)
      if(period == null) return 0
      if(21 == this.hour && 40 <= this.minute || 21 < this.hour) return 0
      return period.period
    },
    nextPeriod: function() {
      return this.currentPeriod + 1
    },
    now: function() {
      if(!this.isOpen || this.currentPeriod == 0) return []
      return this.data.filter(r => r.free[this.week - 1][this.currentPeriod - 1])
    },
    next: function() {
      if(!this.isOpen || this.currentPeriod == 0 || this.nextPeriod > 7) return []
      return this.data.filter(r => r.free[this.week - 1][this.currentPeriod])
    },
    isOpen: function() {
      return !(this.week == 0 || this.week == 6 || 0 == this.currentPeriod)
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 28pt;
  margin-top: 48px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
}
.mini {
  font-size: 18pt;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}
.result {
  margin-top: 24px;
}
</style>
