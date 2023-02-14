
fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
    .then(data => {
        let js_obj = data;
        if (js_obj) {
            console.log("This is javascript objcet: ", js_obj);
            let json_obj = JSON.stringify(js_obj);
            if (json_obj) {
                console.log("This is json object: ", json_obj);
            }
        }
    });


