<template>
  <div class="row">
    <div class="p-1">
      <!-- Destinations -->
      <DdTags :data="cities" />
    </div>
    <div class="p-1">
      <!-- Calendar -->
      <DdCalender />
    </div>
    <div class="p-1">
      <!-- Weeks -->
      <DdSimple :name="names[0]" :choices="weeks" />
    </div>
    <div class="p-1">
      <!-- Passengers -->
      <DdSimple :name="names[1]" :choices="passengers" />
    </div>
    <div class="p-1">
      <!-- Budgests -->
      <DdSimple :name="names[2]" :choices="budgets" />
    </div>
    <div class="p-1">
      <!-- go to detail page -->
      <nuxt-link
        to="/result"
        class="btn btn-sm btn-small btn-danger"
        type="button"
        @click.native="getInteries"
      >Search</nuxt-link>
    </div>
  </div>
</template>

<script>
import DdCalender from "@/components/Searchbar/Dropdowns/DdCalender";
import DdTags from "@/components/Searchbar/Dropdowns/DdTags";
import DdSimple from "@/components/Searchbar/Dropdowns/DdSimple";

export default {
  components: {
    DdCalender,
    DdTags,
    DdSimple,
  },
  props: {
    cities: {
      type: Array,
      default: [],
    },
    names: Array,
    weeks: Array,
    passengers: Array,
    budgets: Array,
  },
  methods: {
    getInteries() {
      const api = "https://1stquest.com/api/plan/v1/itineraries";
      this.$store.dispatch("asyncGetItineraries", api);
    },
  },
};
</script>

<style>
</style>