const texto = document.querySelector('.cambiame');
console.log(texto.textContent);

let img = document.querySelectorAll('.transformacion');
img = Array.from(img);
console.log(img);

for(let i=0; i<img.length; i++){
   if(img[i] === img[3]){
        img[i].addEventListener('click', function(){
            texto.innerHTML = `Goku Super Saiyajin Dios`;
        });
   } else if(img[i] === img[4]){
        img[i].addEventListener('click', function(){
            texto.innerHTML = `Goku Super Saiyajin Blue`;
        }); 
   } else if(img[i] === img[5]){
    img[i].addEventListener('click', function(){
        texto.innerHTML = `Goku Ultra instinto`; 
    });
   } else{
        img[i].addEventListener('click', function(){
            texto.innerHTML = `Goku Super Saiyajin ${i+1}`;
        });
        
   }
}
