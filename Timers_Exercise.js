/*
Write a function called countdown that accepts a number as a parameter and 
every 1000 milliseconds decrements the value and console.logs it. Once the 
value is 0 it should log “DONE!” and stop.
*/



function repeatLog(num){
  function printer(){
    num--;
    
    console.log(num);
    if(num <= 0){
        clearInterval(theInt);
        console.log("DONE!");
    }
  }
  
  let theInt = setInterval(printer, 1000);
  
  
}
//repeatLog(5);


/*
Write a function called randomGame that selects a random number between 0 and 1 
every 1000 milliseconds and each time that a random number is picked, add 1 to a 
counter. If the number is greater than .75, stop the timer and console.log the 
number of tries it took before we found a number greater than .75.
*/

function randomGame(){
    let counter = 0;
    let theInt = setInterval(function ()
    {
        let selected = Math.random();
        counter++;
        console.log(counter+": "+selected);        
        if(selected > .75){
            if(counter > 1){
              console.log(`It took ${counter} tries!`);   
            }
            else{
              console.log(`It took ${counter} try! What are the odds!?!?`);
            }
            
            clearInterval(theInt);
        }
    }, 1000);
    
  
}
randomGame();