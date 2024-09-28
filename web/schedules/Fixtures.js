'use strict';





let GamesPlayed = [];


let levo = document.querySelectorAll('.desnarez');
let sredina= document.querySelectorAll('.scorerez');
let desno = document.querySelectorAll('.levarez');
let semafor = 1;

const dugmad = document.querySelectorAll('.carousel-button');

let tacka1=document.querySelector('.prva');
let tacka2=document.querySelector('.druga');
let tacka3=document.querySelector('.treca');

let imena = document.querySelectorAll('.ime');
let rezultatiLevi = document.querySelectorAll('.rezl');
let rezltatiDesni = document.querySelectorAll('.rezd');

let slika1 = document.querySelector('.s1');
let slika2 = document.querySelector('.s2');
let slika3 = document.querySelector('.s3');
let slika4 = document.querySelector('.s4');
let slika5 = document.querySelector('.s5');
let slika6 = document.querySelector('.s6');

let ime1 = document.querySelector('.i0');
let ime2 = document.querySelector('.i1');
let ime3 = document.querySelector('.i2');
let ime4 = document.querySelector('.i3');
let ime5 = document.querySelector('.i4');
let ime6 = document.querySelector('.i5');


let rez1 = document.querySelector('.r1');
let rez2 = document.querySelector('.r2');
let rez3 = document.querySelector('.r3');
let rez4 = document.querySelector('.r4');
let rez5 = document.querySelector('.r5');
let rez6 = document.querySelector('.r6');

// let loginmodal = document.querySelector('.');

let prvaprofilna = document.querySelector('.profilna');
let loginelement = document.querySelector('.he4');  









// api


function fetchUtakmice(callback) {
    fetch('https://api.squiggle.com.au/?q=games;year=2017;round=1')
      .then(response => response.json())
      .then(data => {
        GamesPlayed = data.games;  
        console.log('Podaci učitani:', GamesPlayed);
        callback();  
      })
      .catch(error => console.log('Greška prilikom preuzimanja rezultata:', error));
  }





  function FrGame(){
    if (GamesPlayed.length > 0) {
      const firstGame = GamesPlayed[0];
        ime1.textContent=firstGame.hteam;
        ime2.textContent=firstGame.ateam;
        rez1.textContent=firstGame.hscore.toString();
        rez2.textContent=firstGame.ascore.toString();
        slika1.src =`../slike/timovi/${3}.png`;
        slika2.src =`../slike/timovi/${14}.png`;



    } else {
      console.log('Podaci nisu učitani.');
    }
    


  };
//   fetchUtakmice(FrGame);



function SeGame(){
    if (GamesPlayed.length > 0) {
        const SecondGame = GamesPlayed[2];
          ime3.textContent=SecondGame.hteam;
          ime4.textContent=SecondGame.ateam;
          rez3.textContent=SecondGame.hscore.toString();
          rez4.textContent=SecondGame.ascore.toString();
          slika3.src =`../slike/timovi/${15}.png`;
          slika4.src =`../slike/timovi/${11}.png`;
  
  
  
      } else {
        console.log('Podaci nisu učitani.');
      }


}

// fetchUtakmice(SeGame);


function ThGame(){
    if (GamesPlayed.length > 0) {
        const ThirdGame = GamesPlayed[3];
          ime5.textContent=ThirdGame.hteam;
          ime6.textContent=ThirdGame.ateam;
          rez5.textContent=ThirdGame.hscore.toString();
          rez6.textContent=ThirdGame.ascore.toString();
          slika5.src =`../slike/timovi/${16}.png`;
          slika6.src =`../slike/timovi/${13}.png`;
  
  
  
      } else {
        console.log('Podaci nisu učitani.');
      }


}

// fetchUtakmice(ThGame);




function FthGame(){
    if (GamesPlayed.length > 0) {
        const ForthGame = GamesPlayed[4];
          ime1.textContent=ForthGame.hteam;
          ime2.textContent=ForthGame.ateam;
          rez1.textContent=ForthGame.hscore.toString();
          rez2.textContent=ForthGame.ascore.toString();
          slika1.src =`../slike/timovi/${5}.png`;
          slika2.src =`../slike/timovi/${10}.png`;
  
  
  
      } else {
        console.log('Podaci nisu učitani.');
      }


}




