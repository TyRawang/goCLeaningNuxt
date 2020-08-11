<template>
    <section>
      <TheResidentialBanner/>
      <TheResidentialSectionOne/>
      <TheResidentialSectionTwo/>
      <RequestCallBack/>
      <TheResidentialSectionThree/>
      
    
    </section>
</template>
<script>
import TheResidentialBanner from "@/components/residential/TheResidentialBanner";
import TheResidentialSectionOne from "@/components/residential/TheResidentialSectionOne";
import TheResidentialSectionTwo from "@/components/residential/TheResidentialSectionTwo";
import RequestCallBack from "@/components/shared/RequestCallBack";
import TheResidentialSectionThree from "@/components/residential/TheResidentialSectionThree"







export default {
  components: { TheResidentialBanner, TheResidentialSectionOne, TheResidentialSectionTwo, RequestCallBack, TheResidentialSectionThree }
}
</script>
