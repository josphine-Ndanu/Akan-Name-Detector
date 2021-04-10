 var CC, MM, DD, YY, year, finalDay;

 function getInput() {



     MM = parseInt(document.getElementById("month").value);
     DD = parseInt(document.getElementById("day").value);
     year = document.getElementById("year").value;
     CC = year.substring(0, 2);
     YY = year.substring(2, 4);

     var day = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

     finalDay = (Math.floor(day));

     console.log(finalDay)
 }

 var maleAkan = ["kwasi", "kwado", "kwabena", "kwaku", "Yaw", "Kofi", "Kwame"];

 var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

 var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 //checked radio button
 function verifyGender() {


     var gender = document.getElementsByName("gender")
     if (gender[0].checked == true) {
         var gender = "male"

     } else if (gender[1].checked == true) {
         var gender = "female"

     } else {
         console.log("checked")
     }

     switch (gender) {
         case gender = "male":
             if (finalDay = 0) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[0] + " and your Akan name is " + maleAkan[0]
             } else if (finalDay = 1) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[1] + " and your Akan name is " + maleAkan[1]
             } else if (finalDay = 2) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[2] + " and your Akan name is " + maleAkan[2]
             } else if (finalDay = 3) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[3] + " and your Akan name is " + maleAkan[3]
             } else if (finalDay = 4) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[4] + " and your Akan name is " + maleAkan[4]
             } else if (finalDay = 5) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[5] + " and your Akan name is " + maleAkan[5]
             } else if (finalDay = 6) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[6] + " and your Akan name is " + maleAkan[6]
             } else {
                 document.getElementById("output").imnerHTML = "try again"
             }

             break;
         case gender = "female":
             if (finalDay = 0) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[0] + " and your Akan name is " + femaleAkan[0]
             } else if (finalDay = 1) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[1] + " and your Akan name is " + femaleAkan[1]
             } else if (finalDay = 2) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[2] + " and your Akan name is " + femaleAkan[2]
             } else if (finalDay = 3) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[3] + " and your Akan name is " + femaleAkan[3]
             } else if (finalDay = 4) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[4] + " and your Akan name is " + femaleAkan[4]
             } else if (finalDay = 5) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[5] + " and your Akan name is " + femaleAkan[5]
             } else if (finalDay = 6) {
                 document.getElementById("output").innerHTML =
                     "You were born on " + daysOfWeek[6] + " and your Akan name is " + femaleAkan[6]
             } else {
                 document.getElementById("output").imnerHTML = "try again"
             }

     }
 }

 function getAkanName(){

 }