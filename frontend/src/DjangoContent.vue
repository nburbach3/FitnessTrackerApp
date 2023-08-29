<template>
    <div>
      <div v-if="djangoContent" v-html="djangoContent"></div>
      <div v-else>Loading...</div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        djangoContent: null,
      };
    },
  
    mounted() {
      // Make the API request when the component is mounted
      this.fetchDjangoContent();
    },
  
    methods: {
      async fetchDjangoContent() {
        try {
          const response = await fetch('/api');
          const html = await response.text();
          this.djangoContent = html;
        } catch (error) {
          console.error('Error fetching Django content:', error);
        }
      },
    },
  }
  </script>