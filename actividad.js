function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

var fs = require('fs');

fs.readFile('number.txt', 'utf8', function(err, data) {
    console.log(data);
});

a = fibonacci(3);
//console.log(a);