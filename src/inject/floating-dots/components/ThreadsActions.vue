<template>
  <div>
    <floating-action-button ref="fab">
      <a class="btn-floating purple darken-4">
        <i class="large material-icons">
          comment
        </i>
      </a>
      <ul>
        <li>
          <a @click.prevent.stop=""
             :style="{'background-color': colors.green}"
             title="Resolved"
             class="btn-floating btn-small">
            {{ resolved }}
            <!--<i class="material-icons">
              check_box_outline_blank
            </i>-->
          </a>
        </li>
        <li>
          <a @click.prevent.stop=""
             :style="{'background-color': colors.gray}"
             title="Unresolved"
             class="btn-floating btn-small">
            <span v-if="unresolved === 0">
              <i class="material-icons">
                check_box
              </i>
            </span>
            <span v-else>
              {{ unresolved < 10 ? unresolved : '9+' }}
            </span>
          </a>
        </li>
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
      },
      resolved: {
        cache: false,
        get() {
          return document.querySelectorAll('.js-resolvable-timeline-thread-container[data-resolved="true"]').length
        }
      },
      unresolved: {
        cache: false,
        get() {
          return document.querySelectorAll('.js-resolvable-timeline-thread-container[data-resolved="false"]').length
        }
      }
    },
    mounted() {
      setInterval(() => {
        this.$forceUpdate();
      }, 1000);

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
