<template>
  <div class="dropdown">
    <button
      v-if="!isAnySelected"
      class="btn btn-sm btn-light"
      type="button"
      data-toggle="dropdown"
    >ALL Options</button>
    <button v-else class="btn btn-sm btn-primary" type="button" data-toggle="dropdown">{{choice}}</button>
    <div class="dropdown-menu float-left">
      <label
        v-for="(opt, i) in choices"
        :key="i"
        class="dropdown-item checkbox-inline small p-0"
        @click.stop
      >
        <input :checked="selected[i]" @click="updateSelected(i)" class="m-2" type="checkbox" />
        {{opt}}
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
      choices: [
        "option 1",
        "option 2",
        "option 3",
        "option 4",
        "option 5",
        "option 6",
      ],
      isAnySelected: false,
      selected: [],
      choice: "",
    };
  },
  methods: {
    updateSelected(idx) {
      this.selected = this.choices.map((e) => {
        return false;
      });
      this.selected[idx] = true;
      this.choice = this.choices[idx];
      this.isAnySelected = false; // Dummy change to make vue update the v-if statement !
      this.isAnySelected = true;
      if (!this.selected.some((e) => e == true)) this.isAnySelected = false;
    },
    removeSelections() {
      this.selected = this.selected.map((e) => (e = false));
      this.isAnySelected = false;
      this.choice = "";
    },
  }
};
</script>

<style>
</style>