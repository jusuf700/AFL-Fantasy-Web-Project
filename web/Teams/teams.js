'use strict'; 
// #658147 zelena
// #DD5746 crvena

let modal = document.querySelector('.modal');
let closeDugme = document.querySelector('.close-modal');
let standingsData= [];
const slike = document.querySelectorAll('.tim');
let idSlike; 
let podacioTimu;
let overlay = document.querySelector('.overlay');

let imeTima = document.querySelector('.imetima');
let brojPoena = document.querySelector('.brgod');
let mestoNaTabeli =document.querySelector('.brplace');
let brojPobeda = document.querySelector('.pobedebr');
let brojPoraza = document.querySelector('.porazibr');
let brojNeresenih = document.querySelector('.neresenobr');
let modalzalog = document.querySelector('.modalzalogin');
let prvaprofilna = document.querySelector('.profilna');
let loginelement = document.querySelector('.he4');

// funckije

function modalpop(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function modalclose(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}



// api za timove 

function fetchStandings(callback) {
    fetch('https://api.squiggle.com.au/?q=standings')
      .then(response => response.json())
      .then(data => {
        standingsData = data.standings;  
        console.log('Podaci učitani:', standingsData);
        callback();  
      })
      .catch(error => console.error('Greška prilikom preuzimanja standings:', error));
  }
  

  
 
    slike.forEach(slika=>{
        slika.addEventListener('click',() =>{
            
            
            idSlike = Number(slika.classList[1]);
            console.log(idSlike);
            
            function useStandings() {
                
                if (standingsData.length > 0) {
        
            
                    standingsData.forEach(tim=>{
                        if(tim.id === idSlike){
                              podacioTimu = tim;
                        }
                    });
            
                    console.log(podacioTimu.pts);
                  
                } 
                else console.log('error');

            }

            fetchStandings(useStandings);


            imeTima.textContent = podacioTimu.name;

            console.log(imeTima);

            brojPoena.textContent = podacioTimu.pts.toString();
            mestoNaTabeli.textContent = podacioTimu.rank.toString();
            brojPobeda.textContent = podacioTimu.wins.toString();
            brojPoraza.textContent = podacioTimu.losses.toString();
            brojNeresenih.textContent = podacioTimu.draws.toString();
            modalpop();



        });
    });



    // zatvaranje modala



    closeDugme.addEventListener('click', function(){

        modalclose();

    });

    overlay.addEventListener('click', function(){

        modalclose();

    });



const loggedInUser=localStorage.getItem('loggedInUser');



if(loggedInUser){

    modalzalog.classList.add('hidden');
    prvaprofilna.src="../slike/profilna2.jpg"
    prvaprofilna.classList.remove('profilna');
    loginelement.remove();


}
else {

    modalzalog.classList.remove('hidden');
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

let hervistim = document.querySelector('.vistim');
let herinf = document.querySelector('.infaTeam');
let herwintxt = document.querySelector('.pobedetxt');
let herlostxt = document.querySelector('.porazitxt');
let herdrawtxt = document.querySelector('.neresenotxt');
let herpostxt = document.querySelector('.place');
let herpoentxt = document.querySelector('.txtgod1');

let modh1 = document.querySelector('.modh1');
let modp = document.querySelector('.modp');
let moddugme = document.querySelector('.modabtn');


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

         hervistim.textContent = "Teams"; 
         herinf.textContent = "Info About Team";
         herwintxt.textContent = "Wins:";
         herlostxt.textContent = "Losses:";
         herdrawtxt.textContent = "Draw:";
         herpostxt.textContent = "Position:";
         herpoentxt.textContent = "Points:";

         modh1.textContent = "Attention";
        modp.textContent = "You must be logged in to view this page";
         moddugme.textContent = "login";

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

    hervistim.textContent = "Timovi"; 
    herinf.textContent = "Info o Timovima";
    herwintxt.textContent = "Pobede:";
    herlostxt.textContent = "Porazi:";
    herdrawtxt.textContent = "Nereseno:";
    herpostxt.textContent = "Pozicija:";
    herpoentxt.textContent = "Poeni:";

    modh1.textContent = "Paznja!";
    modp.textContent = "Morate biti ulogovani da biste pristupili ovoj stranici";
    moddugme.textContent = "Uloguj se";



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













