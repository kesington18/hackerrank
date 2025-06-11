let n = 5;   // size of array
let queries = [
  [1, 2, 100],   // from index 1 to 2, add 100
  [2, 5, 100],   // from index 2 to 5, add 100
  [3, 4, 100]    // from index 3 to 4, add 100
]

function arr(n, queries) {
    let result = [];
    let addNumber = 0;

    for (let index = 1; index <= n; index++) {
        result.push(0)
        
    }
    console.log(result);

    for (let i = 0; i < queries.length; i++) {
        const element = queries[i][0];
        const element1 = queries[i][1];
        const element2 = queries[i][2];

        for (let index = element; index <= element1; index++) {
            result[index - 1] += element2;
        }

            // console.log(element,element1, element2);
    }
    console.log(result);
}

arr(n, queries)