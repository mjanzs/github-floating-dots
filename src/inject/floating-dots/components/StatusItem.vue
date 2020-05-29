<template>
  <li>
    <a :href="status.url" :title="status.context" :style="style" class="btn-floating btn-small">
      <i class="material-icons">
        {{ icon(status.name) }}
      </i>
    </a>
  </li>
</template>

<script>
  import { states, icons } from '../styles';

  export default {
    props: [
      'status'
    ],
    computed: {
      style() {
        return {
          'background-color': states[this.status.state]
        }
      }
    },
    methods: {
      icon(val) {
        return icons[val];
      }
    }
  }
</script>
