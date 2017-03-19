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
  }
}
