webpackJsonp([1],{0:function(t,e,o){o("j1ja"),t.exports=o("NHnr")},"36o3":function(t,e){},"8/YX":function(t,e){},FLLn:function(t,e){},H9Ro:function(t,e){},Ilzg:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),i=o("mnkD"),s=o.n(i),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading-container"},[e("div",{staticClass:"spinner"},[e("div",{staticClass:"double-bounce1"}),this._v(" "),e("div",{staticClass:"double-bounce2"})])])}]};var r,c=o("VU/8")(null,a,!1,function(t){o("Ilzg")},"data-v-144c75e8",null).exports,u=o("mvHQ"),l=o.n(u),d=o("Zrlr"),f=o.n(d),v=o("wxAW"),p=o.n(v),m=function(){function t(){f()(this,t),this.cookie={},this.storageItemName="cookieStorage",this.init()}return p()(t,[{key:"init",value:function(){if(""!=document.cookie.trim()){var t=decodeURI(document.cookie).split(this.storageItemName+"=")[1];try{this.cookie=JSON.parse(t)}catch(t){this.cookie={}}}}},{key:"all",value:function(){return this.cookie}},{key:"get",value:function(t){!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(""==document.cookie.trim())return null;var e=this.cookie[t];return e||null}},{key:"set",value:function(t,e){this.cookie[t]=e,this._write()}},{key:"delete",value:function(t){delete this.cookie[t],this._write()}},{key:"_write",value:function(){document.cookie=this.storageItemName+"="+encodeURI(l()(this.cookie))}}]),t}(),h=function(){function t(){f()(this,t);var e=Math.random();try{window.localStorage.setItem(e,e),window.localStorage.removeItem(e),this.supportedLocalStorage=!0}catch(t){return void(this.supportedLocalStorage=!1)}}return p()(t,[{key:"all",value:function(){return window.localStorage}},{key:"get",value:function(t){try{var e=window.localStorage.getItem(t);return"string"!=typeof e?null:JSON.parse(e)}catch(t){return null}}},{key:"set",value:function(t,e){window.localStorage.setItem(t,l()(e))}},{key:"delete",value:function(t){window.localStorage.removeItem(t)}}]),t}(),_=(r=new h).supportedLocalStorage?r:new m,g={created:function(){var t=_.get("quotation_preview");null!=t&&this.$store.dispatch("Quotation/setPreview",t)},methods:{toggleInfo:function(){this.$root.$emit("toggleInfo")},setPreview:function(){this.$store.dispatch("Quotation/setPreview",!this.preview)}},computed:{preview:function(){return this.$store.getters["Quotation/preview"]}},watch:{preview:function(){_.set("quotation_preview",this.preview)}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"toolbar"},[e("div",{staticClass:"form-group"},[this.preview?this._e():e("button",{staticClass:"btn btn-warning",on:{click:this.toggleInfo}},[e("i",{staticClass:"fa fa-info-circle"})])]),this._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-info",on:{click:this.setPreview}},[e("i",{staticClass:"fa fa-image"})])])])},staticRenderFns:[]};var y=o("VU/8")(g,w,!1,function(t){o("H9Ro")},"data-v-7ea912d4",null).exports;n.default.use(s.a);var P={name:"App",data:function(){return{notifyOptions:{defaultStyle:"success",zIndex:99e3}}},computed:{loading:function(){return this.$store.getters["Base/loading"]}},components:{AppLoading:c,Toolbar:y}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("transition",{attrs:{name:"transition-loading"}},[this.loading?e("AppLoading"):this._e()],1),this._v(" "),e("Toolbar"),this._v(" "),e("VuePNotify",{attrs:{options:this.notifyOptions}})],1)},staticRenderFns:[]};var b=o("VU/8")(P,C,!1,function(t){o("sOln"),o("fou3"),o("rL+r"),o("36o3")},null,null).exports,$=o("/ocq"),k={data:function(){return{show:!1,info:null}},beforeDestroy:function(){this.$root.$off("toggleInfo")},created:function(){this.$root.$on("toggleInfo",this.toggleInfo),this.init()},methods:{init:function(){var t=this,e=_.get("quotation_info");e?this.info=e:e||(this.info=_cloneDeep(this.storeInfo)),this.$nextTick(function(){t.hasAnyInfoEmpty&&(t.show=!0)})},toggleInfo:function(){this.show=!this.show}},computed:{storeInfo:function(){return this.$store.getters["Quotation/info"]},hasAnyInfoEmpty:function(){return!this.storeInfo.companyName||(!this.storeInfo.companyAddress||(!this.storeInfo.companyTel||(!this.storeInfo.customerName||!this.storeInfo.workPlace)))}},watch:{info:{deep:!0,handler:function(){_isEqual(this.info,this.storeInfo)||(this.$store.dispatch("Quotation/setInfo",_cloneDeep(this.info)),_.set("quotation_info",this.info))}}}},x={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.info?o("div",{staticClass:"quotation-info"},[o("h3",[t._v("主要資料")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"form"},[o("div",{staticClass:"form-group"},[o("label",[t._v("公司名稱")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.info.companyName,expression:"info.companyName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.companyName},on:{input:function(e){e.target.composing||t.$set(t.info,"companyName",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("公司地址")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.info.companyAddress,expression:"info.companyAddress"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.companyAddress},on:{input:function(e){e.target.composing||t.$set(t.info,"companyAddress",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("公司電話")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.info.companyTel,expression:"info.companyTel"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.companyTel},on:{input:function(e){e.target.composing||t.$set(t.info,"companyTel",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("客戶名稱")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.info.customerName,expression:"info.customerName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.customerName},on:{input:function(e){e.target.composing||t.$set(t.info,"customerName",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("服務項目地點")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.info.workPlace,expression:"info.workPlace"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.workPlace},on:{input:function(e){e.target.composing||t.$set(t.info,"workPlace",e.target.value)}}})])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"alert alert-info"},[t._v('\n    點選右邊"橘色"'),o("i",{staticClass:"fa fa-info-circle"}),t._v(" 資訊按鈕可展開主要資料設定\n  ")])]):t._e()},staticRenderFns:[]};var I=o("VU/8")(k,x,!1,function(t){o("Xp+d")},"data-v-bdecc440",null).exports,N={props:{product:{type:Object},index:{type:Number}},data:function(){return{localProduct:null}},created:function(){this.localProduct=_cloneDeep(this.product)},methods:{remove:function(){this.$emit("removeProduct",this.index)}},computed:{sum:function(){return this.localProduct.price*this.localProduct.quantity}},watch:{localProduct:{deep:!0,handler:function(){_isEqual(this.localProduct,this.product)||this.$emit("updateProduct",{index:this.index,product:_cloneDeep(this.localProduct)})}},product:{deep:!0,handler:function(){this.localProduct=_cloneDeep(this.product)}}}},q={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.localProduct?o("div",{staticClass:"quotation-product-item"},[o("div",{staticClass:"control"},[o("i",{staticClass:"fa fa-bars sortable"}),t._v(" "),o("i",{staticClass:"fa fa-trash remove",on:{click:t.remove}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("名稱")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.localProduct.name,expression:"localProduct.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.localProduct.name},on:{input:function(e){e.target.composing||t.$set(t.localProduct,"name",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group inline"},[o("div",{staticClass:"form-group"},[o("label",[t._v("單位")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.localProduct.unit,expression:"localProduct.unit"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.localProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.localProduct,"unit",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("數量")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.localProduct.quantity,expression:"localProduct.quantity"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.localProduct.quantity},on:{input:function(e){e.target.composing||t.$set(t.localProduct,"quantity",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("單價")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.localProduct.price,expression:"localProduct.price"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.localProduct.price},on:{input:function(e){e.target.composing||t.$set(t.localProduct,"price",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("複價")]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"number",disabled:"disabled"},domProps:{value:t.sum}})])])]):t._e()},staticRenderFns:[]};var Q=o("VU/8")(N,q,!1,function(t){o("WdSh")},"data-v-34243443",null).exports,D=o("u4Bf"),E={data:function(){return{products:[]}},created:function(){this.init()},methods:{init:function(){var t=this,e=_.get("quotation_products");e?this.products=e:e||(this.products=_cloneDeep(this.storeProducts)),this.$nextTick(function(){0==t.productQuantity&&t.createDefaultProduct()})},createDefaultProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.products.push(this.getDefaultProduct()),t&&this.$notify("新增成功")},getDefaultProduct:function(){return{name:null,unit:null,quantity:1,price:0,sum:0}},updateProduct:function(t){this.$set(this.products,t.index,t.product)},removeProduct:function(t){this.$delete(this.products,t),this.$notify({style:"success",title:"刪除成功"})}},computed:{storeProducts:function(){return this.$store.getters["Quotation/products"]},productQuantity:function(){return this.$store.getters["Quotation/productQuantity"]},draggableOptions:function(){return{handle:".sortable"}}},watch:{products:{deep:!0,handler:function(){_isEqual(this.products,this.storeProducts)||(this.$store.dispatch("Quotation/setProducts",_cloneDeep(this.products)),_.set("quotation_products",this.products))}}},components:{VueDraggable:o.n(D).a,ProductItem:Q}},S={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"products"},[o("h3",[t._v("服務項目")]),t._v(" "),o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-info",on:{click:function(e){t.createDefaultProduct(!0)}}},[t._v("新增服務")])]),t._v(" "),o("VueDraggable",{attrs:{options:t.draggableOptions},model:{value:t.products,callback:function(e){t.products=e},expression:"products"}},t._l(t.products,function(e,n){return o("ProductItem",{key:n,attrs:{index:n,product:e},on:{updateProduct:t.updateProduct,removeProduct:t.removeProduct}})}))],1)},staticRenderFns:[]};var A={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("table",{staticClass:"table"},[o("tbody",[o("tr",[o("td",{attrs:{colspan:"6"}},[o("h1",[t._v(t._s(t.storeInfo.companyName))]),t._v(" "),o("div",[t._v("電話: "+t._s(t.storeInfo.companyTel))]),t._v(" "),o("div",[t._v("地址: "+t._s(t.storeInfo.companyAddress))])])]),t._v(" "),o("tr",[o("td",{attrs:{colspan:"6"}},[o("div",[t._v("客戶名稱: "+t._s(t.storeInfo.customerName))])])]),t._v(" "),o("tr",[o("td",{attrs:{colspan:"6"}},[o("div",[t._v("服務項目地點: "+t._s(t.storeInfo.workPlace))])])])])]),t._v(" "),o("table",{staticClass:"table"},[t._m(0),t._v(" "),o("tbody",t._l(t.storeProducts,function(e,n){return o("tr",[o("td",{staticClass:"index"},[o("strong",[t._v(t._s(n+1))])]),t._v(" "),o("td",{staticClass:"name"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),o("td",{staticClass:"unit"},[t._v("\n          "+t._s(e.unit)+"\n        ")]),t._v(" "),o("td",{staticClass:"quantity"},[t._v("\n          "+t._s(e.quantity)+"\n        ")]),t._v(" "),o("td",{staticClass:"price"},[t._v("\n          "+t._s(e.price)+"\n        ")]),t._v(" "),o("td",{staticClass:"sum"},[t._v("\n          "+t._s(e.quantity*e.price)+"\n        ")])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",{staticClass:"thead-dark"},[o("tr",[o("th",{staticClass:"index"},[t._v("#")]),t._v(" "),o("th",{staticClass:"name"},[t._v("名稱")]),t._v(" "),o("th",{staticClass:"unit"},[t._v("單位")]),t._v(" "),o("th",{staticClass:"quantity"},[t._v("數量")]),t._v(" "),o("th",{staticClass:"price"},[t._v("單價")]),t._v(" "),o("th",{staticClass:"sum"},[t._v("複價")])])])}]};var R={computed:{preview:function(){return this.$store.getters["Quotation/preview"]}},components:{Info:I,Products:o("VU/8")(E,S,!1,function(t){o("8/YX")},"data-v-2aa94619",null).exports,Preview:o("VU/8")({computed:{storeInfo:function(){return this.$store.getters["Quotation/info"]},storeProducts:function(){return this.$store.getters["Quotation/products"]}}},A,!1,function(t){o("s3QK")},"data-v-b2590a98",null).exports}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!this.preview,expression:"!preview"}],staticClass:"form"},[e("Info"),this._v(" "),e("Products")],1),this._v(" "),e("Preview",{directives:[{name:"show",rawName:"v-show",value:this.preview,expression:"preview"}]})],1)},staticRenderFns:[]};var L=o("VU/8")(R,T,!1,function(t){o("FLLn")},null,null).exports;n.default.use($.a);var O=new $.a({routes:[{path:"/",name:"home",component:L}]}),U=o("NYxO"),V={namespaced:!0,state:{loading:!1},mutations:{loading:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.loading=e}},actions:{loading:function(t,e){t.commit("loading",e)}},getters:{loading:function(t){return t.loading}}};n.default.use(U.a);var F=new U.a.Store({modules:{Base:V,Quotation:{namespaced:!0,state:{taxRate:.05,info:{companyName:null,companyAddress:null,companyTel:null,customerName:null,workPlace:null},products:[],preview:!1},mutations:{set:function(t,e){t[e.key]=e.value},setInfo:function(t,e){t.info=e},setProducts:function(t,e){t.products=e},setPreview:function(t,e){t.preview=e}},actions:{set:function(t,e){t.commit("set",e)},setInfo:function(t,e){t.commit("setInfo",e)},setProducts:function(t,e){t.commit("setProducts",e)},setPreview:function(t,e){t.commit("setPreview",e)}},getters:{info:function(t){return t.info},products:function(t){return t.products},productQuantity:function(t){return t.products.length},preview:function(t){return t.preview},productsPriceSum:function(){},tax:function(){},total:function(){}}}}}),H=o("kvU2"),j=o.n(H),W=o("lHK6"),X=o.n(W),Y=o("hygk"),z=o.n(Y);window._cloneDeep=j.a,window._isEmpty=X.a,window._isEqual=z.a;var B=o("7t+N"),J=o.n(B),K=o("8AgW"),M=o.n(K),Z=o("p3jY"),G=o.n(Z);n.default.config.productionTip=!1,window.self.$=J.a,n.default.use(M.a),n.default.use(G.a),new n.default({el:"#app",router:O,store:F,components:{App:b},template:"<App/>",metaInfo:function(){return{title:"報價單產生器",link:[{rel:"favicon",href:"static/favicon.ico"},{rel:"shortcut icon",href:"static/favicon.ico"}],meta:[]}}})},WdSh:function(t,e){},"Xp+d":function(t,e){},fou3:function(t,e){},"rL+r":function(t,e){},s3QK:function(t,e){},sOln:function(t,e){}},[0]);
//# sourceMappingURL=app.9c053a102cce2f928c87.js.map