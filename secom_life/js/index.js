"use strict";var index_view=new Vue({el:"#app",data:{salesTab:1},mounted:function(){$("#info-slide").slick({fade:!0,dots:!0}),$("#message-slide").slick({slidesToShow:3,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]}),$("#brand-slide").slick({arrows:!1,slidesToShow:6,autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:768,settings:{slidesToShow:2}}]})}});