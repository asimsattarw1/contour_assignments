function createBase(a) {
    function addSix(b) {
        console.log(a + b)
    }
    addSix(10);
    addSix(21);
    return a;
}
console.log(createBase(6));
