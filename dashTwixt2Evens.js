let num = 467876467;
let total = 0;
const arrayAverage = (myNum) => {
    const myStr = myNum.toString();
    const myArr = myStr.split("");
    let len = myArr.length;
    let txt = "";

    for (let i = 0; i < len - 1; i++) {
        if (parseInt(myArr[i]) % 2 == 0 && parseInt(myArr[i + 1]) % 2 == 0) {
            txt = txt + myArr[i] + "-";
        }
        else {
            txt = txt + myArr[i];
        }
    }
    console.log(txt);
}

arrayAverage(num);
