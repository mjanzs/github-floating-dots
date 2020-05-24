<template>
  <div>
    <floating-action-button>
      <a class="btn-floating red">
        <i class="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li><a class="btn-floating btn-small red"><i class="material-icons">insert_chart</i></a></li>
        <li><a class="btn-floating btn-small yellow darken-1"><i class="material-icons">format_quote</i></a></li>
        <li><a class="btn-floating btn-small green"><i class="material-icons">publish</i></a></li>
        <li><a class="btn-floating btn-small blue"><i class="material-icons">attach_file</i></a></li>
      </ul>
    </floating-action-button>
  </div>
</template>

<script>
  import FloatingActionButton from './FloatingActionButton'

  export default {
    components: {
      FloatingActionButton
    }
  }
</script>

<style>

</style>
