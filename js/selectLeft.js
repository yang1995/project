/**
 * Created by samsung on 2016/10/7.
 */
var leftbox = document.getElementById('leftselect');
var leftUl=leftbox.getElementsByTagName('ul')[0];
var lis = leftUl.getElementsByTagName('li');
var divs = leftbox.getElementsByTagName('div');
for(var i=0;i< lis.length;i++){
    lis[i].name = i;
    lis[i].onmouseover = function(){
        for(var j=0;j< lis.length;j++){
            lis[j].className = '';
            divs[j].className = '';
        }
        this.className = 'on';
        divs[this.name].className = 'on';
    };
    divs[i].onmouseover = function(){
        for(var j=0;j< lis.length;j++){
            lis[j].className = '';
            divs[j].className = '';
        }
        this.className = 'on';
        divs[this.name].className = 'on';
    };
    lis[i].onmouseout = function(){
        for(var j=0;j< lis.length;j++){
            lis[j].className = '';
            divs[j].className = '';
        }
        this.className = '';
        divs[this.name].className = '';
    };
    divs[i].onmouseout = function(){
        for(var j=0;j< lis.length;j++){
            lis[j].className = '';
            divs[j].className = '';
        }
        this.className = '';
        divs[this.name].className = '';
    }
}