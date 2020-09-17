<template>
  <div class="dropdown">
    <button
      v-if="isAnySelected"
      class="btn btn-sm btn-primary"
      type="button"
      data-toggle="dropdown"
    >
      <span v-for="(sel, i) in selected" :key="i" class="small">
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
        :class="{'btn-primary': selected[idx], 'btn-light': !selected[idx]}"
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
  // :class="{btnLight: selected[idx], btnPrimary: !selected[idx]}"
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
      selected: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  },
  methods: {
    updateSelected(idx) {
      this.selected[idx] = !this.selected[idx];
      this.isAnySelected = false; // Dummy change to make vue update the v-if statement !
      this.isAnySelected = true;
      if (!this.selected.some((e) => e == true)) this.isAnySelected = false;
    },
    removeSelections() {
      this.selected = this.selected.map((e) => (e = false));
      this.isAnySelected = false;
    },
  },
};
</script>

<style>
</style>