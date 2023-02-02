function countVowel(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
let ans = countVowel("abcdefgryuion");
console.log("total vowel is: " + ans);