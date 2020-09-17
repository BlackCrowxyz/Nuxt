// import axios from "@nuxtjs/axios";

export const state = () => ({
  counter: 1,
  cities: [],
  info: []
});

//Syncronous
export const mutations = {
  //use 'commit()' in actions to mutate data
  setCounter(state, payload) {
    state.counter += payload;
  },
  setCities(state, info) {
    this.state.info = info;
    this.state.cities = info.map(i => {
      return i.name;
    });
  }
};

//Asyncronous - Axios & Fetch goes here
export const actions = {
  // call it in another component -> created()
  // this.$store.dispatch('setX', this.i)
  setCounter({ commit }, payload) {
    commit("setCounter", payload);
  },
  asyncGetCities({ commit }, payload) {
    this.$axios
      .get(payload)
      .then(res => {
        commit("setCities", res.data.data);
      })
      .then(err => {
        if (err) console.log(err);
      });
  }
};

export const getters = {
  //this.$store.getters.getCounter
  getCounter(state) {
    return state.counter;
  },
  getCities(state) {
    return state.cities;
  }
};
