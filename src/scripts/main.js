// Write a program that prints the numbers from 1 to 100. 
//for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number 





    for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
                   
//  block of code to be executed if currentNumber is true:

    if (currentNumber % 5 === 0) {
        console.log("Chicken")

    } else if (currentNumber % 7 === 0) {
        console.log("Monkey") 
        
    } else if (currentNumber % 5 === 0 && currentNumber & 7 === 0){
        console.log("chicken monkey")

      } else {
          console.log(currentNumber)
      }


    }
