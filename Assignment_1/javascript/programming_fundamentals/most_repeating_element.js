const arr = [1, 3, 8, 3, 9, 4, 3, 5, 4, 2, 2, 7]

const add = (arrr) => {
    let count = 1;
    const output = [];
    const propArr = [];

    for (let i = 0; i < arrr.length; i++) {
        if (!propArr.includes(arrr[i])) {
            for (j = i + 1; j < arrr.length - 1; j++) {
                if (arrr[i] == arrr[j]) {
                    count++;
                }
            }
            propArr.push(arrr[i])
            output.push({ "prop": arrr[i], "val": count })
            count = 1;
        }
    }
    output.sort((a, b) => b.val - a.val);
    console.log(`\"${output[0].prop}\" is repeated maximum of ${output[0].val} times.`);
}
add(arr);