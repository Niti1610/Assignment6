//1.  Map Basics
//Create a JavaScript program that uses a Map to store the names of five countries as keys and their corresponding capitals as values. Print out the names of all the countries and their capitals stored in the Map.

alert("1. Map Basics Create a JavaScript program that uses a Map to store the names of five countries as keys and their corresponding capitals as values. Print out the names of all the countries and their capitals stored in the Map.");
console.log("1. Map Basics Create a JavaScript program that uses a Map to store the names of five countries as keys and their corresponding capitals as values. Print out the names of all the countries and their capitals stored in the Map.");
// Create a Map object
const countriesAndCapitals = new Map();

// Add five countries and capitals to the Map
countriesAndCapitals.set("India", "New Delhi");
countriesAndCapitals.set("United States", "Washington, D.C.");
countriesAndCapitals.set("China", "Beijing");
countriesAndCapitals.set("Brazil", "Brasília");
countriesAndCapitals.set("Russia", "Moscow");

// Print out the names of all the countries and their capitals stored in the Map
console.log("Countries and their capitals:");
for (const [country, capital] of countriesAndCapitals) {
  console.log(`${country}: ${capital}`);
}


//2. Set Deduplication
//Write a JavaScript program that takes an array of numbers as input and uses a Set to remove duplicates from the array. After removing duplicates, print the elements of the Set.

alert("2. Set Deduplication Write a JavaScript program that takes an array of numbers as input and uses a Set to remove duplicates from the array. After removing duplicates, print the elements of the Set.");
console.log("\n 2. Set Deduplication Write a JavaScript program that takes an array of numbers as input and uses a Set to remove duplicates from the array. After removing duplicates, print the elements of the Set.");
// Prompt the user to enter the elements of the array, separated by a comma or other delimiter.
const userInput = prompt("Enter the elements of the array, separated by a comma:");
// Split the user input into an array using the split() method.
const array = userInput.split(",");
// Create a new Set object.
const set = new Set();
// Iterate over the array and add each element to the Set.
for (const element of array) {
  set.add(element);
}
// Convert the Set back to an array using the Array.from() method.
const uniqueArray = Array.from(set);
// Print the unique array to the console.
console.log("The unique elements of the array are:", uniqueArray);



//3. Map Operations
//Implement a JavaScript program that demonstrates the following operations on a Map:
// Add three key-value pairs to the Map.
// Print the keys and values in the Map.
// Check if a specific key exists in the Map.
// Remove one key-value pair from the Map.

alert("3. Map Operations Implement a JavaScript program that demonstrates the following operations on a Map: Add three key-value pairs to the Map. Print the keys and values in the Map.Check if a specific key exists in the Map. Remove one key-value pair from the Map.");
console.log("\n 3. Map Operations Implement a JavaScript program that demonstrates the following operations on a Map: Add three key-value pairs to the Map. Print the keys and values in the Map.Check if a specific key exists in the Map. Remove one key-value pair from the Map.");
// Create a new Map
const myMap = new Map();
// Add three key-value pairs to the Map
myMap.set('name', 'XYZ');
myMap.set('age', 1);
myMap.set('occupation', 'Large Language Model');
// Print the keys and values in the Map
console.log('Keys:');
for (const key of myMap.keys()) {
  console.log(key);
}
console.log('Values:');
for (const value of myMap.values()) {
  console.log(value);
}
// Check if a specific key exists in the Map
const keyExists = myMap.has('name');
console.log('Does the key "name" exist in the Map?', keyExists);
// Remove one key-value pair from the Map
myMap.delete('occupation');
// Print the keys and values in the Map again
console.log('Keys after removing the "occupation" key-value pair:');
for (const key of myMap.keys()) {
  console.log(key);
}



//4. Set Set Operations
// Create a JavaScript program that creates two Sets, one for storing even numbers between 1 and 10, and another for storing odd numbers between 1 and 10. Perform the following set operations:
// Find the union of the two sets.
// Find the intersection of the two sets.
// Find the elements that are only in the even numbers set.
// Find the elements that are only in the odd numbers set.

