<template>
  <section class="go-cleaning-page-banner" :style="pageBanner()">
    <div class="container page-title-holder">
      <h1>{{ pageMaterials.pageTitle }}</h1>
      <h3>{{ pageMaterials.pageSubtitle }}</h3>
      <button v-show="pageMaterials.hasButton" class="page-banner-btn">Request Quote</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ThePageBannerSection",

  props: {
    pageMaterials: {
      type: Object,
      required: true
    }
  },

  methods: {
    pageBanner() {
      let pageStyle = ''
      if(this.pageMaterials.bannerImage){
        pageStyle += 'background: url("' + this.pageMaterials.bannerImage + '") no-repeat center center;'
        pageStyle += 'background-size: cover;'
      }else {
        this.$toast.show('Need Banner Image. Please Provide a banner Image.')
      }

      return pageStyle
    }
  }
}
</script>

<style scoped>
.go-cleaning-page-banner {
  padding: 10rem 0;
}

.page-title-holder {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
}
.page-title-holder h1 {
  font-size: 3.5rem;
  font-weight: bold;
}

.page-title-holder h3 {
  font-size: 2rem;
  font-weight: bold;
}

.page-banner-btn {
  margin-right: 0;
  padding: 1rem 3rem;
  margin-top: 2rem;
  background-color: #92d102;
  color: black;
  border-radius: 10px;
}
</style>
