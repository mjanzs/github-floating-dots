<template>
  <div>
    <floating-action-button ref="fab">
      <a class="btn-floating purple darken-4">
        <i class="large material-icons">
          preview
        </i>
      </a>
      <ul>
        <a @click.prevent.stop="markAllAsUnviewed"
           :style="{'background-color': colors.gray}"
           title="Mark as viewed"
           class="btn-floating btn-small">
          <i class="material-icons">
            clear
          </i>
        </a>
        <a @click.prevent.stop="markAllAsViewed"
           :style="{'background-color': colors.blue}"
           title="Mark as viewed"
           class="btn-floating btn-small">
          <i class="material-icons">
            library_add_check
          </i>
        </a>
      </ul>
    </floating-action-button>
  </div>
</template>

<script>
  import FloatingActionButton from './FloatingActionButton';
  import { colors } from '../styles'
  export default {
      computed: {
      colors() {
        return colors
      }
    },
    methods: {
      markAllAsViewed() {
        document.querySelectorAll('.js-reviewed-checkbox').forEach(input => input.checked || input.click());
      },
      markAllAsUnviewed() {
        document.querySelectorAll('.js-reviewed-checkbox').forEach(input => !input.checked || input.click());
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.fab.attach();
      });
    },
    components: {
      FloatingActionButton,
    }
  }
</script>

<style>

</style>
