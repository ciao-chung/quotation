webpackJsonp([1],{"/TYw":function(t,o){},0:function(t,o,e){e("j1ja"),t.exports=e("NHnr")},"1Og/":function(t,o){},"730o":function(t,o){},"8/YX":function(t,o){},GB8E:function(t,o){},Ilzg:function(t,o){},Jm2J:function(t,o){},NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e("7+uW"),i=e("mnkD"),s=e.n(i),a=(e("K3J8"),{render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"loading-container"},[o("div",{staticClass:"spinner"},[o("div",{staticClass:"double-bounce1"}),this._v(" "),o("div",{staticClass:"double-bounce2"})])])}]});var r=e("VU/8")(null,a,!1,function(t){e("Ilzg")},"data-v-144c75e8",null).exports,c={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"toolbar"},[o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-warning",on:{click:this.toggleInfo}},[o("i",{staticClass:"fa fa-info-circle"})])]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-info"},[o("i",{staticClass:"fa fa-image"})])])}]};var u=e("VU/8")({methods:{toggleInfo:function(){this.$root.$emit("toggleInfo")}}},c,!1,function(t){e("730o")},"data-v-22581f45",null).exports;n.default.use(s.a);var l={name:"App",data:function(){return{notifyOptions:{defaultStyle:"success",zIndex:99e3}}},computed:{loading:function(){return this.$store.getters["Base/loading"]}},components:{AppLoading:r,Toolbar:u}},d={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view"),this._v(" "),o("transition",{attrs:{name:"transition-loading"}},[this.loading?o("AppLoading"):this._e()],1),this._v(" "),o("Toolbar"),this._v(" "),o("VuePNotify",{attrs:{options:this.notifyOptions}})],1)},staticRenderFns:[]};var f,p=e("VU/8")(l,d,!1,function(t){e("1Og/"),e("/TYw"),e("Jm2J"),e("GB8E")},null,null).exports,m=e("/ocq"),v=e("mvHQ"),h=e.n(v),g=e("Zrlr"),_=e.n(g),w=e("wxAW"),y=e.n(w),P=function(){function t(){_()(this,t),this.cookie={},this.storageItemName="cookieStorage",this.init()}return y()(t,[{key:"init",value:function(){if(""!=document.cookie.trim()){var t=decodeURI(document.cookie).split(this.storageItemName+"=")[1];try{this.cookie=JSON.parse(t)}catch(t){this.cookie={}}}}},{key:"all",value:function(){return this.cookie}},{key:"get",value:function(t){!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(""==document.cookie.trim())return null;var o=this.cookie[t];return o||null}},{key:"set",value:function(t,o){this.cookie[t]=o,this._write()}},{key:"delete",value:function(t){delete this.cookie[t],this._write()}},{key:"_write",value:function(){document.cookie=this.storageItemName+"="+encodeURI(h()(this.cookie))}}]),t}(),b=function(){function t(){_()(this,t);var o=Math.random();try{window.localStorage.setItem(o,o),window.localStorage.removeItem(o),this.supportedLocalStorage=!0}catch(t){return void(this.supportedLocalStorage=!1)}}return y()(t,[{key:"all",value:function(){return window.localStorage}},{key:"get",value:function(t){try{var o=window.localStorage.getItem(t);return"string"!=typeof o?null:JSON.parse(o)}catch(t){return null}}},{key:"set",value:function(t,o){window.localStorage.setItem(t,h()(o))}},{key:"delete",value:function(t){window.localStorage.removeItem(t)}}]),t}(),C=(f=new b).supportedLocalStorage?f:new P,k={data:function(){return{show:!1,info:null}},beforeDestroy:function(){this.$root.$off("toggleInfo")},created:function(){this.$root.$on("toggleInfo",this.toggleInfo),this.init()},methods:{init:function(){var t=this,o=C.get("quotation_info");o?this.info=o:o||(this.info=_cloneDeep(this.storeInfo)),this.$nextTick(function(){t.hasAnyInfoEmpty&&(t.show=!0)})},toggleInfo:function(){this.show=!this.show}},computed:{storeInfo:function(){return this.$store.getters["Quotation/info"]},hasAnyInfoEmpty:function(){return!this.storeInfo.companyName||(!this.storeInfo.companyAddress||(!this.storeInfo.companyTel||(!this.storeInfo.customerName||!this.storeInfo.workPlace)))}},watch:{info:{deep:!0,handler:function(){_isEqual(this.info,this.storeInfo)||(this.$store.dispatch("Quotation/setInfo",_cloneDeep(this.info)),C.set("quotation_info",this.info))}}}},x={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.info?e("div",{staticClass:"quotation-info"},[e("h3",[t._v("主要資料")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"form"},[e("div",{staticClass:"form-group"},[e("label",[t._v("公司名稱")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.companyName,expression:"info.companyName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.companyName},on:{input:function(o){o.target.composing||t.$set(t.info,"companyName",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("公司地址")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.companyAddress,expression:"info.companyAddress"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.companyAddress},on:{input:function(o){o.target.composing||t.$set(t.info,"companyAddress",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("公司電話")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.companyTel,expression:"info.companyTel"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.companyTel},on:{input:function(o){o.target.composing||t.$set(t.info,"companyTel",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("客戶名稱")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.customerName,expression:"info.customerName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.customerName},on:{input:function(o){o.target.composing||t.$set(t.info,"customerName",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("服務項目地點")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.workPlace,expression:"info.workPlace"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.workPlace},on:{input:function(o){o.target.composing||t.$set(t.info,"workPlace",o.target.value)}}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"alert alert-info"},[t._v('\n    點選右邊"橘色"'),e("i",{staticClass:"fa fa-info-circle"}),t._v(" 資訊按鈕可展開主要資料設定\n  ")])]):t._e()},staticRenderFns:[]};var I=e("VU/8")(k,x,!1,function(t){e("Xp+d")},"data-v-bdecc440",null).exports,$={props:{product:{type:Object},index:{type:Number}},data:function(){return{localProduct:null}},created:function(){this.localProduct=_cloneDeep(this.product)},methods:{remove:function(){this.$emit("removeProduct",this.index)}},computed:{sum:function(){return this.localProduct.price*this.localProduct.quantity}},watch:{localProduct:{deep:!0,handler:function(){_isEqual(this.localProduct,this.product)||this.$emit("updateProduct",{index:this.index,product:_cloneDeep(this.localProduct)})}},product:{deep:!0,handler:function(){this.localProduct=_cloneDeep(this.product)}}}},N={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.localProduct?e("div",{staticClass:"quotation-product-item"},[e("div",{staticClass:"control"},[e("i",{staticClass:"fa fa-bars sortable"}),t._v(" "),e("i",{staticClass:"fa fa-trash remove",on:{click:t.remove}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("名稱")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.localProduct.name,expression:"localProduct.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.localProduct.name},on:{input:function(o){o.target.composing||t.$set(t.localProduct,"name",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group inline"},[e("div",{staticClass:"form-group"},[e("label",[t._v("單位")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.localProduct.unit,expression:"localProduct.unit"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.localProduct.unit},on:{input:function(o){o.target.composing||t.$set(t.localProduct,"unit",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("數量")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.localProduct.quantity,expression:"localProduct.quantity"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.localProduct.quantity},on:{input:function(o){o.target.composing||t.$set(t.localProduct,"quantity",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("單價")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.localProduct.price,expression:"localProduct.price"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.localProduct.price},on:{input:function(o){o.target.composing||t.$set(t.localProduct,"price",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("複價")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"number",disabled:"disabled"},domProps:{value:t.sum}})])])]):t._e()},staticRenderFns:[]};var E=e("VU/8")($,N,!1,function(t){e("WdSh")},"data-v-34243443",null).exports,q=e("u4Bf"),D={data:function(){return{products:[]}},created:function(){this.init()},methods:{init:function(){var t=this,o=C.get("quotation_products");o?this.products=o:o||(this.products=_cloneDeep(this.storeProducts)),this.$nextTick(function(){0==t.productQuantity&&t.createDefaultProduct()})},createDefaultProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.products.push(this.getDefaultProduct()),t&&this.$notify("新增成功")},getDefaultProduct:function(){return{name:null,unit:null,quantity:1,price:0,sum:0}},updateProduct:function(t){this.$set(this.products,t.index,t.product)},removeProduct:function(t){this.$delete(this.products,t),this.$notify({style:"success",title:"刪除成功"})}},computed:{storeProducts:function(){return this.$store.getters["Quotation/products"]},productQuantity:function(){return this.$store.getters["Quotation/productQuantity"]},draggableOptions:function(){return{handle:".sortable"}}},watch:{products:{deep:!0,handler:function(){_isEqual(this.products,this.storeProducts)||(this.$store.dispatch("Quotation/setProducts",_cloneDeep(this.products)),C.set("quotation_products",this.products))}}},components:{VueDraggable:e.n(q).a,ProductItem:E}},S={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"products"},[e("h3",[t._v("服務項目")]),t._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-info",on:{click:function(o){t.createDefaultProduct(!0)}}},[t._v("新增服務")])]),t._v(" "),e("VueDraggable",{attrs:{options:t.draggableOptions},model:{value:t.products,callback:function(o){t.products=o},expression:"products"}},t._l(t.products,function(o,n){return e("ProductItem",{key:n,attrs:{index:n,product:o},on:{updateProduct:t.updateProduct,removeProduct:t.removeProduct}})}))],1)},staticRenderFns:[]};var A={components:{Info:I,Products:e("VU/8")(D,S,!1,function(t){e("8/YX")},"data-v-2aa94619",null).exports}},T={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"form"},[o("Info"),this._v(" "),o("Products")],1)])},staticRenderFns:[]};var O=e("VU/8")(A,T,!1,function(t){e("a5d9")},null,null).exports;n.default.use(m.a);var Q=new m.a({routes:[{path:"/",name:"home",component:O}]}),R=e("NYxO"),U={namespaced:!0,state:{loading:!1},mutations:{loading:function(t){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.loading=o}},actions:{loading:function(t,o){t.commit("loading",o)}},getters:{loading:function(t){return t.loading}}};n.default.use(R.a);var V=new R.a.Store({modules:{Base:U,Quotation:{namespaced:!0,state:{taxRate:.05,info:{companyName:null,companyAddress:null,companyTel:null,customerName:null,workPlace:null},products:[],preview:!1},mutations:{set:function(t,o){t[o.key]=o.value},setInfo:function(t,o){t.info=o},setProducts:function(t,o){t.products=o},setPreview:function(t,o){t.preview=o}},actions:{set:function(t,o){t.commit("set",o)},setInfo:function(t,o){t.commit("setInfo",o)},setProducts:function(t,o){t.commit("setProducts",o)},setPreview:function(t,o){t.commit("setPreview",o)}},getters:{info:function(t){return t.info},products:function(t){return t.products},productQuantity:function(t){return t.products.length},preview:function(t){return t.preview},productsPriceSum:function(){},tax:function(){},total:function(){}}}}}),J=e("kvU2"),F=e.n(J),Y=e("lHK6"),j=e.n(Y),B=e("hygk"),L=e.n(B);window._cloneDeep=F.a,window._isEmpty=j.a,window._isEqual=L.a;var W=e("7t+N"),H=e.n(W),X=e("8AgW"),z=e.n(X),G=e("p3jY"),K=e.n(G);n.default.config.productionTip=!1,window.self.$=H.a,n.default.use(z.a),n.default.use(K.a),new n.default({el:"#app",router:Q,store:V,components:{App:p},template:"<App/>",metaInfo:function(){return{title:"報價單產生器",link:[{rel:"favicon",href:"static/favicon.ico"},{rel:"shortcut icon",href:"static/favicon.ico"}],meta:[]}}})},WdSh:function(t,o){},"Xp+d":function(t,o){},a5d9:function(t,o){}},[0]);
//# sourceMappingURL=app.fc7930725861f9b47e05.js.map