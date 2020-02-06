function FizzBuzz() {

        var maxNumberText = prompt("Choose a number");
        var maxNumber = parseInt(maxNumberText);
        var result = document.getElementById("sequence");

        var sequence = "";
        for (var i = 1; i < maxNumber; i++) {

                if (i % 15 == 0) {
                        sequence += "FizzBuzz ";
                }
                else if (i % 3 == 0) {
                        sequence += "Fizz ";
                } else if (i % 5 == 0) {
                        sequence +=  "Buzz ";
                } else {
                        sequence +=   i + " ";
                }
        }
        result.innerHTML =  sequence;
}