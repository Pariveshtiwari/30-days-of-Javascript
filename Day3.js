//objects within function

function calc(val){
    const obj = {
        add(val1){
            var a = val + val1;
            return a;
        },
        sub(val1){
            var a = val - val1;
            return a;
        }
    }
    return obj;
}
console.log(calc(5).add(2)); // 7
console.log(calc(5).sub(2)); // 3
