import Store from "../store/store";

global.browser = require('webextension-polyfill');

import Vue from 'vue';
import App from './App';

import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import 'framework7/css/framework7.bundle.css';

Framework7.use(Framework7Vue);

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
