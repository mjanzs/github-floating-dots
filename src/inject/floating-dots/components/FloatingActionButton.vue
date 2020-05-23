<template>
  <div>
    <div class="fixed-action-btn" ref="btn">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      window.M.FloatingActionButton.init(this.$refs.btn, {
        direction: 'left',
        isOpen: true, // todo cookie
      });
    }
  }
</script>

<style>

</style>
