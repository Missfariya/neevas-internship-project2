const icons = document.querySelector("icons"); 
const navicons = document.querySelector("nav-icon"); 
const facts = document.querySelector("facts"); 
const plays = document.querySelector("plays"); 
const quotes = document.querySelector("quotes"); 
const end = document.querySelector("end"); 

const frontpage = document.querySelector("frontpage"); 
const playsection = document.querySelector("play-section"); 
const quotessection = document.querySelector("quotes-section"); 
const endsection = document.querySelector("end-section");

// navicons.forEach(navicon =>{ 
//     navicon.addEventListener('click' , function(event){ 
//         event.preventDefault(); 
//         alert(`hello`); 
//     })
// } )


facts.addEventListener( 'click', () => { 
   frontpage.classList.add("frontpage"); 
}) 
plays.addEventListener('click',() =>{ 
    playsection.classList.("play-section"); 
})
 

