var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var printLocations = function (list) {
    // const inviteMessage: string = `I'm sending you my warmest invitation to this dinner party.`
    list.forEach(function (location) { return console.log(location); });
};
var locations = ["Medina", "Makkah", "Sydney", "London", "NewYork", "Prague"];
printLocations(locations);
var newSortArray = __spreadArray([], locations, true);
console.log(newSortArray.sort());
console.log(locations);
console.log(newSortArray.reverse());
console.log(locations.reverse());
console.log(locations.reverse());
console.log(locations.sort());
console.log(locations.sort().reverse());
