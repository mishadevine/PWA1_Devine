//Misha Devine October 9th, 2014 Goal2_Dual 2 Programming for Web Applications 1

(function () {

    //The Player's name, damage and health in an array

    var fighter1 = {
        name: "Spiderman",
        damage: 20,
        health: 100
    };
    var fighter2 = {
        name: "Batman",
        damage: 20,
        health: 100
    };
    var fighters = [fighter1, fighter2];
    console.log(fighter1.name);

    //the round the players are on
    var round = 1;
    //
    var dom = {
        round: document.querySelector("#round"),
        btn: document.querySelector("#fight_btn")
    };

    dom.btn.addEventListener("click", fight);

    document.querySelector("#kabal p").innerHTML = fighter1.name + fighter1.health;
    document.querySelector("#kratos p").innerHTML = fighter2.name + fighter2.health;


    function fight() {
        dom.round.innerHTML = "ROUND " + round + " Complete";

        //tell the players to start


        //Calculates the amount of damage the player has

        var minDamage1 = fighters[0].damage * .5;
        var minDamage2 = fighters[1].damage * .5;
        //Round down the amount od damage the player has
        var f1 = Math.floor(Math.random() * (fighter1.damage - minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (fighter2.damage - minDamage2) + minDamage2);

        //inflict damage
        fighter1.health -= f1;
        fighter2.health -= f2;

        document.querySelector("#kabal p").innerHTML = fighter1.name + fighter1.health;
        document.querySelector("#kratos p").innerHTML = fighter2.name + fighter2.health;

        //display results to  winnerCheck function
        var results = winnerCheck();
        console.log(results);
        //add another round if there is no winner
        if (results === "no winner") {
            round++;
        } else {

            document.querySelector("#end_result p").innerHTML = results;
            document.querySelector("#kabal").style.display = "none";
            document.querySelector("#kratos").style.display = "none";

            //end once there is a winner
            dom.btn.removeEventListener("click", fight);
        }

    }

    //check to see if there is a winner
    function winnerCheck() {
        var result = "no winner";
        //if player one and player two's health is less than 1, they both die
        if (fighter1.health < 1 && fighter2.health < 1) {
            result = "You Both Die";
        } else if (fighter1.health < 1) { //if player one's health is less than 1, player two wins
            result = fighter2.name + " WINS!!!"
        } else if (fighter2.health < 1) { // if player two's health is less than 1, player one wins
            result = fighter1.name + " WINS!!!"
        }
        //return (display) the results of above code: who wins
        return result;
    }


})();

