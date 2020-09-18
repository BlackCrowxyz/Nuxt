<template>
  <div class="bg">
    <h5 class="h5 px-3 pt-2 text-dark">IRAN TRIP PLANNER</h5>
    <hr class="my-1" />
    <div class="row px-2 m-0">
      <div class="col-12">
        <!-- Searchbar -->
        <Searchbar
          :cities="loadedCities"
          :names="names"
          :weeks="weeks"
          :passengers="passengers"
          :budgets="budgets"
        />
      </div>
    </div>
    <div class="row mx-0 pt-2">
      <div class="col-4">
        <!-- image cards -->
        <div v-for="(item, i) in loadedItineraries" :key="i">
          <Card
            @selectedSlug="showContent($event)"
            :images="item.cities[0].images"
            :slug="item.slug"
            :title="item.title"
            :budget="item.totalPrice.min"
          />
        </div>
      </div>
      <div class="col-8">
        <div v-if="doShow">
          {{content.blogUrl}}
          <br />
          {{content.overview}}
          <br />
          {{content.slug}}
          <br />
          {{content.title}}
          <br />
          <!-- min, max -->
          {{content.totalPrice}}
          <br />
          <span class="btn btn-primary">{{content.cities[0].days}}</span>
          <!-- src, alt, title -->
          <span class="btn btn-dark">{{content.cities[0].images}}</span>

          <span class="btn btn-primary">{{content.cities[0].landingUrl}}</span>
          <span class="btn btn-dark">{{content.cities[0].name}}</span>

          <!-- type, price, duration, distant -->
          <span class="btn btn-primary">{{content.cities[0].nextTransportation}}</span> 

          <span class="btn btn-dark">{{content.cities[0].services}}</span>
          <span class="btn btn-primary">{{content.cities[0].slug}}</span>
          <span class="btn btn-dark">{{content.cities[0].thingsToDo}}</span>
          <span class="btn btn-primary">{{content.cities[0].latitude}}</span>
          <span class="btn btn-dark">{{content.cities[0].longitude}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from "@/components/Searchbar/Searchbar";
import Card from "@/components/Cards/Card";

export default {
  components: {
    Searchbar,
    Card,
  },
  data() {
    return {
      doShow: false,
      content: "",
      loadedCities: [],
      loadedItineraries: [],
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
  methods: {
    showContent(slug) {
      this.doShow = true;
      this.loadedItineraries.forEach((i) => {
        if (i.slug == slug) this.content = i;
      });
      console.log(this.content);
    },
  },
  created() {
    this.loadedCities = this.$store.getters.getCities;
    this.loadedItineraries = this.$store.getters.getItineraries;
  },
};
</script>

<style scoped>
hr {
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
.bg {
  background-color: white;
}
</style>