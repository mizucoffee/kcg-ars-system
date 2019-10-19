<template>
  <div>
    <h3>Week</h3>
    <div class="box">
      <radio-button
        v-for="(w, i) in weekList"
        name="week"
        :id="w"
        :key="w"
        :text="w | short"
        :number="i"
        v-model="week"
        @input="validate"
      />
    </div>
    <h3>Period</h3>
    <div class="box">
      <radio-button
        v-for="(p, i) of 7"
        name="period"
        :id="p"
        :key="p"
        :text="i+1"
        :number="i"
        v-model="period"
        @input="validate"
      />
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
      period: null,
      weekList: ["monday", "tuesday", "wednesday", "thursday", "friday"]
    };
  },
  methods: {
    validate: function() {
      if (this.week != null && this.period != null)
        this.$emit("search", this.week, this.period);
    }
  },
  filters: {
    short: function(text) {
      return text.charAt(0).toUpperCase() + text.slice(1, 3);
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
