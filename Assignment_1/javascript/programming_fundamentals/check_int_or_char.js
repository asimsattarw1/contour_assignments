const arr = ["a", 5, 6, 9, 3, "s", 0, "i", 7, "m"];

const check = (arrr) => {
    const intArr = [];
    const charArr = [];
    arrr.map((item, index) => {
        if (isNaN(item)) {
            intArr.push(item)
        }
        else {
            charArr.push(item)
        }
    });

    console.log(intArr);
    console.log(charArr);
}

check(arr);