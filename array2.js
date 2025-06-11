function rotateLeft(d, arr) {
   /*  for (let i = 0; i < d; i++) {
        let remove = arr.shift();
        arr.push(remove)

        console.log(arr);
        
        
    } */

    // console.log(arr);

    // or by my mentor
    
    let n = arr.length;
    let combined = [...arr, ...arr]
    let result = combined.slice(d, d+n)
    console.log(result);
    
}

rotateLeft(4, [1,2,3,4,5])