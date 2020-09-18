<template>
  <div>
    <!-- <h1>detail page, ID: {{ $route.params.slug }}</h1> -->
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
      <!-- title, days, thingsToDo, images -->
      <detail-card
        v-for="(city, i) in cities"
        :key="i"
        :name="city.name"
        :days="city.days"
        :thingsToDo="city.thingsToDo"
        :images="city.images"
      />
      <!-- <button class="btn btn-sm btn-light">{{cities[0]}}</button>
      <button class="btn btn-sm btn-primary">{{cities[0].name}}</button>
      <button class="btn btn-sm btn-dark">{{cities[0].days}}</button>
      <button class="btn btn-sm btn-primary">{{cities[0].thingsToDo}}</button>
      <button class="btn btn-sm btn-dark">{{cities[0].images}}</button>-->
    </div>
  </div>
</template>

<script>
import DetailCard from "@/components/Cards/DetailCard";

export default {
  components: {
    DetailCard,
  },
  data() {
    return {
      // title: "1",
      // overview: "",
      // cities: [],
      // totalPrice: "",
      // loadedItinerary: "",
      // days: "2",
      // images: [],
    };
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
  // mounted() {
  //   console.log(this.loadedItinerary);
  //   this.cities = this.loadedItinerary.cities;
  // },
};
</script>

<style>
.bg {
  background-color: white;
}
</style>