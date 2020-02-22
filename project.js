
//Create Display for Wins and Losses 
//Create Random Score Generator
//Create counter 
    var wins = 0;
    var losses = 0;
    var randomNumber = Math.floor(19+ Math.random() * 101);
    var playerScore = 0;
    
    function rngJesus(){
    var randomCharm = Math.floor(1 + Math.random()* charms.length);
          $("#image-1").prepend(`img src = ${charms}`);
    };
            
            $("#randomNumberBox").text("Randomly Generated Number: " + randomNumber);
            $("#winCount").text("Wins: " + wins);
            $("#lossCount").text("Losses: " + losses);
            $("#playScore").text("Your Score: " + playerScore);

    //Buttons with Randomized Values
    var butOne = Math.floor(1 + Math.random()*11);
    var butTwo = Math.floor(1 + Math.random()*11);
    var butThree = Math.floor(1 + Math.random()*11);
    var butFour = Math.floor(1 + Math.random()*11);



//Button 1
    $('#button-1').on ('click', function(){
    playerScore = playerScore + butOne;
    
    $('#playScore').text("Your Score: " + playerScore); 

    if (playerScore === randomNumber ){
          win();
          reset();
        }
        else if (playerScore > randomNumber){
          lose();
          reset();
          
        }   
    })

//Button 2
    $('#button-2').on ('click', function(){
    playerScore = playerScore + butTwo;
    
    $('#playScore').text("Your Score: " + playerScore); 

    if (playerScore == randomNumber ){
          win();
          reset();
          
        }
        else if (playerScore > randomNumber){
          lose();
          reset();
          
        }   
    })

//Button 3
    $('#button-3').on ('click', function(){
    playerScore = playerScore + butThree;
    
    $('#playScore').text("Your Score: " + playerScore); 

    if (playerScore == randomNumber ){
          win();
          reset();
        }
        else if (playerScore > randomNumber){
          lose();
          reset();
        }   
    })

//Button 4
    $('#button-4').on ('click', function(){
    playerScore = playerScore + butFour;
    
    $('#playScore').text("Your Score: " + playerScore); 

    if (playerScore == randomNumber ){
          win();
          reset();
        }
        else if (playerScore > randomNumber){
          lose();
          reset();
        }   
    })
   
   

    
//Create Reset Function
    function reset(){
     butOne = Math.floor(1 + Math.random()*11);
     butTwo = Math.floor(1 + Math.random()*11);
     butThree = Math.floor(1 + Math.random()*11);
     butFour = Math.floor(1 + Math.random()*11);
     playerScore = 0;
    };
    
    function win(){
       
            wins++;
            $("#winCount").text("Wins: "+wins);
            reset();
            
        };
    
    function lose(){
        
            losses++;
            $("#lossCount").text("Losses: "+losses);
            reset()
    }





    //Charms per Justin's Request 
    
function showCharm(){

};
