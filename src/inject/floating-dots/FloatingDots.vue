<template>
  <div class="github-floating-dots">
    <changed-files-actions></changed-files-actions>
    <review-actions></review-actions>
  </div>
</template>

<script>
import ReviewActions from "./components/ReviewActions";
import StatusActions from "./components/StatusActions";
import ChangedFilesActions from "./components/ChangedFilesActions";
import ThreadsActions from "./components/ThreadsActions";

export default {
  data() {
    return {
      page: this.$root.$data.pullRequest.page
    }
  },
  components: {
    ReviewActions,
    StatusActions,
    ChangedFilesActions,
    ThreadsActions
  }
}
</script>

<style lang="scss">
  .github-floating-dots {
    @import 'materialize-css/sass/materialize.scss';
  }

  .github-floating-dots {
    position: fixed;
    bottom: -14px;
    right: 0;
    padding-top: 15px;
    margin-bottom: 0px;
    z-index: 997;
  }
</style>

