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
      <DdSimple />
    </div>
    <div class="p-1">
      <!-- Passengers -->
      <DdSimple />
    </div>
    <div class="p-1">
      <!-- Budgests -->
      <DdSimple />
    </div>
    <div class="p-1">
      <!-- go to derail page -->
      <nuxt-link to="/result" class="btn btn-sm btn-small btn-danger" type="button">Search</nuxt-link>
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
  },
};
</script>

<style>
</style>