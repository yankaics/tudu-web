var Guide={container:null,mask:null,bh:null,init:function(){this.initMask();this.initStartDialog()},initView:function(){var a=null;function b(){var e=$("#fix-height");var d=$("#pic");var c=(document.body.offsetWidth-d.width())/2;var f=0;if(d.height()<Math.min(e.height(),document.documentElement.offsetHeight)){f=((Math.min(e.height(),document.documentElement.offsetHeight)-d.height())/2+Math.max(document.documentElement.scrollTop,document.body.scrollTop))}$("#pic").css({top:f,left:c});a=null}window.onresize=function(){if(a==null){a=setTimeout(function(){b()},100)}};$("#pic02 a").click(function(){$("#pic02").hide();$("#pic03").show()});$("#pic03 a").click(function(){$("#pic03").hide();$("#pic04").show();setTimeout(function(){$("#pic04").hide();$("#pic05").show();setTimeout(function(){$("#pic05").hide();$("#pic06").show();setTimeout(function(){$("#pic06").hide();$("#pic07").show();setTimeout(function(){$("#pic07").hide();$("#pic08").show()},3000)},3000)},3000)},3000)});$("#pic08 a").click(function(){$("#pic08").hide();$("#pic09").show();setTimeout(function(){$("#pic09").hide();$("#pic10").show();setTimeout(function(){$("#pic10").hide();$("#pic11").show()},3000)},3000)});$("#pic11 a").click(function(){$("#pic11").hide();$("#pic02").show()});$(".close").click(function(){window.open("","_self","");window.close()});b()},initMask:function(){this.bh=$("#fix-height");if(!this.bh.size()){this.bh=$("<div>").attr("id","fix-height").css({position:"absolute",height:"100%",width:1,left:-100,top:0}).appendTo(document.body)}this.mask=$('<div class="mask">').css({zIndex:8000,"background-color":"#7e7e7e",display:"block",position:"fixed"}).appendTo(document.body)},initStartDialog:function(){var c=this;this.container=$('<div class="guide-window">');this.container.css({height:"220px",width:"383px"});this.container.html('<span class="start"></span>');var d=$('<div class="close">');d.appendTo(this.container);var b=$('<div class="view">');b.appendTo(this.container);b.html('<a href="'+BASE_PATH+'/guide/" target="_blank"></a>');var a=(document.body.offsetWidth-$(this.container).width())/2;var e=0;if(this.container.height()<Math.min(this.bh.height(),document.documentElement.offsetHeight)){e=((Math.min(this.bh.height(),document.documentElement.offsetHeight)-this.container.height())/2+Math.max(document.documentElement.scrollTop,document.body.scrollTop))}this.container.css({top:e,left:a}).appendTo(document.body);this.container.find(".close").click(function(f){f.preventDefault();c.closeDialog()});this.container.find(".view").click(function(){c.closeDialog()})},closeDialog:function(){this.mask.remove();this.bh.remove();this.container.remove();this.submitStatus()},submitStatus:function(){$.ajax({type:"POST",dataType:"json",data:{},url:BASE_PATH+"/guide/tips",success:function(){},error:function(){}})}};
