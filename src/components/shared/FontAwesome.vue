<template>
  <i :class="`${icon[0]} fa-${icon[1]} ${pulsed}`"></i>
</template>

<script>
import '@fortawesome/fontawesome-free/js/all'
export default {
  name: 'FontAwesome',
  props: {
    icon: {
      type: Array,
      default: () => []
    },
    pulse: Boolean
  },
  computed: {
    pulsed () {
      return this.pulse ? 'fa-pulse' : ''
    }
  }
}
</script>

<style scoped>

</style>
