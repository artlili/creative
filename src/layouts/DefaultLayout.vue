<template>
  <div class="layout d-flex flex-column h-100">
    <Header/>
    <main role="main" class="flex-shrink-0 pt-5">
      <transition name="fade" mode="out-in">
        <slot/>
      </transition>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped lang="sass">
  .layout
    min-height: 100vh
</style>
