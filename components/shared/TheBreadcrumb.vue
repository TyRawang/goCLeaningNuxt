<template>
  <!--Breadcrumbs Area Start-->
  <div v-show="this.$route.path !== '/'" class="main-breadcrumb-area">
    <div class="container">
      <h3>Breadcrumb area</h3>
      <div>
        <nuxt-link to="/">Home</nuxt-link>
        <span> / </span>
        <nuxt-link v-show="this.$route.name === 'blog-slug'" to="/blog">blog</nuxt-link>
        <span v-show="this.$route.name === 'blog-slug'"> / </span>
        <nuxt-link :to="this.$route.path" disabled="true">{{ this.$route.name === 'blog-slug' ?this.$route.params.slug : this.$route.name }}</nuxt-link>
      </div>
    </div>
  </div>
  <!--Breadcrumbs Area End-->
</template>

<script>
export default {
  name: "TheBreadcrumb",

  mounted() {
    // this.checkRoute()
    // console.log(this.$route.params)
  },

  methods: {
    // checkRoute(){
    //   if(this.$route.fullPath.includes('/')){
    //     let pathParts = this.$route.fullPath.split('/')
    //     console.log(pathParts)
    //     console.log(this.$router)
    //   }
    // }
  }
}
</script>

<style scoped>

</style>
