const printLocations = (list: string[]) => {
    // const inviteMessage: string = `I'm sending you my warmest invitation to this dinner party.`
    list.forEach(location => console.log(location))
}

const Log = () => {
    return console.log(`\n---------------------`)

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


{/* Think of something you could store in a array. 
For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
Write a program that creates a list containing these items.

 */}
console.log(`--------------------------------------.`)
const mountains: string[] = [`Mount Everest`, `K2`, `Nanga Parbat`, `Kangchenjunga`,]
const rivers: string[] = [`Indus`, `Ravi`, `Jehlum`]
const countries: string[] = [`Pakistan`, `India`, `Srilanka`, `Bhutan`]
const cities: string[] = [`Gujranwala`, `Gujrat`, `Lahore`]
const languages: string[] = [`Urdu`, `Punjabi`, `Pashto`, `English`]

{/* They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.

 */}
console.log(`--------------------------------------.`)
const randomInfo = { mountains, rivers, countries, cities, languages }

console.log(`randomInfo`, randomInfo)
console.log(`--------------------------------------.`)



{/*
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

*/}

let mobile = `Apple`

console.log(`if mobile == "Apple"? I predict True`)

console.log(mobile == "Apple", `\n---------------------`)

let language = `Spanish`

console.log(`if language == "Spanish"? I predict True`)
console.log(language == `Spanish`, `\n---------------------`)

console.log(`if language == "spanish"? I predict False`)
console.log(language == `spanish`, `\n---------------------`)


let bike = `Honda`

console.log(`if bike = "Honda"? I predict True`)
console.log(bike == `Honda`, `\n---------------------`)
console.log(`if bike = "honda"? I predict False`)
console.log(bike == `honda`, `\n---------------------`)

let insurance = `Auto`

console.log(`if insurance == "Auto"? I predict True`)
console.log(insurance == "Auto", `\n---------------------`)
console.log(`if insurance == "auto"? I predict False`)
console.log(insurance == "auto", `\n---------------------`)



console.log(`if mobile == "apple"? I predict False`)

console.log(mobile == "apple", `\n---------------------`)



console.log(`\n-----##########################--------------------`)


{/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/}

const test: string = `equal`

console.log(test == `equal`, `\n---------------------`)
console.log(test !== `equal`, `\n---------------------`)

console.log(test.toLowerCase() == `equal`, `\n---------------------`)

const age: number = 18
console.log(age == 18, `\n---------------------`)
console.log(age >= 18, `\n---------------------`)
console.log(age <= 18, `\n---------------------`)
console.log(age > 18, `\n---------------------`)
console.log(age != 18, `\n---------------------`)
console.log(age < 18, `\n---------------------`)
console.log(age <= 18 && age > 16, `\n---------------------`)
console.log(age < 18 || age == 18, `\n---------------------`)


console.log(mountains.indexOf(`K2`) >= 0 ? true : false)
console.log(mountains.indexOf(`k2`) >= 0 ? true : false)

console.log(`\n---------------------`)

{/*
Alien Colors #1: Imagine an alien was just shot down in a game. 
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. 

If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

 */}

let alien_color: string = `green`

if (alien_color == `green`) {
    console.log(`You just earned 5 points!`)
} else {
    console.log(`failed`)
}

Log()

{/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.

Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.

*/}

if (alien_color == `green`) {
    console.log(`you earned 5 points.`)
} else {
    console.log(`you earned 10 points.`)
}

Log()

if (alien_color == `green`) {
    console.log(`you earned 5 points.`)
} else if (alien_color == `yellow`) {
    console.log(`you earned 10 points.`)
} else if (alien_color == `red`) {
    console.log(`you earned 15 points.`)
}
Log()

alien_color = `red`

if (alien_color == `green`) {
    console.log(`you earned 5 points.`)
} else if (alien_color == `yellow`) {
    console.log(`you earned 10 points.`)
} else if (alien_color == `red`) {
    console.log(`you earned 15 points.`)
}
Log()
alien_color = `yellow`
if (alien_color == `green`) {
    console.log(`you earned 5 points.`)
} else if (alien_color == `yellow`) {
    console.log(`you earned 10 points.`)
} else if (alien_color == `red`) {
    console.log(`you earned 15 points.`)
}

Log()

{/*
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.

*/}

const personAge: number = 10

if (personAge < 2) {
    console.log(`baby`)
} else if (personAge == 2 || personAge < 4) {
    console.log(`toddler`)
} else if (personAge == 4 || personAge < 13) {
    console.log(`kid`)
} else if (personAge == 13 || personAge < 20) {
    console.log(`teenage`)
} else if (personAge == 20 || personAge < 65) {
    console.log(`adult`)
} else if (personAge > 65) {
    console.log(`elder`)
}

Log()



