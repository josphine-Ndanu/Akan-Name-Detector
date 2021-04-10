 var CC, MM, DD, YY, year, finalDay;

 function getInput() {



     MM = parseInt(document.getElementById("month").value);
     DD = parseInt(document.getElementById("day").value);
     year = document.getElementById("year").value;
     CC = year.substring(0, 2);
     YY = year.substring(2, 4);

     var day = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

     finalDay = (Math.floor(day));




     console.log(finalday)
 }


 var maleAkan = ["kwasi", "kwado", "kwabena", "kwaku", "Yaw", "Kofi", "Kwame"];

 var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

 var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];