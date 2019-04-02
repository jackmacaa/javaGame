var player;

function Player(name, fold, call, raise) {
    this.name = name;
    this.fold = fold;
    this.call =  call;
    this.raise = raise;
}

let PlayerMoves = {

    fold: function() {
        if (enemy.name != 'Josh') {
            alert("you lose");
        }
        if (enemy.name == 'Josh') {
          alert("You win!");
        }

    },

    call: function() {
        if (enemy.name != 'Luke') {
            alert("you lose");
        }
        if (enemy.name == 'Luke') {
          alert("You win!");
        }
    },

    raise: function() {
        if (enemy.name != 'Jack') {
            alert("you lose");
        }
        if (enemy.name == 'Jack') {
          alert("You win!");
        }


    }

}