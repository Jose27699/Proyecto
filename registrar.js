var users = Helper.getUsersFromLocalStorage();

function registerUser(){
    let user = document.getElementById('email');
    let pass = document.getElementById('password');

    let user1 = new user(user.value, pass.value);
    let result = users.find(({ email }) => email === user.value);
    if(result == undefined){    
        users.push(user1);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Usuario Registrado");
        user.value ="";
        pass.value ="";
    }else{
        alert("El usuario ya se encuentra registrado");
    }
}


