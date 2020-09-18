export const state = () => ({
  cities: [], //Destinations
  selectedCities: [],
  selectedMonths: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ],
  selectedWeek: "",
  selectedPassenger: "",
  selectedBudget: "",
  info: [], //Destinations [name, slug, latitude, longtitude]
  itineraries: [],
  singleItinerary: ""
});

//Syncronous
//use 'commit()' in actions to mutate data
export const mutations = {
  setCities(state, info) {
    state.info = info;
    state.cities = info.map(i => {
      return i.name;
    });
  },
  setitineraries(state, itineraries) {
    state.itineraries = itineraries;
  },
  setSelectedCities(state, cities) {
    state.selectedCities = cities;
  },
  setSelectedMonths(state, months) {
    state.selectedMonths = months;
  },
  setSelectedWeek(state, week) {
    state.selectedWeek = week;
  },
  setSelectedPassenger(state, passenger) {
    state.selectedPassenger = passenger;
  },
  setSelectedBudget(state, budget) {
    state.selectedBudget = budget;
  },
  setSingleItinerary(state, singleItinerary) {
    state.singleItinerary = singleItinerary;
  }
};

//Asyncronous - Axios & Fetch goes here
// call it in another component -> created()
// this.$store.dispatch('setX', this.i)
export const actions = {
  asyncGetCities({ commit }, payload) {
    this.$axios
      .get(payload)
      .then(res => {
        commit("setCities", res.data.data);
      })
      .then(err => {
        if (err) console.log(err);
      });
  },
  asyncGetItineraries({ commit }, payload) {
    let cities = [];
    this.state.selectedCities.forEach((element, i) => {
      if (element) cities.push(this.state.info[i].slug);
    });
    let num_passengers = this.state.selectedPassenger.indexOf(true);
    let query = {
      cities: cities,
      //TODO
      // startDate: this.state.selectedMonths[0],
      passengersCount: num_passengers == -1 ? null : num_passengers
    };
    //TODO : check wheather user just clicked or told some parameters
    this.$axios
      .get(payload, { params: query })
      // .get(payload)
      .then(res => {
        commit("setitineraries", res.data.data);
      })
      .then(err => {
        if (err) console.log(err);
      });
  },
  async asyncGetSingleItinerary({ commit }, payload) {
    //TODO : check wheather user just clicked or told some parameters
    this.$axios
      .get(payload)
      .then(res => {
        commit("setSingleItinerary", res.data.data);
      })
      .then(err => {
        if (err) console.log(err);
      });
  },
  setSelectedCities({ commit }, payload) {
    commit("setSelectedCities", payload);
  },
  setSelectedMonths({ commit }, payload) {
    commit("setSelectedMonths", payload);
  },
  setSelectedWeek({ commit }, payload) {
    commit("setSelectedWeek", payload);
  },
  setSelectedPassenger({ commit }, payload) {
    commit("setSelectedPassenger", payload);
  },
  setSelectedBudget({ commit }, payload) {
    commit("setSelectedBudget", payload);
  }
};

//this.$store.getters.getCounter
export const getters = {
  getCities(state) {
    //Api Cities
    return state.cities;
  },
  getItineraries(state) {
    //Api itineraries
    return state.itineraries;
  },
  getSelectedCities(state) {
    return state.selectedCities;
  },
  getSelectedMonths(state) {
    return state.selectedMonths;
  },
  getSelectedWeek(state) {
    return state.selectedWeek;
  },
  getSelectedPassenger(state) {
    return state.selectedPassenger;
  },
  getSelectedBudget(state) {
    return state.selectedBudget;
  },
  getSingleItinerary(state) {
    return state.singleItinerary;
  }
};
