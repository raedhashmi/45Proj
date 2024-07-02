/*Start with your program from Exercise 15. Add a
print statement to the end of your program informing
people that you found a bigger dinner table.*/
let guestList = ["Sheroz", "Sherry", "Zaeem", "Ammar", "Hashim"];
console.log("Hello", guestList[0], "you are invited to dinner");
console.log("Hello", guestList[1], "you are invited to dinner");
console.log("Hello", guestList[2], "you are invited to dinner");
console.log("Hello", guestList[3], "you are invited to dinner");
console.log("Hello", guestList[4], "you are invited to dinner");
guestList.splice(3, 1, "Muhmmad");
console.log("Ammar can't make it");
console.log("Hello", guestList[0], "you are invited to dinner");
console.log("Hello", guestList[1], "you are invited to dinner");
console.log("Hello", guestList[2], "you are invited to dinner");
console.log("Hello", guestList[3], "you are invited to dinner");
console.log("Hello", guestList[4], "you are invited to dinner");
console.log("I found a bigger dinner table");
guestList.unshift("Hamiz", "Ibrahim");
console.log("Hello", guestList[0], "you are invited to dinner");
console.log("Hello", guestList[1], "you are invited to dinner");
console.log("Hello", guestList[2], "you are invited to dinner");
console.log("Hello", guestList[3], "you are invited to dinner");
console.log("Hello", guestList[4], "you are invited to dinner");
console.log("Hello", guestList[5], "you are invited to dinner");
console.log("Hello", guestList[6], "you are invited to dinner");
export {};
