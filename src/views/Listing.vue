<template>
  <div class="listing py-5">
    <div class="container">
      <div v-if="item">
        <img :src="`${require('../assets/img/' + item.img)}`" alt="">
        <div class="d-flex justify-content-between align-items-center mt-5">
          <h1 class="listing-title">{{item.title}}</h1>
          <v-likes size="24" :isLiked="item.like" @onClick="setLikes"/>
        </div>
        <address>{{item.address}}</address>
        <div>{{item.description}}</div>
      </div>
      <div v-else class="text-center mt-5">
        <font-awesome :icon="['fas', 'spinner']" pulse></font-awesome>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Listing',
  computed: {
    ...mapGetters({
      items: 'OBJECTS'
    }),
    itemId () {
      return +this.$route.params.id - 1
    },
    item () {
      const id = this.itemId
      return this.items[id]
    }
  },
  methods: {
    ...mapActions(['GET_OBJECTS', 'GET_OBJECTS_STATE']),
    setLikes () {
      this.GET_OBJECTS_STATE(this.itemId)
    }
  },
  mounted () {
    this.GET_OBJECTS()
  }
}
</script>

<style lang="sass" scoped>
.listing
  &-title
    flex-basis: 83%

</style>
