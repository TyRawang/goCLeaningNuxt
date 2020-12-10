<template>
    <section>
      <TheCommercialBanner/>
      <TheCommercialFirstSection/>
      <TheCommercialSecondSection/>
      <TheCommercialThirdSection/>
      <TheCommercialFouthSection/>
      <TheCommercialFifthSection/>
    </section>
</template>
<script>
import TheCommercialBanner from "@/components/commercial/TheCommercialBanner";
import TheCommercialFirstSection from "@/components/commercial/TheCommercialFirstSection";
import TheCommercialSecondSection from "@/components/commercial/TheCommercialSecondSection";
import TheCommercialThirdSection from "@/components/commercial/TheCommercialThirdSection";
import TheCommercialFouthSection from "@/components/commercial/TheCommercialFouthSection";
import TheCommercialFifthSection from "@/components/commercial/TheCommercialFifthSection";




export default {
  components: { TheCommercialBanner, TheCommercialFirstSection, TheCommercialSecondSection, 
                TheCommercialThirdSection, TheCommercialFouthSection, TheCommercialFifthSection},
  head() {
    return {
      title: 'Affordable & Best Commercial Cleaning in Calgary | Go Cleaning', 
      meta: [{
        hid: 'description',
        name: 'description', 
        content: 'Need Quality Cleaning Service on tight budget, let us be your solution. We are affordable & the Best in the Cleaning Business.'
      }]
    }
  }

}
</script>
