function ArrayQueries(n, queries) {
    let lastAnswer = 0;
    let result = [];
    let output = [];
    
    for (let j = 0; j < n; j++) {
        output.push([]);
        
    }
    
    
    for (let index = 0; index < queries.length; index++) {
        let element = queries[index][0]; 
        // query value of row [index(it is incrementing bcos of the for loop) = 0] col[0] = 1,1,1,2,2
        let element1 = queries[index][1];
        // x value of row [index(it is incrementing bcos of the for loop) = 0] col[1] = 0,1,0,1,1
        let element2 = queries[index][2]; 
        // y value of row [index(it is incrementing bcos of the for loop) = 0] col[2] = 5,7,3,0,1

        // console.log(element, element1, element2);
        
        if (element === 1) { // checking if our query value is equals to 1
            let index = (element1 ^ lastAnswer) % n; // e.g (0 ^ 0) % 2 = 0
            output[index].push(element2); // push the value of y to the output[index = 0] = [[5,3], [7]]
            // console.log(index); 
        } else if (element === 2) { // checking if our query value is equals to 2
            let indexValue = (element1 ^ lastAnswer) % n; 
            // e.g (1 ^ 0) % 2 = 1

            let size = output[indexValue].length; 
            // getting the size of output[index].length, [5,3] which the length = 2

            let value = output[indexValue][element2 % size]; 
            // output[1][0] = 7

            result.push(value); 
            // it pushes the value of 7 to an empty array

            lastAnswer = value; 
            // sets the new value of lastAnswer to 7 and then it loops over again

            // console.log(lastAnswer);
            
        }
    }
    
    // console.log(output);
    /* result.forEach(element => {
        console.log(element);
        // logs the values of the result
    }) */
   console.log(output);
    
}

let queries = [
  [1, 0, 5],
  [1, 1, 7],  
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],  
]
ArrayQueries(2, queries);
