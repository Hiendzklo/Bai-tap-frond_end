function convertDateFormat(input) {
    if (Array.isArray(input) && input.every(item => typeof item === 'string')) {
        let result = input.map(date => {
            let [year, month, day] = date.split("-");
            return `${day}/${month}/${year}`;
        });

        console.log(result);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}

convertDateFormat(["2025-03-10", "2024-12-25", "2023-07-01"]);  
convertDateFormat([]);  
convertDateFormat(["abc"]); 
