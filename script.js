// disable browser back


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
            
        }
        else if(username != user || logpwd != pwd){
            alert("Incorrect Username or Password");
           
    
        }
        else {
            callback();
        }
    }
    
    function loadmain(){  
        document.getElementById("logform").action = "main.html";
        //  return true;
    }


    // fetch data from api and arrange in a table with checkboxes
    $(document).ready(function(){

        $(document).on('click','.fetchtodosBtn', fetchTodos);
        // document.getElementById('fetchtodosBtn').addEventListener('click', fetchTodos); 
        
        function fetchTodos(){
            fetch('https://jsonplaceholder.typicode.com/todos/')
                .then(response => response.json())
                .then(todos => {
                      var output = "";
                    todos.forEach(function(todos) {  
                      
                        output += "<tr>";
                        if(todos.completed==true){ 
                                output += `
                                    <td>
                                    <input checked disabled type='checkbox'/>
                                    
                                    </td>
    
                                    <td >
                                        ${todos.title}
                                    </td></tr>`;
                            }
                    else{
                                output += `
                                        <td>
                                        <input id='checkbox' class='checkbox' type='checkbox' name='checkbox' />
                                        
                                        </td>
    
                                        <td >
                                            ${todos.title}
                                        </td></tr>`;
                        }
                        
                       
                    });
                    document.getElementById("data").innerHTML = output;
                    document.getElementById("fetchtodosBtn").disabled = true;
                });
        }


        // check the number of checked boxes and alert
       var promise = new Promise(function(resolve,reject){
           var count=0;
           $(document).on('change','.checkbox', function (){
               if($(this).prop("checked") == true){
                   $(this).attr("disabled","true");
                  count++;    
           }
            //    else 
            //         count--;        
               console.log("Checked boxes: "+count);
               if( count == 5 ){
               
                resolve();
                
               }
                
           });
       });
    
       promise
            .then(function(){
                        alert(" Congrats. 5 Tasks have been Successfully Completed ");
                        
                    });
            
            

   
    });
   















    


