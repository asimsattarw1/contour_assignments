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

const checkReadingStatus = (searchTitle) => {
    const searched = library.filter(item => item.title == searchTitle);
    console.log(searched);
}

checkReadingStatus('Walter Isaacson');