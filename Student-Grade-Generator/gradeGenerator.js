//Our function called studentMarks
function studentMarks(){

    //prompting the person to input student's marks
    let marks = prompt("Please enter the student\'s Marks");

    // If the user doesn't input a null value
    if (marks != null){

        // If the marks is 0 and above but less than 101
        if (marks>0 && marks<=100){

            // if the marks is greater than 79
            if(marks>79){

                // Outputs the grade on our page
                document.getElementById("grade").innerHTML = "You have grade: A!";
            }

            // If the marks is 60 and above but less than 80
            else if(marks>=60 && marks<=79){
                // Outputs the grade on our page
                document.getElementById("grade").innerHTML = "You have grade: B!";
            }
            // If the marks is greater than 49 but less than or equal to 59
            else if(marks>49 && marks<=59){
                // Outputs the grade on our page
                document.getElementById("grade").innerHTML = "You have grade: C!";
            }
            // If the marks is greater than or equal to 40 but less than or equal to 49
            else if(marks>=40 && marks<=49){
                // Outputs the grade on our page
                document.getElementById("grade").innerHTML = "You have grade: D!";
            }
            // If the marks is not within the range
            else{ 
                // Outputs the grade E
                document.getElementById("grade").innerHTML = "You have grade: E";
            }
        }
        // If the marks is not within the given range
        else{
            // Outputs the grade on our page and asks the user to enter valid marks
            document.getElementById("grade").innerHTML = "Please enter valid marks. Click the button to re-enter the marks";
        }
    }  
    // If the user doesn't input anything it asks them to enter the marks
    else{
        document.getElementById("grade").innerHTML = "You have to enter the student\'s marks. Click the button to re-enter the marks"
        
    }
}

