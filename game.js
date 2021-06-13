// create the fight function
var playername = prompt("What is your robot's name?");
console.log("Your robot's name is " + playername);

var playerHealth = 100;
var playerAttack = 10;
console.log(playername + ": ", "Health remaining " + playerHealth, "Attack power " + playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;



function fight(){
    // round start alert
    window.alert("Welcome to Robot Gladiators!")

    // Subtract 'playerAttack' from 'enemyHealth'
    enemyHealth = enemyHealth - playerAttack;
    // Log message of new value
    console.log(playername + "attacked " + enemyName + ". " + enemyName + " has " + enemyHealth + " health remaining.");
    // check enemy health
    if (enemyHealth <= 0) {
        alert(enemyName + " is defeated!!");
    } else {
        alert(enemyName + " still has " + enemyHealth + " remaining.");
    }
    
    // Subtract 'enemyAttack' from 'playerHealth
    playerHealth = playerHealth - enemyAttack;
    // Log new playerHealth
    console.log(enemyName + " attacked " + playername + ". " + playername + " has " + playerHealth + " health remaining.");
    // check player health
    if (playerHealth <= 0) {
        alert(playername + " was defeated!!");
    } else {
        alert(playername + " still has " + playerHealth + " remaining.");
    }




}

fight();


