var players = {    
    "player":[
        /*
        Sample Player Entry
        {
            "name":"John Doe",
            "isAlive":true,
            "diedToday":false,
        }
        */
        
        },
        
    ]
};

window.onload = e => {
    for (let i = 0; i < players.player.length; i++){
        let newPlayer = document.createElement("li");
        let playerLiText = document.createTextNode(players.player[i].name)
        newPlayer.appendChild(playerLiText);
        
        if (players.player[i].isAlive){    
            const aliveList = document.getElementById("alivePlayerList");
            aliveList.appendChild(newPlayer);
        }else{
            const deadList = document.getElementById("deadPlayerList");
            if (players.player[i].diedToday){
                let newPlayer2 = document.createElement("li");
                let playerLiText2 = document.createTextNode(players.player[i].name)
                newPlayer2.appendChild(playerLiText2);
        
                const todayList = document.getElementById("todayDeathList");
                deadList.appendChild(newPlayer);
                todayList.appendChild(newPlayer2);
            }else{
                deadList.appendChild(newPlayer);
            }
        }
    }
};
