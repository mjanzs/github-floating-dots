import Vue from "vue";

import FloatingDots from "../floating-dots/FloatingDots";
import 'materialize-css';

export default function (id, pullRequest) {
  new Vue({
    el: `#${id}`,
    render: h => h(FloatingDots),
    data: {
      pullRequest
    }
  })
}
