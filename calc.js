    function get(val){
         document.querySelector("input").value += val;
              }
    function cal(){
     let x = document.querySelector("input").value
     let y = eval(x);   
     document.querySelector("input").value = y ;
              }
     function clr(){
     document.querySelector("input").value = [];
              }
     function per(){
     let a = document.querySelector("input").value  
     let b = (a/100);
     document.querySelector("input").value = b;
              }
     function squ(){
     let u = document.querySelector("input").value 
     let v = (u*u);
     document.querySelector("input").value = v;
            }
     function sqt(){
     let u = document.querySelector("input").value 
     let v = Math.sqrt(u);
     document.querySelector("input").value = v;   
              }

