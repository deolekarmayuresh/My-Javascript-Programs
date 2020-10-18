var names = ['Alex','Joey','Sheldon','Stuart','Penny','Racheal','Howard','Chandler','Leonard','Ross','Monica'];

function lunch() {

    var people = names.length;
    var randomPosition = Math.floor(Math.random() * people);
    var randomPerson = names[randomPosition];

    return randomPerson + " is going to buy lunch today";
}

// lunch();