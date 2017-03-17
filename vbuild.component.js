/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-17 20:33:33
 */

'use strict';

const path = require('path');

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
  copy: [
    {
      from: './node_modules/ckeditor/config.js',
      to: path.resolve(__dirname, 'dist')
    }, {
      from: './node_modules/ckeditor/lang/',
      to: path.resolve(__dirname, 'dist/lang')
    }, {
      from: './node_modules/ckeditor/skins/',
      to: path.resolve(__dirname, 'dist/skins')
    },
  ]
}
