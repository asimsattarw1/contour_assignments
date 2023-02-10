const arr = ["eye", "wattaw", "ullu", "legal", "missiissim"]

const palindrome = (ar) => {
    const output = [];
    for (i = 0; i < ar.length; i++) {
        if (ar[i] == ar[i].split("").reverse().join("")) {
            output.push({ "prop": ar[i], "val": ar[i].length })
        }
    }

    output.sort((a, b) => b.val - a.val);
    console.log(`Palindrome \"${output[0].prop}\" has maximum length of ${output[0].val} times.`);
}

palindrome(arr);