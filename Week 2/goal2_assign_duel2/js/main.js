//Misha Devine October 7th, 2014 Goal2_Dual 2 Programming for Web Applications 1

(function(){

    //The Player's name, damage and health in an array
    var fighter1 = ["Spiderman", 20, 100];
    var fighter2 = ["Batman", 20, 100];
    console.log(fighter2[1]);
    //the round the players are on
    var round = 0;


    function fight(){
        //tell the players to start
       alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);
        //Calculates the amount of damage the player has
        for(var i=0; i<10; i++){
            var minDamage1 = fighter1[1] *.5;
            var minDamage2 = fighter2[1] *.5;
            //Round down the amount od damage the player has
            var f1 = Math.floor(Math.random()*(fighter1[1] - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1] - minDamage2) + minDamage2);

            //inflict damage
            fighter1[2]-=f1;
            fighter2[2]-=f2;

            //checking to see if the alert will work
           console.log((fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]));

            //display results to  winnerCheck function
            var results = winnerCheck();
            console.log(results);
            //add another round if there is no winner
            if (results === "no winner"){
                round++;
                alert(fighter1[0]+":"+fighter1[2]+" *ROUND "+round+" OVER* "+fighter2[0]+":"+fighter2[2]);
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
        if(fighter1[2]<1 && fighter2[2]<1){
            result = "You Both Die";
        }else if(fighter1[2]<1){ //if player one's health is less than 1, player two wins
            result = fighter2[0]+" WINS!!!"
        }else if(fighter2[2]<1) { // if player two's health is less than 1, player one wins
            result = fighter1[0] + " WINS!!!"
        }
        //return (display) the results of abover code: who wins
        return result;
    }


    /******** The program gets started below ******/
    fight();//calling the fight function
})();

