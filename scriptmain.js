// js code for ToDo List page
    
    // fetch data from api and arrange in a table with checkboxes
    $(document).ready(function(){
 
        document.getElementById('fetchtodosBtn').addEventListener('click', fetchTodos); 
        
        function fetchTodos(){
            fetch('https://jsonplaceholder.typicode.com/todos/')
                .then(response => response.json())
                .then(todos => {
                      var output = "";
                    todos.forEach(function(todos) {  
                      if(todos.complete=true){
                          
                      }
                        output += "<tr>";
                        if(todos.completed==true){ 
                                output += `
                                    <td>
                                    <input  checked disabled  type='checkbox'/>
                                    
                                    </td>
    
                                    <td >
                                        ${todos.title}
                                    </td></tr>`;
                            }
                    else{
                                output += `
                                        <td>
                                        <input id='checkbox' class='checkbox' type='checkbox' name='checkbox' value=""/>
                                        
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
                   count++;  
               }
               else if($(this).prop("checked") == false){
                    count--;   
               }
           
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