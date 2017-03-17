/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-17 20:36:30
 */

'use strict';

const path = require('path');

module.exports = {
  entry: 'example/index.js',
  dist: 'dist-example',
  html: {
    title: 'vueckeditor'
  },
  copy: [
    {
      from: './node_modules/ckeditor/config.js',
      dist: './dist'
    }, {
      from: './node_modules/ckeditor/styles.js',
      dist: './dist'
    }, {
      from: './node_modules/ckeditor/contents.css',
      dist: './dist'
    }, {
      from: './node_modules/ckeditor/lang/',
      to: './lang'
    }, {
      from: './node_modules/ckeditor/skins/',
      to: './skins'
    }, {
      from: './node_modules/ckeditor/plugins/',
      to: './plugins'
    },
  ]
}
