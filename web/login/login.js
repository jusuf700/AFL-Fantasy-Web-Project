


const hash = (text) =>
    {
        const hashObj = new jsSHA("SHA-512","TEXT",{numRounds: 1});
        hashObj.update(text);
        const hash = hashObj.getHash("HEX");
        return hash;
    }
    let users=[]
    
    
    
    const usernameEl = document.getElementById('username');
    let usernameValue = '';
    
    usernameEl.addEventListener('input', () => {
        usernameValue = usernameEl.value;
      
      });
      const usernameValidationMessageDiv  = document.getElementById('usernameValidationMessage');
    
    
      const passwordEl = document.getElementById('password');
      let passwordValue = '';
    
      passwordEl.addEventListener('input', () => {
        passwordValue = passwordEl.value;
      });
      const passwordValidationMessageDiv  = document.getElementById('passwordValidationMessage');
    
      const btn=document.getElementById('btn');
      
      btn.addEventListener('click',()=>{
        console.log(usernameValue);
        
        const user=users.find(user=>user.username==usernameValue)
        console.log(user);

          if(!user){
            usernameValidationMessageDiv.innerText=""
            const newh4 = document.createElement("h4");
            newh4.style.color='red'
            newh4.style.fontSize='16px'
          newh4.style.textAlign='start'
          newh4.style.marginTop='3px'
          newh4.innerText = `This username doesn't exists`;
          usernameValidationMessageDiv.appendChild(newh4);
        }
        else if(hash(passwordValue)!==user.password){
          console.log(user.username);
          
          console.log(hash(passwordValue))
            usernameValidationMessageDiv.innerText=""
            passwordValidationMessageDiv.innerText=""
            const newh4 = document.createElement("h4");
            newh4.style.color='red'
            newh4.style.fontSize='16px'
            newh4.style.textAlign='start'
          newh4.style.marginTop='3px'
          newh4.innerText = `Invalid password`;
          passwordValidationMessageDiv.appendChild(newh4);
        }
        else{
            passwordValidationMessageDiv.innerText=""
            usernameValidationMessageDiv.innerText=""
            localStorage.setItem("loggedInUser", usernameValue);
            document.location.href='../Teams/teams.html'
        }
    })
    
    
    
    
    
    // login.js
    
    document.addEventListener("DOMContentLoaded", function () {
      fetch("podaci.json")
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          users=data.users
          console.log(users);
          
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    });
    
    
    
    
    
    
    console.log(hash("jule1"));
    console.log(hash("zeko1"));
    console.log(hash("boss1"));
    console.log(hash("home1"));





    //prevod

//navi
let h1 = document.querySelector('.he0');
let h2 = document.querySelector('.he1');
let h3 = document.querySelector('.he2');
let h4 = document.querySelector('.he3');
let h5 = document.querySelector('.he4');



// forma

let logTxt = document.querySelector('.logH1');
let logDug = document.querySelector('#btn');





function promeniJezikEng(){

            // header
      
      h1.textContent = "Home";
      h2.textContent = "Teams";
      h3.textContent = "Fixtures";
      h4.textContent ="Login";
      h5.textContent = "Contact";

     logTxt.textContent = "Login";
     logDug.textContent = "Log in"; 



}


function promeniJezikSrb(){

    h1.textContent = "Pocetna";
    h2.textContent = "Timovi";
    h3.textContent = "Utakmice";
    h4.textContent ="Login";
    h5.textContent = "Kontakt";
    logTxt.textContent = "Uloguj se";
    logDug.textContent = "Uloguj se";
   

    


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






