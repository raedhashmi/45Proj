/*Alien Colors #2: Choose a color for an alien as you
did in Exercise 25, and write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.

Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/


let alienColor = "green";

if (alienColor === "green") {
    console.log("The player just earned 5 points.");
} else {
    console.log("The player just earned 10 points.");
}


alienColor = "yellow";

if (alienColor === "green") {
    console.log("The player just earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("The player just earned 10 points.");
} else {
    console.log("The player just earned 15 points.");
}


alienColor = "red";

if (alienColor === "green") {
    console.log("The player just earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("The player just earned 10 points.");
} else if (alienColor === "red") {
    console.log("The player just earned 15 points.");
}
