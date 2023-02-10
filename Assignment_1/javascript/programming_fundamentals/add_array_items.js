const arr = [1, 3, 8, 3, 9, 2, 7]

const add = (arrr) => {
    let sum = arrr.reduce((a, b) => a + b);
    console.log(sum);
}
add(arr);