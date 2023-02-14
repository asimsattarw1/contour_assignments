async function getData() {
    let res = await fetch("https://learnwebcode.github.io/json-example/animals-3.json");
    let data = await res.json();
    if (data) {
        console.log(data);
    }
}

getData();