<template>
  <div class="card mb-4 shadow-sm">
    <div
      class="card-image"
      :style="{ backgroundImage: `url(${require('../assets/img/' + item.img)})` }"></div>
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <router-link class="h5 card-title"
                     :to="`/listing/${item.id}`">
          {{item.title}}
        </router-link>
        <v-likes size="14" :isLiked="item.like" @onClick="$emit('setLike')"/>
      </div>
      <p class="card-text">{{item.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  &-image
    display: block
    width: 100%
    height: 200px
    background: no-repeat center / cover

  &-title
    +truncate(100%)
    flex-basis: 83%

  &-text
    +line-cap(2)

</style>
