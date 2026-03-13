 function playDiceGame(){
            // variable to hold our first roll of the die
            let roll1 = getRandomNumber();

            console.log("roll1 = ", roll1);

            // variable to hold our second roll of the die
            let roll2 = getRandomNumber();

            console.log("roll2 = ", roll2);

            // variable to hold the sum of our rolls 
            let rollSum = roll1 + roll2;

            console.log("rollSum=" + rollSum);

            // test for a win - duplicate even numbers = 2, 2 or 4, 4, 6, 6
            // % is modulus - the result when using modulus is the remainder
            // if you devide a number by 2 and there is no remainder, the number is even
            if (roll1 == roll2 && roll1 % 2 == 0){
                // update the message div with the good news that the round was a win
                document.getElementById("divMessage").textContent = "You Win!";
            }
            // if the user rolls a 7 or 11, they lost
            else if(rollSum == 7 || rollSum == 11){
                // update the message div with the good news that the round was lost
                document.getElementById("divMessage").textContent = "Sorry, you lose!";
            }
            // else is the catch all - if any other combination of dice roll happened
            // it was a tie
            else{
                //update the message div with the good news that the round was a tie
                document.getElementById("divMessage").textContent = "You tied!";
            }
        }

        // function will generate a random number between 1 and 6
        function getRandomNumber(){
            // get a random number between 0 and 1 and multiply by 6
            let number = Math.random() * 6;
            
            //this will round our number up, so we get a number between 1 and 6
            number = Math.floor(number) +1;

            // returing / passing back the random number
            return number;
        }

        // functions from strings.html

         // this function will validate the user input based on the requirement of the client (assignment requirement)
        function validate(){
            // first name variable
            let firstName = document.getElementById("txtFirstName").value;

            // show the first name in the console
            console.log("firstName=" + firstName);

            // last name variable
            let lastName = document.getElementById("txtLastName").value;

            // show the last name in the console
            console.log("lastName=" + lastName);

            // Zip code variable
            let zip = document.getElementById("txtZip").value;

            // show the sip in the console
            console.log("zip=" + zip);

            // create a varibale to hold the first name + " " + last name
            let fullName = firstName + " " + lastName;

            console.log("fullName=" + fullName);

            // create a variable to hold the message we will show to the user
            let message = "";

            // we need to make sure the full name does not exceed 20 characters
            if (fullName.length == 1 || fullName.length > 20){
                message = "Please enter a name that is less than 20 characters.";
            }
            // the zip code can only have 5 characters
            else if (zip.length != 5){
                message = "Please enter a 5 digit zip code.";
            }
            // otherwise, the user has entered everything correctly, and they get message
            else{
                message = "Thank you for your submittion!"
            }

            console.log("message=" + message);

            //display the message on the associate div
            document.getElementById("divMessage").textContent = message;
        }



        // the code to move the image around

        // create a variable to track the current interval id (returned from the setInterval function)
    let intervalId = 0;

    // create the function to move the image
    function startImageMove(){
        // we are creating a variable that is a shortcut/nickname for our HTML image
        let bikeImage = document.getElementById("bikeImage");

        // setInterval allows us to repeatedly run code
        // function(){} is an anonymous function - a way to run a chunk of code 1 time as a function argument
        intervalId = setInterval(function(){
            let topCord = getRandomPixel();
            let leftCord = getRandomPixel();

            bikeImage.style.left = leftCord + "px";
            bikeImage.style.top = topCord + "px";

        }, 1000); // 1000 miliseconds = 1 second

        // enable the stop button == can click on stop button
        document.getElementById("btnStop").disabled = false;

        // disable the start button == cannot click on start button
        document.getElementById("btnStart").disabled = true;
    }

    // creat the function that stops the image from moving
    function stopImageMove(){
        // call a built in JavaScript function that stops the setInterval from running
        clearInterval(intervalId);

        // disable the stop button == cannot click on stop button
        document.getElementById("btnStop").disabled = true;

        // enable the start button == can click on start button
        document.getElementById("btnStart").disabled = false;
    }

    // build a funtion to get a random number
    function getRandomPixel(){
        // im picking 800 as the max number - adjust accordingly based on your screen size
        return Math.floor(Math.random() * 800);
    }

// code for palidrome
 // create the checkPalin function
        function checkPalin(event){
            // prevent the form from submitting (so the page does not refresh)
            event.preventDefault();

            // creat a variable to store the word that the user entered
            let wordToTest = document.getElementById("txtWord").value;

            console.log("wordToTest=" + wordToTest);

            // call the function to test it
            // TODO: print out the result to the user
            let bPalin = isPalin(wordToTest);

            // create a shortcut to the message div
            let divMessage = document.getElementById("divMessage");

            // create a message for the user base on the value of bPalin
            if(bPalin){  // if(bPalin) is equivalent to if (bPalin == true)
                // show the user a message
                divMessage.textContent = "The phrase is a palindrome!"
            }
            else{
                divMessage.textContent = "The phrase is NOT a palindrome!"
            }
        }

        // create a function to test to see if a string is the same backwards and forwards
        function isPalin(strToTest){
            // i want to conver the string to all lowercase so that it is a more fair compairison
            strToTest = strToTest.toLowerCase();

            console.log("strToTest=" + strToTest);

            // create a new variable so can keep the original string for testing
            let strReverse = strToTest;

            // convert the reverse string to an array, we will reverse the contents 
            // so test would become test and then convert the array back to string
            strReverse = strReverse.split("").reverse().join("");

            console.log("strReverse=" + strReverse); 

            // compare the original string with the reversed string
            // if they match, this function will return true. otherwise it will return false
            if (strReverse == strToTest){
                return true;
            }
            // else{ return false }
            
                // if we get to this line, it must not have been a palindrome, so return false
                return false;
            
        }
