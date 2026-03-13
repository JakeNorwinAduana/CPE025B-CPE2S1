// Original array from Lab 1
let images = [
    { title: "Mona Lisa", artist: "Leonardo da Vinci", date: 1503 },
    { title: "The Last Supper", artist: "Leonardo da Vinci", date: 1495 },
    { title: "Starry Night", artist: "Vincent van Gogh", date: 1889 },
    { title: "The Scream", artist: "Edvard Munch", date: 1893 },
    { title: "Guernica", artist: "Pablo Picasso", date: 1937 },
    { title: "The Kiss", artist: "Gustav Klimt", date: 1907 },
    { title: "Girl With a Pearl Earring", artist: "Johannes Vermeer", date: 1665 },
    { title: "The Birth of Venus", artist: "Sandro Botticelli", date: 1485 },
    { title: "Las Meninas", artist: "Diego Velázquez", date: 1656 },
    { title: "The Creation of Adam", artist: "Michelangelo", date: 1512 }
];

// Constructor function
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Factory function
function getImage(title, artist, date) {
    return {
        title: title,
        artist: artist,
        date: date
    };
}

// Create images1 using the constructor
let images1 = [];
for (let i = 0; i < images.length; i++) {
    let img = new Image(images[i].title, images[i].artist, images[i].date);
    images1.push(img);
}

// Create images2 using the factory function
let images2 = [];
for (let i = 0; i < images1.length; i++) {
    let img = getImage(images1[i].title, images1[i].artist, images1[i].date);
    images2.push(img);
}

// Display images2
for (let i = 0; i < images2.length; i++) {
    console.log(
        images2[i].title + " - " +
        images2[i].artist + " (" +
        images2[i].date + ")"
    );
}