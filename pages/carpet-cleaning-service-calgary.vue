<template>
    <section>
      <TheCarpetBanner/>
      <TheCarpetSectionOne/>
      <TheCarpetSectionTwo/>
      <RequestCallBack/>
      <TheCarpetSectionThree/>
      
    
    </section>
</template>
<script>
import TheCarpetBanner from "@/components/carpet/TheCarpetBanner";
import TheCarpetSectionOne from "@/components/carpet/TheCarpetSectionOne";
import TheCarpetSectionTwo from "@/components/carpet/TheCarpetSectionTwo";
import RequestCallBack from "@/components/shared/RequestCallBack";
import TheCarpetSectionThree from "@/components/carpet/TheCarpetSectionThree"







export default {
  components: { TheCarpetBanner, TheCarpetSectionOne, TheCarpetSectionTwo, 
  RequestCallBack, TheCarpetSectionThree }
}
</script>
