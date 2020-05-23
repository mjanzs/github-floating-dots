import Store from "../store/store";

global.browser = require('webextension-polyfill');

import Vue from 'vue';
import App from './App';

let store = new Store('settings', {
  'accessToken': ''
});

Vue.mixin({
  methods: {
    storeSet(name, value) {
      return store.set(name, value);
    },
    storeGet(name) {
      return store.get(name)
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
