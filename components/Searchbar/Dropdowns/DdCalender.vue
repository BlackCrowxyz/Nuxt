<template>
  <div class="dropdown">
    <button
      v-if="isAnySelected"
      class="btn btn-sm btn-primary"
      type="button"
      data-toggle="dropdown"
    >
      <span v-for="(sel, i) in selectedMonths" :key="i" class="small">
        <span v-if="sel">{{months[i]}},</span>
      </span>
    </button>
    <button v-else class="btn btn-sm btn-light" type="button" data-toggle="dropdown">All Months</button>
    <div class="dropdown-menu text-center p-2">
      <div
        v-for="(month, idx) in months"
        :key="idx"
        class="col-3 p-1 m-1 btn btn-sm"
        @click.stop
        @click="updateSelected(idx)"
        :class="{'btn-primary': selectedMonths[idx], 'btn-light': !selectedMonths[idx]}"
      >{{month}}</div>
      <div class="text-right p-2">
        <button class="btn btn-sm btn-light" type="button" @click="removeSelections">cancel</button>
        <button class="btn btn-sm btn-primary" type="button">apply</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      isAnySelected: false,
      selectedMonths: [],
    };
  },
  methods: {
    updateSelected(idx) {
      this.selectedMonths[idx] = !this.selectedMonths[idx];
      this.isAnySelected = false; // Dummy change to make vue update the v-if statement !
      this.isAnySelected = true;
      if (!this.selectedMonths.some((e) => e == true))
        this.isAnySelected = false;
    },
    removeSelections() {
      this.selectedMonths = this.selectedMonths.map((e) => (e = false));
      this.isAnySelected = false;
    },
  },
  beforeMount() {
    this.selectedMonths = this.$store.getters.getSelectedMonths;
    this.isAnySelected = this.selectedMonths.some((i) => i == true);
  },
  beforeDestroy() {
    this.$store.dispatch("setSelectedMonths", this.selectedMonths);
  },
};
</script>

<style>
</style>