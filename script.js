function reverseArray(a) {
    let newArray = [];
    let number = 0
    for (let index = a.length - 1; index >= 0; index--) {

        const element = a[index];
        newArray[number] = element;
        number++;
        // newArray.push(element);
    }
    a = newArray

    /* for (let index = 0; index < a.length; index++) {
        const element = a[index];
        newArray[index] = element;
        
    } */
    console.log(a);
}
reverseArray([1,4,3,2])