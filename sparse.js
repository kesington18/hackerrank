function sparseArray(stringList, queries) {
    let resultNumber = [];
    
    for (let i = 0; i < queries.length; i++) {
        let numberIncrement = 0;
        for (let j = 0; j < stringList.length; j++) {
            if (queries[i] === stringList[j]) {
                numberIncrement += 1;
            }
        }
        resultNumber.push(numberIncrement)
    
    }

    console.log(resultNumber);
    
}

let stringList = ["aba","baba","aba","xzxb"];
let query = ["aba","xzxb","ab"];

sparseArray(stringList, query)

