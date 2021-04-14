 var birthDay, date, dayOfBirth;

 function getInput() {


     birthDay = document.getElementById("yob").value;
     date = new Date(birthDay);
     dayOfBirth = date.getDay();
     var dateFormat = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
     console.log(dayOfBirth)
     if (birthDay == " " || !(birthDay.match(dateFormat))) {
         alert("Provide a valid date!!");

     }

 }
 //  MM = parseInt(document.getElementById("month").value);
 //  DD = parseInt(document.getElementById("day").value);
 //  year = document.getElementById("year").value;
 //  CC = year.substring(0, 2);
 //  YY = year.substring(2, 4);


 //  if (DD == " " || MM == " " || year == " ") {
 //      alert("Fill all the fields ")
 //  } else if (DD <= 0 || DD > 31) {
 //      alert("Invalid date")
 //  } else if (MM <= 0 || MM > 12) {
 //      alert("Invalid month")
 //  } else if (MM <= 0 || MM > 12) {
 //      alert("Invalid month")
 //  } else {
 //      console.log("Correct input") //test 
 //  }


 //  var day = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7 - 1;

 //  finalDay = (Math.floor(day));

 //  console.log(finalDay)


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

     } else if (!(gender[0].checked || gender[1].checked)) {
         alert("You must pick a gender")
     } else {
         console.log("checked")
     }



     switch (gender) {
         case gender = "male":
             if (dayOfBirth == 0) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[0] + " and your Akan name is " + maleAkan[0]
             } else if (dayOfBirth == 1) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[1] + " and your Akan name is " + maleAkan[1]
             } else if (dayOfBirth == 2) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[2] + " and your Akan name is " + maleAkan[2]
             } else if (dayOfBirth == 3) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[3] + " and your Akan name is " + maleAkan[3]
             } else if (dayOfBirth == 4) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[4] + " and your Akan name is " + maleAkan[4]
             } else if (dayOfBirth == 5) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[5] + " and your Akan name is " + maleAkan[5]
             } else if (dayOfBirth == 6) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[6] + " and your Akan name is " + maleAkan[6]
             } else {
                 document.getElementById("output").imnerHTML = "try again"
             }

             break;
         case gender = "female":
             if (dayOfBirth == 0) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[0] + " and your Akan name is " + femaleAkan[0]
             } else if (dayOfBirth == 1) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[1] + " and your Akan name is " + femaleAkan[1]
             } else if (dayOfBirth == 2) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[2] + " and your Akan name is " + femaleAkan[2]
             } else if (dayOfBirth == 3) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[3] + " and your Akan name is " + femaleAkan[3]
             } else if (dayOfBirth == 4) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[4] + " and your Akan name is " + femaleAkan[4]
             } else if (dayOfBirth == 5) {
                 document.getElementById("output").innerHTML =
                     "Hello, " + document.getElementById("name").value + " You were born on " + daysOfWeek[5] + " and your Akan name is " + femaleAkan[5]
             } else if (dayOfBirth == 6) {
                 document.getElementById("output").innerHTML =
                     "Hello " + document.getElementById("name").value + " You were born on " + daysOfWeek[6] + " and your Akan name is " + femaleAkan[6]
             } else {
                 document.getElementById("output").imnerHTML = "try again"
             }

     }

     var form = document.getElementById("myForm");

     function handleForm(event) {
         event.preventDefault();
     }
     form.addEventListener('submit', handleForm);


 }

 function getAkanName() {
     var dayBorn = getInput();
     verifyGender();
     console.log("great");
     console.log(dayBorn);
 }

 function reload() {
     var y = document.getElementById("output");
     y.style.output = "none";

     location.reload();
 }