<template>
  <!-- Banner -->
  <div id="banner">
    <div class="banner-bg">
      <div class="container">
        <div class="banner-form">

          <!-- <div class="progress-bar" v-show="serviceType === 'residential'">
            <div class="progress-bar-filler" :style="{'width': completedPortion()+'%'}"></div>
          </div> -->

          <form name="quotation_request" action="/thanks" method="post" netlify netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="quotation_request"/>

            <div v-show="tab === 0" class="tab">
              <h3>The Kind Of Service You are Looking for</h3>
              <div class="tab-main">
                <label for="service-house">Residential
                  <input type="radio" id="service-house" name="service" v-model="serviceType" value="residential">
                  <img src="~/assets/img/service-type-house.png"  alt="">
                </label>
                <label for="service-commercial">Commercial
                  <input type="radio" id="service-commercial" name="service" v-model="serviceType" value="commercial">
                  <img src="~/assets/img/service-type-apartment.png"  alt="">
                </label>
                <label for="service-corporate">Corporate
                  <input type="radio" id="service-corporate" name="service" v-model="serviceType" value="carpet-cleaning">
                  <img src="~/assets/img/service-type-corporate.png" alt="">

                </label>
              </div>
            </div>

            <div v-show="tab === 1 && serviceType === 'residential'" class="tab">
              <h3>How Often Are You Looking To Clean Your House?</h3>
              <div class="tab-zero">
                <label for="one-time">One Time
                  <input type="radio" id="one-time" name="time" v-model="formData.time" value="one-time">
                  <img src="~/assets/svg/go-cleaning-one-time-cleaning-calendar.svg" alt="">
                </label>
                <label for="weekly">Weekly
                  <input type="radio" id="weekly" name="time" v-model="formData.time" value="weekly">
                  <img src="~/assets/svg/go-cleaning-weekly-cleaning-calendar.svg" alt="">
                </label>
                <label for="bi-weekly">Bi-Weekly
                  <input type="radio" id="bi-weekly" name="time" v-model="formData.time" value="bi-weekly">
                  <img src="~/assets/svg/go-cleaning-bi-weekly-cleaning-calendar.svg" alt="">
                </label>
                <label for="monthly">Monthly
                  <input type="radio" id="monthly" name="time" v-model="formData.time" value="monthly">
                  <img src="~/assets/svg/go-cleaning-monthly-cleaning-calendar.svg" alt="">
                </label>
                <label for="other">Other
                  <input type="radio" id="other" name="time" v-model="formData.time" value="other">
                  <img src="~/assets/svg/go-cleaning-other-cleaning-calendar.svg" alt="">
                </label>
              </div>
            </div>

            <div v-show="tab === 2 && serviceType === 'residential'" class="tab">
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
                    <option value="5+">5+</option>
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
                    <option value="4+">4+</option>
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

            <div v-show="tab === 3 && serviceType === 'residential'" class="tab">
              <h3>Tell Us About Your Home?</h3>
              <div class="tab-one">
                <div>
                  <label for="people">How Many People Lives In Your House? </label>
                  <select name="people" v-model="formData.people" id="people">
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
                  <select name="how-dirty" v-model="formData.howDirty" id="how-dirty">
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

            <div v-show="tab === 4 && serviceType === 'residential'" class="tab">
              <input type="date" alt="cleaning date" v-model="formData.cleaningDate">
              <input type="time" alt="cleaning time" v-model="formData.cleaningTime">
            </div>

            <div v-show="tab === 5 && serviceType === 'residential'" class="tab">
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

            <div v-show="tab===1 && serviceType === 'commercial'" class="tab">
              <div>
                <label for="client-name">Name: </label>
                <input id="client-name" type="text" placeholder="Full Name" v-model="clientData.firstName">
                <!-- <input type="text" placeholder="Last Name" v-model="clientData.lastName"> -->
              </div>
              <div>
                <label for="business-org">Company Name </label>
                <input id="business-org" type="text" placeholder="Company Name" v-model="clientData.org">
              </div>
            </div>

            <div v-show="tab===2 && serviceType === 'commercial'" class="tab">
              <div>
                <label for="client-email">Email: </label>
                <input id="client-email" type="email" placeholder="Email" v-model="clientData.address">
              </div>
              <div>
                <label for="client-address">Address: </label>
                <input id="client-address" type="text" placeholder="Address" v-model="clientData.address">
              </div>
              <div>
                <label for="location-type">Location Type</label>
                <select name="Bedrooms" v-model="formData.bedrooms2" id="bedrooms">
                  <option value=""></option>
                  <option value="Really Dirty">Office</option>
                  <option value="Kind of Diry">Retail</option>
                  <option value="About Average">Spas &amp; Healthcare</option>
                  <option value="Kind of Clean">Schools &amp; Daycares</option>
                  <option value="Really Clean">Dealership</option>
                  <option value="Really Clean">Church</option>
                  <option value="Really Clean">Restaurent</option>
                  <option value="Really Clean">Others</option>
                </select>
              </div>
              <div>
                  <label for="size">Size (sqt)</label>
                  <input type="text" v-model="formData.size" id="size">
              </div>
              <div>
                  <label for="employees">Number of Employee(s) In The Location? </label>
                  <select name="house-type" v-model="formData.homeType2" id="home-type">
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
                <label for="client-phone">Phone: </label>
                <input id="client-phone" type="tel" placeholder="Phone" v-model="clientData.phone">
              </div>
            </div>
          <!-- </div> -->
            <div v-show="tab === 3 && serviceType === 'commercial'" class="tab">
              <h3>If you have any additional request or queries, please let us know.</h3>
              <div>
                <label for="client-request">Request: </label>
                <textarea id="client-request" v-model="clientData.request"></textarea>
              </div>
            </div>

            <div v-show="tab=== 1 && serviceType === 'carpet-cleaning'" class="tab">
              <h3>Please provide us the following details!</h3>
              <div class="tab-one">
                <div>
                  <div>
                    <label for="customer-name">Name: </label>
                    <input id="customer-name" type="text" placeholder="Full Name" v-model="clientData.fullName">
                  </div>
                  <div>
                    <label for="customer-email">Email: </label>
                    <input id="customer-email" type="email" placeholder="Email" v-model="clientData.email">
                  </div>
                </div>
                <div>
                  <div>
                    <label for="area">Size (sqt)</label>
                    <input type="text" v-model="clientData.size" id="area">
                  </div>
                  <div>
                    <label for="residents-no">Number of People Living in the House? </label>
                    <select name="residents-no" v-model="clientData.residentNo" id="residents-no">
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div v-show="tab === 2 && serviceType === 'carpet-cleaning'" class="tab">
              <h3>Please provide us the following details!</h3>
              <div>
                <label for="customer-address">Address: </label>
                <input id="customer-address" type="text" placeholder="Address" v-model="clientData.address">
              </div>
              <div>
                <label for="dirty-level">How Clean Would You Say Your Home Is?</label>
                <select name="dirty-level" v-model="clientData.howDirty" id="dirty-level">
                  <option value=""></option>
                  <option value="Really Dirty">Really Dirty</option>
                  <option value="Kind of Dirty">Kind of Dirty</option>
                  <option value="About Average">About Average</option>
                  <option value="Kind of Clean">Kind of Clean</option>
                  <option value="Really Clean">Really Clean</option>
                </select>
              </div>
              <div>
                <label for="customer-phone">Phone: </label>
                <input id="customer-phone" type="tel" placeholder="Phone" v-model="clientData.phone">
              </div>
            </div>

            <div v-show="tab === 3 && serviceType === 'carpet-cleaning'" class="tab">
              <h3>If you have any additional request or queries, please let us know.</h3>
              <div>
                <label for="customer-request">Request: </label>
                <textarea id="customer-request" v-model="clientData.request"></textarea>
              </div>
            </div>

            <div v-show="tab===1 && serviceType === 'carpet-cleaning'" class="tab">
              <div>
                <label for="customer-name">Name: </label>
                <input id="customer-name" type="text" placeholder="Full Name" v-model="clientData.fullName">
              </div>
              <div>
                <label for="customer-email">Email: </label>
                <input id="customer-email" type="email" placeholder="Email" v-model="clientData.email">
              </div>
              <div>
                <label for="customer-address">Address: </label>
                <input id="customer-address" type="text" placeholder="Address" v-model="clientData.address">
              </div>
              <div>
                <label for="dirt-level">How Clean Would You Say Your Home Is?</label>
                <select name="dirt-level" v-model="clientData.dirtLevel" id="dirt-level">
                  <option value=""></option>
                  <option value="Really Dirty">Really Dirty</option>
                  <option value="Kind of Dirty">Kind of Diry</option>
                  <option value="About Average">About Average</option>
                  <option value="Kind of Clean">Kind of Clean</option>
                  <option value="Really Clean">Really Clean</option>
                </select>
              </div>
              <div>
                  <label for="area">Size (sqt)</label>
                  <input type="text" v-model="clientData.area" id="area">
              </div>
              <div>
                  <label for="resident-no">Number of People Living in the House? </label>
                  <select name="resident-no" v-model="clientData.residentNo" id="resident-no">
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
                <label for="customer-phone">Phone: </label>
                <input id="customer-phone" type="tel" placeholder="Phone" v-model="clientData.phone">
              </div>

              <div>
                <label for="customer-request">Request: </label>
                <textarea id="customer-request" v-model="clientData.request"></textarea>
              </div>

            </div>


            <div style="overflow:auto;">
              <div style="float:right;">
                <button v-show="tab > 0" type="button" id="prevBtn" @click="toPreviousTab">Previous</button>
                <button
                  v-show="(tab < 5 && serviceType ==='residential') || (serviceType !=='residential' && tab < 3)"
                  type="button" id="nextBtn" @click="toNextTab">Next
                </button>
                <button
                  v-show="(tab === 5  && serviceType ==='residential') || (tab===3 && serviceType !=='residential')"
                  type="submit">Submit
                </button>
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
      serviceType: '',
      formData: {
        time: '',
        homeType1: '',
        people: '',
        bedrooms1: '',
        bathrooms1: '',
        homeType2: '',
        bedrooms2: '',
        bathrooms2: '',
        customerName: '',
        customerEmail: '',
        customerMessage: '',
        cleaningDate: null,
        cleaningTime: null,
        employeeNo: '',
        howDirty: '',
        size: '',
        levels: '',
        pets: null
      },
      clientData:{
        fullName: '',

        firstName: '',
        lastName: '',
        fullName: '',
        org: '',
        size: '',
        employeeNo: '',
        residentNo: '',
        howDirty: '',
        email: '',
        phone: '',
        dirtLevel: '',
        area: '',
        residentNo: '',

        request: ''
      },
      timePickerOptions: {
        start: '09:00', step: '00:15', end: '12:00', format: 'hh:mm:A'
      }
    }
  },

  methods: {
    toPreviousTab() {
      if (this.tab > 0 && this.tab <= 5) {
        this.tab -= 1
      }
    },

    toNextTab() {
      if (this.validateForm()) {
        if (this.tab < 5) {
          this.tab += 1
        }
      }
    },

    validateForm() {
      let valid = false
      if (this.tab === 0 && this.serviceType === '') {
        valid = false
        this.$toast.error('You need to select a service type please!')
      } else if (this.tab === 1) {
        if(this.serviceType==='residential' && this.formData.time === ''){
          valid = false
          this.$toast.error('You need to select a frequency please!')
        }else if(this.serviceType === 'commercial'){
          if(this.clientData.fullName === ''){
            valid = false
            this.$toast.error('You need to provide your name please!')
          }else if(this.clientData.org === ''){
            valid = false
            this.$toast.error('You need to provide your organization name please!')
          }else if(this.clientData.size === ''){
            valid = false
            this.$toast.error('You need to provide your space size please!')
          }else if(this.validateArea(this.clientData.size)===false){
            valid = false
            this.$toast.error('You need to provide valid size please!')
          }else if(this.clientData.employeeNo === ''){
            valid = false
            this.$toast.error('You need to provide your employee number please!')
          }else{
            valid = true
          }
        }else if(this.serviceType === 'carpet-cleaning'){
          if(this.clientData.fullName === ''){
            valid = false
            this.$toast.error('You need to provide your name please!')
          }else if(this.clientData.email === ''){
            valid = false
            this.$toast.error('You need to provide your valid email address please!')
          }else if(!this.validateEmail(this.clientData.email)){
            valid = false
            this.$toast.error('You need to provide your valid email address please!')
          }else if(this.clientData.size === ''){
            valid = false
            this.$toast.error('You need to provide your space size please!')
          }else if(this.validateArea(this.clientData.size)===false){
            valid = false
            this.$toast.error('You need to provide valid size please!')
          }else if(this.clientData.residentNo === ''){
            valid = false
            this.$toast.error('You need to provide resident number please!')
          }else{
            valid = true
          }
        }else{
          valid = true
        }
      } else if (this.tab === 2) {
        if(this.serviceType === 'residential'){
          if(this.formData.homeType1 === ''){
            valid = false
            this.$toast.error('You need to select a home type please!')
          }
          else if(this.formData.bedrooms1 === ''){
            valid = false
            this.$toast.error('You need to select number of Bedrooms please!')
          }
          else if(this.formData.bathrooms1 === ''){
            valid = false
            this.$toast.error('You need to select number of Bathrooms please!')
          }
          else if(this.formData.size === ''){
            valid = false
            this.$toast.error('You need to provide size of the residence please!')
          }else if(this.validateArea(this.formData.size)===false){
            valid = false
            this.$toast.error('You need to provide valid size of the residence please!')
          }
          else if(this.formData.levels === ''){
            valid = false
            this.$toast.error('You need to select number of levels please!')
          }
          else if(this.formData.pets === null || this.formData.pets === ''){
            valid = false
            this.$toast.error('You need to select number of pets you have please!')
          }else{
            valid = true
          }
        }

        if(this.serviceType === 'commercial'){
          if(this.clientData.phone === ''){
            valid = false
            this.$toast.error('You need to provide your phone number please!')
          }else if(this.validatePhone(this.clientData.phone) === false){
            valid = false
            this.$toast.error('You need to provide a valid phone number please!')
          }else if(this.clientData.address === ''){
            valid = false
            this.$toast.error('You need to provide your organization address please!')
          }else if(!this.validateEmail(this.clientData.email)){
            valid = false
            this.$toast.error('You need to provide your valid email address please!')
          }else if(this.clientData.locationType === null || this.clientData.locationType === ''){
            valid = false
            this.$toast.error('You need to provide your location type please!')
          }else{
            valid = true
          }
        }

        if(this.serviceType === 'carpet-cleaning'){
          if(this.clientData.phone === ''){
            valid = false
            this.$toast.error('You need to provide your phone number please!')
          }else if(this.validatePhone(this.clientData.phone) === false){
            valid = false
            this.$toast.error('You need to provide a valid phone number please!')
          }else if(this.clientData.address === ''){
            valid = false
            this.$toast.error('You need to provide your organization address please!')
          }else if(this.clientData.howDirty === ''){
            valid = false
            this.$toast.error('You need to specify dirt level of your place please!')
          }else{
            valid = true
          }
        }
      } else if (this.tab === 3) {
        if(this.serviceType === 'residential'){
          if(this.formData.people === ''){
            valid = false
            this.$toast.error('You need to specify the number of people in the residence please!')
          }else if(this.formData.howDirty === ''){
            valid = false
            this.$toast.error('You need to select a dirt level please!')
          }else{
            valid = true
          }
        }else{
          valid = true
        }
      } else if (this.tab === 4 && this.formData.cleaningDate === null && this.formData.cleaningTime === null) {
        valid = false
        this.$toast.error('You have to select date and time for appointment please.')
      } else if(this.tab === 5){
        if(this.formData.customerEmail === ''){
          valid = false
          this.$toast.error('You have to provide your email address please.')
        }else if(this.validateEmail(this.formData.customerEmail) === false) {
          valid = false
          this.$toast.error('You have to provide a email address please.')
        }else{
          valid = true
        }
      } else {
        valid = true
      }
      return valid;
    },

    // validateEmail(email){
    //   if(email === ''){
    //     return false
    //   }else if((email.match(/@/g) || []).length !== 1){
    //     this.$toast.error('The email must have at least and only one "@" sign')
    //     return false
    //   }else if(((email.split('@')).length <= 2) && (email.split('@'))[1] === ''){
    //     this.$toast.error('The please provide an email with valid domain.')
    //     return false
    //   }else{
    //     return true
    //   }
    // },
    validateEmail(email){
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
      {
        return true
      }
      this.$toast.error("You have entered an invalid email address!")
      return false
    },

    validateArea(area){
      // console.log(parseInt(area))
      if(!(parseInt(area) > 0)){
        this.$toast.error('The area/size of the space must be a positive number.')
        return false
      }else{
        return true
      }
    },

    validatePhone(phone){
      let phoneNo = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
      if(phone.match(phoneNo)){
        return true;
      } else {
        this.$toast.error("Please provide a valid phone number! formats: +XX XXXX XXXX or +XX-XXXX-XXXX");
        return false;
      }
    },

    submitForm() {
        if(this.serviceType === 'residential'){
          this.$axios.$post(this.$refs.contact.getAttribute('action'), this.formData).then(function () {
            this.$toast.success('Info submission successful')
          })
        }else{
          this.$axios.$post(this.$refs.contact.getAttribute('action'), this.clientData).then(function () {
            this.$toast.success('Info submission successful')
          })
        }
    },

    // validateFormSubmission(formData){},
    //
    // submitClientForm() {
    //   if (this.serviceType === 'residential') {
    //     if (this.tab === 5) {
    //
    //     }
    //   }
    // },

    completedPortion() {
      if (this.serviceType === 'residential') {
        if (this.tab === 1) {
          return 20
        } else if (this.tab === 2) {
          return 40
        } else if (this.tab === 3) {
          return 60
        } else if (this.tab === 4) {
          return 80
        } else if (this.tab === 5) {
          return 100
        } else {
          return 5
        }
      } else {
        if (this.tab === 1) {
          return 50
        }
      }
    },

    notBeforeNineOClock(date) {
      return date.getHours() < 9;
    },
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(24, 0, 0, 0));
    },
  }
}
</script>

