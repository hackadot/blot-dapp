(function(e){function t(t){for(var a,o,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Header"),n("v-main",[n("AppBody")],1)],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"d-flex justify-center ms-6"},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1000px",outlined:""}},[n("v-card-title",{staticClass:"d-flex justify-center"},[n("div",[e._v("SWAP")])]),n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"d-flex  flex-row text-h5"},[n("div",{staticClass:"text-overline ma-5"},[e._v("\n                        DOT\n                    ")]),n("v-text-field",{staticClass:"mt-2",attrs:{type:"number",min:"0"},on:{input:function(t){return e.onInput(e.DOT,"DOT")}},model:{value:e.DOT,callback:function(t){e.DOT=e._n(t)},expression:"DOT"}})],1),n("v-list-item-subtitle",{staticClass:"d-flex justify-center mt-5"},[n("v-icon",{attrs:{large:"",color:"red darken-2"}},[e._v("\n                        mdi-autorenew\n                    ")])],1),n("v-list-item-title",{staticClass:"d-flex  flex-row text-h5 mb-1"},[n("div",{staticClass:"text-overline ma-5"},[e._v("\n                        kek\n                    ")]),n("v-text-field",{staticClass:"mt-2",attrs:{type:"number",min:"0"},on:{input:function(t){return e.onInput(e.KEK,"KEK")}},model:{value:e.KEK,callback:function(t){e.KEK=e._n(t)},expression:"KEK"}})],1)],1)],1),n("v-card-actions",{staticClass:"d-flex justify-center  mb-5"},[n("v-btn",{attrs:{text:"",color:"red accent-4",disabled:!e.getIsConnected,elevation:"2"},on:{click:e.swapTokens}},[e._v("\n                Swap tokens\n            ")])],1)],1),n("Notifications")],1)},c=[],i=n("1da1"),u=n("5530"),l=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbars",{attrs:{messages:e.messages,color:"green",bottom:"",right:"",timeout:3e3},on:{"update:messages":function(t){e.messages=t}}})}),d=[],f=n("2f62"),p=n("99dd"),m={name:"Snacks",data:function(){return{messages:[]}},components:{VSnackbars:p["a"]},computed:Object(u["a"])({},Object(f["c"])(["getStatusMessages"])),mounted:function(){var e=this;setInterval((function(){0!==e.getStatusMessages.length&&0===e.messages.length&&e.messages.push(e.getStatusMessages[0])}),100)}},g=m,v=n("2877"),S=Object(v["a"])(g,l,d,!1,null,null,null),T=S.exports,b={name:"AppBody",data:function(){return{DOT:0,KEK:0}},components:{Notifications:T},computed:Object(u["a"])({},Object(f["c"])(["getBalance","getIsConnected","getWalletAddress"])),methods:Object(u["a"])(Object(u["a"])({},Object(f["b"])(["transfer"])),{},{onInput:function(e,t){if(e<0||isNaN(e))switch(t){case"DOT":this.DOT=0;break;case"KEK":this.KEK=0;break}},swapTokens:function(){this.transfer({addressFrom:this.getWalletAddress,amount:this.DOT})}}),mounted:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},A=b,O=n("6544"),_=n.n(O),E=n("8336"),h=n("b0af"),w=n("99d9"),x=n("a523"),C=n("132d"),I=n("da13"),k=n("5d23"),N=n("8654"),j=Object(v["a"])(A,o,c,!1,null,null,null),y=j.exports;_()(j,{VBtn:E["a"],VCard:h["a"],VCardActions:w["a"],VCardTitle:w["b"],VContainer:x["a"],VIcon:C["a"],VListItem:I["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VTextField:N["a"]});var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center font-weight-medium",staticStyle:{"font-size":"24px"}},[e._v("\n        HACKADOT\n    ")]),n("v-spacer"),e.getIsConnected?n("div",{staticClass:"d-flex"},[n("div",{staticClass:"ml-5"},[e._v(" "+e._s(e.getNetworkName)+" ")]),n("div",{staticClass:"ml-5"},[e._v(" "+e._s(e.getBalance)+" nDOT")]),n("div",{staticClass:"ml-5",staticStyle:{"max-width":"65px",overflow:"hidden","text-overflow":"ellipsis"}},[e._v(" "+e._s(e.getWalletAddress)+" ")])]):n("div",[n("v-btn",{attrs:{color:"secondary",elevation:"2"},on:{click:e.initWeb3}},[e._v("Connect to a blot ")])],1)],1)},P=[],V={name:"Header",data:function(){return{}},methods:Object(u["a"])({},Object(f["b"])(["initWeb3"])),computed:Object(u["a"])({},Object(f["c"])(["getBalance","getIsConnected","getNetworkName","getWalletAddress"]))},B=V,R=n("40dc"),U=n("2fa4"),D=Object(v["a"])(B,M,P,!1,null,null,null),K=D.exports;_()(D,{VAppBar:R["a"],VBtn:E["a"],VSpacer:U["a"]});var H={name:"App",components:{AppBody:y,Header:K},data:function(){return{}}},F=H,G=n("7496"),L=n("f6c4"),W=Object(v["a"])(F,r,s,!1,null,null,null),z=W.exports;_()(W,{VApp:G["a"],VMain:L["a"]});n("d3b7"),n("25f0"),n("159b"),n("99af");var $=n("dca6");a["a"].use(f["a"]);var J=new f["a"].Store({state:{allAccounts:[],statesMessage:"",isConnected:!1,networkName:"Local",walletAddress:"",balance:0,notificationMessages:[],provider:null,blot:null},getters:{getIsConnected:function(e){return e.isConnected},getNetworkName:function(e){return e.networkName},getBalance:function(e){return e.balance},getWalletAddress:function(e){return e.walletAddress},getStatusMessages:function(e){return e.notificationMessages},getProvider:function(e){return e.provider},getBlot:function(e){return e.blot},getAccounts:function(e){return e.allAccounts}},mutations:{STORE_ALL_ACCOUNTS:function(e,t){e.allAccounts=t},SAVE_STATUS_MESSAGE:function(e,t){e.statesMessage=t},SET_BALANCE:function(e,t){e.balance=t},PUSH_NOTIFICATION_MESSAGE:function(e,t){e.notificationMessages=t,console.log(e.notificationMessages)},SET_PROVIDER:function(e,t){e.provider=t},SET_BLOT:function(e,t){e.blot=t},SET_CONNECTION_STATUS:function(e,t){e.isConnected=t},SET_ACCOUNT_ADDRESS:function(e,t){e.walletAddress=t}},actions:{initWeb3:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,a=e.dispatch,t.next=3,new $["c"]("ws://127.0.0.1:9944").connect();case 3:return r=t.sent,n("SET_PROVIDER",r),s=new $["b"](r),t.prev=6,t.next=9,s.enable("Hackathon Token");case 9:t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](6),n("SAVE_STATUS_MESSAGE","User didn't accept athorization or no extension installed."),console.warn(t.t0);case 15:return n("SET_BLOT",s),n("SET_CONNECTION_STATUS",!0),t.next=19,s.getAccounts();case 19:o=t.sent,n("PUSH_NOTIFICATION_MESSAGE",["Account ".concat(o[0].address," connected.")]),setTimeout((function(){n("PUSH_NOTIFICATION_MESSAGE",[])}),100),n("SET_ACCOUNT_ADDRESS",o[0].address),n("STORE_ALL_ACCOUNTS",o),console.log(o),a("getBalance",o[0].address);case 26:case"end":return t.stop()}}),t,null,[[6,11]])})))()},claimTokens:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=e.commit,a("SAVE_STATUS_MESSAGE","WIP"),console.log(t);case 3:case"end":return n.stop()}}),n)})))()},transferTokens:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=e.commit,a("SAVE_STATUS_MESSAGE","WIP"),console.log(t);case 3:case"end":return n.stop()}}),n)})))()},swapTokens:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=e.commit,a("SAVE_STATUS_MESSAGE","WIP"),console.log(t);case 3:case"end":return n.stop()}}),n)})))()},getBalance:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.getters,n.next=3,r.getProvider.getBalance(t);case 3:s=n.sent.toString(),a("SET_BALANCE",s),console.log("Balance:",s,"Payload:",t);case 6:case"end":return n.stop()}}),n)})))()},transfer:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r,s,o,c,i,u,l,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.getters,s=e.dispatch,o=t.addressFrom,c=t.tokenAmount,i=new $["a"](o),console.log(i.getAddress()),u=r.getBlot,l=r.getAccounts,n.next=8,u.transfer(0,l[2].address,c,(function(e){var t=e.events,n=void 0===t?[]:t,r=e.status;console.log("Transaction status:",r.type),r.isInBlock?(setTimeout((function(){a("PUSH_NOTIFICATION_MESSAGE",["Included at block hash ".concat(r.asInBlock.toHex())])}),0),setTimeout((function(){a("PUSH_NOTIFICATION_MESSAGE",[])}),300),n.forEach((function(e){var t=e.event,n=t.data,r=t.method,s=t.section,o=e.phase;setTimeout((function(){a("PUSH_NOTIFICATION_MESSAGE",["".concat(o.toString()," : ").concat(s,".").concat(r," ").concat(n.toString())])}),0)})),setTimeout((function(){a("PUSH_NOTIFICATION_MESSAGE",[])}),3e3)):r.isFinalized&&(a("PUSH_NOTIFICATION_MESSAGE",["Finalized block hash ".concat(r.asFinalized.toHex())]),console.log()),s("getBalance",l[0].address)}));case 8:d=n.sent,console.log("status",d),a("SAVE_STATUS_MESSAGE","WIP"),console.log(o,a);case 12:case"end":return n.stop()}}),n)})))()}}}),q=n("f309");n("bf40");a["a"].use(q["a"]);var Q=new q["a"]({});a["a"].use(f["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(z)},vuetify:Q,store:J}).$mount("#app")}});
//# sourceMappingURL=app.8bff5709.js.map