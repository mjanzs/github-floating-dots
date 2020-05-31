<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input
              v-model="accessToken"
              id="access_token"
              type="text"
              placeholder="Access token">
          <label for="access_token">Github Access Token</label>
          <a href="https://github.com/settings/tokens/new?scopes=repo&description=floating-dots">
            Get Github token
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <label>
            <input v-model="reverseTimeline"
                   id="reverse_timeline"
                   type="checkbox"
                   class="filled-in"/>
            <span>Reverse timeline</span>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <label>
            <input v-model="pullMergeOnTop"
                   id="pull_merge_on_top"
                   type="checkbox"
                   class="filled-in"/>
            <span>Pull on top</span>
          </label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import M from 'materialize-css/dist/js/materialize'


  export default {
    data() {
      return {
        accessToken: this.storeGet('accessToken'),
        reverseTimeline: this.storeGet('reverseTimeline'),
        pullMergeOnTop: this.storeGet('pullMergeOnTop')
      }
    },
    watch: {
      accessToken(val) {
        this.storeSet('accessToken', val)
      },
      reverseTimeline(val) {
        this.storeSet('reverseTimeline', val)
      },
      pullMergeOnTop(val) {
        this.storeSet('pullMergeOnTop', val)
      }
    }
  }
</script>
