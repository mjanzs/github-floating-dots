<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input
              v-model="accessToken"
              id="access_token"
              type="text"
              placeholder="Access token">
          <label for="access_token">Github Access Token</label>
        </div>
        <a href="https://github.com/settings/tokens/new?scopes=repo&description=floating-dots">
          Github Access Tokens
        </a>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        accessToken: this.storeGet('accessToken')
      }
    },
    watch: {
      accessToken(val) {
        this.storeSet('accessToken', val)
      }
    }
  }
</script>
