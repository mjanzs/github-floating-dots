<template>
  <li>
    <a @click.prevent.stop="window.location = status.url" :href="status.url" :title="status.context" :style="style" class="btn-floating btn-small">
      <i class="material-icons">
        {{ icon(status.name) }}
      </i>
    </a>
  </li>
</template>

<script>
  import { statusColors, statusIcons } from '../styles';

  export default {
    props: [
      'status'
    ],
    computed: {
      style() {
        return {
          'background-color': statusColors[this.status.state]
        }
      }
    },
    methods: {
      icon(val) {
        return statusIcons[val];
      }
    }
  }
</script>
