import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import {
  DateTime
} from "luxon";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    time: [],
    loading: false
  },
  getters: {
    time: state => state.time,
    loading: state => state.loading
  },
  mutations: {
    getTime: (state, payload) => {
      state.time = payload;
    },
    loading: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    async times({
      commit
    }) {
      try {
        const data = await axios
          .get("https://worldtimeapi.org/api/timezone/Europe/Moscow");
        let now = DateTime.fromISO(data.data.datetime);
        commit("getTime", now);
        commit("loading", true);
      } catch (err) {
        console.log(err);
        commit("loading", false);
      }
    },
  },
  modules: {}
});