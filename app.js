var card1 = document.getElementById("card-1");
var card2 = document.getElementById("card-2");
var card3 = document.getElementById("card-3");
var card4 = document.getElementById("card-4");
var card5 = document.getElementById("card-5");
var card6 = document.getElementById("card-6");

var match01 = {
    match: "World T20 : Final : T20 55 of 55",
    date: "29 Jun",
    team1: "India",
    team2: "South Africa",
    score1: "176/7 (20)",
    score2: "169/8 (20)",
    won: "IND won by 7 runs"
}
var match02 = {
    match: "World T20 : Semi-final : T20 54 of 55",
    date: "27 Jun",
    team1: "India",
    team2: "England",
    score1: "171/7 (20)",
    score2: "103 (16.4)",
    won: "IND won by 68 runs"
}
var match03 = {
    match: "World T20 : Super Eight : T20 51 of 55",
    date: "24 Jun",
    team1: "India",
    team2: "Australia",
    score1: "205/5 (20)",
    score2: "181/7 (20)",
    won: "IND won by 24 runs"
}
var match04 = {
    match: "World T20 : Super Eigth : T20 47 of 55",
    date: "22 Jun",
    team1: "India",
    team2: "Bangladesh",
    score1: "196/5 (20)",
    score2: "143/8 (20)",
    won: "IND won by 50 runs"
}
var match05 = {
    match: "World T20 : Super Eight : T20 43 of 55",
    date: "20 Jun",
    team1: "India",
    team2: "Afghanistan",
    score1: "181/8 (20)",
    score2: "134 (20)",
    won: "IND won by 47 runs"
}
var match06 = {
    match: "World T20 : Super Eight : T20 33 of 55",
    date: "15 Jun",
    team1: "India",
    team2: "Pakistan",
    score1: "171/7 (20)",
    score2: "103 (20)",
    won: "IND won by 24 runs"
}


card1.innerHTML = 
                `<div class="d-flex head-1">
                    <h5>${match01.match}</h5>
                    <h5>${match01.date}</h5>
                </div>
                <div class="d-flex head-2">
                    <img src="images/ind.logo.png" alt="" class="logo">
                    <h3>${match01.team1}</h3>
                    <h3 class="score">${match01.score1}</h3>
                </div>
                <div class="d-flex head-2">
                    <img src="images/south.logo.png" alt="" class="logo-1">
                    <h3>${match01.team2}</h3>
                    <h3 class="score">${match01.score2}</h3>
                </div>
                <div class="d-flex head-3">
                    <h3>${match01.won}</h3>
                    <img src="images/ind vs south.jfif" alt="">
                </div>`;

card2.innerHTML = 
                `<div class="d-flex head-1">
                    <h5>${match02.match}</h5>
                    <h5>${match02.date}</h5>
                </div>
                <div class="d-flex head-2">
                    <img src="images/ind.logo.png" alt="" class="logo">
                    <h3>${match02.team1}</h3>
                    <h3 class="score">${match02.score1}</h3>
                </div>
                <div class="d-flex head-2">
                    <img src="images/england.logo.webp" alt="" class="logo-2">
                    <h3>${match02.team2}</h3>
                    <h3 class="score">${match02.score2}</h3>
                </div>
                <div class="d-flex head-3">
                    <h3>${match02.won}</h3>
                    <img src="images/ind vs eng.jfif" alt="">
                </div>`;

card3.innerHTML = 
                `<div class="d-flex head-1">
                    <h5>${match03.match}</h5>
                    <h5>${match03.date}</h5>
                </div>
                <div class="d-flex head-2">
                    <img src="images/ind.logo.png" alt="" class="logo">
                    <h3>${match03.team1}</h3>
                    <h3 class="score">${match03.score1}</h3>
                </div>
                <div class="d-flex head-2">
                    <img src="images/aus.logo.svg" alt="" class="logo-1">
                    <h3>${match03.team2}</h3>
                    <h3 class="score">${match03.score2}</h3>
                </div>
                <div class="d-flex head-3">
                    <h3>${match03.won}</h3>
                    <img src="images/ind vs south.jfif" alt="">
                </div>`;

card4.innerHTML = 
                `<div class="d-flex head-1">
                    <h5>${match04.match}</h5>
                    <h5>${match04.date}</h5>
                </div>
                <div class="d-flex head-2">
                    <img src="images/ind.logo.png" alt="" class="logo">
                    <h3>${match04.team1}</h3>
                    <h3 class="score">${match04.score1}</h3>
                </div>
                <div class="d-flex head-2">
                    <img src="images/ban.logo.webp" alt="" class="logo-2">
                    <h3>${match04.team2}</h3>
                    <h3 class="score">${match04.score2}</h3>
                </div>
                <div class="d-flex head-3">
                    <h3>${match04.won}</h3>
                    <img src="images/pak vs ban.jfif" alt="">
                </div>`;                
                
card5.innerHTML = 
                `<div class="d-flex head-1">
                    <h5>${match05.match}</h5>
                    <h5>${match05.date}</h5>
                </div>
                <div class="d-flex head-2">
                    <img src="images/ind.logo.png" alt="" class="logo">
                    <h3>${match05.team1}</h3>
                    <h3 class="score">${match05.score1}</h3>
                </div>
                <div class="d-flex head-2">
                    <img src="images/afg.logo.png" alt="" class="logo-1">
                    <h3>${match05.team2}</h3>
                    <h3 class="score">${match05.score2}</h3>
                </div>
                <div class="d-flex head-3">
                    <h3>${match05.won}</h3>
                    <img src="images/pak vs afg.jfif" alt="">
                </div>`;

card6.innerHTML = 
                `<div class="d-flex head-1">
                    <h5>${match06.match}</h5>
                    <h5>${match06.date}</h5>
                </div>
                <div class="d-flex head-2">
                    <img src="images/ind.logo.png" alt="" class="logo">
                    <h3>${match06.team1}</h3>
                    <h3 class="score">${match06.score1}</h3>
                </div>
                <div class="d-flex head-2">
                    <img src="images/pak-logo.png" alt="" class="logo-2">
                    <h3>${match06.team2}</h3>
                    <h3 class="score">${match06.score2}</h3>
                </div>
                <div class="d-flex head-3">
                    <h3>${match06.won}</h3>
                    <img src="images/pak vs ind].jpg" alt="">
                </div>`;   

                
