<template>
  <small class="text-muted likes"
         @click="$emit('onClick')">
    <span :class="{'hidden': !isLiked}">
      <font-awesome :icon="['fas', 'heart']"
                    :style="`font-size: ${size}px`"></font-awesome>
    </span>
    <span :class="{'hidden': isLiked}">
      <font-awesome :icon="['far', 'heart']"
                    :style="`font-size: ${size}px`"></font-awesome>
    </span>
  </small>
</template>

<script>
export default {
  name: 'Likes',
  data () {
    return {
      like: 0
    }
  },
  props: {
    size: String,
    isLiked: Boolean
  }
}
</script>

<style lang="sass" scoped>
  .likes
    cursor: pointer
    margin-top: -2px
    > .hidden
      display: none
</style>
