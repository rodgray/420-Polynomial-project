function factor(num){
    var half = Math.floor(num / 2);
    var arr = [1];

    // Determine our increment value for the loop and starting point.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        num % i === 0 ? arr.push(i) : false;
    }

    arr.push(num);
     // Always include the original number.
    return arr
}

function rationalZero(coeff){
    a0_factor = factor(coeff[0]);
    max = coeff.length - 1;
    an_factor = factor(coeff[max]);

    p_q = [];

    for(var i = 0; i < an_factor.length; i++){
        for(var j = 0; j < a0_factor.length; j++){
            p = an_factor[i];
            q = a0_factor[j];
            p_q.push(p/q);
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

    neg = coeff;
    for (var i = 1; i < neg.length; i = i + 2) {
        neg[i] = -neg[i]
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

function syntheticDivision(array){

}

arr = [2, 5, -12, 10, -3]
p_q = rationalZero(arr)
console.log(p_q)

des = descartes(arr)
console.log(des)
