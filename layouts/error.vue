<template>
  <div class="flex-center position-r full-height error-page">
    <div class="code">
      404
    </div>

    <div class="message" style="padding: 10px;">
      NOT FOUND
    </div>
  </div>
</template>

<script>
export default {
  name: "error"
}
</script>

<style>
.error-page {
  background-color: #fff0f0;
  color: #ff6e6e;
  font-family: "Muli", sans-serif;
  font-weight: 100;
  height: 100vh;
  margin: 0;
}

.full-height {
  height: 100vh;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.position-r {
  position: relative;
}

.code {
  border-right: 3px solid;
  font-size: 55px;
  padding: 0 10px 0 10px;
  text-align: center;
}

.message {
  font-size: 40px;
  text-align: center;
}

</style>
