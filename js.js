// // Bài 1
function calculateSquare(number) {
    return number * number;
}
console.log(calculateSquare(5));

// Bài 2
function calculateCircleArea(R) {
    return R ** 2 * Math.PI;
}
console.log(calculateCircleArea(5).toFixed(2));

function calculateCircleCircumference(R) {
    return R * 2 * Math.PI;
}
console.log(calculateCircleCircumference(5).toFixed(2));

// Bài 3

function calculateFactorial(number) {
    if (number <= 1) return 1
    // let factorial = 1;
    // for (let i = 1; i <= number; i++) {
    //     factorial *= i;
    // }
    // return factorial;
    return number * calculateFactorial(number - 1);
}
console.log(calculateFactorial(5));

// Bài 4
function isNumber (character) {
    return character == +character;
}
console.log(isNumber("2"));

// Bài 5
function findMin (a, b, c) {
    if (a < b && a < c) return a;
    else if (b < c) return b;
    else return c
    // return Math.min(n1, n2, n3);
}
console.log(findMin(10,5,15));

// Bài 6
function isPositiveInteger (number) {
    return number > 0;
}
console.log(isPositiveInteger(1));

// Bài 7
function swapPosition (a, b) {
    let c = a;
    a = b;
    b = c;
    return [a, b].join();
}
console.log(swapPosition(1, 9));

// Bài 8
function reverseArray (array) {
    // return array.reverse();
    let first = 0;
    let last = array.length - 1;
    while (first < last) {
        let temp = array[first];
        array[first] = array[last];
        array[last] = temp;
        first++;
        last--;
    }
    return array;
}
console.log(reverseArray([6,4,5,9,2,7,3]));

// Bài 9
function isInTheArray (array, character) {
    let count = 0;
    // let index = array.indexOf(character);
    // if (character != array[index]) return -1;
    // for (let i = 0; i < array.length; i++) {
    //     if (character == array[i]) count++;
    // }
    // return `Số lần xuất hiện của ký tự là: ${count}`;
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if (character === array[i]) {
            count++;
            index = i;
        }
    }
    if (index > -1) return count;
    else return -1;
}
console.log(isInTheArray(['c', 'o', 'd', 'e', 'g', 'y', 'm', '.', 'v', 'n'], 'c'));