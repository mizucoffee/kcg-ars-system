<template>
  <div class="result">
    <div class="list" v-for="f of 4" :key="f" v-show="floor(f+1).length != 0" >
      <div v-for="room in floor(f+1)" :key="room.name" >{{room.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: {
    rooms: Array
  },
  methods: {
    floor: function(floor) {
      return this.rooms.filter(i => i.floor == floor)
    }
  }
};
</script>

<style scoped lang="scss">
.result {
  color: rgb(100, 100, 100);
  margin: 0 auto;
  max-width: 480px;
  width: 100vw;
}
.list {
  margin: 8px 0;
  font-size: 20pt;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 480px;
  width: 100vw;
  & > div {
    margin: 4px 8px;
  }
}
</style>
