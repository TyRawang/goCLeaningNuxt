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
  background-image: url('~static/images/bg/avada-movers-rates-callback.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  padding: 6% 30px;
  background-size: cover;
}
</style>
