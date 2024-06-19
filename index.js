const btnMod= document.getElementById('btn-cambiar');
const imag = document.getElementById('imgnes');
let imgList = ["primera.jpg","segunda.jpg","cuarta.png"];
let i=0;

btnMod.addEventListener('click',(e)=>{
    i = (i + 1) % imgList.length;
            // Cambiar la fuente de la imagen
            imag.src = imgList[i];
});

