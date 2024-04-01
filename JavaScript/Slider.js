var pos = 0
var setTime
function goRight (){
    if(pos > 0){
        pos = pos -100
        gallery.style.left = pos +"%"
    } else if (pos == 0){
        pos = 400;
        gallery.style.left = pos + "%";
    }
    changeTab(pos/100);
}
function goLeft (){
    if(pos < 400){
        pos = pos +100
        gallery.style.left = pos +"%"
    } else if (pos == 400){
        pos = 0;
        gallery.style.left = pos + "%";
    }
    changeTab(pos/100);
}
function play (time){
   setTime = setInterval("goRight()", time)
}
function pause (){
    clearInterval(setTime)
}
function move (num) {
    pos = num * 100;
    gallery.style.left = pos + "%";
}
function changeTab (num) {
    for (var i=0; i < buts.length; i++) {
        buts[i].className = ""
    }
    buts[num].className = "selected"
}
function change (num) {
    // ---- Move Slide ----
    move(num);
    // ---- Change Tab ----
    changeTab(num);
    

}