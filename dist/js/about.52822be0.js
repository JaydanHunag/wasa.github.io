"use strict";(self["webpackChunkwasa_jaydan"]=self["webpackChunkwasa_jaydan"]||[]).push([[594],{783:function(t,l,e){e.r(l),e.d(l,{default:function(){return y}});var s=e(6768);const n={class:"about"},o=(0,s.Lk)("div",{class:"pt-5"},[(0,s.Lk)("h3",null,"該頁面會顯示串接API回傳的資料"),(0,s.Lk)("h5",null,"使用的API是 RandomUser_API")],-1),a={style:{width:"100%"}};function c(t,l,e,c,i,r){const u=(0,s.g2)("tableUser");return(0,s.uX)(),(0,s.CE)("div",n,[o,(0,s.Lk)("div",a,[(0,s.bF)(u,{tableOptions:i.tableOptions,class:"p-5"},null,8,["tableOptions"])])])}var i=e(4232);const r={key:0,class:"table"},u=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",{scope:"col"},"#"),(0,s.Lk)("th",{scope:"col"},"First"),(0,s.Lk)("th",{scope:"col"},"Last"),(0,s.Lk)("th",{scope:"col"},"Nat"),(0,s.Lk)("th",{scope:"col"},"City"),(0,s.Lk)("th",{scope:"col"},"Phone"),(0,s.Lk)("th",{scope:"col"},"photo")])],-1),p={style:{"vertical-align":"middle"}},d=(0,s.Lk)("th",{scope:"row"},"1",-1),k=["src"];function h(t,l,e,n,o,a){return(0,s.uX)(),(0,s.CE)("div",null,[Object.keys(e.tableOptions).length>0?((0,s.uX)(),(0,s.CE)("table",r,[u,(0,s.Lk)("tbody",null,[(0,s.Lk)("tr",p,[d,(0,s.Lk)("td",null,(0,i.v_)(e.tableOptions.name.first),1),(0,s.Lk)("td",null,(0,i.v_)(e.tableOptions.name.last),1),(0,s.Lk)("td",null,(0,i.v_)(e.tableOptions.nat),1),(0,s.Lk)("td",null,(0,i.v_)(e.tableOptions.location.city),1),(0,s.Lk)("td",null,(0,i.v_)(e.tableOptions.phone),1),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:e.tableOptions.picture.medium,alt:""},null,8,k)])])])])):(0,s.Q3)("",!0)])}var b={props:["tableOptions"],mounted(){console.log(this.tableOptions)}},L=e(1241);const v=(0,L.A)(b,[["render",h]]);var O=v,m={components:{tableUser:O},data(){return{tableOptions:{}}},methods:{getUser(){this.$axios.get("https://randomuser.me/api/").then((t=>{console.log(t.data.results[0]),this.tableOptions=t.data.results[0]})).catch((t=>{console.log(t)}))}},created(){this.getUser()}};const g=(0,L.A)(m,[["render",c]]);var y=g}}]);
//# sourceMappingURL=about.52822be0.js.map