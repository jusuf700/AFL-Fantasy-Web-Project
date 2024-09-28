'use strict';




let gamesData = [];
let email = document.querySelector('.zavesti');
let dugme = document.querySelector('.subscribe');
let prvaprofilna = document.querySelector('.profilna');
let loginelement = document.querySelector('.he3');





// verifikacija emaila 

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


 function isEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
  }


function prazanMail(emaill){
    if(isEmpty(emaill)){
        alert("You didn't enter Your Email address");
        return false;
    }
    else{
        return true 
    }
  }



  function potpunMail(emaill,nijeprazan){
    if(emaill == true && nijeprazan == true){
        alert("We will send you mail in no time");
        email.value = null;
    }
    else if(emaill == false && nijeprazan == true){
        alert("Wrong Email");
    }

  }


  dugme.addEventListener('click', function(){

    email.value = email.value;
    potpunMail(validateEmail(email.value),prazanMail(email.value));


  });






let jeziks = document.querySelector('.srp');
let jezike = document.querySelector('.eng');
let jezik = document.querySelector('.jezik');
let sacuvani = ''; 

jeziks.addEventListener('click',function(){
    sessionStorage.removeItem('jezik');
    sacuvani = "srb" ; 
    sessionStorage.setItem("jezik", sacuvani);
    promeniJezik();
    

});

jezike.addEventListener('click', function(){
  sessionStorage.removeItem('jezik');
    sacuvani = "eng"; 
    sessionStorage.setItem("jezik", sacuvani);
    promeniJezik();
    

});

//prevod

//navi
let h0 = document.querySelector('.he0');
let h1 = document.querySelector('.he1');
let h2 = document.querySelector('.he2');
let h3 = document.querySelector('.he3');
let h4 = document.querySelector('.he4');

// hero 

let hrtext = document.querySelector('.herotext');
let hrdugme = document.querySelector('.herobtn');

// rezultati

let reztxt = document.querySelector('.textrezM');

//websitovi

let visitTeam = document.querySelector('.vistim');

// notifikacija 


let notiftext = document.querySelector('.notiftxt');
let notifbtn = document.querySelector('.subscribe');
let notifinput = document.querySelector('.zavesti');


// footer 

// prvi red 

let fotTxt = document.querySelector('.foottxt');

// drugi red 

let fotdrugastr = document.querySelector('.drugestranice');
let fotho = document.querySelector('.ho');
let fotta = document.querySelector('.ta');
let fotsc = document.querySelector('.sc');
let fotcon = document.querySelector('.con');

//treci red 

let fot31 = document.querySelector('.fot31');
let fot32 = document.querySelector('.fot32');
let fot33 = document.querySelector('.fot33');
let fot34 = document.querySelector('.fot34');
let fot35 = document.querySelector('.fot35');
let fot36 = document.querySelector('.fot36');

// cetvrti red


let fot41 = document.querySelector('.fot41');
let fot42 = document.querySelector('.fot42');
let fot43 = document.querySelector('.fot43');
let fot44 = document.querySelector('.fot44');


// copyright

let copyR = document.querySelector('.Copyright');





function promeniJezik(){


  if(sessionStorage.getItem('jezik') == "eng"){
      console.log("jezik eng");



      
      // header
      
      h0.textContent = "Home";
      h1.textContent = "Teams";
      h2.textContent = "Fixtures";
      h3.textContent ="Login";
      h4.textContent = "Contact";

      // hero

      hrtext.textContent = "The Largest Australian Football League Site";
      hrdugme.textContent = "Get Started";

      //rezultati
      reztxt.textContent = "See Latest Results";

      //websajtovi
      visitTeam.textContent = "AFL Teams Websites";

      //notifikacija

      notiftext.textContent ="Receive Real-Time Notifications";
      notifbtn.textContent = "Subscribe";
      

      // footer 

      // prvi red 

       fotTxt.textContent = "visit our social pages"; 
      

      // drugi red 

       fotdrugastr.textContent ="Other Pages"; 
       fotho.textContent = "Home";
       fotta.textContent = "Teams";
       fotsc.textContent = "Fixtures";
       fotcon.textContent = "Contact";

      //treci red 

       fot31.textContent = "Quick Links";
       fot32.textContent = "Privacy Policy";
       fot33.textContent = "Terms of Service";
       fot34.textContent = "Disclaimer";
       fot35.textContent = "Partners";
       fot36.textContent = "Credits";

      // cetvrti red


       fot41.textContent = "My Access";
       fot42.textContent = "Login";
       fot43.textContent = "My Bets";
       fot44.textContent = "Best Team";


      // copyright

       copyR.textContent = "Copyright AFL Fantasy 2024. All rights reserved.";
      
       

  }
  else if(sessionStorage.getItem('jezik') == "srb"){


      // header
      console.log("jezik srb");
      h0.textContent = "Pocetna";
      h1.textContent = "Timovi";
      h2.textContent = "Utakmice";
      h3.textContent ="Login";
      h4.textContent = "Kontakt";

      // hero

      hrtext.textContent = "Najveci sajt za Australijsku Fudbalsku Ligu";
      hrdugme.textContent = "Pocni";

      //rezultati
      reztxt.textContent = "Pogledaj Poslednje Rezultate";

      //websajtovi
      visitTeam.textContent = "Vebsajtovi AFL Timova";

      //notifikacija

      notiftext.textContent ="Dobijaj poruke u svakom trenutku";
      notifbtn.textContent = "prijavi se";
      notifinput.Placeholder ="vas email";

      // footer 

      // prvi red 

       fotTxt.textContent = "posetite nase socijalne mreze"; 
      

      // drugi red 

       fotdrugastr.textContent ="Druge Stranice"; 
       fotho.textContent = "Pocetna";
       fotta.textContent = "Timovi";
       fotsc.textContent = "Utakmice ";
       fotcon.textContent = "Kontakt";

      //treci red 

       fot31.textContent = "Brzi Linkovi";
       fot32.textContent = "Pravila Privatnosti";
       fot33.textContent = "Pravila Koriscenja";
       fot34.textContent = "Upozorenja";
       fot35.textContent = "Partneri";
       fot36.textContent = "Poeni";

      // cetvrti red


       fot41.textContent = "Moji Ulazi";
       fot42.textContent = "Uloguj se ";
       fot43.textContent = "Moja Kladjenja";
       fot44.textContent = "Najbolji Tim";


      // copyright

       copyR.textContent = "AFL FANTASY Sva Prava Zadrzana - 2024 ";


  }
  else return 0;

}






window.addEventListener('DOMContentLoaded',function(){

 
  promeniJezik();


});



const loggedInUser=localStorage.getItem('loggedInUser');



if(loggedInUser){

    
    prvaprofilna.src="../slike/profilna2.jpg"
    prvaprofilna.classList.remove('profilna');
    loginelement.remove();


}
else {

    
    prvaprofilna.classList.add('profilna');


}







