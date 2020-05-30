<template>
  <div>
    <floating-action-button ref="fab"> <!--v-if="statuses.length"-->
      <a class="btn-floating purple darken-4">
        <i class="large material-icons">
          fact_check
        </i>
      </a>
      <ul>
        <status-item v-for="status in statuses" :key="status.name" :status="status">
        </status-item>
      </ul>
    </floating-action-button>
  </div>
</template>

<script>
  import FloatingActionButton from './FloatingActionButton';
  import StatusItem from "./StatusItem";
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
      FloatingActionButton,
      StatusItem
    }
  }
</script>

<style>

</style>
