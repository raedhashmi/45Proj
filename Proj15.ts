/*Changing Guest List: You just heard that one of
your guests can’t make the dinner, so you need
to send out a new set of invitations. You’ll have
to think of someone else to invite.*/

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