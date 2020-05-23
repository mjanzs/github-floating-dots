import Vue from "vue";

import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import 'framework7/css/framework7.bundle.css';

Framework7.use(Framework7Vue);

import FloatingDots from "./floating-dots/FloatingDots";

export default function (id) {
  new Vue({
    el: `#${id}`,
    render: h => h(FloatingDots)
  })
}
