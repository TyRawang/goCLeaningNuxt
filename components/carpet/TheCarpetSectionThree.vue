<template>
    <div id="section-three-residential" class="container">
        <div>
             <h2>Custom Cleaning for each space</h2>
            <p>Go Cleaning will evaluate, review your living space and then develop and implement a cleaning strategy that will remove dirt and buildup in your home, additionally Go Cleaning will sanitize, vacuum, mop and clean the areas in your home that don’t receive enough attention</p>
            <p>Our expert cleaners have years of professional cleaning and they make us the best home/ Residential cleaning services Calgary. Go Cleaning will also offer the following services; the dusting, washing, wiping and basic cleaning of all reachable surfaces in your home.</p>   
        </div>
        <div>
            <img src="~/assets/img/Go-Cleaning-Intro.jpg" alt="Go Cleaning Residential Cleaners in a photo">
        </div>
    </div>
</template>

<script>
export default {
    name: "TheCarpetSectionThree"
}
</script>

<style scoped>
    #section-three-residential {
    display: grid;
    /* grid-auto-columns: 1fr 1fr; */
    /* grid-auto-flow: column; */
    grid-template-columns: repeat(2, minmax(0, 1fr));
    /* grid-auto-flow: column; */
    grid-gap: 3rem;
    background-color: #F8F9FD;
    padding: 3rem;
    }

    #section-three-residential h2 {
        text-align: center;
        grid-column-start: 1; 
        grid-column-end: 4; 
        grid-row-start: 1; 
        grid-row-end: 3; 
    }

    #section-three-residential p {
        font-size: 14px;
        line-height: 25px;
        color: #777777;
    }

    #section-three-residential img {
        max-width: 100%;
        border: solid;
        border-color:#F8F8F8;
        border-width: 1rem;;
        /* max-height: 10%;
        max-width: auto; */
    }

    @media (max-width: 800px) {
        #section-three-residential {
            display: block;
        }   
    }
</style>