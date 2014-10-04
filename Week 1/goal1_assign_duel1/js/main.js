//Misha Devine October 4th, 2014 Goal1_Dual 1 Programming for Web Applications 1

(function(){



    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //the round the players are on
    var round = 0;

    //
    function fight(){
        //tell the players to start
        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

        //Calculates the amount of damage the player has
        for(var i=0; i<10; i++){
            var minDamage1 = player1Damage *.5;
            var minDamage2 = player2Damage *.5;
            //Round down the amount od damage the player has
            var f1 = Math.floor(Math.random()*(player1Damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage - minDamage2) + minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            //checking to see if the alert will work
           console.log(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

            //display results to  winnerCheck function
            var results = winnerCheck();
            console.log(results);
            //add another round if there is no winner
            if (results === "no winner"){
                round++;
                alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);
            }else{
                alert(results);
                break; //break once there is a winner or if they reach round 10
            }
        }
    }
    //check to see if there is a winner
    function winnerCheck() {
    var result="no winner";
        //if player one and player two's health is less than 1, they both die
        if(playerOneHealth<1 && playerTwoHealth<1){
            result = "You Both Die";
        }else if(playerOneHealth<1){ //if player one's health is less than 1, player two wins
            result = playerTwoName+" WINS!!!"
        }else if(playerTwoHealth<1) { // if player two's health is less than 1, player one wins
            result = playerOneName + " WINS!!!"
        }
        //return (display) the results of abover code: who wins
        return result;
    }


    /******** The program gets started below ******/
    fight();//calling the fight function
})();

