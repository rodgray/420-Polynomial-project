      
        
  $(document).ready(function(){
  
                             
    $("#goButton").click(function(){
        
       $("goButton").click(roots(goFunction()));
            $("#container").hide();
            $("#container").fadeIn(4000);
            $("#showSteps").hide();
            $("#showSteps").fadeIn(4000);
        
       
         });
}); 
      
  
      
      
      document.getElementById("showSteps").style.visibility = "hidden";
          
       var polynomial = document.getElementById("polynomial");
       count = 0;
      var coef_array = [];
      var exp_array = [];
    var p_q = [];  
      var count0 = 0;
      var count1 = 0;
      var finalResult = [];
    var equ = [];
    var arr = [];
      var factofLeadingTerm = [];
      var factofCoefficient = [];
       var max1 = 0;
      var revised_sd = [];
      var polytoShow = "";
       var polytoShow1 = "";
       var polytoShow2 = "";
      
      
      
     function sortNumber(a,b) {
          
          return a-b;
          
      }
      
function hideSteps() {
    
    
   var x = document.getElementById("showSteps").value
   
   if (x == "hidesteps") {
    
    document.getElementById("container").innerHTML = "The values of the rational zeros are " + p_q + " <br> The values from decartes are " + [count0, count1] + "<br>" + "The values from synthetic division are " + finalResult + "<br>";
       
   }
   
    
    else if (x == "showsteps") {
        
        
        
        document.getElementById("container").innerHTML = " <span>Steps</span> <br> We can use the Rational Zeros Theorem to find all the rational zeros of a polynomial. Here are the steps:" + " <br> <span>Rational Roots</span>" + " <br> The constant term is " + coef_array[max1] + " <br> The leading coefificent is " + coef_array[0] + " <br> Find the factors of the constant term. Factors of the constant term:" + factofCoefficient + " <br> Find the factors of the leading coefficent. Factors of the leading coefficent term:" + factofLeadingTerm + "  <br> Find the possible values of the constant term divided by the leading coefficent. The values are: " + p_q + "<br>" + "<br> <span> Decartes Rule of Signs</span>" + " <br>Count how many times the signs change in the polynomial" + " <br> The sign changes " + count0 + " times in the first polynomial" + " <br> Count how many times the signs change in f(-x)" + " <br> The sign changes" + count1 + "times in the f(-x) polynomial" + " <br> The values from decartes are " + [count0, count1] + "<br>" + "<br> <span>Synthetic Division</span>" + "<br> The values from synthetic division are " + revised_sd + "<br>" ;
        
        
    }
        else if (x == "newpolynomial") {
            
        location.reload();
            
        }
    
    }
    
      

