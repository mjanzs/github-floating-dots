import Vue from "vue";
import AsyncComputed from 'vue-async-computed'

import FloatingDots from "../floating-dots/FloatingDots";
import "materialize-css";

Vue.use(AsyncComputed)

export default function (id, pullRequest) {
  new Vue({
    el: `#${id}`,
    render: h => h(FloatingDots),
    data: {
      pullRequest
    }
  })
}
