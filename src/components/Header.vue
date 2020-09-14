<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
      <router-link class="navbar-brand" to="/">Creative app</router-link>
      <button class="navbar-toggler"
              type="button"
              @click="showNavigation"
              v-click-outside="hideNavigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse"
           :class="{'show': navigationIsShow}">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"
              v-for="(link, idx) in links"
              :key="idx"
              :class="{'active' : $route.path === link.url}">
            <router-link class="nav-link text-white" :to="link.url">{{link.name}}</router-link>
          </li>
        </ul>
        <div class="navbar-login mt-2 mt-md-0">
          <router-link class="text-light" to="/">
            <span class="d-md-none">Login</span>
            <font-awesome class="login-icon" :icon="['fas', 'user']"></font-awesome>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navigationIsShow: false,
      links: [
        {
          name: 'About',
          url: '/about'
        },
        {
          name: 'Contacts',
          url: '/contacts'
        }
      ]
    }
  },
  methods: {
    showNavigation () {
      this.navigationIsShow = !this.navigationIsShow
    },
    hideNavigation () {
      this.navigationIsShow = false
    }
  }
}
</script>

<style lang="sass" scoped>
.nav-item
  position: relative
  &.active
    &:after
      content: ''
      position: absolute
      height: 3px
      width: 100%
      left: 0
      bottom: -8px
      background: darken($primary, 25)
      +mq('sm', max)
        background: transparent
.login-icon
  +mq('sm', max)
    display: none
</style>
