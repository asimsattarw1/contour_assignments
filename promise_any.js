// in promises any first executing function will be consoled
const promise1 = new Promise((resolve) => setTimeout(resolve, 501, 'medium'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 520, 'slow'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 513, 'quick'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));