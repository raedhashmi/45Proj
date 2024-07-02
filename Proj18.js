let places = ["Dubai", "London", "Paris", "Berlin", "New York"];
let placesv2 = ["Dubai", "London", "Paris", "Berlin", "New York"];
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.*/
console.log("Original order");
console.log(places);
//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order");
console.log(placesv2.sort());
//• Show that your array is still in its original order by printing it.
console.log("Original order");
console.log(places);
//• Print your array in reverse alphabetical order without changing the order
//of the original list.
console.log("Reverse alphabetical order");
console.log(placesv2.reverse());
//• Show that your array is still in its original order by printing it again.
console.log("Original order");
console.log(places);
//• Reverse the order of your list. Print the array to show that its order has 
//changed.
console.log("Reverse order");
placesv2.reverse();
console.log(placesv2);
//• Reverse the order of your list again. Print the list to show it’s back to 
//its original order.
console.log("Reversed AGAIN");
placesv2.reverse();
console.log(placesv2);
//• Sort your array so it’s stored in alphabetical order. Print the array to 
//show that its order has been changed.
console.log("Alphabetical order");
places.sort();
console.log(places);
//• Sort to change your array so it’s stored in reverse alphabetical order.
//Print the list to show that its order has changed.
console.log("Reverse alphabetical order");
places.sort();
console.log(places);
export {};
