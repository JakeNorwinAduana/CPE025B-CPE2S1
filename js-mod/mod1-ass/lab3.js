// Image constructor
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// images object
let images = {
    list: [],

    contains: function(title) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].title === title) {
                return true;
            }
        }
        return false;
    },

    add: function(title, artist, date) {
        if (!this.contains(title)) {
            let img = new Image(title, artist, date);
            this.list.push(img);
        }
    },

    show: function() {
        for (let i = 0; i < this.list.length; i++) {
            console.log(
                this.list[i].title + " (" +
                this.list[i].artist + ", " +
                this.list[i].date + ")"
            );
        }
    },

    clear: function() {
        this.list = [];
    }
};

// Test sequence
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);

images.show();

images.clear();
images.show();