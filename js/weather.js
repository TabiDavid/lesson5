

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}


function getUpdate(){
    var myday = new Date();
    var dayOfWeek = myday.getDay();
    var month = myday.getMonth();
    var dayOfMonth = myday.getDate();
    var year = myday.getFullYear();
    
var Months = ['January', 'Febrary', 'March', 'April', 'May', 'Jun', 'July',
'August', 'September', 'October', 'November', 'December'];
var weekdays = ['Sunday', 'Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    text = weekdays[dayOfWeek] + ", " + dayOfMonth + " " + Months[month] + " " + year;
    
    
    document.getElementById('outputDiv').innerHTML = text;
    }

    //here will see the pancake add//

function pancakeD(){
var dayOfWeek = new Date().getDay();
var weekdays = ['Sunday', 'Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

if(weekdays[dayOfWeek] == weekdays[5]){
document.getElementById("pancake").style.display = "flex";
}
else {
    document.getElementById("pancake").style.display = "none";
}

}


    
//document.getElementById("pancake").onload =
  //  function (){
//document.getElementById("pancake").style.display = "block"; 

  //  }