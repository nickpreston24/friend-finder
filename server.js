console.log("hello");
const {
    friends,
    Friend
} = require('./app/data/friends');

console.log(friends);

friends.push(new Friend('Tinker Bell', "https://upload.wikimedia.org/wikipedia/en/4/4c/TinkerbellDisney.jpg"))

console.log(friends)