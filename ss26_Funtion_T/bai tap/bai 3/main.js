function filterEmails(input) {
    if (Array.isArray(input) && input.every(item => typeof item === 'string')) {
        let result = input.filter(email => email.includes("@") && !email.includes(" "));
        
        console.log(result);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}

filterEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]);  
filterEmails([]);                                                                                 
filterEmails(["abc"]);                                                                             
