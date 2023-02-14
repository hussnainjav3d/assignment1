var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
{ /*
Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
}
var broadCastInvitation = function (list) {
    var inviteMessage = "I'm sending you my warmest invitation to this dinner party.";
    list.forEach(function (guest) { return console.log("Hello ".concat(guest, ", ").concat(inviteMessage)); });
};
var guestList = ["Ali", "Hassan", "Baber", "Sajid"];
broadCastInvitation(guestList);
// Question 15
{ /*
Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
*/
}
var whoCantMakeIt = guestList[0];
console.log("".concat(whoCantMakeIt, " cant make it to dinner"));
var newGuestList = guestList.map(function (guest) { return guest === whoCantMakeIt ? "Huzaifa" : guest; });
broadCastInvitation(newGuestList);
console.log("---------------------\n I found a bigger dinner table.");
console.log("--------------------------------------.");
// Question 16
// Add Three more guests to the list!
var newGuest = ["Hadi", "Hammad", "Hashmat"];
// its spread operator implementation , used to add two arrays 
var guestForBiggerTable = __spreadArray(__spreadArray([], newGuestList, true), newGuest, true);
//  unshift is used to add new item at start of array 
guestForBiggerTable.unshift("Saim");
// splice is used to modified original array
// so i just divided the array length to find middle of array and put Samina in the list
guestForBiggerTable.splice(guestForBiggerTable.length / 2, 0, "Samina");
guestForBiggerTable.push("Jamil");
broadCastInvitation(guestForBiggerTable);
console.log("--------------------------------------.");
// Question 17 Shrinking List
console.log("--------------------------------------\n I can only Invite the two persons");
console.log("--------------------------------------.");
while (guestForBiggerTable.length !== 2) {
    console.log("I'm sorry ".concat(guestForBiggerTable.pop(), " I can\u2019t invite You to dinner"));
}
console.log("--------------------------------------.");
broadCastInvitation(guestForBiggerTable);
console.log("--------------------------------------.");
while (guestForBiggerTable.length) {
    guestForBiggerTable.pop();
}
console.log("--------------------------------------.");
console.log("List is Empty", guestForBiggerTable);
