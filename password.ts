function password(password:string){
    if(password.length >= 8){
        console.log("your password is strong")
    } else {
        console.log("Weak Password!")
    }
}
password("mypassword"); //strong password
password("hello"); //weak password