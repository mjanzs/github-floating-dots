<template>
  <div>
    <floating-action-button ref="fab">
      <a class="btn-floating red">
        <i class="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li v-for="status in statuses">
          <a :href="status.url" class="btn-floating btn-small red">
            <i class="material-icons">
              insert_chart
            </i>
          </a>
        </li>
      </ul>
    </floating-action-button>
  </div>
</template>

<script>
  import FloatingActionButton from './FloatingActionButton';
  import GhClient from "../../classes/GhClient";
  import Statuses from "../../classes/gh/Statuses";

  const ghClient = new GhClient();

  export default {
    data() {
      return {
        statuses: []
      }
    },
    asyncComputed: {
      async statuses() {
        const pullRequest = this.$root.$data.pullRequest;
        const statusesResponse = await ghClient.getChecks(pullRequest.octokitRequest);
        return Statuses.statusesFromGhResponse(statusesResponse).currentStatus();
      }
    },
    watch: {
      statuses(val) {
        if (val) {
          this.$nextTick(() => {
            this.$refs.fab.attach();
          });
        }
      }
    },
    components: {
      FloatingActionButton
    }
  }
</script>

<style>

</style>
