const arr = [1, 2, 3, 4, 5, 6, 7, 8];

(function () {
    let sum = 0;
    for (let v of arr) {
        sum += v
    }
    let len = arr.length;
    let total = sum / len;
    console.log(total);
})(arr)
