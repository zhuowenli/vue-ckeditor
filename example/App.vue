<template lang="pug">
  #app
    vue-ckeditor(v-model="content")
</template>

<script>
  import VueCkeditor from '../src/vueckeditor';

  export default {
    components: {
      VueCkeditor
    },
    data() {
      return {
        content: 'Hello World!',
      };
    }
  }
</script>
