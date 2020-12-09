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
                TheCommercialThirdSection, TheCommercialFouthSection, TheCommercialFifthSection}
}
</script>
