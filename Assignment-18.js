//selector
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const small = document.querySelector('small');

//event
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput();
});

//function
function checkInput()
{
  const usernameValue=username.value.trim();
  const emailValue=email.value.trim();
  const passwordValue=password.value.trim();
  const password2Value=password2.value.trim();
  //username
  if(usernameValue === '')  
  {
      showError(username,"Username can not be Blank");
  }
  else if(!isUsernameValid(usernameValue))
    {
        showError(username, "Username can have small letters and underscores only");
    }
  else
  {
      showSuccess(username);
  }
  //email

  if(emailValue === '')
  {
      showError(email,"Email can not be Blank");
  }
  else if(!isEmailValid(emailValue))
    {
    showError(email,"Email id is not be Valid");
    }
   else{
    showSuccess(email);
    }

//password
if(passwordValue===''){
    showError(password1, "Password can't be blank");
}
else {
    showSuccess(password);
}
if(password2Value===''){
    showError(password2, "Re-enter password");
}
else if(password2Value != passwordValue)
{
    showError(password2, "Password not matched!")
}
else {
    showSuccess(password2);
}

}
function showError(input,msg){
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;

}
function showSuccess(input,msg){
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
    
}

function isEmailValid(email)
{
    return /^([a-zA-Z0-9_\.\-\+]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}
function isUsernameValid(username){
    return /^[a-z_]+$/.test(username);
}