alert("4. Set Set Operations Create a JavaScript program that creates two Sets, one for storing even numbers between 1 and 10, and another for storing odd numbers between 1 and 10. Perform the following set operations:Find the union of the two sets.Find the intersection of the two sets.Find the elements that are only in the even numbers set.Find the elements that are only in the odd numbers set.");
console.log("\n 4. Set Set Operations Create a JavaScript program that creates two Sets, one for storing even numbers between 1 and 10, and another for storing odd numbers between 1 and 10. Perform the following set operations:Find the union of the two sets.Find the intersection of the two sets.Find the elements that are only in the even numbers set.Find the elements that are only in the odd numbers set.");
// Create a new Set for storing even numbers.
const evenNumbersSet = new Set();
// Add even numbers from 1 to 10 to the Set.
for (let i = 2; i <= 10; i += 2) {
  evenNumbersSet.add(i);
}
// Create a new Set for storing odd numbers.
const oddNumbersSet = new Set();
// Add odd numbers from 1 to 10 to the Set.
for (let i = 1; i <= 10; i += 2) {
  oddNumbersSet.add(i);
}
// Find the union of the two sets.
const unionSet = new Set([...evenNumbersSet, ...oddNumbersSet]);
// Find the intersection of the two sets.
const intersectionSet = new Set([...evenNumbersSet].filter(x => oddNumbersSet.has(x)));
// Find the elements that are only in the even numbers set.
const evenNumbersOnlySet = new Set([...evenNumbersSet].filter(x => !oddNumbersSet.has(x)));
// Find the elements that are only in the odd numbers set.
const oddNumbersOnlySet = new Set([...oddNumbersSet].filter(x => !evenNumbersSet.has(x)));
// Print the sets to the console.
console.log("The union set is:", unionSet);
console.log("The intersection set is:", intersectionSet);
console.log("The even numbers only set is:", evenNumbersOnlySet);
console.log("The odd numbers only set is:", oddNumbersOnlySet);



//5.  Map Iteration
// Write a JavaScript program that uses a Map to store the names of fruits as keys and their corresponding colors as values. Write a loop to iterate through the Map and print out each fruit's name and color.

alert("5. Map Iteration Write a JavaScript program that uses a Map to store the names of fruits as keys and their corresponding colors as values. Write a loop to iterate through the Map and print out each fruit's name and color.");
console.log("\n 5. Map Iteration Write a JavaScript program that uses a Map to store the names of fruits as keys and their corresponding colors as values. Write a loop to iterate through the Map and print out each fruit's name and color.");
// Create a new Map object.
const fruitMap = new Map();
// Add fruit names and colors to the Map.
fruitMap.set("apple", "red");
fruitMap.set("banana", "yellow");
fruitMap.set("orange", "orange");
fruitMap.set("grape", "purple");
// Iterate through the Map and print out each fruit's name and color.
for (const [fruitName, fruitColor] of fruitMap) {
  console.log(`${fruitName}: ${fruitColor}`);
}

//6. Set Size and Clear
// Create a JavaScript program that demonstrates the use of the Set's size property and clear() method. Create a Set of integers, add some elements to it, print its size, and then clear the Set. Print its size again to confirm that it's empty.

alert("6. Set Size and Clear Create a JavaScript program that demonstrates the use of the Set's size property and clear() method. Create a Set of integers, add some elements to it, print its size, and then clear the Set. Print its size again to confirm that it's empty.");
console.log("\n 6. Set Size and Clear Create a JavaScript program that demonstrates the use of the Set's size property and clear() method. Create a Set of integers, add some elements to it, print its size, and then clear the Set. Print its size again to confirm that it's empty.");
 // Create a Set of integers
const mySet = new Set([1, 2, 3, 4, 5]);
// Print the size of the Set
console.log(mySet.size); // 5
// Add some elements to the Set
mySet.add(6);
mySet.add(7);
// Print the size of the Set again
console.log(mySet.size); // 7
// Clear the Set
mySet.clear();
// Print the size of the Set again to confirm that it's empty
console.log(mySet.size); // 0



//7. Map Value Update
// Implement a JavaScript program that uses a Map to store the names of cities as keys and their populations as values. Write a function that updates the population of a given city. Print the updated population of the city after the update.

