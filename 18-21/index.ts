const printLocations = (list: string[]) => {
    // const inviteMessage: string = `I'm sending you my warmest invitation to this dinner party.`
    list.forEach(location => console.log(location))
}

const locations = [`Medina`, `Makkah`, `Sydney`, `London`, `NewYork`, `Prague`]

printLocations(locations)

const newSortArray = [...locations]
console.log(newSortArray.sort())
console.log(locations)


console.log(newSortArray.reverse())
console.log(locations.reverse())
console.log(locations.reverse())
console.log(locations.sort())
console.log(locations.sort().reverse())



