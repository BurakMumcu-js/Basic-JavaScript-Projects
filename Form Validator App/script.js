const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('re-password');
const phone = document.getElementById('phone')


function error (input,message) {
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'
}

function success (input) {
    input.className = 'form-control is-valid'
}

function checkEmail(input) {
const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 if(re.test(input.value)){
    success(input);
 }
 else{
    error(input, 'hatalı mail adresi')
 }
  }



 function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input,`${input.id} is required`)
        }
        else{
            success(input);
        }
    })
   
  }

function checkLength(input,min,max){
if(input.value.length < min) {
    error(input,`${input.id} en az ${min} karakterli olmalıdır`);
}
else if(input.value.length > max){
    error(input,`${input.id} en fazla ${max} karakterli olmalıdır`);
}
else{
    success(input);
}
}

function checkLengthPhone(input,length){
if(input.value.length === length){
    success(input)
}
else{
    error(input,`${input.id} uzunluğu ${length} olmalıdır`);
}
    }

function checkPassword (input1,input2){
    if(input1.value === input2.value){
        success(input2)
    }
    else{
        error(input2,'Girilen şifreler aynı olmalıdır')
    }
}

form.addEventListener('submit',function(e){
e.preventDefault();

checkRequired([username,email,password,repassword]);
checkEmail(email);
checkLength(username,3,18);
checkLength(password,3,18);
checkLengthPhone(phone,10);
checkPassword(password,repassword);
})