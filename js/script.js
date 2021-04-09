 var maleAkan = ["kwasi", "kwado", "kwabena", "kwaku", "Yaw", "Kofi", "Kwame"];

 var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

 var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 function getAkanName() {

    
    var MM = parseInt(document.getElementById("month")).value;
    var DD = parseInt(document.getElementById("day")).value;
    var year = parseInt(document.getElementById("year")).value;
    var dayBorn=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
console.log(dayBorn);

 }
 
 
 
 
 