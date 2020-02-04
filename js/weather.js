

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}


function getUpdate(){
  
    var dayOfWeek = new Date().getDay();
    var month = new Date().getMonth();
    var dayOfMonth = new Date().getDate();
    var year = new Date().getFullYear();
    
var Months = ['January', 'Febrary', 'March', 'April', 'May', 'Jun', 'July',
'August', 'September', 'October', 'November', 'December'];
var weekdays = ['Sunday', 'Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    text = weekdays[dayOfWeek] + ", " + dayOfMonth + " " + Months[month] + " " + year;
    
    
    document.getElementById('outputDiv').innerHTML = text;
    }
