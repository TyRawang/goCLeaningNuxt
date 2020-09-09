<template>
  <section class="go-cleaning-page">
    <ThePageBannerSection :pageMaterials="bannerPageMaterials" />

    <TheGenericSection :reviewsOrTestimonial="false" :genericSectionContent="sectionContentThree"/>
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
        bannerImage: '/images/bg/rawpixel-679094-unsplash.jpg',
        pageTitle: 'Move In/Out',
        pageSubtitle: 'Perfection is our passion',
        hasButton: false
      },

      sectionContentThree: {
        fullWidth: true,
        mainHeading: 'Leave It To The Professionals',
        mainParagraphs: [
          'Picture Perfect Cleaning has the training and dedication to get the job done right, so that you can focus on yours.',
          'Contact us today to find out how we can help your business thrive.'
        ],
        hasExtendedContent: false,
        displaySectionBtn: true,
        sectionBtnText: 'Contact Go Cleaning'
      },
    }
  }
}
</script>

<style scoped>

</style>