function extractCompontents(Term, constantChar) {
var Comps = new Array();
Comps[0] = Term.split(constantChar)[0];
    
if (!Term.includes("x")) {
Comps[1] = 0;
}
else {
if (!Term.includes("^"))
Comps[1] = 1;
else
Comps[1] = Term.split("^")[1];
}

if(Comps[0] == "") { 
Comps[0]=1; 
}
if(String(Comps[1]) == "undefined") { 
Comps[1]=1; 
}
return Comps;
}
 
      
function goFunction() {
    

     var spaces = /\s/;
    
    var strings = /[abcdefghijklmnopqrstuvwyz]/;
    
      var capitalStrings = /[ABCDEFGHIJKLMNOPQRSTUVWYZ]/;
    
    var symbols = /[\W^+-]/;
    
   var spacesCheck =  spaces.test(polynomial.value);
    
    var stringsCheck = strings.test(polynomial.value);
    
    var symbolsCheck = symbols.test(polynomial.value);
    
    
     var capitalStringsCheck = capitalStrings.test(polynomial.value);
    
     if (count >=1) {
         
        window.alert("Use the dropdown box to create a new polynomial");
         
     }
    
   else if (polynomial.value == "") {
       
       window.alert("Please enter a polynomial");
   } 
    else if (spacesCheck == true) {
        
        window.alert("Enter a polynomial with no spaces");
    }
     else if (stringsCheck == true) {
        
        window.alert("Enter a valid polynomial");
     }
  else if (capitalStringsCheck == true) {
        
        window.alert("Enter a valid polynomial");
     }

    else {
        
     document.getElementById("showSteps").style.visibility = "visible";
        polytoShow = polynomial.value;
      polytoShow1 = polytoShow.replace(/x/g,"(+x)");
        console.log(polytoShow1);
      polytoShow2 = polytoShow.replace(/x/g,"(-x)");
    var poly = polynomial.value.replace(/([+-])/g, " $1");
//Split the equation at the spaces
 equ = poly.split(" "); 
for(var i = 0; i < equ.length; i++) {
x = extractCompontents(equ[i],'x');
if (x[0] == '+' || x[0] == '-') {
coef_array.push(1);
exp_array.push(x[1]);
}
 else {
 coef_array.push(x[0]);
 exp_array.push(x[1]);
 coef_array = coef_array.map(Number);
 exp_array = exp_array.map(Number);
 }
}
    console.log(coef_array);
    console.log(exp_array);
   max1 = coef_array.length - 1;
 //coef_array.reverse();
     
var coefarrayofZeros1 = [];
       
 var exparrayofZeros = [];
                 
for (var i = 0;  i < exp_array.length; i++) {
    
    
   if (exp_array[i] > exparrayofZeros.length) {    
        
    var temp = repeatElem(0, exp_array[i]+1 - exparrayofZeros.length);
       
       if (exparrayofZeros.length > 0) {
           
          var exparrayofZeros = exparrayofZeros.concat(temp);
           
          var coefarrayofZeros1 = coefarrayofZeros1.concat(temp);
            
       }
             
       else {
           
          
            var exparrayofZeros = temp.map(Number);
           
           var coefarrayofZeros1 = temp.map(Number);
           
          
       }
       
       
       
   }
        
    
    for (var j = 0; j < exparrayofZeros.length; j++) {
       
        if (exp_array[i] == j) {
            
            if (coefarrayofZeros1[j] != 0) {
                
           coefarrayofZeros1[j] = coef_array[i] + coefarrayofZeros1[j];
                    
           }
            else if (exparrayofZeros[j] === 0) {
            
             exparrayofZeros[j] = exp_array[i];
            
            coefarrayofZeros1[j] = coef_array[i];
                
            } 
        }
        
    }
             
}
     console.log(" coefarray = "  + coefarrayofZeros1);
        
        count++;
        
return coefarrayofZeros1;
    
    }
}
    

       
 

    function repeatElem(elem, n){
        var arr = [];
             for (var i=0; i<n; i++) {
               arr = arr.concat(elem);
    
             
             }
                  return arr;
} 



   
function factor(num){

    var tempNum;
    if (num < 0) {
        tempNum = -num
    }

    else {
        tempNum = num
    }
    var half = Math.floor(tempNum / 2);

    if (tempNum == 1) {
         arr = [];
    }
    else {
         arr = [1];
    } 
    
    var i = 0;
    
    var j = 0;

    // Determine our increment value for the loop and starting point.
    tempNum % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        tempNum % i === 0 ? arr.push(i) : false;
    }

    arr.push(tempNum);
     // Always include the original number.
    
    return arr
}

function rationalZero(coeff){
    var a0_factor = factor(coeff[0]);
     factofLeadingTerm = a0_factor;
    a0_factor = new Set(a0_factor)
    a0_factor = Array.from(a0_factor)

    var max = coeff.length - 1;
    var an_factor = factor(coeff[max]);
    factofCoefficient = an_factor;
    an_factor = new Set(an_factor)
    an_factor = Array.from(an_factor)

    for(var i = 0; i < an_factor.length; i++){
       var q = an_factor[i];
        for(var j = 0; j < a0_factor.length; j++){
         var   p = a0_factor[j];
           var temp = p / q;
            p_q.push(temp);
        
        }
    }

   var neg_p_q = []
    for(var i = 0; i < p_q.length; i++) {
       var neg = -p_q[i]
        neg_p_q.push(neg)
    }
    p_q = p_q.concat(neg_p_q)
    
    
         
    return p_q
    
}

function descartes(coeff){
    var a = 0;
    var b = 0;
    for(var i = 0; i < coeff.length - 1; i++) {
        a = coeff[i]
        b = coeff[i + 1]
        if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
            count0++;
        }
    }

   var  neg = [];
    for (var i = 0; i < coeff.length; i++) {
        if ( i % 2 != 0 ) {
            neg.push(-coeff[i]);
        } else {
            neg.push(coeff[i]);
        }
    }

    for(var i = 0; i < neg.length - 1; i++) {
        a = neg[i]
        b = neg[i + 1]
        if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
            count1++;
        }
    }
        
        
    
    return [count0, count1];
}


