<template>
    <section>
      <TheContactUsBanner/>
      <TheContactUsSectionOne/>
      <RequestCallBack/>
      
    
    </section>
</template>
<script>
import TheContactUsBanner from "@/components/contact-us/TheContactUsBanner";
import TheContactUsSectionOne from "@/components/contact-us/TheContactUsSectionOne";
import RequestCallBack from "@/components/shared/RequestCallBack";







export default {
  components: { TheContactUsBanner, TheContactUsSectionOne,
  RequestCallBack },
  head() {
    return {
      title: 'Contact Us | Go Cleaning', 
      meta: [{
        hid: 'description',
        name: 'description', 
        content: 'Feel free to ask us any questions. We will definitely provide you an awesome solution. Hope to hear from you soon!'
      }]
    }
  }
}
</script>
