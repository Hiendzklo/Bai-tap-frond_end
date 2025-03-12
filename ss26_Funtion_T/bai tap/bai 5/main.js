function findMaxAndPosition(input) {
    if (Array.isArray(input) && input.every(item => typeof item === 'number')) {
        let max = Math.max(...input);
        
        let position = input.indexOf(max);
        
        console.log(`max = ${max}`);
        console.log(`position = ${position}`);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}

findMaxAndPosition([10, 9, 5, 11, 24, 5]);  
findMaxAndPosition([]);                      
findMaxAndPosition(["abc"]);                
