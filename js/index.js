var num = prompt("Enter value of n");
var err;
var fibonacci = function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

if(num <= 0) {
    err = 'Error';
} else {
    document.writeln('Fibonacci for num '+ num +': '+ fibonacci(num));
}

if(err) {
    document.write(err);
}