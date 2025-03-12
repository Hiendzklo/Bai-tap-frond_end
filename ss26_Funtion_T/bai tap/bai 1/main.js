function filterArray(input) {
    if (Array.isArray(input) && input.every(item => typeof item === 'number')) {
        let result = input.filter(num => num >= 10);
        
        console.log(result);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}

filterArray([1, 22, 10, 9, 8]);  
filterArray(["abc"]);             
filterArray([5, 7, 10, 12]);      
function filterArray(input) {
    if (Array.isArray(input) && input.every(item => typeof item === 'number')) {
        let result = input.filter(num => num >= 10);
        
        console.log(result);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}

filterArray([1, 22, 10, 9, 8]); 
filterArray(["abc"]);            
filterArray([5, 7, 10, 12]);      
