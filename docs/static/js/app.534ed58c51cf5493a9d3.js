webpackJsonp([1],{0:function(t,n,e){e("j1ja"),t.exports=e("NHnr")},Fri7:function(t,n){},Ilzg:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),i=(e("K3J8"),{render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"loading-container"},[n("div",{staticClass:"spinner"},[n("div",{staticClass:"double-bounce1"}),this._v(" "),n("div",{staticClass:"double-bounce2"})])])}]});var s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"toolbar"},[n("button",{staticClass:"btn btn-warning",on:{click:this.toggleInfo}},[n("i",{staticClass:"fa fa-info-circle"})])])},staticRenderFns:[]};var a={name:"App",computed:{loading:function(){return this.$store.getters["Base/loading"]}},components:{AppLoading:e("VU/8")(null,i,!1,function(t){e("Ilzg")},"data-v-144c75e8",null).exports,Toolbar:e("VU/8")({methods:{toggleInfo:function(){this.$root.$emit("toggleInfo")}}},s,!1,function(t){e("vvof")},"data-v-25896055",null).exports}},r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),this._v(" "),n("transition",{attrs:{name:"transition-loading"}},[this.loading?n("AppLoading"):this._e()],1),this._v(" "),n("Toolbar")],1)},staticRenderFns:[]};var c=e("VU/8")(a,r,!1,function(t){e("OKFR"),e("onEX"),e("XIzq")},null,null).exports,u=e("/ocq"),l={data:function(){return{show:!1,info:null}},beforeDestroy:function(){this.$root.$off("toggleInfo")},created:function(){this.$root.$on("toggleInfo",this.toggleInfo),this.init()},methods:{init:function(){this.hasAnyInfoEmpty&&(this.show=!0),this.info=_cloneDeep(this.storeInfo)},toggleInfo:function(){this.show=!this.show}},computed:{storeInfo:function(){return this.$store.getters["Quotation/info"]},hasAnyInfoEmpty:function(){return!this.storeInfo.companyName||(!this.storeInfo.companyAddress||(!this.storeInfo.companyTel||(!this.storeInfo.customerName||!this.storeInfo.workPlace)))}},watch:{info:{deep:!0,handler:function(){_isEqual(this.info,this.storeInfo)||this.$store.dispatch("Quotation/setInfo",_cloneDeep(this.info))}}}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.info?e("div",{staticClass:"quotation-info"},[e("h3",[t._v("主要資料")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"form"},[e("div",{staticClass:"form-group"},[e("label",[t._v("公司名稱")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.companyName,expression:"info.companyName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.companyName},on:{input:function(n){n.target.composing||t.$set(t.info,"companyName",n.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("公司地址")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.companyAddress,expression:"info.companyAddress"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.companyAddress},on:{input:function(n){n.target.composing||t.$set(t.info,"companyAddress",n.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("公司電話")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.companyTel,expression:"info.companyTel"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.companyTel},on:{input:function(n){n.target.composing||t.$set(t.info,"companyTel",n.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("客戶名稱")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.customerName,expression:"info.customerName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.customerName},on:{input:function(n){n.target.composing||t.$set(t.info,"customerName",n.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("服務項目地點")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.workPlace,expression:"info.workPlace"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.info.workPlace},on:{input:function(n){n.target.composing||t.$set(t.info,"workPlace",n.target.value)}}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"alert alert-info"},[t._v("\n    點選右邊 "),e("i",{staticClass:"fa fa-info-circle"}),t._v(" 資訊按鈕可展開主要資料設定\n  ")])]):t._e()},staticRenderFns:[]};var d=e("VU/8")(l,f,!1,function(t){e("VNeR")},"data-v-4a5ad3a1",null).exports,p={props:{product:{type:Object},index:{type:Number}},data:function(){return{}},created:function(){}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var v={data:function(){return{products:[]}},created:function(){this.init()},methods:{init:function(){this.products=_cloneDeep(this.storeProducts),0==this.productQuantity&&this.createDefaultProduct()},createDefaultProduct:function(){this.products.push(this.getDefaultProduct())},getDefaultProduct:function(){return{name:null,unit:null,quantity:1,price:0,sum:0}}},computed:{storeProducts:function(){return this.$store.getters["Quotation/products"]},productQuantity:function(){return this.$store.getters["Quotation/productQuantity"]}},watch:{products:{deep:!0,handler:function(){_isEqual(this.products,this.storeProducts)||this.$store.dispatch("Quotation/setProducts",_cloneDeep(this.products))}}},components:{ProductItem:e("VU/8")(p,m,!1,function(t){e("rHf+")},"data-v-497eb597",null).exports}},h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"products"},[n("h3",[this._v("服務項目")]),this._v(" "),this._l(this.products,function(t,e){return n("ProductItem",{key:e,attrs:{index:e,product:t}})})],2)},staticRenderFns:[]};var g={components:{Info:d,Products:e("VU/8")(v,h,!1,function(t){e("Fri7")},"data-v-29ce3212",null).exports}},_={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"form"},[n("Info"),this._v(" "),n("Products")],1)])},staticRenderFns:[]};var w=e("VU/8")(g,_,!1,function(t){e("a5d9")},null,null).exports;o.a.use(u.a);var y=new u.a({routes:[{path:"/",name:"home",component:w}]}),P=e("NYxO"),I={namespaced:!0,state:{loading:!1},mutations:{loading:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.loading=n}},actions:{loading:function(t,n){t.commit("loading",n)}},getters:{loading:function(t){return t.loading}}};o.a.use(P.a);var N=new P.a.Store({modules:{Base:I,Quotation:{namespaced:!0,state:{taxRate:.05,info:{companyName:null,companyAddress:null,companyTel:null,customerName:null,workPlace:null},products:[],preview:!1},mutations:{set:function(t,n){t[n.key]=n.value},setInfo:function(t,n){t.info=n},setProducts:function(t,n){t.products=n},setPreview:function(t,n){t.preview=n}},actions:{set:function(t,n){t.commit("set",n)},setInfo:function(t,n){t.commit("setInfo",n)},setProducts:function(t,n){t.commit("setProducts",n)},setPreview:function(t,n){t.commit("setPreview",n)}},getters:{info:function(t){return t.info},products:function(t){return t.products},productQuantity:function(t){return t.products.length},preview:function(t){return t.preview},productsPriceSum:function(){},tax:function(){},total:function(){}}}}}),$=e("kvU2"),x=e.n($),C=e("lHK6"),b=e.n(C),E=e("hygk"),A=e.n(E);window._cloneDeep=x.a,window._isEmpty=b.a,window._isEqual=A.a;var k=e("7t+N"),R=e.n(k),F=e("8AgW"),D=e.n(F),Q=e("p3jY"),T=e.n(Q);o.a.config.productionTip=!1,window.self.$=R.a,o.a.use(D.a),o.a.use(T.a),new o.a({el:"#app",router:y,store:N,components:{App:c},template:"<App/>",metaInfo:function(){return{title:"報價單產生器",link:[{rel:"favicon",href:"static/favicon.ico"},{rel:"shortcut icon",href:"static/favicon.ico"}],meta:[]}}})},OKFR:function(t,n){},VNeR:function(t,n){},XIzq:function(t,n){},a5d9:function(t,n){},onEX:function(t,n){},"rHf+":function(t,n){},vvof:function(t,n){}},[0]);
//# sourceMappingURL=app.534ed58c51cf5493a9d3.js.map