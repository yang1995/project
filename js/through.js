/**
 * Created by samsung on 2016/10/7.
 */
var oTh=document.getElementById('through');
var TaDiv=oTh.getElementsByTagName('div');
(function(){
    for(var i=0; i<TaDiv.length; i++){
        move({
            ele:TaDiv[i]
        })
    }
    function hoverDir(obj,e){
        var r=obj.offsetWidth/2;
        var x=obj.offsetLeft+r- e.clientX;
        var y=obj.offsetTop+r- e.clientY;
        return  Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
    }
    function move(opt){
        var ToDiv=opt.ele;
        var effect=opt.effect||0;
        var time=opt.time||300;
        var ToSpan=ToDiv.getElementsByTagName('span')[0];
        ToDiv.onmouseover=function(e){
            e=e||window.event;
            var oTo= e.fromElement||relatedTarget;
            if(this.contains(oTo)) return;
            var n=hoverDir(this,e);
            switch (n){
                case 0:
                    utils.css(ToSpan,{left:200,top:0});
                    break;
                case 1:
                    utils.css(ToSpan,{left:0,top:200});
                    break;
                case 2:
                    utils.css(ToSpan,{left:-200,top:0});
                    break;
                default :
                    utils.css(ToSpan,{left:0,top:-200});
                    break;
            }
            animate(ToSpan,{left:0,top:0},time,effect)
        };
        ToDiv.onmouseleave=function(e){
            e=e||window.event;
            var oTo= e.toElement||relatedTarget;
            if(this.contains(oTo)) return;
            var n=hoverDir(this,e);
            switch (n){
                case 0:
                    animate(ToSpan,{left:200,top:0},time,effect);
                    break;
                case 1:
                    animate(ToSpan,{left:0,top:200},time,effect);
                    break;
                case 2:
                    animate(ToSpan,{left:-200,top:0},time,effect);
                    break;
                default : //default代表3
                    animate(ToSpan,{left:0,top:-200},time,effect);
                    break;
            }
        }
    }
})()
