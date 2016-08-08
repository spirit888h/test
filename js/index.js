$(function(){
	/****判断是否是手机端*****/
	window.mobilecheck = function() {
	  var check = false;
	  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
	}
	/******公共方法******/
	var Common = {
		/*****首页图片的高度*******/
		WH       :  window.screen.height,
		CW       :  $(".part .container").width(),
		cw       :  $(".bannerwh .container").width(),
		/******判断是否是ie浏览器*******/
		isIE     :  function(){ //ie?  
		    if (!!window.ActiveXObject || "ActiveXObject" in window)  
		        return true;  
		    else  
		        return false;  
		},
		/******首页图片高度******/
		homeImgH :  function(){
			if(Common.CW>750){
				$(".pos_bannerfix").height(Common.WH);
		    }else{
		    	if(Common.WH>920){
					$(".banner_home_01").height(Common.WH);
			    }else{
			    	$(".banner_home_01").css("height","920px");
			    }
		    }
		},
		/*******首页的动画效果*********/
		Animatfun :  function(sty){
			if(Common.isIE()){
				$("."+sty).find(".j_modelTitle").animate({
		            opacity: 1,
		            "margin-top":"-20px"
		        }, 1000, function () {
		            $("."+sty).find(".j_modelSummary").animate({
		                opacity: 1
		            }, 1000,function(){
		            	$("."+sty).find(".j_modelDescription").animate({
			                opacity: 1
			            }, 1000,function(){
			            	$("."+sty).find("a").animate({
				                opacity: 1
				            }, 1000)
			            })
		            })
		        })
			}else{
				$("."+sty).find(".j_modelTitle").addClass("animated fadeInUp delay-0s");
	        	setTimeout(function () {
	                $("."+sty).find(".j_modelSummary").addClass("animated fadeInUp delay-0s");
	            },500)
	        	setTimeout(function () {
	                $("."+sty).find(".j_modelDescription").addClass("animated fadeInUp delay-0s");
	            },1000)
	        	setTimeout(function () {
	                $("."+sty).find("a").addClass("animated fadeInUp delay-0s");
	            },1500)
			}
			
		},
		
		/********红色区域的大小的计算********/
		countBL  :   function(){
			$(".lf-tit").each(function(){
		    	var pw=$(this).parents("p").width()-100;
		    	$(this).parents("p").find("span").eq(1).width(pw) 
		    })
			$(".banner-mm,.banner-bm,.banner-tm").width(Common.cw+30);
			if(Common.cw>=720){
				$(".banner-lb").width((Common.cw+30)/2-50);
			}else{
				$(".banner-lb").width(Common.cw-80);
			}
		},
		/*********图片的移上效果********/
		hoverTap  :   function(str){
			$(".pro_ul li a,.firstpul li a,.adulCon a").each(function(){
				if(window.mobilecheck()){
				}else{
					$(this).hover(function(){
						$(this).find("img").eq(0).css("display","none");
						$(this).find("img").eq(1).css("display","inline-block");
						$(this).parent("li").find("p").addClass("text-org");
					},function(){
						$(this).find("img").eq(1).css("display","none");
						$(this).find("img").eq(0).css("display","inline-block");
						$(this).parent("li").find("p").removeClass("text-org");
					})
				}
			})
		}
	}
	//$("body").append('<script language="JavaScript">javascript:window.history.forward(1);</script>');
	Common.homeImgH();
	Common.countBL();
	Common.hoverTap();
	var bsw=1,t = 0,fs=0;
	$(window).scroll(
    function (b) {
    	var pH1=$(".banner_home_01").height();
    	var pH2=$(".banner_home_02").height();
    	var pH3=$(".banner_home_03").height();
    	var pH4=$(".banner_home_04").height();
        var s = document.documentElement.scrollTop || document.body.scrollTop;
        /*******获取滚动条的滑动方向*********/
        if(s<t){
        	fs=1;
        }else{
        	fs=0;
        }
        t=s;
        /*********首页header显示********/
       	if(s==0){
        	$("#rs_home_header").find(".collapse").removeClass("in").end().hide();
	        $("#rs_top").show().addClass("animated05 fadeIn delay-0s");
        	bsw=1;
        }else if(s>0&&bsw==1){
	        $("#rs_top").find(".collapse").removeClass("in").end().hide();
	    	$("#rs_home_header").show();
	    	$(".banner_home_02").addClass("animated fadeUp delay-0s");
	    	bsw=2;
        }
        /******首页效果*******/
       
        if(Common.isIE()){
       		$(".pos_bannerfix").css({
       			"background-attachment":"scroll"
       		});
        }
   		if((s>pH1/3) &&fs==0 && bsw==2){
        	Common.Animatfun("secondpCon");
        	bsw=3;
    	}
        if(s>(pH1+pH2/3) && fs==0){
        	Common.Animatfun("thirdpCon");
        	bsw=4;
    	}
        if(s>(pH1+pH2+pH3/3) && fs==0 &&bsw==4){
        	Common.Animatfun("forthpCon");
        	bsw=5;
    	}
        
        
        /*if(s>pH2&& s<pH1+pH2+pH3){
        	var h = s-pH2;
        	if(h>820){
        		h=-h+820;
        	}
        	$(".banner_home_03").animate({
                "background-position-y": h/10
            }, 0)
        	bsw=4;
        }*/
    })
	/********窗口缩放事件***********/
	$(window).on("resize",
    function() {
    	Common.WH    =  window.screen.height,
		Common.CW    =  $(".part .container").width();
		Common.cw    =  $(".bannerwh .container").width();
	    if(Common.CW>750){
			$(".pos_bannerfix").height(Common.WH);
	    }else{
	    	if(Common.WH>920){
	    		$(".pos_bannerfix").height("100%");
				$(".banner_home_01").height(Common.WH);
		    }else{
		    	$(".pos_bannerfix").height("100%");
		    	$(".banner_home_01").css("height","920px");
		    }
	    }
	    Common.countBL();
	    $(".shade").height($(".banner_home_03").height());
	   /********jobs页面不同分辨率的切换切换*******/
	   $(".rs_item ul li a").each(function(){
   			if($(this).hasClass("active")){
   				var jnum=$(this).parents(".rs_item").index()+1;
				var linum=$(this).parent("li").index();
				var jdsobj="#jcon"+jnum+"_"+linum;
				var html=$(jdsobj).html();
				var cw =$(".rs_jobs .container").width();
				if(cw>=720){
					$(".rs_item ul li").find(".jobsdetails").parent("li").remove();
					$(jdsobj).show();
				}else{
					$(".rs_item ul li").find(".jobsdetails").parent("li").remove();
					$(this).after('<li><div class="jobsdetails row" name="'+jdsobj+'" style="display:block">'+html+'</div></li>')
				}
   			}
   		})
    })
	$(".jobslstit").click(function(){
		if($(this).find("span").hasClass("caret_down")){
			$(this).find("span").removeClass("caret_down").addClass("caret_left");	
			$(this).siblings("ul").hide();
		}else if($(this).find("span").hasClass("caret_left")){
			$(this).find("span").removeClass("caret_left").addClass("caret_down");	
			$(this).siblings("ul").show();
		}
	});
	$(".rs_item ul li a").click(function(){
		$(".rs_item ul li a").removeClass("active");
		$(this).parents(".rs_item").addClass("open");
		$(".jobsdetails").hide();
		$(this).addClass("active");
		var jnum=$(this).parents(".rs_item").index()+1;
		var linum=$(this).parent("li").index();
		var jdsobj="#jcon"+jnum+"_"+linum;
		var html=$(jdsobj).html();
		var cw =$(".rs_jobs .container").width();
		if(cw>=720){
			$(jdsobj).show();
		}else{
			$(".rs_item ul li").find(".jobsdetails").parent("li").remove();
			$(this).after('<li><div class="jobsdetails row" name="'+jdsobj+'" style="display:block">'+html+'</div></li>');
			var i=$(this).parents(".rs_item").index()+1,
				iq =$(this).parent("li").index()+1,
				//l=$(".caret_down").parents("li").find("font").length,
				ih=i+iq;
			$(document).scrollTop(400+ih*70)
		}
	});
	/*****初始化job*****/
	var jw =$(".rs_jobs .container").width();
	if(jw>=720){
		$(".rs_jobsMain .jobsdetails").eq(0).show();
	}else{
		var html=$(".rs_jobsMain .jobsdetails").eq(0).html();
		var jdsobj="#"+$("rs_jobsMain .jobsdetails").eq(0).attr("id");
		$(".rs_jobs .rs_item").eq(0).find("li").eq(0).after('<li><div class="jobsdetails row" name="'+jdsobj+'" style="display:block">'+html+'</div></li>')
	}
	/*******初始化index模块1********/
	setTimeout(function () {
        $(".firstptxt").css({
            transition: "transform 800ms ease-in",
            transform: "translateY(-20px)"
        }).animate({
            opacity: 1
        }, 1000, function () {
            $(".firstpul").css({
                transition: "transform 800ms ease-in",
                transform: "translateY(-20px)"
            }).animate({
                opacity: 1
            }, 1000)
        })
    },
    800);
    /*$(".firstpul li a").on("mouseover",function(){
        $(this).parent("li").find(".hov_por").stop().animate({
            opacity: 1,
            "line-height":"50px"
        },200)
    }).on("mouseout",function(){
       $(this).parent("li").find(".hov_por").stop().animate({
            opacity:0,
            "line-height":"0px"
        },200)
    });*/
    $(".shade").height($(".banner_home_03").height());
    $(document).on("keydown",function(e){
    	var event = e || window.event;
    	if(event.keyCode==116){//116 是f5按键代码
			window.location.reload();
			$(document).scrollTop(0);
		}
    });
})
$(window).on("beforeunload",function(){
	$(document).scrollTop(0);
});