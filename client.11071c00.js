webpackJsonp([0,2],[,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(8),a=i(r),u=n(4),o=i(u);new a.default({el:"#app",render:function(t){return t(o.default)}})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),a=i(r);e.default={components:{VueCkeditor:a.default},data:function(){return{content:"Hello World!"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=window.CKEDITOR,r=0;e.default={props:{value:{type:String},id:{type:String,default:function(){return"editor-"+(r+=1)}},height:{type:String,default:"300px"},toolbar:{type:Array,default:function(){return["Format",["Bold","Italic","Strike","Underline"],["BulletedList","NumberedList","Blockquote"],["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"],["Link","Unlink"],["FontSize","TextColor"],["Image"],["Undo","Redo"],["Source","Maximize"]]}},language:{type:String,default:"zh-cn"},extraplugins:{type:String,default:""}},data:function(){return{count:0}},beforeUpdate:function(){var t=this.id;this.value!==i.instances[t].getData()&&i.instances[t].setData(this.value)},mounted:function(){var t=this,e=this.id,n={toolbar:this.toolbar,language:this.language,height:this.height,extraPlugins:this.extraplugins};i.replace(e,n),i.instances[e].setData(this.value),i.instances[e].on("change",function(){var n=i.instances[e].getData();n!==t.value&&t.$emit("input",n)})},destroyed:function(){var t=this.id;i.instances[t]&&i.instances[t].destroy()}}},function(t,e,n){var i=n(0)(n(2),n(6),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(3),n(7),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vue-ckeditor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ckeditor"},[n("textarea",{attrs:{id:t.id},domProps:{value:t.value}})])},staticRenderFns:[]}},,,function(t,e,n){t.exports=n(1)}],[10]);
//# sourceMappingURL=client.11071c00.js.map