<template>
  <div>
    <div @onlick="onclick"
        class="fixed-action-btn" ref="btn">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import M from 'materialize-css/dist/js/materialize'
  export default {
    data() {
      return {
        open: true
      }
    },
    methods: {
      onclick() {
        this.open = !this.open;
      }
    },
    mounted() {
      this.button = M.FloatingActionButton.init(this.$refs.btn, {
        direction: 'left',
        hoverEnabled: false,
        isOpen: this.opacity, // todo cookie
      });
      this.button.open()
    }
  }
</script>

<style lang="scss">
  .fixed-action-btn {
    position: relative !important;
    padding: 0 0 10px 0 !important;
    ul {
      right: 45px !important;
      li {
        margin: 7.5px 7.5px 0 0 !important;
      }
    }
  }
</style>
