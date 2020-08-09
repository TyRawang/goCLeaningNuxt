<template>
  <!-- Banner -->
  <div id="banner">
    <div class="banner-bg">
      <div class="container">
        <div class="banner-form">

          <form name="contactus" action="/thanks" method="post" netlify netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contactus" />

            <div v-show="tab === 0" class="tab">
              <h3>How Often Are You Looking To Clean Your House?</h3>
              <div>
                <label for="one-time">One Time
                  <input type="radio" id="one-time" @change="viewValue" name="time" v-model="formData.time" value="one-time">
                  <img src="~/assets/img/calendar.svg" alt="">
                </label>
                <label for="weekly">Weekly
                  <input type="radio" id="weekly" @change="viewValue" name="time" v-model="formData.time" value="weekly">
                  <img src="~/assets/img/calendar.svg" alt="">
                </label>
                <label for="bi-weekly">Bi-Weekly
                  <input type="radio" id="bi-weekly" @change="viewValue" name="time" v-model="formData.time" value="bi-weekly">
                  <img src="~/assets/img/calendar.svg" alt="">
                </label>
                <label for="monthly">Monthly
                  <input type="radio" id="monthly" @change="viewValue" name="time" v-model="formData.time" value="monthly">
                  <img src="~/assets/img/calendar.svg" alt="">
                </label>
                <label for="other">Other
                  <input type="radio" id="other" @change="viewValue" name="time" v-model="formData.time" value="other">
                  <img src="~/assets/img/calendar.svg" alt="">
                </label>
              </div>
            </div>

            <div v-show="tab === 1" class="tab">
              <h3>Your Home Type</h3>

              <label for="home-type-1"></label>
              <select name="house-type" v-model="formData.homeType1" id="home-type-1">
                <option value=""></option>
                <option value="bungalow">bungalow</option>
                <option value="two-storey">two-storey</option>
                <option value="condo">condo</option>
                <option value="4-level-split">4-level-split</option>
              </select>
            </div>

            <div v-show="tab === 2" class="tab">
              <h3>Your Home Type2</h3>

              <label for="home-type-2"></label>
              <select name="house-type-2" v-model="formData.homeType2" id="home-type-2">
                <option value=""></option>
                <option value="bungalow">bungalow</option>
                <option value="two-storey">two-storey</option>
                <option value="condo">condo</option>
                <option value="4-level-split">4-level-split</option>
              </select>
            </div>

            <div v-show="tab === 3" class="tab">
              <p>
                <label>Your Name: <input type="text" v-model="formData.customerName" name="name" required/></label>
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" v-model="formData.customerEmail" required/></label>
              </p>
              <p>
                <label>Message: <textarea name="message" v-model="formData.customerMessage"></textarea></label>
              </p>
            </div>

            <div style="overflow:auto;">
              <div style="float:right;">
                <button v-show="tab > 0" type="button" id="prevBtn" @click="toPreviousTab">Previous</button>
                <button v-show="tab < 3" type="button" id="nextBtn" @click="toNextTab">Next</button>
                <button v-show="tab === 3" type="submit">Submit</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      tab: 0,
      formData: {
        time: '',
        homeType1: '',
        homeType2: '',
        customerName: '',
        customerEmail: '',
        customerMessage: ''
      }
    }
  },

  methods: {
    toPreviousTab(){
      if(this.tab > 0 && this.tab <= 2){
        this.tab -= 1
      }
    },

    toNextTab(){
      if(this.validateForm()){
        if(this.tab < 3){
          this.tab += 1
        }
      }
    },

    validateForm(){
      let valid = true;
      if(this.tab === 0  && this.time === ''){
        valid = false
        this.$toast.error('You need to select a frequency please!')
      }else if(this.tab === 1  && this.homeType1 === ''){
        valid = false
        this.$toast.error('You need to select a home type please!')
      }else if(this.tab === 2  && this.homeType2 === ''){
        valid = false
        this.$toast.error('You need to select a home type please!')
      }else{
        valid = true
      }

      return valid;
    },

    submitForm(){
      if(this.homeType2 === ''){
        this.$toast.error('Submission failed. please select home type 2!')
      }else{
        // console.log(this.$refs.contact.getAttribute('action'))
        this.$axios.$post(this.$refs.contact.getAttribute('action'), this.formData).then(function (){
          this.$toast.success('submission successful')
        })
      }
    },

    viewValue(){
      console.log(this.formData.time)
    }
  }
}
</script>

<style>
/* Banner & Form */
#banner {
  width: 100%;
  height: 30rem;
  background: url('~assets/img/Go-Cleaning-Commercial-Cleaning.jpg') no-repeat center center/cover;
  /* border-radius: 0% 0% 90% 90%/0% 0% 50% 50%; */
}

#banner .banner-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 04rem;
  /* background-color: rgba(73, 243, 51, 0.7); */
  background-color: rgba(106, 191, 22, 0.65);
  width: 100%;
  height: 30rem;
  /* border-radius: 0% 0% 90% 90%/0% 0% 50% 50%; */

}

#banner .banner-bg h1 {
  color: var(--secondary-colour);
  font-size: 4rem;
}

#banner .banner-bg h3 {
  color: #fff;
  font-size: 2.5rem;
}

#banner .banner-form {
  /* background: rgb(255, 255, 255, 0.5); */
  border-radius: 15px;
  padding: 30px 10px 90px 10px;
  width: 100%;
  height: auto;
}

#banner .banner-form p {
  font-weight: bold;
  font-size: 1.5rem;
  font-style: italic;
}

#banner .banner-form form div:nth-child(2) div {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, minmax(50px, 1fr));
  /* background: ivory; */
}

#banner form label:hover {
  cursor: pointer;
  opacity: 0.7;
}

#banner form label input[type=radio] {
  opacity: 0;
}

h1 {
  text-align: center;
}

input[type=radio] {
  padding: 1rem;
  width: 100%;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
}

input[type=radio]:checked + img {
  outline: 2px solid var(--secondary-colour);
}


/* Mark input boxes that gets an error on validation: */
input.invalid {
  background-color: #ffdddd;
}

/* Hide all steps by default: */
/*.tab {*/
/*  display: none;*/
/*}*/

button {
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 17px;
  font-family: Raleway;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

#prevBtn {
  background-color: #bbbbbb;
}

/* Banner Progress bar, took from css-tricks.com/css3-prgress-bars  */
.meter {
  height: 20px; /* Can be anything */
  position: relative;
  background: #555;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  border-radius: 25px;
  padding: 10px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
}

@media (max-width: 800px) {

  #banner .banner-bg .banner-form form {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width: 800px) {
  #banner .banner-bg .banner-form form {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
