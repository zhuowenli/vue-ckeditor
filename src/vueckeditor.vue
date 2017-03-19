<template lang="pug">
  .ckeditor
    textarea(v-bind:id="id" v-bind:value="value")
</template>

<script>
  const CKEDITOR = window.CKEDITOR;
  let index = 0;

  export default {
    props: {
      value: {
        type: String
      },
      id: {
        type: String,
        default: () => `editor-${index+=1}`
      },
      height: {
        type: String,
        default: '300px',
      },
      toolbar: {
        type: Array,
        default: () => [
          'Format',
          ['Bold', 'Italic', 'Strike', 'Underline'],
          ['BulletedList', 'NumberedList', 'Blockquote'],
          ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
          ['Link', 'Unlink'],
          ['FontSize', 'TextColor'],
          ['Image'],
          ['Undo', 'Redo'],
          ['Source', 'Maximize']
        ]
      },
      language: {
        type: String,
        default: 'zh-cn'
      },
      extraplugins: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        count: 0
      }
    },
    beforeUpdate() {
      const { id } = this;

      if (this.value !== CKEDITOR.instances[id].getData()) {
        CKEDITOR.instances[id].setData(this.value);
      }
    },
    mounted() {
      const { id } = this;
      const config = {
        toolbar: this.toolbar,
        language: this.language,
        height: this.height,
        extraPlugins: this.extraplugins
      };

      CKEDITOR.replace(id, config);
      CKEDITOR.instances[id].setData(this.value);
      CKEDITOR.instances[id].on('change', () => {
        const value = CKEDITOR.instances[id].getData();

        if (value !== this.value) {
          this.$emit('input', value);
        }
      });
    },
    destroyed() {
      const { id } = this;

      if (CKEDITOR.instances[id]) {
        CKEDITOR.instances[id].destroy();
      }
    },
  }
</script>
