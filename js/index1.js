function  showclock(){
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = 'am';
 

if (h==0){ 
    h= 12 
}

if(h>12){ 
    h = h-12
    session='pm'
}
h = ( h<10 )? '0'+h :h
m = ( m<10 )? '0' + m : m 
s = ( s<10 )? '0' + s : s 

var time = h +':'+ m +':' + s + " " + session;
document.getElementById('clock').innerText=time
document.getElementById('clock').textContent=time

    settimeout(showclock,10);
}
showclock()