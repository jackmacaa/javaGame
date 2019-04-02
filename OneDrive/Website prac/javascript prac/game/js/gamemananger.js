let GameManager = {
   setGameStart: function(playerType) {
       this.resetPlayer(playerType);
       this.setPreFight();
   },

   resetPlayer: function(playerType) {
        switch (playerType) {
            case "Donkey":
            player = new Player(playerType, 0, 0, 0)
            break;
            case "Fish":
            player = new Player(playerType, 0, 0, 0)
            break;
            case "Reg":
            player = new Player(playerType, 0, 0, 0)
            break;
        }
         let getInterface = document.querySelector(".interface");
         getInterface.innerHTML = '<img src="img/' + playerType + '.png" class="img-avatar"><div><h3>' + playerType + '</h3>';
   },

   setPreFight: function() {
       let getHeader = document.querySelector(".header");
       let getActions = document.querySelector(".actions");
       let getArena = document.querySelector(".arena");

       getHeader.innerHTML = '<p>Search for a champion</p>';
       getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()"> Search</a>';
       getArena.style.visibility = "visible";
      
    },

    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        let jack = new Enemy("Jack", 0, 0, 0);
        let josh = new Enemy("Josh", 0, 0, 0);
        let luke = new Enemy("Luke", 0, 0, 0);
        
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
        switch (chooseRandomEnemy) {
            case 0:
            enemy = jack;
            break;
            case 1:
            enemy = josh;
            break;
            case 2:
            enemy = luke;
            break;
        }
        getHeader.innerHTML = '<p> The opponent has made a move, pick yours</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.fold()"> Fold</a> ' + 
                            '<a href="#" class="btn-prefight" onclick="PlayerMoves.call()"> Call</a>' + 
                            '<a href="#" class="btn-prefight" onclick="PlayerMoves.raise()"> Raise</a>';
        getEnemy.innerHTML = '<img src="img/' + enemy.name + '.png" class=health-enemy">' + '<h3>' + enemy.name + '</h3>';
    }
}