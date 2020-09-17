<template>
  <div>
    <div class="row m-0">
      <div class="col-2"></div>
      <div class="col-7">
        <div class="text-light">
          <h2 class="h2 p-3">Plan your trip to Iran</h2>
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
        <Searchbar :cities="loadedCities" />
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
    };
  },
  created() {
    const api = "https://1stquest.com/api/plan/v1/cities";
    this.$store.dispatch("asyncGetCities", api);
  },
  beforeUpdate() {
    this.loadedCities = this.$store.getters.getCities;
  },
};
</script>

<style>
.center-box {
  background-color: white;
  width: 100%;
  position: absolute;
}

.container {
  /* background-image: url('/assets/bg.jpg'); */
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
