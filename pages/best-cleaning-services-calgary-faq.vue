<template>
    <section>
      <TheFaqBanner/>
      <TheFaqSectionOne/>
    </section>
</template>
<script>
import TheFaqBanner from "@/components/faq/TheFaqBanner";
import TheFaqSectionOne from "@/components/faq/TheFaqSectionOne";


export default {
  components: { TheFaqBanner, TheFaqSectionOne },
  head() {
    return {
      title: 'Have Questions about Cleaning and Go Cleaning? | FAQ', 
      meta: [{
        hid: 'description',
        name: 'description', 
        content: 'Just a few reasons to hire Go Cleaning. We offer  affordable pricing. Read our FAQ today and call us for a FREE QUOTE!'
        // content: 'Let us be your perfect solution for you residential & commercial cleaning needs. Our pricing is Affordable, order your FREE QUOTE today!'
      }]
    }

  }
}
</script>
