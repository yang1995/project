/**
 * Created by samsung on 2016/10/7.
 */
var oBanner=document.getElementById('banner');
var oBoxInner=oBanner.getElementsByTagName('div')[0];
var aDiv=oBoxInner.getElementsByTagName('div');
var oUl=oBanner.getElementsByTagName('ul')[0];
var oEm=oUl.getElementsByTagName('em')[0];
var aLi=oUl.getElementsByTagName('li');
var step=0;
oBoxInner.innerHTML+='<div><img src="img/banner1.JPG" alt=""/></div>';
utils.css(oBoxInner,'height',aDiv.length*aDiv[0].offsetHeight);
//1.自动播放的轮播图
var timer=null;
clearInterval(timer);
timer=setInterval(autoMove,2000);
function autoMove(){
    if(step>=aDiv.length-1){
        step=0;
        utils.css(oBoxInner,'top',0);
    }
    step++;
    animate(oBoxInner,{top:-step*160},600);
    bannerTip();
}
function bannerTip(){
    var tmpStep=step>=aLi.length?0:step;
    for(var i=0; i<aLi.length; i++){
        aLi[i].className=i==tmpStep?'on':null;
    }
}

handleChange();
function handleChange(){
    for(var i=0; i<aLi.length; i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function(){
            step=this.index;
            animate(oBoxInner,{top:-step*160});
            bannerTip();
            animate(oEm,{top:step*55});
        }
    }
}
oBanner.onmouseover=function(){
    clearInterval(timer);
};
oBanner.onmouseout=function(){
    timer=setInterval(autoMove,2000);
}
