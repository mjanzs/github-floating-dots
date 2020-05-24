<template>
  <div class="github-floating-dots">
    <div class="fixed-action-btn" ref="btn">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import M from 'materialize-css/dist/js/materialize'
  export default {
    mounted() {
      M.FloatingActionButton.init(this.$refs.btn, {
        direction: 'left',
        isOpen: true, // todo cookie
      });
    }
  }
</script>

<style lang="scss">
  .github-floating-dots {
    @import 'materialize-css/sass/materialize.scss';
  }
</style>
