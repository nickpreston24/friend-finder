var friends = [];

function Friend(name, photoUrl) {
    this.name = name;
    this.photoUrl = photoUrl;
    this.scores = [];
}

friends.push(new Friend("Kylo Ren", "https://vignette.wikia.nocookie.net/starwars/images/4/4a/Kylo_Ren_TLJ.png/revision/latest/scale-to-width-down/500?cb=20171223080435"));

module.exports = {
    friends,
    Friend
};