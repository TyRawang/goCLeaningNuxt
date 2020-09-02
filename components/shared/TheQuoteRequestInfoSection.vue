<template>
  <section class="go-cleaning-quote-request-info">
    <div class="container">
      <div class="request-info-title">
        <h3>Tell Us About Your Business</h3>
        <hr>
      </div>

      <form class="request-info-form">
        <div class="form-regular-input">
          <label for="client-name">Name *</label>
          <div class="input-field">
            <input type="text" id="client-name" placeholder="Enter your name please">
          </div>
        </div>

        <div class="form-regular-input">
          <label for="client-company-name">Company Name *</label>
          <div class="input-field">
            <input type="text" id="client-company-name" placeholder="Enter your company name please">
          </div>
        </div>

        <div class="form-regular-input">
          <label for="client-address">Address *</label>
          <div class="input-field">
            <input type="text" id="client-address" placeholder="Enter your address please">
          </div>
        </div>

        <div class="form-regular-input">
          <label for="client-phone">Phone *</label>
          <div class="input-field">
            <input type="text" id="client-phone" placeholder="Enter your phone number please">
          </div>
        </div>

        <div class="form-radio-checkbox-input">
          <label>Your City: *</label>
          <div class="form-input-radio">
            <input type="radio" name="client-city">
            <label>Toronto</label>
          </div>
          <div class="form-input-radio">
            <input type="radio" name="client-city">
            <label>Calgary</label>
          </div>
          <div class="form-input-radio">
            <input type="radio" name="client-city">
            <label>Edmonton</label>
          </div>
        </div>

        <div class="form-regular-input">
          <label for="client-message">Message *</label>
          <div class="input-field">
            <textarea id="client-message" rows="5" placeholder="Enter your message please"></textarea>
          </div>
        </div>

        <button class="form-submit-btn" @click.prevent="submitForm">Request A Quote</button>
      </form>
    </div>
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
.go-cleaning-quote-request-info {
  padding: 5rem 0;
}

.request-info-title h3 {
  font-size: 2.2rem;
  text-align: center;
}

.request-info-title hr {
  width: 40%;
  margin: 1rem auto;
  border: 1px solid black;
}

.request-info-form {
  margin-top: 1.5rem;
}

.request-info-form label {
  color: #1b1b1b;
  margin-bottom: 1rem;
}

.input-field {
  max-height: 5rem;
}

.form-radio-checkbox-input {
  display: flex; align-items: center; justify-content: flex-start; margin-top: 1.5rem;
}

.form-radio-checkbox-input > label {
  margin-right: 2rem;
}

.form-input-radio {
  margin-right: 2rem;
}

.form-submit-btn {
  display: block;
  margin: 4rem auto 0 auto;
}

textarea {
  height: auto;
}
</style>
