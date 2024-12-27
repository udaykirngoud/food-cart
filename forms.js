let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value
    let cpassword = document.getElementById("cpassword").value
    if(name.length<3 || name.length>10){
        alert("PLEASE ENTER THE NAME RANGE BETWEEN 3 TO 10 CHARACTERS")
    }
    else{
        console.log(name)
    }
    // 
    console.log(phone)
    // password
    if(password!=cpassword){
        alert("both passwords are not same")
    }
    else{
        console.log(password)
    }
     // phone number
     let output = isNaN(phone);
    if (output){
        alert("only enter the numerical values")
    }
    else{
        console.log(phone);
    }
    

     console.log(phone)
    console.log(cpassword)
   
   
   

})

// password eye
let p_eye=document.getElementById("p_eye");
let passwordField=document.getElementById("password");
let ispasswordvisible=false;
p_eye.addEventListener("click",()=>{
if(ispasswordvisible){
passwordField.type="password";
ispasswordvisible=false;
}
else{
passwordField.type="text";
ispasswordvisible=true;
}

});


// cp_password
let cp_eye=document.getElementById("cp_eye");
let cpasswordField=document.getElementById("cpassword");
let iscpasswordvisible=false;
cp_eye.addEventListener("click",()=>{
if(iscpasswordvisible){
cpasswordField.type="password";
iscpasswordvisible=false;
}
else{
cpasswordField.type="text";
iscpasswordvisible=true;
}

});