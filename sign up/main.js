var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');

if(localStorage.getItem('userArr') != null){
    userArr = JSON.parse(localStorage.getItem('user'))
}else{
    userArr = [];
}

var userArr=[];
function add(){
    if(nameInput.value==`` || emailInput.vlaue== `` || passwordInput.value== ``){
        document.getElementById('message').innerHTML = `<p class="text-center text-danger">All inputs are required</p>`
    }
    else
        var user = {
        userName: nameInput.value,
        userEmail: emailInput.value ,
        userPassword: passwordInput.value ,
        }
    userArr.push(user);
    localStorage.setItem('user', JSON.stringify(userArr));
    location.href= '../login/index.html'
}