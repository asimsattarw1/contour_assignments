
let arr = [4, 5, 7, 9, 3, 6, 2, 8, 5];
let total = 0;
const arrayAverage = (myArr) => {
    let len = myArr.length;
    for (let i = 0; i < len; i++) {
        total += myArr[i]
    }
    console.log(`Total average is: ${total / len}`);
}

arrayAverage(arr);
