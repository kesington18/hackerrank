let n = 5;   // size of array
let queries = [
  [1, 2, 100],   // from index 1 to 2, add 100
  [2, 5, 100],   // from index 2 to 5, add 100
  [3, 4, 100]    // from index 3 to 4, add 100
]

function arr(n, queries) {
    let result = [];
    let addNumber = 0;

    for (let index = 0; index <= n; index++) {
        result.push(0)
        
    }
    
    for (let i = 0; i < queries.length; i++) {
        const [a, b, k] = queries[i];
        result[a - 1] += k;
        result[b] -= k;
    }

    let max = 0 ;
    let sum = 0

    for (let index = 0; index < n; index++) {
        sum += result[index];
        if (sum > max) {
            max = sum;
        }
        
    }

    return max;
    
    
}

arr(n, queries)