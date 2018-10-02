// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse (sentence){
    // Convert the string to an array
    var sentenceArr = sentence.split('')
    // reverse()	Reverses the order of the elements in an array
    var sentenceArrRev = sentenceArr.reverse()
    // convert the array back to string
    // join()	Joins all elements of an array into a string
    var sentenceReversed = sentenceArrRev.join('')
    return sentenceReversed
}
// console.log(reverse('books'))   //test

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord (sentence){
    // Convert the string to an array with each word as an element
    const sentenceArr = sentence.split(' ')
    // Create a new array with the length of each word
    var wordLengthArr = []
    var maxLength = 0
    // For each word in the sentence array, get the length of the word
    // Keep a record of the longest word and save as maxLength
    sentenceArr.forEach(function(currentWord){
        wordLengthArr.push(currentWord.length)
        if (currentWord.length>maxLength){
            maxLength = currentWord.length
        }
    })
    // return the word with an index that matches the maxLength index
    return sentenceArr[wordLengthArr.indexOf(maxLength)]
}
// console.log(findLongestWord('a book full of dogs')) // test

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

// filter()	Creates a new array with every element in an array that pass a test

function nicer (sentence){
    const forbiddenWords = ['heck', 'darn', 'dang', 'crappy']
    const sentenceArr = sentence.split(' ')
    var newSentenceArr = sentenceArr
    var newSentence = ''
    forbiddenWords.forEach(function(currForbWord){
        newSentenceArr = newSentenceArr.filter(function(currTestWord){
            if(currTestWord !== currForbWord){
                return currTestWord
            }
        })
    })
    newSentence = newSentenceArr.join(' ')
    return newSentence
}
// console.log(nicer('mom get the heck in here and bring me a darn sandwich.'))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll (sentence) {
    const sentenceArr = sentence.split(' ')
    var firstLetter = ''
    var firstLetterCaps = ''
    var newSentenceArr = []
    sentenceArr.forEach(function(currentWord){
        firstLetter = currentWord.charAt(0)
        firstLetterCaps = firstLetter.toUpperCase()
        newSentenceArr.push(currentWord.replace(firstLetter,firstLetterCaps)) // Only replaces first occurance
    })
    return newSentenceArr.join(' ')
}

// console.log(capitalizeAll('every day is like sunday!')) //test

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

// search()	Searches a string for a specified value,
// or regular expression, and returns the position of the match
// substring()	Extracts the characters from a string, between two specified indices


function split (sentence, delimiter) {
    var sentenceStr = sentence
    var sentenceArr = []
    var reg = new RegExp(delimiter,'g') // create a regexp of /delimiter/g
    if (sentence.match(delimiter)){
        var i = sentence.match(reg).length // count the number of delimiters in the sentence
        for(i;i>0;i--){
            sentenceArr.push(sentenceStr.slice(0,sentenceStr.search(delimiter)))
            sentenceStr = sentenceStr.slice(sentence.search(delimiter)+delimiter.length,sentenceStr.length)      
        }
        sentenceStr = sentenceStr.slice(delimiter.length-1,sentenceStr.length)
        sentenceArr.push(sentenceStr)
    } else {
        sentenceArr.push(sentence)
    }
    return sentenceArr
}

// console.log(split('a-b-c', '-'))
// console.log(split('APPLExxBANANAxxCHERRY', 'xx'))
// console.log(split('xyz', 'r'))
