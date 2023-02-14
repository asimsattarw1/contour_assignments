// search status by title or author

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

function checkStatus(search) {
    const filtered = library.filter(item => (item?.author == search || item?.title == search));
    console.log(`Reading status of book \'${filtered[0]?.title}\' having author's name \'${filtered[0]?.author}\' is ${filtered[0]?.readingStatus}`);
}

checkStatus("Suzanne Collins")
