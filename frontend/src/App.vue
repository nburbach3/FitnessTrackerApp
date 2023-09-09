<template>
  <body>
    <StickyHeader></StickyHeader>
    <div class="landing-image-container">
      <div class="overlay"></div>
      <div class="background-image">
      </div>
      <div class="text">
        <h1>You have a lot on your plate. Let us make that easier to manage.</h1>
        <a href="#" class="button">Learn More</a>
      </div>
    </div>
    <div class="services-container">

    </div>
    <GeneralFooter></GeneralFooter>
  </body>
</template>

<script>
import StickyHeader from './components/StickyHeader.vue';
import GeneralFooter from './components/GeneralFooter.vue';
import '@/static/css/App.css';

export default {
  components: {
    StickyHeader,
    GeneralFooter
  },
}

window.addEventListener('load', function () {
  document.querySelector('.text').classList.add('animate-text');
});
</script>