<style>
/* Banner & Form */
#banner {
  width: 100%;
  background: url('~assets/img/Go-Cleaning-Commercial-Cleaning.jpg') no-repeat center center/cover;
  /* border-radius: 0% 0% 90% 90%/0% 0% 50% 50%; */
}

#banner .banner-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* background-color: rgba(73, 243, 51, 0.7); */
  background-color: rgba(106, 191, 22, 0.65);
  width: 100%;
  height: 100%;
  padding: 4rem 3rem 3rem 3rem;
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
  border-radius: 1rem;
  padding: 2rem 1rem;
  width: 100%;
  height: auto;
}

#banner .banner-form p {
  font-weight: bold;
  font-size: 1.5rem;
  font-style: italic;
}

#banner .banner-form .tab-main {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
}

.tab-main img {
  max-width: 250px;
  max-height: 250px;
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

input[type=text], input[type=email], input[type=tel], select, textarea {
  width: 100%;
  height: 3rem;
  padding: .5rem 2rem;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: block;
  border: 1px solid #ccc;
  /*border-radius: 4px;*/
  box-sizing: border-box;
  /* text-align: center; */
  outline: none;
}


/* Hide all steps by default: */
/*.tab {*/
/*  display: none;*/
/*}*/

#banner button {
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 17px;
  font-family: Raleway;
  cursor: pointer;
}

#banner button:hover {
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
  width: 100%;
  height: 30px;
  border: 1px solid dodgerblue;
  border-radius: 10px;
  margin-bottom: 20px;
}

.progress-bar-filler {
  background: dodgerblue;
  height: 28px;
  border: none;
  border-radius: 10px;
}

.mx-datepicker {
  width: 100%;
}

.banner-form > div > button {
  outline: none;
}
</style>