function syntheticDivision(array, divi){
    
    if (array.length == 3){
      var  quad = quadratic(array);
        
        finalResult.push(quad);
        
        
        
        
    }
    else {
        for (var j = 0; j < divi.length; j++) {
           var result = [];
            for (var i = array.length - 1; i >= 0 ; i--) {
                if (i == array.length - 1) {
                    result[i] = array[i];
                }
                else {
                    result[i] = array[i] + (divi[j] * result[i + 1]);
                } 
            }
            
        if (result[0] == 0) {
           var new_result = result.slice(1);
            new_result = syntheticDivision(new_result, factor(new_result))
           finalResult.push(divi[j]);
        }
    }
}

   return finalResult;
}

function quadratic(arr) {
    var a = arr[2];
    var b = arr[1];
    var c = arr[0];
    var underRoot = (b * b) - (4 * a * c);
    var denom = 2 * a;
   var first = (-b / denom);

   var res = [];

    if (underRoot >= 0) {
      var  ans1 = simplify(underRoot);
     var   second = (ans1[0] / denom);
        res[0] = first + second ;
        res[1] = first -  second;
        res[0] = res[0] + ans1[1];
        res[1] = res[1] + ans1[1];
    }
    else {
        underRoot = -underRoot; 
      var  ans = simplify(underRoot);
        second = (ans[0] / denom);
        
        res[0] = first + ' + ' + second + 'sqrt(' + ans[1] + ')i ';
        res[1] = first + ' - ' + second + 'sqrt(' + ans[1] + ')i';
    }
    return res;
}

function simplify(num) {
    var outside = 1
    var inside = num
   var res = []
  var  d = 2
    while (d * d <= inside){
        if (inside % (d * d) == 0) { 
        inside = inside / (d * d)
        outside = outside * d
        }   
        else {
        d = d + 1
        }
    }
    res[0] = outside;
    res[1] = inside;
    return res;
} 
      
      function removeDuplicate(a){
          
var dupes = a.filter((value,index,self)=>{ 
    return (self.indexOf(value) !== index )});
          
var cleanArray = a.filter((value,index,self)=>{ 
    return (self.indexOf(value) === index )});
          
return cleanArray;
          
}

function roots(array) {
    
      if ( equ.length == 0) {
       
          console.log("Not a valid polynomial")   
      }  
    
    else {
        
   var p_q1 = rationalZero(array)
   

   var revised_p_q1 = removeDuplicate(p_q1);

   console.log(revised_p_q1);
    
   var des = descartes(array)
    
     console.log(des);
    
   var sd = syntheticDivision(array, p_q1);
        
      var merge = [].concat.apply([],sd);
        

    revised_sd = removeDuplicate(merge);

   console.log(revised_sd);
    
                                   
                                   
                                   
        
         document.getElementById("container").innerHTML = " <span>Steps</span> <br> We can use the Rational Zeros Theorem to find all the rational zeros of a polynomial. Here are the steps:" + " <br> <span>Rational Roots</span>" + " <br> look for the constant term. The constant term is " + coef_array[max1] + " <br> look for the leading coefficent. The leading coefificent is " + coef_array[0] + " <br> Find the factors of the constant term. Factors of the constant term:" + factofCoefficient + " <br> Find the factors of the leading coefficent. Factors of the leading coefficent term:" + factofLeadingTerm + "  <br> Find the possible values of the constant term divided by the leading coefficent. The values are: " + p_q + "<br>" + "<br> <span> Decartes Rule of Signs</span>" + " <br>Count how many times the signs change in the f(x) polynomial: f(x) =  " + polytoShow1 +  " <br> The sign changes " + count0 + " times in the first polynomial" + " <br> Count how many times the signs change in f(-x) polynomial: f(-x) = " + polytoShow2 + " <br> The sign changes " + count1 + " times in the f(-x) polynomial" + " <br> The values from decartes are " + [count0, count1] + "<br>" + "<br> <span>Synthetic Division</span>" + " <br> Go through the values of p/q and perform synthetic divison. If the result is 0, then p/q is a root." + "For this equation, " + "<br> The values from synthetic division are " + revised_sd + "<br>" ;
    }
    
}
