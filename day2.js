//closures
function fun(){
    var a = 6;
    function f(a,b){
        var sum = a+b;
        return sum;
    }
    a = 5;
    return f;
}

var numsum = fun();
console.log(numsum(2)); // 7
