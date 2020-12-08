<template>
    <div id="section-five-commercial" class="container">
        <h3>May Include Additional Cost</h3>
        <div>
            <ul>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Exterior windows
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Carpet cleaning
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Animal waste
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Mold removal
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Rust removal
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Rust cleaning
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Industrial cleaning
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Post Construction
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Renovation cleaning
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Lifting of heavy items
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Surfaces above arms reach
                </li>
                <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    High ceiling fans
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheCommercialFifthSection'
}
</script>

<style scoped>
    #section-five-commercial {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-top: 4rem;
    margin-bottom: 2rem;

    }

    #section-five-commercial h3 {
        color: var(--primary-colour);
        text-align: center;
        grid-column-start: 1; 
        grid-column-end: 4; 
        grid-row-start: 1; 
        grid-row-end: 3; 
    }
    #section-four-commercial div:first-of-type h4 span:first-of-type::after {
        content: "\a";
        white-space: pre;

    }
    #section-five-commercial li {
        font-size: 14px;
        line-height: 25px;
        color: #777777;
    }

    @media (max-width: 600px) {
        #section-five-commercial  {
            display: inline-block;
            text-align: center;
        }

    }
    
</style>