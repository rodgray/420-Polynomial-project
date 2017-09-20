
  var exp_array = [4];

  var coef_array = [5,3];

  var exp_last = exp_array.length - 1;

  var coef_last = coef_array.length - 1;



 goFunction();


   
     function sortNumber(a,b) {
          
          return a-b;
          
      }
   
   function goFunction() {
                      
       
       var final_Array= [];
       
       // If there is only 1 exponent, then print [exp-1] # of zeros 
       
         if (exp_array.length === 1) {
             
             // store the number of repeated elements in a temporary array.
                
          var temp = repeatElem(0, exp_array[0] - 1);
             
             var Array_ofNumbers = temp.map(Number);
             
           // push the fist coefficent into the  final array 
                
         final_Array.push(coef_array[0]);
              
             // loop through the array of zeros to be pushed on the final array
             
             for (var k = 0; k < Array_ofNumbers.length; k++) {
                 
                            
                   var Numbers = Array_ofNumbers[k];
                    
                    final_Array.push(Numbers) 
                     
                }
             
        final_Array.push(coef_array[1]);
                 
            }  
       
       else {
           
           /* loop through the exponent array && compare i to j. If j is not equal to i-1
            example: [4,2], 2 is not equal to 3, so an exponent is skipped. */
          
            
            for (var i = 0; i < exp_array.length - 1; i++) {
                
                  var j = i + 1;
                   
            if (exp_array[j] != exp_array[i]-1) {
                
                // store the number of repeated elements in a temporary array.
            
            var temp = repeatElem(0, exp_array[i]-1 - exp_array[j]);
                
                var arrayOfNumbers = temp.map(Number);
                
                final_Array.push(coef_array[i]) 
                
                
                // loop through the array of zeros to be pushed on the final array
                
                for (var k = 0; k < arrayOfNumbers.length; k++) {
                    
                        
                   var Numbers = arrayOfNumbers[k];
                    
                    final_Array.push(Numbers) 
                    
                    
                }
                  
                
         final_Array.push(coef_array[j]);
                
            
                if (exp_array.length != coef_array.length) {
                    
                    final_Array.push(coef_array[coef_last]);
                }
        
            
        }
             }
       
        
              
           if (exp_array[exp_last] != 1) {
               
               // store the number of repeated elements in a temporary array.
              
              var temp2 = repeatElem(0, exp_array[exp_last]-1);
               
               var arrayOfNumbers2 = temp2.map(Number);
               
               
               // loop through the array of zeros to be pushed on the final array
    
               
                for (var l = 0; l < arrayOfNumbers2.length; l++) {
                    
                        
                   var Numbers2 = arrayOfNumbers2[l];
    
                    
               /* pushes the # of zeros onto the final array if last element is not equal to 1.
               example [7,6,], so [7,6,0,0,0,0,0] */
                    
                    final_Array.push(Numbers2)
                    
                }
               
              
            }  
       }
       
    final_Array.reverse();
       
       console.log(final_Array);
          
      } 
   
   // function for finding the # of zeros to be pushed into the final array. 

      function repeatElem(elem, n){
        var arr = [];
             for (var i=0; i<n; i++) {
               arr = arr.concat(elem);
    
             
             }
                  return arr;
}
