// ---- Gallery position ----
var pos1 = [0, 0, 0, 0, 0]

function goRight1 (galleryID, limit, step, i){
    if(pos1[i] > limit){
        pos1[i] = pos1[i] - step;
        galleryID.style.left = pos1[i] + "%";
    }
}
function goLeft1 (galleryID, step, i){
    if(pos1[i] < 80){
        pos1[i] = pos1[1] + step;
        galleryID.style.left = pos1[1] + "%";
    }
}