import Vue from "vue";

import FloatingDots from "./floating-dots/FloatingDots";

export default function (id) {
  new Vue({
    el: `#${id}`,
    render: h => h(FloatingDots)
  })
}
