function sortAndFilterEvenNumbers(input) {
    if (Array.isArray(input) && input.every(item => typeof item === 'number')) {
        let sortedArray = input.sort((a, b) => a - b);

        let result = sortedArray.filter(num => num % 2 === 0);

        console.log(result);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}

sortAndFilterEvenNumbers([2, 5, 10]); 
sortAndFilterEvenNumbers([]);           
sortAndFilterEvenNumbers(["abc"]);     






