/**
 * Created by samsung on 2016/10/7.
 */
/*************************************回到顶部**************************************/
var oDiv=document.getElementById('Btn');
var oFootBox = document.getElementById('footBox');
window.onscroll=abc;
function abc() {
    if(utils.win("scrollTop")>utils.win("clientHeight")+2000){
        oDiv.style.display="block";
        oFootBox.style.bottom="70px";
        oDiv.style.bottom='210px'
    }
    else if(utils.win("scrollTop")<=utils.win("clientHeight")+2000){
        oFootBox.style.bottom="0";
        oDiv.style.bottom='140px';
    }
}
oDiv.onclick= function () {
        this.style.display="none";
        window.onscroll=null;
        var scroll=utils.win("scrollTop");
        var a=1000;
        var interval=30;
        var step=scroll/a*interval;
        var timer=setInterval(function () {
            if(scroll<=0){
                clearInterval(timer);
                window.onscroll=abc;
            }
            scroll-=step;
            utils.win("scrollTop",scroll);
        },interval);
    }
    /*************************************回到顶部**************************************/
