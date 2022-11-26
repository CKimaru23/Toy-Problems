// our function

// declaring our variable and initializing it to integer 0
let points=0;

// start of our function
function message(){
    let speed = prompt("Please enter the speed of your car: "); //user prompt

    
// If speed is not null
    if (speed!=null){
        //If speed is greater than 70
        if(speed>=70){
            sp=parseInt(speed-70)/5; //calculating the speed above 70 for every 5km/s and parsing it as int
            sp=Math.floor(sp); //getting a whole number by rounding down

            //if the points are above 12 for this journey
            if(sp>=12){
                points=points+sp;
                document.getElementById("points").innerHTML = "You have " + sp + " demerit points in this journey."; //Output
                document.getElementById("speed").innerHTML = "License Suspended."; //Output
                
                
            }
            // if points are less than 12 in this journey
            else{
                points=points+sp;
                document.getElementById("speed").innerHTML = "You have " + sp + " demerit points in this journey."; //Output
                
               
            }

        }
        //if speed is less than 70km\s
        else{
            document.getElementById("speed").innerHTML = "Ok."; //Output
            

            
        }

    }
    else{
        document.getElementById("speed").innerHTML = "Ok"; //Output
    }
    if(points>=12){
        //Outputs
        document.getElementById("speed").innerHTML = "License Suspended.";
        document.getElementById("points").innerHTML = "You have " + points + " demerit points so far.";
    }
// If speed is null
    else{
        document.getElementById("points").innerHTML = "You have " + points + " demerit points so far."; //Output
    }
}
