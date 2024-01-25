function slider(anything,color){
    document.querySelector('.phone').src = anything;
    couleur(color);
}
function couleur(color){
    const sec = document.querySelector('.global');
    sec.style.background = color;
}