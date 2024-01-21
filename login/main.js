var userArr = [];
userArr = JSON.parse(localStorage.getItem('userArr'));

var signInEmail = document.getElementById('email');
var signInPassword = document.getElementById('password');

document.getElementById('login').addEventListener('click', function(){
    if(signInEmail.value == `` || signInPassword.value == ``){
        document.getElementById('message').innerHTML = `<p class="text-center text-danger">All inputs are required</p>`
    }
    else
    checkUser();
})

function checkUser(){
    for(var i=0; i<userArr.length; i++){
        if(signInEmail.value==userArr[i].email && signInPassword.value==userArr[i].password){
            var x = userArr[i].name;
            localStorage.setItem('userName', x);
            location.href='../home/index.html'
            break;
        }
    }
}