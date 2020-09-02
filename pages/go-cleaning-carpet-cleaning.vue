<template>
  <section class="go-cleaning-basic-page">
    <ThePageBannerSection :pageMaterials="bannerPageMaterials"/>

    <div class="page-section second-section">
      <TheGenericSection :reviewsOrTestimonial="false" :genericSectionContent="sectionContentOne"/>
      <TheGenericSection :reviewsOrTestimonial="false" :genericSectionContent="sectionContentTwo"/>
      <TheGenericSection :reviewsOrTestimonial="false" :genericSectionContent="sectionContentThree"/>
    </div>

    <div class="page-section third-section">
      <TheGenericSection :reviewsOrTestimonial="false" :genericSectionContent="sectionContentFour"/>
    </div>

    <div class="page-section fourth-section">
      <TheGenericSection :reviewsOrTestimonial="false" :genericSectionContent="sectionContentFive"/>
    </div>

    <div class="page-section fifth-section">
      <TheGenericSection :reviewsOrTestimonial="false" :genericSectionContent="sectionContentSix"/>
    </div>

    <div class="page-section sixth-section">
      <TheGenericSection :reviewsOrTestimonial="true" :genericSectionContent="sectionContentSeven"/>
    </div>

    <div class="container page-section seventh-section">
      <div class="heading-area">

      </div>
      <div class="feature-boxes-area">
        <h2>Included For Every Client</h2>
        <hr>
        <TopImageCard class="feature-box" v-for="(feature, index) in features" :key="index" :cardContent="feature" />
        <p class="clearfix"></p>
      </div>
    </div>

    <div class="page-section eighth-section">
      <TheFaqSectionOne class="faq-section" />
    </div>


    <div class="page-section ninth-section">
      <TheGenericSection :reviewsOrTestimonial="true" :genericSectionContent="sectionContentTen"/>
    </div>
  </section>
</template>

<script>
import ThePageBannerSection from "@/components/shared/ThePageBannerSection";
import TheGenericSection from "@/components/shared/TheGenericSection";
import TopImageCard from "@/components/shared/TopImageCard";
import TheFaqSectionOne from "@/components/faq/TheFaqSectionOne";

