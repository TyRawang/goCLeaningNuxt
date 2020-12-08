<template>
  <!-- START OF SECTION TWO -->
  <div id="second-section" class="">

    <div class="residential-cleaning">
      <div>
        <h2><span>Residential</span><span> Cleaning </span> <span>Service</span> </h2>
      </div>
    </div>
    <div class="janitorial-cleaning">
      <div>
        <h2><span>Janitorial</span><span>  </span> <span>Service</span> </h2>
      </div>
    </div>
    <div class="office-cleaning">
      <div>
        <h2><span>Office</span><span> Cleaning </span> <span>Service</span> </h2>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
name: "TheSecondSection"
}
</script>

<style>

/* SECOND SECTION */

#second-section {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;

}

#second-section h2 {
  color: #ffffff;
  font-size: 3rem;
}


#second-section .residential-cleaning {
  text-align: center;
  background: url('~assets/img/Go-Cleaning-Residential-Cleaning.jpg') no-repeat center center/cover;

  /* width: 100%;
  height: 100%; */
  color: #ffffff;
  line-height: 3rem;
  width: 34%;
  height: auto;
}

#second-section .residential-cleaning div {
  background-color: rgba(79, 100, 209, 0.8);
  padding: 4rem;
  height: 100%;
}


#second-section .janitorial-cleaning div {
  background-color: rgba(79, 123, 122, 0.8);
  padding-top: 4rem;
  height: 100%;

}
#second-section .janitorial-cleaning {
  text-align: center;
  background: url('~assets/img/Go-Cleaning-Commercial-Cleaning.jpg') no-repeat center center/cover;
  /* width: 100%;
  height: 100%; */
  color: #ffffff;
  line-height: 3rem;
  width: 33%;
  height: auto;

}

#second-section .office-cleaning {
  text-align: center;
  /* padding-top: 4rem; */
  background: url('~assets/img/Go-Cleaning-Office-Cleaning.jpg') no-repeat center center/cover;
  /* width: 100%;
  height: 100%; */
  color: #ffffff;
  line-height: 3rem;
  width: 33%;
  height: auto;
  /* padding: 3rem; */

}

#second-section .office-cleaning div {
  background-color: rgba(153, 115, 226, 0.8);
  padding-top: 4rem;
  height: 100%;

}


#second-section .residential-cleaning h2 span, 
#second-section .janitorial-cleaning h2 span, 
#second-section .office-cleaning h2 span{
  display: block;
}

@media (max-width: 800px) {
  #second-section div * {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  #second-section {
    flex-direction: column;
  }

  #second-section .residential-cleaning {
    width: 100%;
    height: 15rem;
  }

  #second-section .janitorial-cleaning {
    width: 100%;
    height: 15rem;
  }

  #second-section .office-cleaning {
    width: 100%;
    height: 15rem;
  }
}
</style>
