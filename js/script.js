 var maleAkan = ["kwasi", "kwado", "kwabena", "kwaku", "Yaw", "Kofi", "Kwame"];

 var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

 var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 function getAkanName() {

     var MM = parseInt(document.getElementById("month")).value;
     var DD = parseInt(document.getElementById("day")).value;
     var year = document.getElementById("year").value;
     var CC = parseInt(year.substring(0, 2));
     var YY = parseInt(year.substring(2, 4));

     var d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
     return d;


     function genderAkan() {
        
         switch (gender) {
             case "male":
                 if (d == 1) {
                     alert("You were born on " + dayNames[0] + " and Your akan name is " + maleAkan[0] + "!");
                 } else if (d == 2) {
                     alert("You were born on " + dayNames[1] + " and Your akan name is " + maleAkan[1] + "!");
                 } else if (d == 3) {
                     alert("You were born on " + dayNames[2] + " and Your akan name is " + maleAkan[2] + "!");
                 } else if (d == 4) {
                     alert("You were born on " + dayNames[3] + " and Your akan name is " + maleAkan[3] + "!");
                 } else if (d == 5) {
                     alert("You were born on " + dayNames[4] + " and Your akan name is " + maleAkan[4] + "!");
                 } else if (d == 6) {
                     alert("You were born on " + dayNames[5] + " and Your akan name is " + maleAkan[5] + "!");
                 } else if (d == -0) {
                     alert("You were born on " + dayNames[6] + " and Your akan name is " + maleAkan[6] + "!");
                 }
                 break;
             case "female":
                 if (d == 1) {
                     alert("You were born on " + dayNames[0] + " and Your akan name is  " + femaleNames[0] + "!");
                 } else if (d == 2) {
                     alert("You were born on " + dayNames[1] + " and Your akan name is " + femaleNames[1] + "!");
                 } else if (d == 3) {
                     alert("You were born on " + dayNames[2] + " and Your akan name is " + femaleNames[2] + "!");
                 } else if (d == 4) {
                     alert("You were born on " + dayNames[3] + " and Your akan name is " + femaleNames[3] + "!");
                 } else if (d == 5) {
                     alert("You were born on " + dayNames[4] + " and Your akan name is " + femaleNames[4] + "!");
                 } else if (d == 6) {
                     alert("You were born on " + dayNames[5] + " and Your akan name is " + femaleNames[5] + "!");
                 } else if (d == -0) {
                     alert("You were born on " + dayNames[6] + " and Your akan name is " + femaleNames[6] + "!");
                 }
                 break
             default:

         }
     }

 }