"use strict";var index_view=new Vue({el:"#app",data:{status:0,hashType:0,mData:"",tvlist:!1,gShow:!1},methods:{checkHash:function(t,i){var n=this,i=(0<i.indexOf("-")&&i.split("-")[0],0<i.indexOf("-")?i.split("-")[1]:"");switch(t){case"/vision.html":n.breadcrumbs=1;break;case"/philosophy.html":n.breadcrumbs=2;break;case"/affiliated-company.html":n.breadcrumbs=3;break;case"/about.html":n.breadcrumbs=4,n.hashType=i?parseInt(i):0;break;case"/atoz.html":n.breadcrumbs=5,n.hashType=i||"",$(".atoz-slide").hasClass("slick-slider")&&$(".atoz-slide").slick("unslick"),setTimeout(function(){$(".atoz-slide").slick({infinite:!1,dots:!0,customPaging:function(t,i){$(t.$slides[i]).data();return"<a>"+(i+1)+"</a>"}})},50);break;case"/villas.html":n.breadcrumbs=6,n.hashType=i?parseInt(i):0,$(".villas-slide").hasClass("slick-slider")&&$(".villas-slide").slick("unslick"),setTimeout(function(){$(".villas-slide").slick({infinite:!1,dots:!0,customPaging:function(t,i){$(t.$slides[i]).data();return"<a>"+(i+1)+"</a>"}})},50);break;case"/b38.html":n.breadcrumbs=7,setTimeout(function(){$(".b38-slide").slick({infinite:!1})},50);break;case"/advertising.html":n.breadcrumbs=8;break;default:n.breadcrumbs=0}},getSubMenu:function(){var i=this;if(i.mData){var t=i.mData.menu_list.find(function(t){return t.breadcrumb===i.breadcrumbs});if(t)return t.sub.find(function(t){return t.id===i.hashType})}},pageNext:function(){var i=this;if(i.mData){var t=i.mData.menu_list.find(function(t){return t.breadcrumb===i.breadcrumbs}),n=t.sub,e=n.findIndex(function(t){return t.id==i.hashType}),e=(e===n.length-1?n[0]:t.sub[e+1]).id;return t.link+"#"+t.subtitle+"-"+e}},pagePre:function(){var i=this;if(i.mData){var t=i.mData.menu_list.find(function(t){return t.breadcrumb===i.breadcrumbs}),n=t.sub,e=n.findIndex(function(t){return t.id==i.hashType}),e=(0===e?n[n.length-1]:t.sub[e-1]).id;return t.link+"#"+t.subtitle+"-"+e}},tvcf:function(){var t=this;0===t.status&&!t.tvlist||(t.status=0),t.tvlist=!0},print:function(){this.status=6,setTimeout(function(){$(".print-slide").slick({infinite:!1,slidesToShow:2,slidesToScroll:2})},500)},gOpen:function(t){this.gShow=!0,this.status=t}},mounted:function(){var i=this;window.innerWidth<=768&&(window.location.href="http://wmoon.tw/mobile/index.html"),window.addEventListener("resize",function(t){window.innerWidth<=768&&(window.location.href="http://wmoon.tw/mobile/index.html")}),fetch("data/data.json").then(function(t){return t.json()}).then(function(t){i.mData=t,i.checkHash(window.location.pathname,window.location.hash)}),window.addEventListener("hashchange",function(t){i.checkHash(window.location.pathname,window.location.hash),i.status=0}),$(".b38-slide")&&setTimeout(function(){$(".b38-slide").slick({infinite:!1})},50)}});