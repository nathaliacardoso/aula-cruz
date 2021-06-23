// first exercise

const newName = prompt('What´s your name?')
const age = prompt('How old are you?')
console.log('Your name is', newName)
console.log('Your age:', age)

let newName = 'Nathalia'
console.log('Name:', newName)

newName = 'Nath'
console.log('New name:', newName)

// other exercise

const myName = 'Nathalia'
const lastName = 'Cardoso'
const age = 29
console.log('My name is', myName, lastName, 'and I´m', age, 'years old.')

let arrayMe = ['Nathalia', 'Cardoso', 29]
console.log('My name is', arrayMe[0], arrayMe[1], 'and I´m', arrayMe[2], 'years old.')

// other exercise

let arrayNumbers = [1, 2, 3, 4, 5, 6]
console.log('Original array:', arrayNumbers)
console.log('First, third and last numbers of array: ', arrayNumbers[0], arrayNumbers[2], arrayNumbers[5])

arrayNumbers[0] = 2
arrayNumbers[2] = 6
arrayNumbers[4] = 10
console.log('New array:', arrayNumbers)

// other exercise

const myNameIsNathalia = true
const myNameIsTeresa = false

console.log(myNameIsNathalia)
console.log(myNameIsTeresa)

// last exercise

const otherName = 'Nathalia'
const otherAge = 29
console.log(typeof otherName)
console.log(typeof otherAge)