export default {
  name: "go-cleaning-carpet-cleaning",
  components: {TheFaqSectionOne, TopImageCard, TheGenericSection, ThePageBannerSection},

  data() {
    return {
      bannerPageMaterials: {
        bannerImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/ppc-hero-office-image.jpg',
        pageTitle: 'Carpet Cleaning Page',
        pageSubtitle: 'Commercial Cleaning Service',
        hasButton: true
      },

      // The genericPage object has the following properties
      // mainHeading: { type: String, required: true }, mainParagraphs: { type: Array, required: true },
      //  displayAsParagraph: { type: Boolean, required: true }, separatorImg: { type: String, required: false },
      // hasExtendedContent: { type: Boolean, required: true }, extendedHeading: { type: String, required: false }, extendedParagraphs: { type: Array, required: false }
      // also imageRight : { type: Boolean, required: true }, if not provided all images will be in the left
      // also imagePath: {type: String, required: false }. If we want to show image, we should provide path, best would be static path or web url
      // also whether the content section should be full width or not... hence, fullWidth: {type: Boolean, required } and displaySectionBtn: { type: Boolean, required: true }
      // so lets create a pageContent object and send these values
      sectionContentOne: {
        fullWidth: false,
        imageRight: true,
        imagePath: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/auto-image1.jpg',
        mainHeading: 'Speedy Cleaning for Your Dealership',
        mainParagraphs: [
          'Picture Perfect Cleaning is proud to offer reliable, flexible service to all of our customers, and we’ve gained credible expertise in doing so. If you need every detail just right, you can count on our team to hit the mark on time, every time.'
        ],
        hasExtendedContent: true,
        extendedHeading: 'Why Us?',
        extendedParagraphs: [
          'We take care of our team and support their growth (this results in better cleans from happier cleaners!)',
          'We support the communities that we live in',
          'Our business is nearly a decade old, with well over 100 custodians across Calgary & Edmonton',
          'Because we want to work for you!'
        ],
        displayAsParagraph: false,
        displaySectionBtn: false
      },

      sectionContentTwo: {
        fullWidth: false,
        imageRight: false,
        imagePath: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/auto-image2.jpg',
        mainHeading: 'Genuine Service',
        mainParagraphs: [
          'The team at Picture Perfect Cleaning have all been highly trained and continually developed to be their professional best. We base this training off of the values and virtues that set them apart in the first place: integrity, care, and dedication. Whatever the job is, our team is ready to get it done.'
        ],
        hasExtendedContent: true,
        extendedHeading: 'Keep the Sales Rolling',
        extendedParagraphs: [
          'A clean, well-kept dealership is key to selling cars, just as a well maintained auto-shop is sure to inspire confidence in your customers. Our team of efficient and thorough employees are 100% hands-on when it comes to ensuring your business gives the best impression possible.'
        ],
        displayAsParagraph: true,
        displaySectionBtn: false
      },

      sectionContentThree: {
        fullWidth: true,
        mainHeading: 'Leave It To The Professionals',
        mainParagraphs: [
          'Picture Perfect Cleaning has the training and dedication to get the job done right, so that you can focus on yours.',
          'Contact us today to find out how we can help your business thrive.'
        ],
        hasExtendedContent: false,
        displaySectionBtn: true,
        sectionBtnText: 'Contact Go Cleaning'
      },

      sectionContentFour: {
        fullWidth: true,
        mainHeading: 'We’d Love to Show You the Difference',
        mainParagraphs: [
          ''
        ],
        hasExtendedContent: false,
        displaySectionBtn: true,
        sectionBtnText: 'Request A Quote'
      },

      sectionContentFive: {
        fullWidth: true,
        mainHeading: 'We’d Love to Show You the Difference',
        mainParagraphs: [
          'At PPC, we take a lot of pride in the work we do. Every cleaning job – no matter the size – is approached with total respect and genuine care for your business.',
          'We offer a variety of high-calibre cleaning services for our ongoing commercial clients. Regardless of the schedule required, we will carefully curate a custom janitorial program that suites your needs.',
          'Please ask for more details on our services and additional services offered to ongoing clients'
        ],
        hasExtendedContent: false,
        displaySectionBtn: true,
        sectionBtnText: 'Get In Touch With Us'
      },

      sectionContentSix: {
        fullWidth: false,
        imageRight: false,
        imagePath: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/09/mission-statement-megaphone.png',
        mainHeading: 'Our Mission Statement',
        mainParagraphs: [
          'Picture Perfect Cleaning’s mission is to provide a world class, healthy and safe, “wow,”commercial cleaning  experience to the valued businesses we serve, as well as, to our well selected custodians and management team.'
        ],
        hasExtendedContent: false,
        displaySectionBtn: false
      },

      sectionContentSeven: {
        fullWidth: true,
        mainHeading: 'If You’d Like To Read More',
        firstSeparatorImg: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/review-stars.png',
        secondaryHeading: 'We Are Proud to Show You Our Reviews on',
        secondSeparatorImg: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/google.png',
        mainParagraphs: [
          ''
        ],
        displaySectionBtn: true,
        sectionBtnText: 'Visit Google Reviews'
      },

      sectionContentTen: {
        fullWidth: true,
        mainHeading: 'Testimonials',
        mainParagraphs: [
          'Erol’s Automotive has been using Picture Perfect Cleaning for approx 2.5 years, before that we went through at least a half a dozen different cleaners with no success. Picture Perfect has been a welcome reprieve from all the others. They do a great job, show up when scheduled and if there are any concerns they are remedied immediately. We would recommend Picture Perfect for anyone needing reliable, punctual cleaners.'
        ],
        thirdHeading: '– Erol’s Automotive',
        displaySectionBtn: true,
        sectionBtnText: 'Read More Testimonials'
      },


      features: [
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'},
        { legendImage: 'https://pictureperfectcleaning.ca/wp-content/uploads/2019/08/unparallel-service.png', featureHeading: 'Unparalleled Service', featureDetail: 'Picture Perfect Cleaning is incredibly proud of the culture we have built within our company. We prioritize communication and teamwork, and it shows: you’ll never be left wondering about the work we do, or how we do it.'}
      ]
    }
  },
}
</script>

<style scoped>

.page-section {
  padding-top: 5rem;
}

.feature-boxes-area {
  display: block;
}

.feature-boxes-area h2 {
  text-align: center;
}

.feature-boxes-area hr {
  width: 40%;
  margin: 3rem auto;
  border: 1px solid gray;

}

.feature-box {
  display: block;
  width: 46%;
  margin-right: 4%;
  margin-bottom: 2rem;
  float: left;
}

.feature-box:nth-child(even) {
  margin-right: 0;
}

.clearfix {
  clear: both;
}

.faq-section {
  padding: 0;
  margin: 0;
}
</style>
