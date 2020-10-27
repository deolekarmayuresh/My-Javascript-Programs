// Code snippet for Fibonacci Series

function fibonacciSeries(n){

    var res = [];
    if(n === 1) {
        res = [0];
    }
    else if(n === 2) {
        res = [0, 1];
    }else {
        res = [0, 1];

        for(var i=2; i<n; i++){
            res.push(res[res.length - 2] + res[res.length - 1]);
        }
//         res.push(res[0] + res[1]); // [0,1,1]
    }

    return res;

}

res = fibonacciSeries(5);
console.log(res);