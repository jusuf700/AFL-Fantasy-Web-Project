'use strict';


let email = document.querySelector('.emailcontact');
const dugme = document.querySelector('.sendugme');
let ime = document.querySelector('.ime');
let poruka = document.querySelector('.poruka');
let modal = document.querySelector('.modal');
let pogresanMail = document.querySelector('.pogrgmail');
let pogresnoIme = document.querySelector('.pogrime');
let overlay = document.querySelector('.overlay');
const ok = document.querySelector('.okdugme');
let tekst = document.querySelector('.poruka');
let pogresanText = document.querySelector('.pogrporuka');


let prvaprofilna = document.querySelector('.profilna');
let loginelement = document.querySelector('.he4');  


function resetInputa(){
    email.value = null;
    ime.value = null;
    tekst.value = null;

}


function isEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
  }
  
  


function seeModal(){
    modal.classList.remove('skriveni');
    overlay.classList.remove('skriveni');
};


function removeModal(){
    modal.classList.add('skriveni');
    overlay.classList.add('skriveni');
}

function resetModal(){
    pogresanMail.classList.add('hidden');
    pogresnoIme.classList.add('hidden');

};



function prazanGmail(){

    if(isEmpty(email.value) == true  || validateEmail(email.value) == false){

        pogresanMail.classList.remove('hidden');
        return false;

    }
    else if (isEmpty(email.value) == false  && validateEmail(email.value) == false){
        pogresanMail.classList.remove('hidden');
        return true ;
    }
    else {
        pogresanMail.classList.add('hidden');
        return true;
    }
    
    

}

function praznoIme(){

    if( isEmpty(ime.value) == true){

        pogresnoIme.classList.remove('hidden');
        return false;

    }
    else {
        pogresnoIme.classList.add('hidden');
        return true ;
    }

}

function prazanText(){
   
   
    if( isEmpty(tekst.value) == true){

        pogresanText.classList.remove('hidden');
        return false;

    }
    else {
        pogresanText.classList.add('hidden');
        return true ;
    }

}





function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };



function tacan( em,praznaP1,praznaP2,praznaP3){
        if(em ==true && praznaP1 == true && praznaP2 == true && praznaP3 == true){
            seeModal();
            resetModal();

        }
    };





dugme.addEventListener('click', function(){

    email.value=email.value; 
    // validateEmail(email.value);
    tacan(validateEmail(email.value),prazanGmail(),praznoIme(),prazanText());
    console.log(`${email}`);
    
    // console.log(`${validateEmail(email.value)}`);
    // console.log(`${praznoIme()}`);
    // console.log(`${prazanGmail()}`);
    // console.log(`${prazanText()}`);

    
});



ok.addEventListener('click', function(){
    removeModal();
    resetInputa();
    
});


overlay.addEventListener('click', function(){
    removeModal();
    resetInputa();
    
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










//prevod

//navi
let h1 = document.querySelector('.he1');
let h2 = document.querySelector('.he2');
let h3 = document.querySelector('.he3');
// let h4 = document.querySelector('.he4');
let h5 = document.querySelector('.he5');



//hero

let cardH1 = document.querySelector('.karticah1');
let cardP = document.querySelector('.karticap');
let NotifyMe = document.querySelector('.notP');
let sendDugme = document.querySelector('.sendugme');
let ModZah = document.querySelector('.zahH1');
let ModPzah = document.querySelector('.zahP');
let OkDugme = document.querySelector('.okdugme');
let PogrIme = document.querySelector('.pogrime');
let PogrGmail = document.querySelector('.pogrgmail');
let PogrTxt = document.querySelector('.pogrporuka');
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







function promeniJezikEng(){

            // header
      
      h1.textContent = "Home";
      h2.textContent = "Teams";
      h3.textContent = "Fixtures";
    //   h4.textContent ="Login";
      h5.textContent = "Contact";

      // hero

       cardH1.textContent = "Contact us";
       cardP.textContent = "Get in touch and let us know how we can help";
       NotifyMe.textContent = "Notify me";
       sendDugme.textContent = "Send";
       ModZah.textContent = "THANK YOU";
       ModPzah.textContent ="Your details has been successfully submitted. Thanks";
       OkDugme.textContent = "OK";

       PogrIme.textContent = "No name";
       PogrGmail.textContent ="Wrong email";
       PogrTxt.textContent = "no message";

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


function promeniJezikSrb(){

    h1.textContent = "Pocetna";
    h2.textContent = "Timovi";
    h3.textContent = "Utakmice";
    // h4.textContent ="Uloguj se";
    h5.textContent = "Kontakt";

   

    // hero

    cardH1.textContent = "Kontaktirajte nas ";
       cardP.textContent = "Povezite se sa nama i kazite nam kako da Vam pomognemo";
       NotifyMe.textContent = "Obavesti me";
       sendDugme.textContent = "Posalji";
       ModZah.textContent = "HVALA VAM";
       ModPzah.textContent ="Vasi podaci su uspesno sacuvani. Hvala Vam";
       OkDugme.textContent = "U redu";

       PogrIme.textContent = "nema imena";
       PogrGmail.textContent ="pogresan mail";
       PogrTxt.textContent = "nema poruke";

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




if(sessionStorage.getItem('jezik') == "eng"){

    promeniJezikEng();

}
else if(sessionStorage.getItem('jezik') == "srb"){

    promeniJezikSrb();
}
else{

    console.log('nije sacuvan jezik');

}



let jeziks = document.querySelector('.srp');
let jezike = document.querySelector('.eng');
let jezik = document.querySelector('.jezik');
let sacuvani = ''; 

jeziks.addEventListener('click',function(){
    sessionStorage.removeItem('jezik');
    sacuvani = "srb" ; 
    sessionStorage.setItem("jezik", sacuvani);
    promeniJezikSrb();

    

});

jezike.addEventListener('click', function(){
  sessionStorage.removeItem('jezik');
    sacuvani = "eng"; 
    sessionStorage.setItem("jezik", sacuvani);
    promeniJezikEng();

});

