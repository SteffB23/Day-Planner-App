//Grab HTML Elements
const TimeBlocksList = document.getElementById("TimeBlocksList");
const CurrentDateP = document.getElementById("CurrentDateP");

//Get Current Time and display it every second
function GetTime() {
    var CurrentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    CurrentDateP.innerHTML = CurrentDate;
    CurrentDateP.innerHTML = "Current date: " + CurrentDate;
}
setInterval(GetTime, 1000);

// Timeblocks
let timeblocks = [
    "9 am",
    "10 am",
    "11 am",
    "12 pm",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
    "6 pm",
    "7 pm",
    "8 pm",
    "9 pm"
]