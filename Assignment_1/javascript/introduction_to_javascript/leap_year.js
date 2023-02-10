function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(new Date().getFullYear()));
console.log(leapyear(2000));
console.log(leapyear(2028));
console.log(leapyear(1800));
console.log(leapyear(100));