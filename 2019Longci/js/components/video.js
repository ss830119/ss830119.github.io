"use strict";var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var player1,player2,firstScriptTag=document.getElementsByTagName("script")[0];if(firstScriptTag.parentNode.insertBefore(tag,firstScriptTag),768<window.innerWidth)var vh=.245*window.innerWidth;else vh=.511*window.innerWidth;function onYouTubeIframeAPIReady(){player1=new YT.Player("player1",{height:vh,width:.43*window.innerWidth,videoId:"rn1JpPhYASA",host:"https://www.youtube.com"}),player2=new YT.Player("player2",{height:vh,width:.43*window.innerWidth,videoId:"qHgf5bqH5CM",host:"https://www.youtube.com"})}function onPlayerReady(e){}