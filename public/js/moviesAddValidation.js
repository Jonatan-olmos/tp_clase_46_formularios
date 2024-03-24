

const $ = (id) => document.getElementById(id);

window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

 console.log('movieAddValidation succass!!');


//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

const form = document.querySelector('form')

const inpulTitle = form.elements[0];
const inpulRating = form.elements[1];
const inpulAwards = form.elements[2];
const inpulReleaseDate = form.elements[3];
const inpulLength = form.elements[4];
const selectGenres = form.elements[5];


const inpulTitleID =  document.getElementById('title')
const inpulRatingID = document.getElementById('rating')
const inpulAwardsID = document.getElementById('awards')
const inpulReleaseDateID = document.getElementById('release_date')
const inpulLengthID = document.getElementById('length')
const selectGenresId = document.getElementById('genre_id')  



//$('title').focus();

$('title').addEventListener('focus', () =>{

    $('info-title').innerHTML = "Debes dar el nombre original de la peli"

    setTimeout(()=> {
        $('info-title').innerHTML = ""
    }, 2000);
    $('error-title').innerHTML = ""


})
$('title').addEventListener('blur', (e) =>{

    $('info-title').innerHTML = "";
    if(e.target.value.length < 3) $('error-title').innerHTML = "Tan corto es el nombre de la pelicula !!"
    if(!e.target.value) $('error-title').innerHTML = "Te dije que escribas el nombre de la PEli!!"
})




$('rating').addEventListener('focus', () =>{

    $('info-rating').innerHTML = "Decime cual es el rating"

    setTimeout(()=> {
        $('info-rating').innerHTML = ""
    }, 2000);
    $('error-rating').innerHTML = ""


})
$('rating').addEventListener('blur', (e) =>{

    $('info-rating').innerHTML = ""
    if(e.target.value < 0) $('error-rating').innerHTML = "Tan mal le fue !!"
    if(e.target.value > 10) $('error-rating').innerHTML = "Paraaaaa!!"

    if (!e.target.value)$('error-rating').innerHTML = "No averiguaste el rating"
})


form.addEventListener('submit',(e) =>{
    e.preventDefault();
    let error = false;
    for (let i = 0; i < form.elements.length - 1; i++) {
     if (!form.elements[i].value) {
        error =  true
     }
    }

    if(!error){
        form.submit()
    }else{
        alert('upss hay campos vacios')
    }
})

}