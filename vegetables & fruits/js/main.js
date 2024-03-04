//header start
let header1 = document.querySelector('.header1');
let search  = document.getElementById('search');
let header2 = document.querySelector('.header2');

window.onscroll = _ =>{
    if(scrollY >= 40){
        search.style.display = 'block';
        header2.classList.add('show');
     }
    else{
        search.style.display = 'none';
        header2.classList.remove('show');
    }
}
//header end




//slider start


var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
var slideCount   = sliderImages.length;
var currentSlide = 1;
var slideNumberElement = document.getElementById('slide-number');
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
    
    // if(currentSlide === 1 || currentSlide ===2){
    //     nextButton.style.backgroundColor = 'grey';
    //     nextButton.style.color = 'white';
    //     prevButton.style.backgroundColor = 'grey';
    //     prevButton.style.color = 'white';
    // }else if(currentSlide ===3){
    //     nextButton.style.backgroundColor = 'red';
    //     nextButton.style.color = 'white';
    //     prevButton.style.backgroundColor = 'red';
    //     prevButton.style.color = 'white';
    // }
setInterval(() => {

    sliderImages[currentSlide].classList.remove('active');

    currentSlide++;

    if (currentSlide === slideCount) {
      currentSlide = 1;
    }

    sliderImages[currentSlide].classList.add('active');

    thechecker();

  }, 4000);



var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');

for(var i = 1; i <= slideCount; i++){
    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    // paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}
document.getElementById('indicators').appendChild(paginationElement);

var paginationCreatedUl = document.getElementById('pagination-ul');

var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
var paginationCount    = paginationsBullets.length;
for(var i = 0; i < paginationCount; i++){
     
    paginationsBullets[i].onclick = function (){
        currentSlide = parseInt(this.getAttribute('data-index'));

        thechecker();

    }
}

thechecker();

function nextSlide(){
   
    if (nextButton.classList.contains('disabled')){

        return false;

    }else{

        currentSlide++;
    
        thechecker();

    }

}

function prevSlide(){

   if (prevButton.classList.contains('disabled')){

        return false;

    }else{

        currentSlide--;
    
        thechecker();
        
    }
}


function thechecker(){

    slideNumberElement.textContent = 'slide # ' + (currentSlide) + ' of ' + (slideCount);

    removeAllActive();

    sliderImages[currentSlide - 1].classList.add('active')

    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    if (currentSlide == 1){

        prevButton.classList.add('disabled');
        // currentSlide = slideCount;

    }else{

        prevButton.classList.remove('disabled');

    }

    if (currentSlide == slideCount){

        nextButton.classList.add('disabled');
        // currentSlide = 0;


     }else{

        nextButton.classList.remove('disabled');
        
    }

}

function removeAllActive(){

    sliderImages.forEach((img) => {
        img.classList.remove('active');
    });

    paginationsBullets.forEach((bullet) => {
        bullet.classList.remove('active');
    });
}


//slider end