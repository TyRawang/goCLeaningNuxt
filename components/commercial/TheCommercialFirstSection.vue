<template>
    <div id="first-section-commercial" class="container">
        <h2><span>Why Choose </span><span>Go Cleaning</span> <span>For Your Company?</span></h2>
    </div>
</template>

<script>
export default {
    name: "TheCommercialFirstSection"
}
</script>

<style scoped>
    #first-section-commercial {
    padding-top: 4rem;
    padding-bottom: 2rem; 
    }

    #first-section-commercial h2 { 
        text-align: center;
    }

    #first-section-commercial h2 span:nth-child(2) {
        color: #777777;
        content: "\a";
        white-space: pre;
    }
    #first-section-commercial h2 span:nth-child(2)::after {
        content: "\a";
        white-space: pre;
    }
</style>