const names = [{ name: 'Asim' }, { name: 'ahmad' }, { name: 'Babar' }, { name: 'WATTOO' }, { name: 'Sabar' }, { name: 'tahir' }];

let inp = 'Ahmad'.toLowerCase();
names.find(f => {
    try {
        if ((f.name).toLowerCase() == inp) {
            console.log("Name exists");
        }
    } catch {
        console.log("Not exists");
    }
})

const tofind = 'D';
let foundNameLast = names.filter((obj) => {
    return (obj.name.toLowerCase()).endsWith(tofind.toLowerCase());
});
console.log(foundNameLast);