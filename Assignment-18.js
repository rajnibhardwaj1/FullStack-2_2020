const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const psw1 = document.getElementById('psw1');

form.addEventListener('submit',function(e){
    e.preventDefault(); 
    checkInput();
});

function checkInput(){
    const usernameValue =  username.value.trim();
    const emailValue =  email.value.trim();
    const password1Value =  psw.value.trim();
    const password2Value =  psw1.value.trim();

    if( usernameValue ==='')
    {
        showError(username,"Username can not be blank");
    }
    else
    {
        showSuccess(username);
    } 
    if( emailValue ==='')
    {
        showError(email,"Email Id can not be blank");
    }
    else if(!isEmailValid(emailValue))
    {
        showError(email,"Email is not Valid");
    }
    else
    {
        showSuccess(email);
    }    

    if( password1Value ==='')
    {
        showError(psw,"Password can not be blank");
    }
    else
    {
        showSuccess(psw);
    }

    if( password2Value ==='')
    {
        showError(psw1,"Password can not be blank");
    }
    else if(password2Value != password1Value)
    {
        showError(psw1,"Passwords not matched");
    }
    else
    {
        showSuccess(psw1);
    } 

}

function showError(input,msg)
{
    const formControl = input.parentNode;
    formControl.className = 'form-container error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}
function showSuccess(input)
{
    const formControl = input.parentNode;
    formControl.className = 'form-container success';
}

function isEmailValid(email1){
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email1);
}