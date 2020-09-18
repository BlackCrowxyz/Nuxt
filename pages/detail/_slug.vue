<template>
  <div>
    <h5 class="h5 px-3 pt-2 text-light">IRAN TRIP PLANNER</h5>
    <div class="row m-0">
      <div class="col-2"></div>
      <div class="col-7">
        <div class="text-light">
          <p class="pt-5">1stQuest / Trip Planner</p>
          <h5 class="p-3">The best of Iran, {{ title }}</h5>
          <p class="px-3 mb-3 small">{{ overview }}</p>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
    <div class="row mx-0 bg">
      <!-- card component -->
      <detail-card
        v-for="(city, i) in cities"
        :key="i"
        :name="city.name"
        :days="city.days"
        :thingsToDo="city.thingsToDo"
        :images="city.images"
      />
    </div>
  </div>
</template>

<script>
import DetailCard from "@/components/Cards/DetailCard";

export default {
  components: {
    DetailCard,
  },
  computed: {
    title() {
      return this.$store.getters.getSingleItinerary.title;
    },
    overview() {
      return this.$store.getters.getSingleItinerary.overView;
    },
    cities() {
      return this.$store.getters.getSingleItinerary.cities;
    },
  },
  created() {
    const api =
      "https://1stquest.com/api/plan/v1/itinerary/" + this.$route.params.slug;
    this.$store.dispatch("asyncGetSingleItinerary", api);
  },
};
</script>

<style>
.bg {
  background-color: white;
}
</style>