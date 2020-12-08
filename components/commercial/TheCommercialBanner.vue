<template>
    <!-- Banner -->
    <div id="banner" >
        <div class="banner-bg">
            <div class="container">
                <h3>Fully Insured, Bonded &amp; WCB</h3> 
                <div class="banner-form commercial">
                    <!-- <div class="meter orange nostripes">
                        <span style="width: 33.3%"></span>
                    </div> -->
                    <h1>Best Commercial Cleaning Service in Calgary</h1>
                    <h5>Schedule Your Office Cleaning <span>Today</span></h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "TheCommercialBanner"
}
</script>

 <style scoped>
    #banner {
        width: 100%;
        height: auto;
        background: url('~assets/img/Go-Cleaning-Commercial-Cleaning.jpg') no-repeat center center/cover;
        /* background: url('~assets/img/Go-Cleaning-Commercial-Cleaning.jpg') no-repeat center center/cover; */
        /* border-radius: 0% 0% 90% 90%/0% 0% 50% 50%; */
    }

    #banner .banner-bg {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-top: 4rem;
          background-color: rgba(79, 123, 122, 0.8) !important;

        /* background-color: rgba(73, 243, 51, 0.7); */
        /* background-color: rgba(106, 191, 22, 0.65); */
        width: 100%;
        height: auto;
        /* border-radius: 0% 0% 90% 90%/0% 0% 50% 50%; */

    }

    #banner .banner-form.commercial h1 {
        color: #ffffff;
    } 

    #banner .banner-form {
        border-radius: 15px;
        padding: 30px 10px 90px 10px;
        width: 100%;
        height: auto;
    }


    


</style>