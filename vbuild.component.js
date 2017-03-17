module.exports = {
  entry: 'src/vueckeditor.vue',
  // then user can access `window.vueckeditor` in browser as well
  moduleName: 'vueckeditor',
  html: false,
  minimize: false,
  sourceMap: false,
  filename: {
    js: 'vueckeditor.js',
    css: 'vueckeditor.css'
  },
  // this will not copy ./static/** to ./dist/**
  copy: false
}
