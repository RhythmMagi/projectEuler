// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

var end = 600851475143;
var i = 2;

while(end > i){
    if(end % i === 0){
        // Divide endlessly until it can't
        end = end / i;
    }
    i++;
}
console.log(end);

