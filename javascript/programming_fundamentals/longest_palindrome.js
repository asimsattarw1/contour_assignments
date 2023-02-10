const arr = ["eye", "wattaw", "ullu"]

const palindrome = (ar) => {
    const output=[];
    for (i = 0; i < ar.length; i++) {
        if (ar[i] == ar[i].split("").reverse().join("")) {
            output.push({ "prop":[ar[i]], "val":ar[i].length })
        }
    }
    console.log(output);
}


palindrome(arr)