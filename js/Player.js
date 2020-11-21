class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.ranking = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarRank(){
    var getCarRankRef = database.ref("leaderBoard")
    getCarRankRef.on("value",(data) => {
     this.ranking = leaderBoard = data.val()
    })
  }

  static updateCarRank(){
    database.ref('/').update({
      leaderBoard: leaderBoard + 1
    })
    this.ranking += 1
  }
}
