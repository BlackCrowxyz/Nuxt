<template>
  <div class="dropdown">
    <button
      v-if="isAnySelected"
      class="btn btn-sm btn-primary"
      type="button"
      data-toggle="dropdown"
    >
      <span v-for="(sel, i) in selected" :key="i" class="small">
        <span v-if="sel">{{data[i]}},</span>
      </span>
    </button>
    <button v-else class="btn btn-sm btn-light" type="button" data-toggle="dropdown">Destinations</button>

    <div class="dropdown-menu float-left p-2">
      <div v-show="isAnySelected">
        <span v-for="(sel, i) in selected" :key="i" class="badge badge-dark p-1 m-1">
          <span v-if="sel">
            <span>
              {{data[i]}}
              <span
                class="btn btn-dark btn-sm m-0 py-0 px-1 text-light"
                @click="updateSelected(i)"
                @click.stop
              >X</span>
            </span>
          </span>
        </span>
      </div>
      <label
        v-for="(item, i) in data"
        :key="i"
        class="dropdown-item checkbox-inline small p-0"
        @click.stop
      >
        <input :checked="selected[i]" @click="updateSelected(i)" class="m-2" type="checkbox" />
        {{item}}
      </label>
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
      isAnySelected: false,
      selected: [],
    };
  },
  props: {
    data: {
      type: Array,
    },
  },
  methods: {
    updateSelected(idx) {
      this.selected[idx] = !this.selected[idx];
      this.isAnySelected = false; // Dummy change to make vue update the v-if statement !
      this.isAnySelected = true;
      if (!this.selected.some((e) => e == true)) this.isAnySelected = false;
    },
    removeSelections() {
      this.selected = [];
      this.isAnySelected = false;
    },
  },
  beforeMount() {
    this.selected = this.$store.getters.getSelectedCities;
    this.isAnySelected = this.selected.length == 0 ? false : true;
  },
  beforeDestroy() {
    this.$store.dispatch("setSelectedCities", this.selected);
  },
};
</script>

<style>
</style>