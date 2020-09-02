<template>
  <section>
    <!-- <div class="intro container">
      <div class="intro-text">
        <h2>Here Are Some Answers</h2>
        <p>Here are the most Frequently Asked Questions (FAQ) from our customers.
          If this do not clarify or resolve your issue please contact
        </p>
      </div>
      <div class="faq-callback">
        <h3>Request a Callback</h3>
        <p>Give us your number to request a callback to discuss your cleaning. </p>
        <input type="tel" placeholder="YOUR PHONE NUMBER"  id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
      </div>
    </div> -->
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

.intro {
  display: grid;
  grid-template-columns:  2fr 1fr;
  margin-top: 4rem;
}

.intro p {
  font-family: Dosis;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
}

.intro-text {
  margin-right: 12rem;
}

.faq-callback {
  background-color: var(--secondary-colour);
  border-radius: 1rem;
  padding: 2rem
}

.faq-callback h3 {
  font-family: Dosis;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  color: #FFFFFF;
  text-align: center;
}

.faq-callback p {
  font-family: Dosis;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  /* display: flex; */
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  padding: 0.5rem;

}

.faq-callback input {
  width: 100%;
  border-radius: 1rem;
  border-width: 0;
  height: 2rem;
}
.faq-callback input::placeholder {
  color: grey;
  opacity: 0.7;
  text-align: center;
}

.faq-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
