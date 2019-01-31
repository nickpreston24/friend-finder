/*	Author: Michael Preston
 *	Created Date: "01-30-2019"
 */

let friends = [];

var friendData = [{
    name: "Kylo Ren",
    photo: "https://vignette.wikia.nocookie.net/starwars/images/4/4a/Kylo_Ren_TLJ.png" //  /revision/latest/scale-to-width-down/500?cb=20171223080435
}, {
    name: 'Tinker Bell',
    photo: "https://upload.wikimedia.org/wikipedia/en/4/4c/TinkerbellDisney.jpg"
}, {
    name: 'Seto Kaiba',
    photo: "http://www.less-real.com/imagevault/uploaded/images/part4/Seto.Kaiba.17762.jpg"
}, {
    name: 'Stimpy',
    photo: "https://ih1.redbubble.net/image.359543737.4556/flat,550x550,075,f.u5.jpg"
}, {
    name: 'Patrick Star',
    photo: "https://res.cloudinary.com/teepublic/image/private/s--G-sEUdGD--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1446161353/production/designs/71233_0.jpg"
}, {
    name: 'Mario',
    photo: "http://mario.nintendo.com/assets/img/home/intro/mario-pose2.png"
}, {
    name: 'Cloud',
    photo: "https://static.posters.cz/image/750/posters/final-fantasy-vii-cloud-i33543.jpg"
}, {
    name: 'Scooby Doo',
    photo: "https://amp.businessinsider.com/images/59721be09d0918319c32a058-750-563.jpg"
}, ]

function Friend({
    name,
    photo,
    scores = []
}) {

    this.name = name;
    this.photo = photo;
    this.scores = scores;

    this.score = function () {
        this.scores = fillRandom(1, 5);
        return this;
    }
}

const randomInt = (min, max, inclusive = true) => Math.floor(Math.random() * (max - min + 1 + (inclusive ? 1 : 0))) + min;
const fillRandom = (min, max, size = max - min + 1) => Array(size).fill(min).map(_ => randomInt(min, size, inclusive = false));
const MakeSomeFriends = () => friendData.map(props => friends.push(new Friend(props).score()));

MakeSomeFriends();

// console.log(friends)

module.exports = {
    friends,
    Friend
};