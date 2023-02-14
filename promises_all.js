const promise1 = Promise.resolve(5);
const promise2 = 57;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'asim');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
console.log("simple statement");
// Expected output: Array [3, 42, "foo"]
