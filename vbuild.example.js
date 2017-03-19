/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-17 20:36:30
 */

'use strict';

const path = require('path');

module.exports = (options, req) => ({
  entry: 'example/index.js',
  dist: 'dist-example',
  html: {
    title: 'vueckeditor',
    template: './index.html'
  },
  webpack(cfg) {
    if(!options.dev) {
        cfg.output.publicPath = `/vue-ckeditor/`;
    }
    return cfg;
  },
});
