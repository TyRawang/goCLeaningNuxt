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
name: "vanverour",
  components: {TheQuoteRequestInfoSection, ThePageBannerSection},

  data(){
    return {
      bannerPageMaterials: {
        bannerImage: '/img/go-cleaning-vancouver-banner-bg.png',
        pageTitle: 'Vancouver',
        pageSubtitle: 'Perfection is our passion',
        hasButton: false
      }
    }
  }, 

  head() {
    return {
      title: 'Best Dental Clinic Cleaning in Vancouver | Go Cleaning Vancouver', 
      meta: [{
        hid: 'description',
        name: 'description', 
        content: 'Cleanliness is a top priority for any medical clinic. Go Cleaning has years expereince cleaning medical environment and understand the importance of cleaning!'
        // content: 'Let us be your perfect solution for you residential & commercial cleaning needs. Our pricing is Affordable, order your FREE QUOTE today!'
      }]
    }
  }
}
</script>

<style scoped>

</style>