alert("7. Map Value Update Implement a JavaScript program that uses a Map to store the names of cities as keys and their populations as values. Write a function that updates the population of a given city. Print the updated population of the city after the update.");
console.log("\n 7. Map Value Update Implement a JavaScript program that uses a Map to store the names of cities as keys and their populations as values. Write a function that updates the population of a given city. Print the updated population of the city after the update.");
// Create a new Map object.
const cityPopulationMap = new Map();
// Add city names and populations to the Map.
cityPopulationMap.set("London", 9004000);
cityPopulationMap.set("New York City", 8804190);
cityPopulationMap.set("Tokyo", 9333577);
cityPopulationMap.set("Shanghai", 24893646);
cityPopulationMap.set("Delhi", 31181346);
// Write a function that updates the population of a given city.
function updateCityPopulation(city, newPopulation) {
  cityPopulationMap.set(city, newPopulation);
}
// Update the population of London.
updateCityPopulation("London", 9010000);
// Print the updated population of London.
console.log(cityPopulationMap.get("London")); // 9010000



//8. Set Contains
// Create a JavaScript program that uses a Set to store the names of five programming languages. Implement a function that checks if a given programming language name exists in the Set and returns a boolean value.

alert("8. Set ContainsCreate a JavaScript program that uses a Set to store the names of five programming languages. Implement a function that checks if a given programming language name exists in the Set and returns a boolean value.");
console.log("\n 8. Set ContainsCreate a JavaScript program that uses a Set to store the names of five programming languages. Implement a function that checks if a given programming language name exists in the Set and returns a boolean value.");
// Create a new Set object.
const programmingLanguagesSet = new Set(["JavaScript", "Python", "Java", "C", "C++"]);
// Implement a function that checks if a given programming language name exists in the Set and returns a boolean value.
function programmingLanguageExists(programmingLanguageName) {
  return programmingLanguagesSet.has(programmingLanguageName);
}
// Check if the programming language "Python" exists in the Set.
const doesPythonExist = programmingLanguageExists("Python");
// Print the result to the console.
console.log(doesPythonExist); // true
// Check if the programming language "Ruby" exists in the Set.
const doesRubyExist = programmingLanguageExists("Ruby");
// Print the result to the console.
console.log(doesRubyExist); // false




//9. Map Keys and Values
// Write a JavaScript program that uses a Map to store the names of countries as keys and their official languages as values. Print out the keys and values of the Map separately.

alert("9. Map Keys and ValuesWrite a JavaScript program that uses a Map to store the names of countries as keys and their official languages as values. Print out the keys and values of the Map separately.");
console.log("\n 9. Map Keys and ValuesWrite a JavaScript program that uses a Map to store the names of countries as keys and their official languages as values. Print out the keys and values of the Map separately.");
// Create a new Map object.
const countryLanguageMap = new Map();
// Add country names and official languages to the Map.
countryLanguageMap.set("India", "Hindi");
countryLanguageMap.set("United States", "English");
countryLanguageMap.set("China", "Mandarin Chinese");
countryLanguageMap.set("Japan", "Japanese");
countryLanguageMap.set("Germany", "German");
// Print out the keys of the Map.
console.log("The keys of the Map are:");
for (const key of countryLanguageMap.keys()) {
  console.log(key);
}
// Print out the values of the Map.
console.log("The values of the Map are:");
for (const value of countryLanguageMap.values()) {
  console.log(value);
}



//10. Set Remove
// Create a JavaScript program that uses a Set to store the names of colors. Implement a function to remove a specific color from the Set and print the updated set of colors.

alert("10. Set RemoveCreate a JavaScript program that uses a Set to store the names of colors. Implement a function to remove a specific color from the Set and print the updated set of colors.");
console.log("\n 10. Set RemoveCreate a JavaScript program that uses a Set to store the names of colors. Implement a function to remove a specific color from the Set and print the updated set of colors.");
// Create a new Set object.
const colorsSet = new Set(["red", "green", "blue", "yellow", "orange"]);
// Prompt the user to enter the color that they want to remove from the Set.
const colorToRemove = prompt("Enter the color that you want to remove from the Set:");
// Use the Set.has() method to check if the color that the user entered exists in the Set.
const hasColorToRemove = colorsSet.has(colorToRemove);
// If the color exists in the Set, use the Set.delete() method to remove it.
if (hasColorToRemove) {
  colorsSet.delete(colorToRemove);
}
// Print the updated set of colors to the console.
console.log("The updated set of colors is:", colorsSet);
