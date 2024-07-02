/*Shrinking Guest List: You just found out that
your new dinner table won’t arrive in time for 
the dinner, and you have space for only two guests.*/

let guestList = ["Sheroz", "Sherry", "Zaeem","Ammar","Hashim"];

console.log("Hello",guestList[0],"you are invited to dinner");
console.log("Hello",guestList[1],"you are invited to dinner");
console.log("Hello",guestList[2],"you are invited to dinner");
console.log("Hello",guestList[3],"you are invited to dinner");
console.log("Hello",guestList[4],"you are invited to dinner");

guestList.splice(3,1,"Muhmmad");

console.log("Ammar can't make it")

console.log("Hello",guestList[0],"you are invited to dinner");
console.log("Hello",guestList[1],"you are invited to dinner");
console.log("Hello",guestList[2],"you are invited to dinner");
console.log("Hello",guestList[3],"you are invited to dinner");
console.log("Hello",guestList[4],"you are invited to dinner");

console.log("I found a bigger dinner table");

guestList.unshift("Hamiz","Ibrahim")

console.log("Hello",guestList[0],"you are invited to dinner");
console.log("Hello",guestList[1],"you are invited to dinner");
console.log("Hello",guestList[2],"you are invited to dinner");
console.log("Hello",guestList[3],"you are invited to dinner");
console.log("Hello",guestList[4],"you are invited to dinner");
console.log("Hello",guestList[5],"you are invited to dinner");
console.log("Hello",guestList[6],"you are invited to dinner");

console.log("Guys sry I can only invite only two people for dinner bcz the table wont arrive in time");

console.log("Sorry",guestList[0],"I can't invite you to dinner");
console.log("Sorry",guestList[1],"I can't invite you to dinner");
console.log("Sorry",guestList[2],"I can't invite you to dinner");
console.log("Sorry",guestList[3],"I can't invite you to dinner");
console.log("Sorry",guestList[4],"I can't invite you to dinner");

guestList.splice(0,5)

console.log("Hello",guestList[0],"you are still invited to dinner");
console.log("Hello",guestList[1],"you are still invited to dinner");

console.log(guestList)