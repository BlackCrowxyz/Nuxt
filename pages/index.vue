<template>
  <div>
    <h5 class="px-3 pt-2 text-light">IRAN TRIP PLANNER</h5>
    <div class="row mx-0 mt-5">
      <div class="col-2"></div>
      <div class="col-7">
        <div class="text-light">
          <h2 class="p-3 mt-5">Plan your trip to Iran</h2>
          <p class="px-3">
            Find or create your best plan to visit Iran based on +300 plans designed
            by professional tour guides and travelers.
          </p>
        </div>
        <div class="col-3"></div>
      </div>
    </div>

    <div class="row center-box p-2 m-0">
      <div class="col-2" />
      <div class="col-7">
        <!-- Searchbar -->
        <Searchbar
          :cities="loadedCities"
          :names="names"
          :weeks="weeks"
          :passengers="passengers"
          :budgets="budgets"
        />
      </div>
      <div class="col-3"></div>
    </div>

    <div>{{this.$store.getters.getCities}}</div>
  </div>
</template>

<script>
import Searchbar from "@/components/Searchbar/Searchbar";
export default {
  components: {
    Searchbar,
  },
  data() {
    return {
      loadedCities: [],
      names: ["Week", "Passenger", "Budget"],
      weeks: ["1 week", "2 weeks", "4 weeks"],
      passengers: [
        "1 passenger",
        "2 passengers",
        "3 passengers",
        "4 passengers",
        "5 passengers",
        "6 passengers",
        "7 passengers",
        "8 passengers",
        "9 passengers",
        "10  passengers",
      ],
      budgets: ["100$", "200$", "300$", "400$", "500$", "600$"],
    };
  },
  created() {
    const api = "https://1stquest.com/api/plan/v1/cities";
    this.$store.dispatch("asyncGetCities", api);
  },
  beforeUpdate() {
    this.loadedCities = this.$store.getters.getCities;
    const api = "https://1stquest.com/api/plan/v1/itineraries";
    this.$store.dispatch("asyncGetItineraries", api);
  },
};
</script>

<style>
body {
  background-image: url("~assets/bg.jpg");
  background-size: cover;
}

.center-box {
  background-color: white;
  width: 100%;
  position: absolute;
}
</style>
