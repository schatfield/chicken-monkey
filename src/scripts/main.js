// Write a program that prints the numbers from 1 to 100. 
//for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number 

// We need to use the " % " in this exercise to find multiples of numbers- the "%" is called the remainder operator. The remainder operator returns the remainder left over when one # is divided by a second #. In this case we are looking for multiples of 5, 7 and numbers that are both multiles of 5 and 7 through 1-100. //




for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

    //  block of code to be executed if currentNumber is true:

    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("Chicken Monkey")

        // check if any #s are multiples of 5 AND 7. Will display 35 and 70 as "Chicken Monkey"//

        // This "if" statement must be put before the others because of how the "for" loop will run each conditional statement. It will run the "if" statement to see if anything in it is true before running the "else if" statements in comparison. Therefore, the thing here to notice is that if we put either of the other conditonal statements in place first as the "if", they wouldn't label what we're looking for correctly because the loop would have found things in the other conditonal statements to be true FIRST (the other statements would have found numbers that are multiples of 5 OR 7 before checking to see if any number are multiples of BOTH 5 AND 7. Since both of the other statements would have founf things that were true (the "if", are there #s that are multiples of 5?...and the first "else if", are there numbers that are multiples of 7?), the other "else if" would never even be checked? confirm this//

     } else if (currentNumber % 5 === 0) {
            console.log("Chicken")
        // check if any numbers are multiples of 5 (will display 5, 10, 15, etc as "Chicken")//

        } else if (currentNumber % 7 === 0) {
            console.log("Monkey")
            // check if any numbers are multiples of 7 (will display 7, 14, 21, etc as "Monkey")//

        } else {
            console.log(currentNumber)
            // the "else" statement here is saying that if any of these numbers is not a multiple of 5 or 7 or 5 and 7 to just log the number itself with no message//
        }


    }
