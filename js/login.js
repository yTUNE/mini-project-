function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "admin123"){
    alert ("Login successfully");
    window.location.href = "home.html"; // Redirecting to other page.
    return false;
    }   
    else if ( username !== "admin" && password !== "admin123") {
    
    alert("You have put an incorrect username/password!");
    return false;
    }
    else if ( username == null || password == null){
    alert("You need to input username/password");
    return false;    
    }

}

   function rememberMe() {
    if (document.getElementById("customCheck").checked == true){
    const username = document.forms["myform"]["username"].value;
    const password = document.forms["myform"]["password"].value;
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
           
    }
   }

   function onLoad() {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    if (username == "admin" && password == "admin123"){
                window.location = "index.html";
                return false;
               
            }

   
}