
// prevent back 
    function preventBack() { window.history.forward(); }  
    setTimeout("preventBack()", 0);  
    window.onunload = function () { null }; 
    
// focusing username when page loads
    function firstfocus()
    {
    document.logform.username.focus();
    return true;
    }
    
//  validate login form and redirect to main page  
    function validatelogin(callback){
        var user="admin";
        var pwd = 12345;
        let username = document.getElementById("username").value;
        let logpwd = document.getElementById("logpwd").value;
    
        if(username == "" || logpwd == ""){
            alert("Username and Password cannot be empty");
            return false
        }
        else if(username != user || logpwd != pwd){
            alert("Incorrect Username or Password");
            return false
    
        }
        else {
            callback();
        }
    }
    
    function loadmain(){ 
         return true;
    }


    
   















    


