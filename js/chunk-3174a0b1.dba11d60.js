(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3174a0b1"],{"04ce":function(t,e,a){},"0531":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ring"})},i=[],n={name:"",props:{data:Object},data(){return{}},methods:{setChart(){let t={title:{text:"【"+this.data.title+"】",top:20,x:"center",textStyle:{color:"#75deef",fontSize:14,fontWeight:"normal"}},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)",backgroundColor:"#11367a",textStyle:{color:"#6dd0e3",fontSize:10}},series:[{name:this.data.title,type:"pie",radius:["40%","60%"],center:["50%","55%"],avoidLabelOverlap:!0,label:{normal:{show:!0,position:"outside",fontSize:10,color:"#75deef"}},labelLine:{normal:{show:!0,length:8,length2:5,lineStyle:{color:"#303851"}}},data:this.data.data}]},e=this.$echarts(this.$el);e.clear(),e.resize(),e.setOption(t)}},mounted(){this.setChart()}},r=n,l=(a("b49b"),a("2877")),s=Object(l["a"])(r,o,i,!1,null,"7fd73b74",null);e["default"]=s.exports},b49b:function(t,e,a){"use strict";a("04ce")}}]);
//# sourceMappingURL=chunk-3174a0b1.dba11d60.js.map