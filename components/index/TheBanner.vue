<template>
  <!-- Banner -->
  <div id="banner">
    <div class="banner-bg">
      <div class="container">
        <!-- <h1>Best Janitorial Service in Calgary</h1>
        <h3>Fully Insured, Bonded & WCB</h3> -->

        <div class="banner-form">
          <!-- <div class="meter orange nostripes">
              <span style="width: 33.3%"></span>
          </div> -->
          <h3>How Often Are You Looking To Clean Your House?
          </h3>
          <form>
            <label for="one-time">

              
              <input type="radio" name="" id="">
              <img src="~/assets/img/calendar.svg" alt="">
            </label>
            <label for="one-time">
              <input type="radio" name="" id="">
              <img src="~/assets/img/calendar.svg" alt="">
            </label>
            <label for="one-time">
              <input type="radio" name="" id="">
              <img src="~/assets/img/calendar.svg" alt="">
            </label>
            <label for="one-time">
              <input type="radio" name="" id="">
              <img src="~/assets/img/calendar.svg" alt="">
            </label>
            <label for="one-time">
              <input type="radio" name="" id="">
              <img src="~/assets/img/calendar.svg" alt="">
            </label>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "TheBanner"
}
</script>

<style>
/* Banner & Form */
#banner {
  width: 100%;
  height: auto;
  background: url('~assets/img/Go-Cleaning-Commercial-Cleaning.jpg') no-repeat center center/cover;
  /* border-radius: 0% 0% 90% 90%/0% 0% 50% 50%; */
}

#banner .banner-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 4rem;
  /* background-color: rgba(73, 243, 51, 0.7); */
  background-color: rgba(106, 191, 22, 0.65);
  width: 100%;
  height: auto;
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
#banner .banner-form form {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, minmax(50px, 1fr));

}

#banner form label:hover {
  cursor: pointer;
  opacity: 0.7;
}

#banner form label input[type=radio] {
  opacity: 0;
}

/* Banner Progress bar, took from css-tricks.com/css3-prgress-bars  */
.meter {
  height: 20px;  /* Can be anything */
  position: relative;
  background: #555;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  border-radius: 25px;
  padding: 10px;
  box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
}
</style>
