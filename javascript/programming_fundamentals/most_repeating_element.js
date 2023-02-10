const arr = [1, 3, 8, 3, 9, 4, 3, 5, 4, 2, 2, 7]

const add = (arrr) => {
    let count = 1;
    const propArr = [];
    const valArr = [];

    for (let i = 0; i < arrr.length; i++) {
        if (!propArr.includes(arrr[i])) {
            for (j = i + 1; j < arrr.length - 1; j++) {
                if (arrr[i] == arrr[j]) {
                    count++;
                }
            }
            propArr.push(arrr[i])
            valArr.push(count);
            count = 1;
        }
    }
    propArr.sort((a, b) => b - a);
    valArr.sort((a, b) => b - a);

    console.log(`So, ${propArr[0]} reapeated maximum of ${valArr[0]} times.`);
}
add(arr);