<template>
  <section class="container">
    <h2>Tell Us About Your Business</h2>
    <form>
      <label for="client-name">Name *
          <input type="text" id="client-name" placeholder="Enter your name please">
      </label>
      <label for="client-company-name">Company Name *
        <input type="text" id="client-company-name" placeholder="Enter your company name please">
      </label>
      <label for="client-address">Address *
        <input type="text" id="client-address" placeholder="Enter your address please">
      </label>
      <label for="client-phone">Phone *
        <input type="text" id="client-phone" placeholder="Enter your phone number please">
      </label>
      <div>
        <label for="toronto">Toronto
          <input type="radio" id="toronto" name="client-city" value="Toronto">
        </label>
        <label for="edmonton">Edmonton
        <input type="radio" id="edmonton" name="client-city" value="Edmonton">
        </label>
        <label for="calgary">Calgary
        <input type="radio" id="calgary" name="client-city" value="Calgary">
        </label>
        <label for="other">Other
        <input type="radio" id="other" name="client-city" value="other">
        </label>

      </div>
      
      <label for="client-message">Message 
          <textarea id="client-message" rows="5" placeholder="Enter your message please"></textarea>
      </label>
      <div></div>
      <button class="form-submit-btn" @click.prevent="submitForm">Request A Quote</button>
      
    </form>

  </section>
</template>

<script>
export default {
  name: "TheQuoteRequestInfoSection",

  methods: {
    submitForm(){
      return 0
    }
  }
}
</script>

<style scoped>
section {
  margin-top: 5rem;
  /* color: black; */
}



form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: repeat( auto-fit, minmax(400px, 1fr) );
  grid-gap: 1rem;
  
}


input[type="radio"] {
  padding: 1rem;
  width: 100%;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
}

input[type="radio"]:checked + img {
  outline: 2px solid var(--secondary-colour);
}
/* Mark input boxes that gets an error on validation: */
input.invalid {
  background-color: #ffdddd;
}

form div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

form div label {
  width: 100px;
  height: 100px;
  font-size: 1.5rem;
}


input[type="radio"] {
  /* display: inline; */
  /* align-items: left; */
  width: auto;
  height: 0.5rem;
  padding-right: 1rem;
  margin-bottom: 1rem;
  display: block;
  border: 1px solid #ccc;
  /*border-radius: 4px;*/
  box-sizing: border-box;
  /* text-align: center; */
  outline: none;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input#cleaningTime, 
input#cleaningDate,
select,
textarea {
  width: 100%;
  height: 3rem;
  padding: 0.5rem 2rem;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: block;
  border: 1px solid #ccc;
  /*border-radius: 4px;*/
  box-sizing: border-box;
  /* text-align: center; */
  outline: none;
}
</style> 
