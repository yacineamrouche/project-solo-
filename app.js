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
}
var day = Number($("#day").val());
  // retrieving the month
 var month = Number($("#month").val());
  // retrieving the year
 var year = Number($("#year").val());


function calculateAge() {
 console.log("hi")
  // check if valid date
  var inputtedDate = new Date(year, month, day);
  var currentDate = new Date();
  // check if valid date
  if (inputtedDate.getTime() < currentDate.getTime()) {
   var diffMilliseconds = currentDate - inputtedDate;
    [calculedYears, calculedMonths, calculedDays]= calculateDiff(diffMilliseconds) 
    changeValuesDates(calculedYears, calculedMonths, calculedDays);
  }else{
    changeValuesDates("--","--","--");
  }
}

$("#calculate").click(calculateAge);

var x=new Date()
var z=x.getMonth()
var t= x.getDate()

function nextBirth(){
  var yy=0
  var rr=0
  var tt=0
  if(month<z){
    yy=((((month+11)) -z)*30)+day
     rr=Math.floor(yy/30)
     tt=yy%30
     
  }
  else if(month>=z){
    yy=((( month-z)-1)*30 )+day
    rr=Math.floor(yy/30)
    tt=yy%30
    console.log(rr,tt,yy)
     
   }
  changeValuesDates("--",rr,tt )
}



$("#change").click(nextBirth)


