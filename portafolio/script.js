let talleres = document.getElementsByClassName('taller');


for(let taller of talleres){


taller.addEventListener('click', function(){
    this.classList.toggle('active');
    let caja = this.nextElementSibling;
    if(caja.style.display == 'block'){
        caja.style.display = 'none';
       
    } else {
        caja.style.display = 'block';
       
    }
});
}