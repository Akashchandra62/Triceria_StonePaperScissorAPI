const route = require("express").Router();

const gameResult = () => {
    let result = [];
    
    for (let i = 0; i < 50; i++) {
        let Player_Card = [];

        for (let j = 0; j < 4; j++) {             //Assigning player their card randomly
            Player_Card[j] = Math.floor((Math.random() * 3) + 1)
        }


        let scoreCard = {}, j;
        for ( j = 0; j < 4; j++) {                 //Running loop for eachPlayer
            let currentPlayer = j;
            let currentPlayerScore = [];
            for (let k = 0; k < 4; k++) {                 //Comparing each player with the other 
                if (k === currentPlayer) currentPlayerScore[k] = "_";
                else {
                    if (Player_Card[currentPlayer] == Player_Card[k]) currentPlayerScore[k] = "tie 🥴";

                    else if ((Player_Card[currentPlayer] == 1 && Player_Card[k] == 2) || (Player_Card[currentPlayer] == 2 && Player_Card[k] == 3) || (Player_Card[currentPlayer] == 3 && Player_Card[k] == 1)) currentPlayerScore[k] = "LOSS 😓";
                    else currentPlayerScore[k] = "WIN 🎉";
                }

            }
            scoreCard[`${j}`] = currentPlayerScore;
        }
        scoreCard[`${j}`] = Player_Card;
        result.push(scoreCard);
    }
    return {result};
}

route.get("/", (req, res) => {
    res.send(`Visit "http://localhost:3000/game/start" to Start the game`);
})
//0 -> Player_1, 1->Player_2, 2->Player_3, 3->Player_4
// 1->Stone , 2->Paper, 3->Scissor

route.get("/game/start", (req, res) => {
    const {result} = gameResult();
    res.render("index", { result})
})


module.exports = route;