// calculate the difference
function calculateDiff(diffMilliseconds) {
  // calculate differences
 var diffSeconds = diffMilliseconds / 1000;
 var diffMinutes = diffSeconds / 60;
 var diffHours = diffMinutes / 60;
 var diffDays = diffHours / 24;
  // calculate the year,month,days
 var years = Math.floor(diffDays / 365);
 var months = Math.floor((diffDays % 365) / 30);
 var days = Math.floor((diffDays % 365) % 30);

  return [years, months, days];
}

  var calculedYears, calculedMonths, calculedDays;

  

// function to calculate age
function changeValuesDates(year, month, day) {
  $("#yearValue").text(year);

  $("#monthValue").text(month);
  
  $("#dayValue").text(day);
  // retrieving the day
 var day = Number($("#day").val());
  // retrieving the month
 var month = Number($("#month").val());
  // retrieving the year
 var year = Number($("#year").val());
function calculateAge() {
 
  // check if valid date
  var inputtedDate = new Date(year, month, day);
  var currentDate = new Date();
  // check if valid date
  if (inputtedDate.getTime() < currentDate.getTime()) {
   var diffMilliseconds = currentDate - inputtedDate;
    calculateDiff(diffMilliseconds) = [calculedYears, calculedMonths, calculedDays] ;
    changeValuesDates(calculedYears, calculedMonths, calculedDays);
  }else{
    changeValuesDates("--","--","--");
  }
}}
$("#calculate").click(calculateAge);

var x= new Date()
var s=x.getMonth()
var z=x.getDate()

function nextBirthday(){
  var t=0
  if(month < s){
     t= (month+ 12) - s
  }
  else if( month >=s){
    t= month - s
  }
  nextBirthday(t)
}

$("Your Next Birthday").click(nextBirthday);


