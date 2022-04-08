var players = {    
    "player":[
        /*
        Sample Player Entry
        {
            "name":"Victor Momney",
            "isAlive":true,
            "diedToday":false,
        }
        */
        { 
            "name":"Gryphen Ferguson",
            "isAlive":true,
            "diedToday":false,
        },
        { 
            "name":"Lauren Neuhoff",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Grace Moser",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Bri Landwersiek",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Morgan Weaver",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Kyle Isleib",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Tara Wittlinger",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Bennet Stutzmen",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"James Joyce",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Jenny Ruotolo",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Rachel Metz",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Ethan Miller",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Thomas Damiani",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Chelsea McNeff",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Ellie Koitzsch",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Quinn Defibaugh",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Taylor Marburger",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Sam Ferreira",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"James Armstrong",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Ellie Kalbach",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Zachary Lineman",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Caleigh Bold",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Charlotte Camp",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Cole Swierczech",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Parker Waldman",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Liam Harrington",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Dylan Gazda",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Dean Mihos",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Will Cody",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Will Jaeger",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Anant Pothakamury",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Gracyn Smith",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Sydney Smith",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Will Cano",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Sydney Trapp",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"August Crane",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Colin Horger",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Alyssa Greiner",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Izzy LeBlanc",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Abby Norton",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Aidan O'Neil",
            "isAlive":true,
            "diedToday":false,
        },
        {
            "name":"Kaily Zakarevicz",
            "isAlive":true,
            "diedToday":false,
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
