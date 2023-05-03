

const imagenes = [
  'img\lotus-emira-primera-edicion-rojo-10976.jpg',
  'img\rimac-nevera-2022-11151.jpg',
  'img\subaru_brz_blue_front_sports_car_coupe_94580_3840x2160-1024x576.jpg'


]
let index = 0;
const max = imagenes.length;

//get the DOM elements
const containerElement = document.querySelector(".container");
const prevSlideButton = document.querySelector(".prevSlide");
const nextSlideButton = document.querySelector(".nextSlide");


//listen for click evensts


prevSlideButton.addEventListener("click", one());
nextSlideButton.addEventListener("click", two());


function one(){
index--;
//set Image Index;
setImageIndex();
//Change backgraund Image;
changeBackgraundImage(imagenes[index], containerElement);


}

function setImageIndex(){
if(index < 0) index = max - 1;
if (index = 3) index = 0;
}

function changeBackgraundImage(backgraundImage, element){
element.style.backgraundImage = `url(${backgraundImage})`;


}


function two(){
    index++;
    //set Image Index;
    setImageIndex();
    //Change backgraund Image;
    changeBackgraundImage(imagenes[index], containerElement);
    
    
    }