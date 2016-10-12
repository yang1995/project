/**
 * Created by samsung on 2016/10/7.
 */
var Select=document.getElementById('select');
var selectUl=Select.getElementsByTagName('ul')[0];
var SaLi=selectUl.getElementsByTagName('li');
var SaDiv=Select.getElementsByTagName('div');
for(var i=0;i<SaLi.length;i++){
    (function(index){
        SaLi[i].onclick=function(){
            for(var i=0;i<SaLi.length;i++){
                SaLi[i].className='';
                SaDiv[i].className='';
            }
            SaLi[index].className='on';
            SaDiv[index].className='show tab';
        }
    })(i)
}