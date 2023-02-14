"use strict";
// Question# 1 Personal Message: Store a person’s name in a variable,
// and print a message to that person. Your message should be simple,
//  such as, “Hello Eric, would you like to learn some Python today?”
console.log(`"Hello Hussnain, would you like to learn some Typescript today!"`);
{ /* Question# 3
    Name Cases: Store a person’s name in a variable,
    and then print that person’s name in lowercase, uppercase, and titlecase.
*/
}
const firstName = `Hussnain Javed`;
console.log(`First Name: `, firstName.toLowerCase());
console.log(`First Name: `, firstName.toUpperCase());
{ /* Question 4
    Famous Quote: Find a quote from a famous person you admire.
    Print the quote and the name of its author.
    Your output should look something like the following,
    including the quotation marks:
*/
}
console.log(`Allama Iqbal once said, "The ultimate aim of the ego is not to see something, but to be something."`);
{ /* Question 5
    Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
    Then compose your message and store it in a new variable called message.
    Print your message.
*/
}
const famous_person = `Allama Iqbal`;
console.log(`${famous_person} once said, "The ultimate aim of the ego is not to see something, but to be something."`);
{ /*
Question 6
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces.

*/
}
const lastName = `\t Javed \n    `;
console.log(`Question 6:with spaces`, lastName);
console.log(`Question 6: without spaces`, lastName.trim());
{ /*
Number Eight: Write addition, subtraction, multiplication, and division
operations that each result in the number 8.
Be sure to enclose your operations in print statements to see the results.

 */
}
console.log(`Addition ${4 + 4}`);
console.log(`subtraction ${11 - 3}`);
console.log(`multiplication ${4 * 2}`);
console.log(`division ${32 / 4}`);
{ /*
Favorite Number: Store your favorite number in a variable.
Then, using that variable, create a message that reveals your favorite number.
Print that message.
*/
}
const favorite_number = 786;
console.log(`${favorite_number} is my favorite number.`);
{ /*
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/
}
const names = [`Ali`, `Hassan`, `Junaid`, `Baber`];
for (let i = 0; i < names.length; i++) {
    console.log(`Name ${i + 1}: ${names[i]}`);
}
{ /*
Greetings: Start with the array you used in Exercise 11,
but instead of just printing each person’s name, print a message to them.
The text of each message should be the same,
but each message should be personalized with the person’s name.
*/
}
const _names = [`Ali`, `Hassan`, `Junaid`, `Baber`];
for (let i = 0; i < _names.length; i++) {
    console.log(`Good Morning: ${_names[i]}`);
}
{ /*
Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as
“I would like to own a Honda motorcycle.”
*/
}
const thingsOwned = [`I would own Motorcycle`, `I would own Apple Iphone`];
thingsOwned.forEach(item => console.log(item));
