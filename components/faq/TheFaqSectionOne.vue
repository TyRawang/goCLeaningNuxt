<template>
  <section>
    <div class="faq-main container">
      <div>
        <h5>EXPERTS IN FIELD</h5>
        <h4>Here Are Some Answers</h4>
        <p>Here are the most Frequently Asked Questions (FAQ) from our customers.
          If this do not clarify or resolve your issue please contact.
        </p>
      </div>

      <div>
        <FaqAccordion
          :items="accordionItems"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheFaqSectionOne',
  data(){
    return {
      accordionItems: [
        {
          title: 'Are our cleaning product safe?',
          value: 'All our cleaning products are safe and is something we would use in our own home. Safety of your customer and employee is our number one priority.',
          category: 'All'
        },
        {
          title: 'How much notice do you need?',
          value: 'The earlier you book the better it is for both us and the customer. That is because we can plan our cleaning better, but we do last minute booking if our schedule allows.',
          category: 'All'
        },
        {
          title: 'How do you take your payment?',
          value: 'We accept payment through, Cash, Credit Card, Debit Card, Paypal, & E-transfer.',
          category: 'All'
        },
        {
          title: 'Are our cleaning product safe?',
          value: 'All our cleaning products are safe and is something we would use in our own home. Safety of your customer and employee is our number one priority.',
          category: 'Insurance'
        },
        {
          title: 'How do you take your payment?',
          value: 'We accept payment through, Cash, Credit Card, Debit Card, Paypal, & E-transfer.',
          category: 'Payments'
        },
        {
          title: 'How much notice do you need?',
          value: 'The earlier you book the better it is for both us and the customer. That is because we can plan our cleaning better, but we do last minute booking if our schedule allows.',
          category: 'Others'
        },

      ]
    }
  }
}
</script>

<style scoped>

.faq-main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  margin-top: 6rem;
  margin-bottom: 15rem;
  /* margin-right: 3rem; */

}

.faq-main h5 {
  font-family: Dosis;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 48px;
  display: flex;
  align-items: center;
  letter-spacing: 5px;
  color: #C4C4C4;
}

.faq-main h4 {

  font-family: Dosis;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #32B8E9;

}



</style>
