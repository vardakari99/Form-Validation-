function myFunc(i){
    let label = document.getElementsByClassName('form-group')[i];
    let input = document.getElementsByClassName('form-control')[i];
    input.addEventListener("focus", (e) => {
        label.classList.toggle("focused", (e.type === "focus" || input.value.length > 0));
    });

    // input.addEventListener("blur", () => {
    //     label.classList.remove("focused", (e.type === "blur" || input.value.length < 0));
    // });
}

var left = document.getElementById('moveleft');
left.addEventListener("click", () => {
    document.getElementById("textbox").style.marginLeft = "0";
    document.getElementsByClassName("toplam")[0].style.marginLeft = "100%";
});

var right = document.getElementById('moveright');
right.addEventListener("click", () =>{
    document.getElementById("textbox").style.marginLeft = "50%";
    document.getElementsByClassName("toplam")[0].style.marginLeft = "0";
});

//regex validation for signup and login form #signup_email

function checkemail(){
    var email = document.getElementById("signup_email").value;
    var reEmail = /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,20})(.[a-z]{2,8})?$/;
    var span = document.getElementById("email-span");
    if (reEmail.test(email) === -1){
        span.innerText = "Enter Valid Email Address";  
        span.style.color = "red"; 
    } else if (email === ""){
        span.innerText = "Enter Email Address";
        span.style.color = "red";
    } else if (email.search(/@([a-z0-9-]+)/) === -1){
        span.innerText = "Invalid Domain Name";
        span.style.color = "red";
    } else if (email.search(/@([a-z0-9-]+)\.([a-z]{2,20})/) === -1){
        span.innerText = "Invalid Email Extension";
        span.style.color = "red";
    } else {
        span.innerText = "Email Verified";
        span.style.color = "green";
    }
}

function signCheckpassword(){
    var password = document.getElementById("signup_password").value; 
    var rePassword = /(?=.*[0-9])(?=.*[!@#\.\$%\^&\*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var span = document.getElementById("signup-password-span");
    if(rePassword.test(password) === -1){
        span.innerText = "Recheck Entered Email";
        span.style.color = "red";
        document.getElementById("signup_password").value = password.split(/[a-zA-Z0-9!@#$%^&*]/g).join("*");
    } else if (password === ""){
        span.innerText = "Enter Password";
        span.style.color = "red";
    } else if (password.search(/[!@#$%^&*]/) === -1){
        span.innerHTML = "Must contain at least one special character: ! @ # $ % ^ & *";
        span.style.color = "red";
    } else if (password.search(/(?=.*[0-9])/) === -1){
        span.innerText = "Must contain at least one digit between 0-9";
        span.style.color = "red";
    } else{
        span.innerText = "Password Verified"; 
        span.style.color = "green";
        // document.getElementById("signup_password").value = password.split("*").join(/[a-zA-Z0-9!@#$%^&*]/g);
    }
    return;
}

function checkusername(){
    var username = document.getElementById("signup_username").value;
    var reUsername = /^(?![\s-])[\w\S]*$/g;
    var span = document.getElementById("username-span");

    if(username.length > 4){
        if(reUsername.test(username) === -1){
            span.innerText = "Enter valid Username";
            span.style.color= "red";
        } else if (username === "") {
            span.innerText = "Enter Username";
            span.style.color = "red"
        } else if (username.search(/^\S*$/)){
            span.innerText = "Cannot include spaces";
            span.style.color = "red";
        } else {
            span.innerText = "Username Accepted";
            span.style.color = "green";
        }
    }else{
        span.innerText = "Min 5 characters needed";
        span.style.color= "red";
    }
}

function checkabout(){
    var about = document.getElementById("signup_about").value;
    // var reUsername = /^(?![\s-])[\w\S]*$/g;
    var span = document.getElementById("about-span");

    if(about.length > 150){
        span.innerText = "Maximum 150 characters";
        span.style.color = "red";
    } else if ( about === ""){
        span.innerText = "Describe Yourself";
        span.style.color = "red";
    }else{
        span.innerText = "About saved";
        span.style.color = "green";
        username.style.overflow = "auto";
    }
}

function checkfullname(){
    var fullname = document.getElementById("signup_fullname").value;
    var span = document.getElementById("fullname-span");

    if( fullname === ""){
        span.innerText = "Enter Full Name";
        span.style.color = "red";
    }else{
        span.innerText = "Name Saved";
        span.style.color = "green";
    }

}