function petiGame(){
    if (GamesPlayed.length > 0) {
        const FifthGame = GamesPlayed[8];
          ime5.textContent=FifthGame.hteam;
          ime6.textContent=FifthGame.ateam;
          rez5.textContent=FifthGame.hscore.toString();
          rez6.textContent=FifthGame.ascore.toString();
          slika5.src =`../slike/timovi/${6}.png`;
          slika6.src =`../slike/timovi/${7}.png`;
  
  
  
      } else {
        console.log('Podaci nisu učitani.');
      }


}

function sestiGame(){
    if (GamesPlayed.length > 0) {
        const SixthGame = GamesPlayed[7];
          ime3.textContent=SixthGame.hteam;
          ime4.textContent=SixthGame.ateam;
          rez3.textContent=SixthGame.hscore.toString();
          rez4.textContent=SixthGame.ascore.toString();
          slika3.src =`../slike/timovi/${1}.png`;
          slika4.src =`../slike/timovi/${9}.png`;
  
  
  
      } else {
        console.log('Podaci nisu učitani.');
      }
}






window.addEventListener('DOMContentLoaded',function(){

    FrGame()
    fetchUtakmice(FrGame);


    SeGame();
    fetchUtakmice(SeGame);

    ThGame();
    fetchUtakmice(ThGame);



});








function dugmic(semaforcic){

    if(semaforcic == 1){
        tacka1.style.backgroundColor = "red";
        tacka2.style.backgroundColor = 'white';
        tacka3.style.backgroundColor = 'white';
    }
    else if(semaforcic == 2){
        tacka1.style.backgroundColor = 'white';
        tacka2.style.backgroundColor = "red";
        tacka3.style.backgroundColor = "white"
    }
    else {
        tacka1.style.backgroundColor = 'white';
        tacka2.style.backgroundColor = 'white';
        tacka3.style.backgroundColor = "red";
    }

};

function nestajanje(){
    levo.forEach(lev=>{
        lev.style.opacity = 0;
        
    })
    desno.forEach(des=>{
        des.style.opacity = 0;
        
    })

    sredina.forEach(sred=>{
        sred.style.opacity = 0;
        
    })
}


function vracanje(){
    levo.forEach(lev=>{
        lev.style.opacity = 1;
        
    })
    desno.forEach(des=>{
        des.style.opacity = 1;
        
    })

    sredina.forEach(sred=>{
        sred.style.opacity = 1;
        
    })
}

function vrati(){

    levo.forEach(lev=>{
        if(lev.style.opacity == 0)vracanje();
        else return 1;
        
    })
        
    
    

}


function drugaPostava(x){
    if(x == 1 ){
        FrGame()
        fetchUtakmice(FrGame);


        SeGame();
        fetchUtakmice(SeGame);

        ThGame();
        fetchUtakmice(ThGame);
    }
    else if(x == 2){

        FthGame();
        fetchUtakmice(FthGame);
        
        SeGame();
        fetchUtakmice(SeGame);
        
        petiGame()
        fetchUtakmice(petiGame);



    }
    else if(x == 3){
        
        FrGame()
        fetchUtakmice(FrGame);

        sestiGame()
        fetchUtakmice(sestiGame);

        ThGame();
        fetchUtakmice(ThGame);
    }
}



dugmad.forEach(dugme=>{
    dugme.addEventListener('click',function(){

        

            if(dugme.classList[1] == 'prev'){
                if(semafor==1)semafor=3;
                else if(semafor>1) semafor=semafor-1;
            }
            else{
                if(semafor==3)semafor =1;
                else if(semafor<3)semafor+=1;
            }

        
        

        console.log(semafor);
        nestajanje();
        
        dugmic(semafor);

        setTimeout(()=>{
            vrati();
            drugaPostava(semafor);
        },1600);


        
        
       
        

    })
})







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

let textrezM = document.querySelector('.textrezM');


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

      textrezM.textContent = "Latest Results";

      // footer 

      
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

   

    textrezM.textContent = "Poslednji Rezultati";

    // footer 

   

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
