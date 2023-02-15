"use strict";
{ /*
Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
}
const broadCastInvitation = (list) => {
    const inviteMessage = `I'm sending you my warmest invitation to this dinner party.`;
    list.forEach(guest => console.log(`Hello ${guest}, ${inviteMessage}`));
};
const guestList = [`Ali`, `Hassan`, `Baber`, `Sajid`];
broadCastInvitation(guestList);
// Question 15
{ /*
Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
*/
}
const whoCantMakeIt = guestList[0];
console.log(`${whoCantMakeIt} cant make it to dinner`);
const newGuestList = guestList.map(guest => guest === whoCantMakeIt ? `Huzaifa` : guest);
broadCastInvitation(newGuestList);
console.log(`---------------------\n I found a bigger dinner table.`);
console.log(`--------------------------------------.`);
// Question 16
// Add Three more guests to the list!
const newGuest = [`Hadi`, `Hammad`, `Hashmat`];
// its spread operator implementation , used to add two arrays 
const guestForBiggerTable = [...newGuestList, ...newGuest];
//  unshift is used to add new item at start of array 
guestForBiggerTable.unshift(`Saim`);
// splice is used to modified original array
// so i just divided the array length to find middle of array and put Samina in the list
guestForBiggerTable.splice(guestForBiggerTable.length / 2, 0, `Samina`);
guestForBiggerTable.push(`Jamil`);
broadCastInvitation(guestForBiggerTable);
console.log(`--------------------------------------.`);
// Question 17 Shrinking List
console.log(`--------------------------------------\n I can only Invite the two persons`);
console.log(`--------------------------------------.`);
// Remove guest until two guests remains
while (guestForBiggerTable.length !== 2) {
    console.log(`I'm sorry ${guestForBiggerTable.pop()} I can’t invite You to dinner`);
}
console.log(`--------------------------------------.`);
broadCastInvitation(guestForBiggerTable);
console.log(`--------------------------------------.`);
// Empty the list
while (guestForBiggerTable.length) {
    guestForBiggerTable.pop();
}
console.log(`--------------------------------------.`);
console.log(`List is Empty`, guestForBiggerTable);
