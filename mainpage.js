document.getElementById('myform').addEventListener('submit', function(e){
 e.preventDefault();
 let el = document.getElementById('myform');
    let username = el.username.value;
    let email = el.email.value;
    let password = el.password.value;
    let gender = el.gender.value;

    let error = '';
    if(username < 2)
        error = 'Ім\'я занадто мале';
    
    else if(email < 2)
        error = "email занадто малий";
        
    
    else if(!email.includes('@'))
        error = "Email не має @";
        
    
    else if(password < 8)
        error = "Пароль мітить менбше 8 символів";
    
    
    else if(gender == null || gender == '')
        error = "Виберіть Гендер";
        
    

    if(error != ''){
        document.getElementById('error').innerText = error;
        return false;
    }
    document.getElementById('error').innerText = '';
    window.location = "https://itproger.com"
        
    return false;
})



