function filterStrings(input) {
    if (Array.isArray(input) && input.every(item => typeof item === 'string')) {
        let result = input.filter(str => str.length > 5);
        
        console.log(result);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}

filterStrings(["apple", "banana", "cat", "elephant", "dog"]); 
filterStrings([]);                                              
filterStrings(["abc"]);                                
