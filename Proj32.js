/*Checking Usernames: Do the following to create a
program that simulates how websites ensure that
everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.*/
let current_users = ["user1", "user2", "user3", "user4", "user5"];
let new_users = ["user6", "user2", "user7", "user8", "user9"];
for (let user of new_users) {
    if (current_users.includes(user)) {
        console.log(`${user} is already taken. Please choose a different username.`);
    }
    else {
        console.log(`${user} is available. You may now register.`);
    }
}
export {};
