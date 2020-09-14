<template>
  <div class="home py-5">
    <div class="container">
      <div class="row" v-if="items">
        <div class="col-sm-6 col-lg-4"
             v-for="item in items"
             :key="item.id">
          <Card :item="item" @setLike="setLike(item.id)"/>
        </div>
      </div>
      <div v-else class="text-center mt-5">
        <font-awesome :icon="['fas', 'spinner']" pulse></font-awesome>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Card
  },
  computed: mapGetters({
    items: 'OBJECTS'
  }),
  mounted () {
    this.GET_OBJECTS()
  },
  methods: {
    ...mapActions(['GET_OBJECTS', 'GET_OBJECTS_STATE']),
    setLike (id) {
      this.GET_OBJECTS_STATE(id - 1)
    }
  }
}
</script>
<style lang="sass">
</style>
