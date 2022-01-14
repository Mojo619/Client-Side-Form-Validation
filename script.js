const form = document.getElementById("form");

const username = document.getElementById("username");

const email = document.getElementById("email");

const password = document.getElementById("password");

const password2 = document.getElementById("password2");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
});


function checkInputs(){

const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const passVal= password.value.trim();
const pass2Val= password2.value.trim();


if(usernameVal===''){

    setErrorFor(username,'username cannot be blank');
}else{
    setSuccessFor(username);
}

if(emailVal===''){
    setErrorFor(email,'Email cannot be blank');
}else if(!isEmail(emailVal)){
setErrorFor(email,'not a valid Email');
}else{
    setSuccessFor(email);
}

if(passVal===""){
    setErrorFor(password,'password cannot be blank');
}else {
    setSuccessFor(password);
}

if(pass2Val===""){
    setErrorFor(password2,'password cannot be blank');
}else if(passVal!==pass2Val){
    setErrorFor(password2,'password does not match');
}else{
    setSuccessFor(password2);
}
    



};

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;


    formControl.className = "form-control error";
}


function setSuccessFor(input){
    const formControl = input.parentElement

    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




