<template>
  <f7-app :params="f7params">
    <f7-view main>
      <!-- Initial Page -->
      <f7-page>
        <settings-form></settings-form>
      </f7-page>
    </f7-view>
  </f7-app>
</template>

<script>
  import SettingsForm from './components/SettingsForm'

  export default {
    name: 'App',
    data() {
      return {
        f7params: {
          name: 'Github Floating Dots',
          id: 'com.github.mjanzs.github-floating-dots'
        }
      }
    },
    components: {
      SettingsForm
    }
  };
</script>

<style scoped>
  p {
    font-size: 20px;
  }
</style>
