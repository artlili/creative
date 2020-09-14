<template>
  <div class="not-found d-flex flex-column justify-content-center align-items-center h-100">
      <div class="h1">404</div>
      <p>page not found</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="sass" scoped>
  .not-found
    min-height: 60vh
    font-size: 150%
    .h1
      font-size: 600%
</style>
