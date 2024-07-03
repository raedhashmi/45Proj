/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let users = ["admin", "Eric", "Jane", "Bob", "Alice"];
for (let i = 0; i < users.length; i++) {
    if (users[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${users[i]}, thank you for logging in again.`);
    }
}
users.splice(0, users.length);
if (users.length === 0) {
    console.log("We need to find some users!");
}
export {};
