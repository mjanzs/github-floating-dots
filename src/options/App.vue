<template>
  <settings-form></settings-form>
</template>

<script>
  import SettingsForm from './components/SettingsForm'

  export default {
    name: 'App',
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
