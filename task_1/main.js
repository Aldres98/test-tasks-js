
function sortArray(array) {
    let evenNumbers = array.filter(x => x % 2).sort((a, b) => b-a);
    let oddNumbers = array.filter(x => !(x%2)).sort((a,b) => a-b);
    return array.map((current) => current % 2 !== 0 ? evenNumbers.shift() : oddNumbers.shift())
}

// 0 Принимается четным

arr1 = [1, 8, 3, 4, 5, 6, 17, 21, 38, 92];
arr2 = [1, 2, 7, 5, 6, 8, 4];
arr3 = [1, 3, 7, 5, 11, 9, 21, 8, 10, 0];

console.log(sortArray(arr1));
console.log(sortArray(arr2));
console.log(sortArray(arr3));