<template lang="pug">
  .ckeditor
</template>

<script>
  import 'ckeditor';

  const CKEDITOR = window.CKEDITOR;

  export default {
    data() {
      return {
        count: 0
      }
    },
    mounted () {
      console.log(CKEDITOR);
    }
  }
</script>
