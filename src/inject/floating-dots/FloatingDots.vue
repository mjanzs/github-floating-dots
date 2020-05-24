<template>
  <div class="github-floating-dots">
    <review-actions></review-actions>
    <check-actions></check-actions>
  </div>
</template>

<script>
import ReviewActions from "./components/ReviewActions";
import CheckActions from "./components/CheckActions";

export default {
  components: {
    ReviewActions,
    CheckActions
  }
}
</script>

<style lang="scss">
  .github-floating-dots {
    @import 'materialize-css/sass/materialize.scss';
  }

  .github-floating-dots {
    position: fixed;
    bottom: 23px;
    right: 0;
    padding-top: 15px;
    margin-bottom: 0px;
    z-index: 997;
  }
</style>

