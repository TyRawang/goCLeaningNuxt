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
  RequestCallBack, TheCarpetSectionThree },
  head() {
    return {
      title: 'Affordable Carpet Cleaning & Upholstery | Go Cleaning', 
      meta: [{
        hid: 'description',
        name: 'description', 
        content: 'Best Carpet Cleaning & Upholstery in Calgary. Go Cleaning provide affordable price with impeccable attention to detail. Your carpet will feel and smell like again!'
      }]
    }

  }
}
</script>
