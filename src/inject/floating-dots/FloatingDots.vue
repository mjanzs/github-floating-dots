<template>
  <div class="github-floating-dots">
    <review-actions></review-actions>
  </div>
</template>

<script>
import ReviewActions from "./components/ReviewActions";

export default {
  components: {
    ReviewActions
  }
}
</script>

<style lang="scss">
  .github-floating-dots {
    @import 'materialize-css/sass/materialize.scss';
  }
</style>

