(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71f76c63"],{"395c":function(t,a,e){"use strict";e("b37c")},"56b0":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page2"},[e("Row",{staticClass:"content"},[e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"list"},[e("div",{staticClass:"left"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-4"},[t._v("聊天分析")])]),e("span",{staticClass:"angle1"}),e("span",{staticClass:"angle2"}),e("span",{staticClass:"angle3"}),e("span",{staticClass:"angle4"}),e("div",{staticClass:"chart-68"},[e("area-chart",{ref:"chart1",attrs:{id:"left_1","select-range-date":t.selectRangeDate,config:t.cnfigData1}})],1),e("div",{staticClass:"chart-32"},[e("radar-chart",{ref:"chart2",attrs:{id:"left_2",data:t.chatRadarData}})],1)])]),e("div",{staticClass:"list"},[e("div",{staticClass:"left"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-8"},[t._v("办公时长分析")])]),e("span",{staticClass:"angle1"}),e("span",{staticClass:"angle2"}),e("span",{staticClass:"angle3"}),e("span",{staticClass:"angle4"}),e("div",{staticClass:"chart-68"},[e("bar-chart",{ref:"chart3",attrs:{id:"left_3",config:t.configData2}})],1),e("div",{staticClass:"chart-32"},[e("radar-chart",{ref:"chart4",attrs:{id:"left_4",data:t.officeRadarData}})],1)])])]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"circlePie",attrs:{id:"circlePie"}},[e("canvas",{attrs:{id:"main",width:"500",height:"500"}}),e("canvas",{attrs:{id:"dot"}})])]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"list"},[e("div",{staticClass:"right"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-4"},[t._v("好友分析")])]),e("span",{staticClass:"angle1"}),e("span",{staticClass:"angle2"}),e("span",{staticClass:"angle3"}),e("span",{staticClass:"angle4"}),e("div",{staticClass:"chart-32"},[e("radar-chart",{ref:"chart5",attrs:{id:"right_1",data:t.friendRadarData}})],1),e("div",{staticClass:"chart-68"},[e("double-bar-chart",{ref:"chart6"})],1)])]),e("div",{staticClass:"list"},[e("div",{staticClass:"right"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-8"},[t._v("微信朋友圈分析")])]),e("span",{staticClass:"angle1"}),e("span",{staticClass:"angle2"}),e("span",{staticClass:"angle3"}),e("span",{staticClass:"angle4"}),e("div",{staticClass:"chart-32"},[e("radar-chart",{ref:"chart7",attrs:{id:"right_3",data:t.momentsRadarData}})],1),e("div",{staticClass:"chart-68"},[e("single-area-chart",{ref:"chart8",attrs:{selectRangeDate:t.selectRangeDate,id:"right_4"}})],1)])])])],1),e("Row",{staticClass:"bottom-list"},[e("Col",{attrs:{span:"16"}},[e("div",{staticClass:"list"},[e("div",{staticClass:"bottom"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-10"},[t._v("违规话术分布趋势")])]),e("span",{staticClass:"angle1"}),e("span",{staticClass:"angle2"}),e("span",{staticClass:"angle3"}),e("span",{staticClass:"angle4"}),e("double-line",{ref:"chart9",attrs:{id:"bottom_1"}})],1)]),e("div",{staticClass:"list"},[e("div",{staticClass:"bottom"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-10"},[t._v("各部门违规话术对比")])]),e("span",{staticClass:"angle1"}),e("span",{staticClass:"angle2"}),e("span",{staticClass:"angle3"}),e("span",{staticClass:"angle4"}),e("double-bars",{ref:"chart10",attrs:{id:"bottom_2"}})],1)]),e("div",{staticClass:"list"},[e("div",{staticClass:"bottom"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-10"},[t._v("红包转账分布趋势")])]),e("span",{staticClass:"angle1"}),e("span",{staticClass:"angle2"}),e("span",{staticClass:"angle3"}),e("span",{staticClass:"angle4"}),e("three-bar-chart",{ref:"chart11",attrs:{id:"bottom_3"}})],1)])]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"list right-bottom"},[e("div",{staticClass:"bottom bottom1"},[e("span",{staticClass:"title"},[e("span",{staticClass:"title-10"},[t._v("各部门红包转账对比")])]),e("span",{staticClass:"angle1"}),e("span",{staticClass:"angle2"}),e("span",{staticClass:"angle3"}),e("span",{staticClass:"angle4"}),e("pie-chart",{ref:"chart12",attrs:{id:"bottom_4"}})],1)])])],1)],1)},i=[];const l=()=>e.e("chunk-f7364840").then(e.bind(null,"9374")),r=()=>e.e("chunk-53f91b66").then(e.bind(null,"ee49")),n=()=>e.e("chunk-279741ba").then(e.bind(null,"fc45")),c=()=>e.e("chunk-7447413a").then(e.bind(null,"c1be")),h=()=>e.e("chunk-285ab20e").then(e.bind(null,"fb6d")),o=()=>e.e("chunk-56365722").then(e.bind(null,"4657")),d=()=>e.e("chunk-1fd2ad98").then(e.bind(null,"61a7")),f=()=>e.e("chunk-c754778e").then(e.bind(null,"2c6e")),g=()=>e.e("chunk-49bce13f").then(e.bind(null,"a1f2"));var C={name:"page2",props:["selectRangeDate"],components:{areaChart:l,radarChart:r,barChart:n,doubleBarChart:c,singleAreaChart:h,doubleLine:o,threeBarChart:d,pieChart:f,doubleBars:g},data(){return{everyPer:0,xOffset:0,circle:{x:250,y:250,radius:218},title:["累计话术违规个数:456,789","累计办公次数:123,12","累计办公时长:134,23","累计服务好友次数:234,234","累计服务好友数量:123,123","累计设备违规个数:678,123"],cnfigData1:{color:"#5CB1C1",name:["（次）","（人）"],data:[{name:"聊天次数",color:["#9e70ff","#6e5eff"],data:[200,12,21,54,260,130,210]},{name:"聊天人数",color:["#48cefd","#5356f1"],data:[50,182,234,191,190,30,10]}]},configData2:{data:[213,190,137,99,63,196,248,212,248,112]},chatRadarData:{title:"各部门聊天对比",position:["center","85%"],center:["50%","50%"],indicator:[{text:"一部"},{text:"二部"},{text:"三部"},{text:"四部"},{text:"五部"},{text:"六部"}],data:[{name:"聊天次数",color:"#0DF5F8",value:[100,8,.4,-80,2e3,332]},{name:"聊天人数",color:"#7921AD",value:[60,5,.3,-100,1500,221]}]},officeRadarData:{title:"各部门办公时长对比",position:["center","85%"],center:["50%","50%"],indicator:[{text:"一部"},{text:"二部"},{text:"三部"},{text:"四部"},{text:"五部"},{text:"六部"}],data:[{name:"办公时长",color:"#55D35B",value:[100,8,.4,-80,2e3,332]}]},friendRadarData:{title:"各部门好友数量对比",position:["center","85%"],center:["50%","50%"],indicator:[{text:"一部"},{text:"二部"},{text:"三部"},{text:"四部"},{text:"五部"},{text:"六部"}],data:[{name:"好友总数",color:"#FA8486",value:[100,8,.4,-80,2e3,332]}]},momentsRadarData:{title:"各部门朋友圈数量对比",position:["center","85%"],center:["50%","50%"],indicator:[{text:"一部"},{text:"二部"},{text:"三部"},{text:"四部"},{text:"五部"},{text:"六部"}],data:[{name:"朋友圈个数",color:"#D91748",value:[100,8,.4,-80,2e3,332]}]},warea:{x:250,y:250,max:700},dots:[],resizeFn:null,animationFrame1:null,animationFrame2:null,centerBox:{width:0,height:0}}},methods:{drawDot(){let t=document.getElementById("dot");t.width=document.querySelector("#circlePie").offsetWidth,t.height=document.querySelector("#circlePie").offsetHeight;let a=t.getContext("2d");a.clearRect(0,0,t.width,t.height);let e=[this.warea].concat(this.dots);this.dots.forEach(s=>{s.x+=s.xa,s.y+=s.ya,s.xa*=s.x>t.width||s.x<0?-1:1,s.ya*=s.y>t.height||s.y<0?-1:1,a.fillStyle="#ffffff",a.beginPath(),a.arc(s.x-.5,s.y-.5,2,0,2*Math.PI,!0),a.closePath(),a.fill();for(let t=0;t<e.length;t++){let i=e[t];if(s===i||null===i.x||null===i.y)continue;let l,r=s.x-i.x,n=s.y-i.y,c=Math.sqrt(r*r+n*n);c<i.max&&(l=(i.max-c)/i.max,a.beginPath(),a.lineWidth=l/2,i===this.warea?a.strokeStyle="rgba(255,255,255,0)":a.strokeStyle="rgba(255,255,255,"+(l+.2)+")",a.moveTo(s.x,s.y),a.lineTo(i.x,i.y),a.stroke())}e.splice(e.indexOf(s),1)}),this.animationFrame1=window.requestAnimationFrame(this.drawDot)},rads(t){return Math.PI*t/180},act(){const t=document.querySelector("#main");t.style.width=this.centerBox.height+"px",t.style.height=this.centerBox.height+"px";const a=t.getContext("2d");a.clearRect(0,0,t.width,t.height),this.drawPie(this.everyPer,a),this.animationFrame2=window.requestAnimationFrame(this.act),this.everyPer+=Math.PI/180;let e=.07;this.xOffset+=e},drawPie(t,a){a.save(),a.fillStyle="rgba(18,55,88,.2)",a.beginPath(),a.arc(this.circle.x,this.circle.y,245,0,2*Math.PI,!0),a.closePath(),a.fill(),a.restore(),a.save(),a.shadowBlur=50,a.shadowColor="#123959",a.fillStyle="#080D27",a.beginPath(),a.arc(this.circle.x,this.circle.y,235,0,2*Math.PI,!0),a.closePath(),a.fill(),a.restore();for(let l=0;l<this.title.length;l++)a.save(),this.drawCircularText(this.circle,this.title[l],this.rads(60*l-110),this.rads(60*l-65),l,a),a.restore();let e=240*Math.cos(t),s=240*Math.sin(t);a.save(),a.fillStyle="rgb(56,252,253)",a.shadowBlur=80,a.shadowColor="#39E9EE",a.translate(this.circle.x,this.circle.y),a.beginPath(),a.arc(e,s,5,0,2*Math.PI),a.arc(-e,-s,5,0,2*Math.PI),a.closePath(),a.fill(),a.restore(),a.save(),a.fillStyle="#153776",a.beginPath(),a.arc(this.circle.x,this.circle.y,200,0,2*Math.PI,!0),a.closePath(),a.fill(),a.fillStyle="#121535",a.beginPath(),a.arc(this.circle.x,this.circle.y,190,0,2*Math.PI,!0),a.closePath(),a.fill();let i=36;a.save(),this.drawCircle(a),this.drawSin(this.xOffset,a,i),this.drawText(a,i),a.restore();for(let l=0;l<6;l++)a.save(),a.translate(this.circle.x,this.circle.y),a.rotate(-Math.PI/2+Math.PI/6+l*Math.PI/3),a.beginPath(),a.moveTo(190,0),a.lineTo(200,0),a.lineWidth=4,a.strokeStyle="#0A122D",a.stroke(),a.closePath(),a.restore()},drawCircle(t){t.beginPath(),t.fillStyle="#209ADF",t.arc(this.circle.x,this.circle.y,120,0,2*Math.PI),t.fill(),t.beginPath(),t.arc(this.circle.x,this.circle.y,120,0,2*Math.PI),t.clip()},drawSin(t,a,e){let s=240,i=240,l=0,r=s,n=.04,c=12;a.save(),a.translate(130,130);let h=[];a.beginPath();for(let o=l;o<l+r;o+=20/r){let s=-Math.sin((l+o)*n+t),r=i*(1-e/100);h.push([o,r,r+s*c]),a.lineTo(o,r+s*c)}a.lineTo(r,i),a.lineTo(l,i),a.lineTo(h[0][0],h[0][1]),a.fillStyle="#2C50B1",a.fill(),a.restore()},drawText(t,a){t.save(),t.translate(130,130);let e=50;t.font=e+"px Microsoft Yahei",t.textAlign="center",t.fillStyle="#95EFFF",t.fillText(a+"%",120,120-e/2),t.restore(),t.save(),e=25,t.translate(130,130),t.font=e+"px Microsoft Yahei",t.textAlign="center",t.fillStyle="#95EFFF",t.fillText("平均营销质量指数",120,120+e),t.restore()},drawCircularText(t,a,e,s,i,l){let r,n,c=t.radius,h=parseFloat(e),o=0,d=a.split(":");if(l.save(),l.fillStyle="#fff",l.font="12px 微软雅黑 ",l.textAlign="center",l.textBaseline="middle",i<2||5===i)while(o<a.length)n=a.charAt(o),r=d[0].indexOf(n)>=0?d[0].length>6?(e-s)/(a.length-3):(e-s)/(a.length-1):(e-s)/(a.length+6),l.save(),l.beginPath(),l.translate(t.x+Math.cos(h)*c,t.y+Math.sin(h)*c),l.rotate(Math.PI/2+h),l.fillText(n,0,0),h-=r,o++,l.restore();else while(o<a.length)n=a.split("").reverse().join("").charAt(o),r=d[1].indexOf(n)>=0?(e-s)/(a.length+6):d[0].length>6?(e-s)/(a.length-3):(e-s)/(a.length-1),l.save(),l.beginPath(),l.translate(t.x+Math.cos(h)*c,t.y+Math.sin(h)*c),l.rotate(-Math.PI/2+h),l.fillText(n,0,0),h-=r,o++,l.restore();l.restore()}},mounted(){this.centerBox={width:document.querySelector("#circlePie").offsetWidth,height:document.querySelector("#circlePie").offsetHeight};for(let t=0;t<200;t++){let t=Math.random()*this.centerBox.width,a=Math.random()*this.centerBox.height,e=2*Math.random()-1,s=2*Math.random()-1;this.dots.push({x:t,y:a,xa:e,ya:s,max:40})}this.act(),this.drawDot(),this.resizeFn=this.$debounce(()=>{this.centerBox={width:document.querySelector("#circlePie").offsetWidth,height:document.querySelector("#circlePie").offsetHeight};for(let t=1;t<13;t++)this.$refs["chart"+t].setChart()},500),window.addEventListener("resize",this.resizeFn)},beforeDestroy(){window.removeEventListener("resize",this.resizeFn),window.cancelAnimationFrame(this.animationFrame1),window.cancelAnimationFrame(this.animationFrame2)}},x=C,p=(e("395c"),e("2877")),u=Object(p["a"])(x,s,i,!1,null,"8a06fd3c",null);a["default"]=u.exports},b37c:function(t,a,e){}}]);
//# sourceMappingURL=chunk-71f76c63.d465809f.js.map