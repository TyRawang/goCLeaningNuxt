<template>
    <section>
      <TheHomeBanner/>
      <TheFirstSection/>
      <TheSecondSection/>
      <RequestCallBack/>
      <TheTestimonialSectionOne/>
    </section>
</template>
<script>
import TheHomeBanner from "@/components/index/TheHomeBanner";
import TheFirstSection from "@/components/index/TheFirstSection";
import TheSecondSection from "@/components/index/TheSecondSection";
import RequestCallBack from "@/components/shared/RequestCallBack";
import TheTestimonialSectionOne from "@/components/testimonial/TheTestimonialSectionOne"
export default {
  components: {TheSecondSection, TheFirstSection, TheHomeBanner, RequestCallBack,
                TheTestimonialSectionOne }
}
</script>
