let array = [
    [-9, -9, -9,  1, 1, 1],
    [0, -9,  0,  4, 3, 2],
    [-9, -9, -9,  1, 2, 3],
    [0,  0,  8,  6, 6, 0],
    [0,  0,  0, -2, 0, 0],
    [0,  0,  1,  2, 4, 0]
];
let maxSum = -Infinity;

for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
        let sum = 0;
        sum = array[i][j] + array[i][j+1] + array[i][j+2] + array[i+1][j+1] + array[i+2][j] + array[i+2][j+1] + array[i+2][j+2];

        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    
}
console.log(maxSum);
// console.log(sum);

// console.log(sum);

// another way from chatgpt
/* 
let arr = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

let maxSum = -Infinity;

for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
        let sum =
            arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
            arr[i + 1][j + 1] +
            arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

        maxSum = Math.max(maxSum, sum);
    }
}

console.log(maxSum);

 */