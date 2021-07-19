let input = 'This variable will contains whale talk.'

const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = []
console.log(input.length)
for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
        if (input[i] == vowels[j]) {
            resultArray.push(input[i]);
        }
    }
    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
    }
}

console.log(resultArray.join('').toUpperCase());