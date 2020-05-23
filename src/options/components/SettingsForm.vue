<template>
  <f7-list form inline-labels no-hairlines-md>
    <f7-list-input
        :value="accessToken"
        @input="accessToken = $event.target.value"
        label="Github Access token"
        type="text"
        placeholder="Access token"
        clear-button>
      <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      <span slot="info">
        <a href="https://github.com/settings/tokens/new?scopes=repo&description=octolenses">
          Github Access Tokens
        </a>
      </span>
    </f7-list-input>
  </f7-list>
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
