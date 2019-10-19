<template>
  <div id="app">
    <global-header/>
    <navi/>
    <router-view v-bind:data="list"/>
    <global-footer/>
  </div>
</template>

<script>
import GlobalHeader from "./components/Header.vue";
import GlobalFooter from "./components/Footer.vue";
import Navi from "./components/Navi.vue";

export default {
  name: "app",
  components: {
    GlobalHeader,
    Navi,
    GlobalFooter
  },
  data () {
    return {
      list: []
    }
  },
  created() {
    fetch(
      "https://gist.githubusercontent.com/mizucoffee/1a9012c612aeb49c174d5057ce03362a/raw/class.json"
    )
      .then(res => res.json())
      .then(data => data.filter(e => e.isAvailable))
      .then(data => data.filter(e => e.name != "E601"))
      .then(data => {
       this.list = data.map(e => ({
          ...e,
          free: [...Array(5)].map((_, i) =>
            (
              "00000000" +
              parseInt(e.use.slice(i * 2, i * 2 + 2), 16).toString(2)
            )
              .slice(-8)
              .split("")
              .map(c => c == "0")
          )
        }))
      })
      .catch(err => {
        console.error(err)
      })
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  margin: 32px 0;
  min-height: calc(100vh - 114px - 48px - 27px - 64px);
}
</style>
