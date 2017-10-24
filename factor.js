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
        var arr = [];
    }
    else {
        var arr = [1];
    }    

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
    a0_factor = factor(coeff[0]);
    a0_factor = new Set(a0_factor)
    a0_factor = Array.from(a0_factor)

    max = coeff.length - 1;
    an_factor = factor(coeff[max]);
    an_factor = new Set(an_factor)
    an_factor = Array.from(an_factor)

    p_q = [];
    for(var i = 0; i < an_factor.length; i++){
        q = an_factor[i];
        for(var j = 0; j < a0_factor.length; j++){
            p = a0_factor[j];
            temp = p / q;
            p_q.push(temp);
        }
    }

    neg_p_q = []
    for(var i = 0; i < p_q.length; i++) {
        neg = -p_q[i]
        neg_p_q.push(neg)
    }
    p_q = p_q.concat(neg_p_q)
    return p_q
}

function descartes(coeff){

    var a, b, count0 = 0, count1 = 0;
    for(var i = 0; i < coeff.length - 1; i++) {
        a = coeff[i]
        b = coeff[i + 1]
        if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
            count0++;
        }
    }

    neg = [];
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
    
       result = [];
        for (var i = array.length - 1; i >= 0 ; i--) {
            if (i == array.length - 1) {
                result[i] = array[i];
            }
            else {
                result[i] = array[i] + (divi * result[i + 1]);
            }  
        }

   return result;
}

function quadratic(arr) {
    var a = arr[2];
    var b = arr[1];
    var c = arr[0];
    var underRoot = (b * b) - (4 * a * c);
    var denom = 2 * a;
    first = (-b / denom);

    res = [];

    if (underRoot >= 0) {
        ans1 = simplify(underRoot);
        second = (ans1[0] / denom);
        res[0] = first + second ;
        res[1] = first -  second;
        res[0] = res[0] + ans1[1];
        res[1] = res[1] + ans1[1];
    }
    else {
        underRoot = -underRoot; 
        ans = simplify(underRoot);
        second = (ans[0] / denom);
        //debug(ans)
        res[0] = first + ' + ' + second + 'sqrt(' + ans[1] + ')i ';
        res[1] = first + ' - ' + second + 'sqrt(' + ans[1] + ')i';
    }
    return res;
}

function simplify(num) {
    var outside = 1
    var inside = num
    res = []
    d = 2
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

function roots(array) {
    var finalResult = []
    p_q = rationalZero(array)
    des = descartes(array)

    for (var j = 0; j < p_q.length; j++) {
        p_q_indi = rationalZero(array)
        if (array.length == 3) {
            quadRes = quadratic(array);
            finalResult = finalResult.concat(quadRes);
        }

        else if (arry.length == 2) {
            ans = array[1]
        }

        array = syntheticDivision(array, p_q_indi[j])
        console.log(array)
        //console.log(array)
        if (array[0] == 0) {
            array = array.slice(1);
            //new_result = syntheticDivision(new_result, factor(new_result))
            finalResult.push(p_q_indi[j]);
        }
    }

    return finalResult;

}

 array = [-9, 3, 3, 1, 2]
 //array = [-6, -5, 2, 1]
// //array = [9, 6, 3, 2]
// //array = [10, 6, 1]

//p_q = rationalZero(array) 
//debug(p_q)

//des = 'descartes rule : ' + descartes(array)
//debug(des)

//sd = 'sythetic division : ' + syntheticDivision(array, p_q)
//debug(sd)
//console.log(sd)

result = roots(array)
console.log('final results:' + result)
