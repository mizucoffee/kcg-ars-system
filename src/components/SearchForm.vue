<template>
  <div>
    <h3>Week</h3>
    <div class="box">
      <radio-button name="week" id="monday" text="Mon" v-model="week" @input="validate" />
      <radio-button name="week" id="tuesday" text="Tue" v-model="week" @input="validate" />
      <radio-button name="week" id="wednesday" text="Wed" v-model="week" @input="validate" />
      <radio-button name="week" id="thursday" text="Thu" v-model="week" @input="validate" />
      <radio-button name="week" id="friday" text="Fri" v-model="week" @input="validate" />
    </div>
    <h3>Period</h3>
    <div class="box">
      <radio-button name="period" id="first" text="1" v-model="period" @input="validate" />
      <radio-button name="period" id="second" text="2" v-model="period" @input="validate" />
      <radio-button name="period" id="third" text="3" v-model="period" @input="validate" />
      <radio-button name="period" id="forth" text="4" v-model="period" @input="validate" />
      <radio-button name="period" id="fifth" text="5" v-model="period" @input="validate" />
      <radio-button name="period" id="sixth" text="6" v-model="period" @input="validate" />
      <radio-button name="period" id="seventh" text="7" v-model="period" @input="validate" />
    </div>
  </div>
</template>

<script>
import RadioButton from "@/components/RadioButton.vue";

export default {
  name: "Form",
  components: {
    RadioButton
  },
  data() {
    return {
      week: null,
      period: null
    };
  },
  methods: {
    validate: function() {
      if (this.week != null && this.period != null)
        this.$emit("search", this.week, this.period);
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}
</style>
