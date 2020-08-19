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
              <div class="tab-zero">
                <label for="one-time">One Time
                  <input type="radio" id="one-time" name="time" v-model="formData.time" value="one-time">
                  <img src="~/assets/img/calendar.svg" alt="">
                </label>
                <label for="weekly">Weekly
                  <input type="radio" id="weekly" name="time" v-model="formData.time" value="weekly">
                  <img src="~/assets/img/calendar.svg" alt="">
                </label>
                <label for="bi-weekly">Bi-Weekly
                  <input type="radio" id="bi-weekly" name="time" v-model="formData.time" value="bi-weekly">
                  <img src="~/assets/img/calendar.svg" alt="">
                </label>
                <label for="monthly">Monthly
                  <input type="radio" id="monthly" name="time" v-model="formData.time" value="monthly">
                  <img src="~/assets/img/calendar.svg" alt="">
                </label>
                <label for="other">Other
                  <input type="radio" id="other" name="time" v-model="formData.time" value="other">
                  <img src="~/assets/img/calendar.svg" alt="">
                </label>
              </div>
            </div>

            <div v-show="tab === 1" class="tab">
              <h3>Tell Us About Your Home?</h3>
              <div class="tab-one">
                <div>
                  <label for="home-type">Home Type</label>
                  <select name="house-type" v-model="formData.homeType1" id="home-type">
                    <option value=""></option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Two Storey">Two Storey</option>
                    <option value="One &amp; Half Storey">One and Half Storey</option>
                    <option value="One Floor Condo or Apartment">One Floor Condo or Apartment</option>
                    <option value="4 Level Split">4 Level Split</option>
                    <option value="Basement Suite">Basement Suite</option>
                  </select>
                </div>
                <div>
                  <label for="bedrooms">Bedrooms</label>
                  <select name="Bedrooms" v-model="formData.bedrooms1" id="bedrooms">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                </div>
                <div>
                  <label for="bathrooms">Bathrooms</label>
                  <select name="Bathrooms" v-model="formData.bathrooms1" id="bathrooms">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="2.5">2.5</option>
                    <option value="3">3</option>
                    <option value="3.5">3.5</option>
                    <option value="4">4</option>
                    <option value="4.5">4.5</option>
                    <option value="5+">5+</option>
                  </select>
                </div>
                <div>
                  <label for="size">Size (sqt)</label>
                  <input type="text" v-model="formData.size" id="size">
                </div>
                <div>
                  <label for="levels">Levels</label>
                <select name="levels" v-model="formData.levels" id="levels">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
                <div>
                  <label for="pets">Pet(s)</label>
                <select name="pets" v-model="formData.pets" id="pets">
                    <option value=""></option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>

            <div v-show="tab === 2" class="tab">
              <h3>Tell Us About Your Home?</h3>
              <div class="tab-one">
                <div>
                  <label for="people">How Many People Lives In Your House? </label>
                  <select name="house-typ" v-model="formData.homeType2" id="home-type">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6+">6+</option>
                  </select>
                </div>
                <div>
                  <label for="how-dirty">How Clean Would You Say Your Home Is?</label>
                  <select name="Bedrooms" v-model="formData.bedrooms2" id="bedrooms">
                    <option value=""></option>
                    <option value="Really Dirty">Really Dirty</option>
                    <option value="Kind of Diry">Kind of Diry</option>
                    <option value="About Average">About Average</option>
                    <option value="Kind of Clean">Kind of Clean</option>
                    <option value="Really Clean">Really Clean</option>
                  </select>
                </div>
              </div>
            </div>

            <div v-show="tab === 3" class="tab">
              <input type="date" alt="cleaning date" v-model="formData.cleaningDate">
              <input type="time" alt="cleaning time" v-model="formData.cleaningTime">
            </div>

            <div v-show="tab === 4" class="tab">
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

            <div class="progress-bar">
              <div class="progress-bar-filler"  :style="{'width': completedPortion()+'%'}"></div>
            </div>

            <div style="overflow:auto;">
              <div style="float:right;">
                <button v-show="tab > 0" type="button" id="prevBtn" @click="toPreviousTab">Previous</button>
                <button v-show="tab < 4" type="button" id="nextBtn" @click="toNextTab">Next</button>
                <button v-show="tab === 4" type="submit">Submit</button>
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
        bedrooms1: '',
        bathrooms1: '',
        homeType2: '',
        bedrooms2: '',
        bathrooms2: '',
        customerName: '',
        customerEmail: '',
        customerMessage: '',
        cleaningDate: null,
        cleaningTime: null
      }
    }
  },

  methods: {
    toPreviousTab(){
      if(this.tab > 0 && this.tab <= 4){
        this.tab -= 1
      }
    },

    toNextTab(){
      if(this.validateForm()){
        if(this.tab < 4){
          this.tab += 1
        }
      }
    },

    validateForm(){
      let valid = false
      if(this.tab === 0  && this.formData.time === ''){
        valid = false
        this.$toast.error('You need to select a frequency please!')
      }else if(this.tab === 1  && this.formData.homeType1 === ''){
        valid = false
        this.$toast.error('You need to select a home type please!')
      }else if(this.tab === 2  && this.formData.homeType2 === ''){
        valid = false
        this.$toast.error('You need to select a home type please!')
      }else if(this.tab === 3 && this.formData.cleaningDate === null && this.formData.cleaningTime === null){
        valid = false
        this.$toast.error('You have to select date and time for appointment please.')
      }else{
        valid = true
      }
      return valid;
    },

    submitForm(){
      if(this.homeType2 === ''){
        this.$toast.error('Submission failed. please select home type 2!')
      }else{
        this.$axios.$post(this.$refs.contact.getAttribute('action'), this.formData).then(function (){
          this.$toast.success('submission successful')
        })
      }
    },

    completedPortion(){
      if(this.tab === 1){
        return 25
      }else if(this.tab === 2){
        return 50
      }else if(this.tab === 3){
        return 75
      }else if(this.tab === 4){
        return 100
      }else{
        return 5
      }
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

#banner .banner-form form .tab-zero{
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

input[type=text], select {
  width: 20%;
  height: 1rem;
  padding: 12px 20px;
  margin: 2px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  /* text-align: center; */
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


.banner-form form .tab-one {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* align-items: center; */
  justify-content: space-evenly;

  grid-gap: 1rem;

}

label {

  font-size: 1.5rem;
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  color: whitesmoke;
  text-align: left;
  display: block;
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

.progress-bar {
  width: 20rem;
  height: 20px;
  border: 1px solid dodgerblue;
  border-radius: 10px;
}

.progress-bar-filler {
  background: dodgerblue;
  height: 18px;
  border: none;
  border-radius: 10px;
}
</style>
