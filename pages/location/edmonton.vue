<template>
  <section class="go-cleaning-page">
    <ThePageBannerSection :pageMaterials="bannerPageMaterials" />

    <TheQuoteRequestInfoSection />
  </section>
</template>

<script>
import ThePageBannerSection from "@/components/shared/ThePageBannerSection";
import TheQuoteRequestInfoSection from "@/components/shared/TheQuoteRequestInfoSection";
export default {
name: "calgary",
  components: {TheQuoteRequestInfoSection, ThePageBannerSection},

  data(){
    return {
      bannerPageMaterials: {
        bannerImage: '/img/go-cleaning-edmonton-banner-bg.png',
        pageTitle: 'Edmonton',
        pageSubtitle: 'Perfection is our passion',
        hasButton: false
      }
    }
  },
  head() {
    return {
      title: 'Best Office Cleaning in Edmonton | Go Cleaning Edmonton', 
      meta: [{
        hid: 'description',
        name: 'description', 
        content: 'If you are looking for the best office cleaning, your search stops here! Go Cleaning is Affordable & Flexible. Request a FREE QUOTE for Commercial Cleaning today'
        // content: 'Let us be your perfect solution for you residential & commercial cleaning needs. Our pricing is Affordable, order your FREE QUOTE today!'
      }]
    }
  }
}
</script>

<style scoped>

</style>
