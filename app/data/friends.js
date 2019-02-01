/*	Author: Michael Preston
 *	Created Date: "01-30-2019"
 */

let friends = [];
var seed = require('./seed.js')

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
const MakeSomeFriends = () => seed.map(props => friends.push(new Friend(props).score()));

MakeSomeFriends();

module.exports = {
    friends,
    Friend
};