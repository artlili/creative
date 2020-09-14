<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="layout">
        <router-view/>
      </component>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      return this.$route.meta.layout || 'default-layout'
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
