<template>
  <section class="parallax-section69">
    <div class="callback">
      <div class="container">
        <div class="row">
          <div class="col-md-12" data-anim-type="fade-in-right" data-anim-delay="100">
            <div class="main-title">
              <h6>DON’T CALL US, WE’LL CALL YOU</h6>
              <h3 class="text-left">Request a Callback</h3>
              <p>Fill in the form below to request a callback to discuss your move.</p>
            </div>

            <form id="request_form" name="request_form" action="mail.php" method="post" novalidate="novalidate">
              <input type="tel" id="msz" name="msz">
              <button type="submit" class="btn btn-orange-2 btn-xround margin-top3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheParallax"
}
</script>

<style>
.parallax-section69 {
  background-color: rgba(255,255,255,0);
  background-image: url('~assets/images/bg/avada-movers-rates-callback.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  padding: 6% 30px;
  background-size: cover;
}

h6 {
  font-size: 16px;
  margin-bottom: 14px;
}

.main-title h6 {
  font-weight: 900;
  line-height: 1.5;
  letter-spacing: 0px;
  font-style: normal;
}

.callback h6 {
  text-align: left!important;
  color: #fff!important;
}


.main-title h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: 0px;
  margin-bottom: 31px;
  font-style: normal;
  font-size: 47px;
}

.callback h3 {
  text-align: left!important;
  color: #fff!important;
}

p {
  margin: 0 0 10px;
}

.callback p {
  text-align: left!important;
  color: #fff!important;
}

input {
  background-color: #fff;
  border-radius: 20px!important;
  color: #333;
  display: block;
  float: none;
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 6px 10px;
  height: 38px;
  width: 100%;
  line-height: 1.3;
}

.margin-top3 {
  margin-top: 30px!important;
}

.btn {
  padding: 10px 36px;
  margin: 0px;
  box-shadow: none;
}

.btn {
  white-space: pre-wrap!important;
}

.btn.btn-xround {
  border-radius: 25px;
}

.btn.btn-orange-2 {
  color: #fff;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: #1675bf;
}
</style>
