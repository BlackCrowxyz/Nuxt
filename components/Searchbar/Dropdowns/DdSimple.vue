<template>
  <div class="dropdown">
    <button
      v-if="!isAnySelected"
      class="btn btn-sm btn-light"
      type="button"
      data-toggle="dropdown"
    >All {{name}}s</button>
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
  props: {
    name: String,
    choices: Array,
  },
  data() {
    return {
      isAnySelected: false,
      selected: [],
      choice: "",
    };
  },
  methods: {
    updateSelected(idx) {
      if (this.selected[idx]) {
        //were selected before
        this.selected[idx] = false;
        this.choice = "";
      } else {
        this.selected = this.choices.map((e) => {
          return false;
        });
        this.selected[idx] = true;
        this.choice = this.choices[idx];
      }
      this.isAnySelected = false; // Dummy change to make vue update the v-if statement !
      this.isAnySelected = true;
      if (!this.selected.some((e) => e == true)) this.isAnySelected = false;
    },
    removeSelections() {
      this.selected = this.selected.map((e) => (e = false));
      this.isAnySelected = false;
      this.choice = "";
    },
  },
  beforeMount() {
    let func = "this.$store.getters.getSelected" + this.name;
    this.selected = eval(func); //window[func] didn't work
    this.isAnySelected = this.selected == "" ? false : true;
    //find the selected item in the choice list
    let idx = this.selected.indexOf(true);
    this.choice = this.choices[idx];
  },
  beforeDestroy() {
    this.$store.dispatch("setSelected" + this.name, this.selected);
  },
};
</script>

<style>
</style>