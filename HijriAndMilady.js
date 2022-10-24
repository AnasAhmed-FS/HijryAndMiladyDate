var secEl = document.getElementById("second")

/**
 * Start counter future year
 */
function countYearDown(){
    /*       *********** Start milady date script  ********** */
    //1- calac the differeince date bettwen the dates to get milleseconds date
// New date 
var newDateMilady = new Date("1 Jan 2023")
// Old date
var oldDate = new Date()
var timeMilleSecond = newDateMilady - oldDate;
 

    //2- Get days calc by divided difference date on 24 hours multi 60 mins & 60 seconds $ 1000 millisecond 
    // continue same idea in hours or mins or seconds        
// Days 
var DaysMilady =parseInt(timeMilleSecond/(24*60*60*1000));
//Hours
var hoursMilady = Math.floor(timeMilleSecond/(60*60*1000))% 24 
//minutes
var minsMilady = Math.floor(timeMilleSecond/(60*1000))% 60  
//Seconds
var secondsMilady = parseInt(timeMilleSecond/(1000))% 60 

// NOTE: The Math.floor()  OR  ParseInt()  return us integer value 

// Deploy in wep page(HTML)
document.getElementById("days").innerHTML=DaysMilady;
document.getElementById("hours").innerHTML=timer(hoursMilady);
document.getElementById("minutes").innerHTML=timer(minsMilady);
document.getElementById("second").innerHTML=secondsMilady;
   
    /*       *********** END milady date script  **********   */

    /*       *********** Start Hijri date script  **********   */
var newDateHijri = new Date(2023,6,19)
var timeMilleSecondHijri = newDateHijri - oldDate;
// Days 
var DaysHijri =parseInt(timeMilleSecondHijri/(24*60*60*1000));
//Hours
var hoursHijri = Math.floor(timeMilleSecond/(60*60*1000))% 24 
//minutes
var minsHijri = Math.floor(timeMilleSecond/(60*1000))%60  
//Seconds
var secondsHijri = Math.floor(timeMilleSecond/(1000))%60 

// Deploy in wep page(HTML)
document.getElementById("daysHijri").innerHTML=DaysHijri.toLocaleString('en-sa');
document.getElementById("hoursHijri").innerHTML=timer(hoursHijri.toLocaleString('en-sa'));
document.getElementById("minutesHijri").innerHTML=timer(minsHijri.toLocaleString('en-sa'));
document.getElementById("secondHijri").innerHTML=timer(secondsHijri.toLocaleString('en-sa'));

    /*       *********** END Hijri date script  ********** */  
// NOTE: The timer is function, please ckeck down 
}
function timer (time){
    // if time lower than 10 the output will be (0 timeInserted) Otherwise outPut will time only 
    return time < 10 ? `0${time}` : time;
}
  countYearDown()
setInterval(countYearDown ,2000);
/**
 * End counter future year
 */


/**
 * Start Appear current day 
 */
    /*      *********** Appear the current date Hijri && milady script  ********** */  
function appearCurrentDate(){
    // Milady 
    var currentDate = new Date();  
    

    // current Day
    var getDateDayMidlyEn = currentDate.toLocaleString('en', {weekday: 'long'})
    var getDateDayMidlyAr = currentDate.toLocaleString('ar', {weekday: 'long'})
    document.getElementById("currentDateDay").innerHTML=getDateDayMidlyEn+" , "+getDateDayMidlyAr

    // Full Milady date (year,month,day,weekday)
    var getFullDateMidlyEn = currentDate.toLocaleString('en',{  year: 'numeric', month: 'long', day: 'numeric',})
    var getFullDateMidlyAr = currentDate.toLocaleString('ar',{  year: 'numeric', month: 'long', day: 'numeric',})
    document.getElementById("currentDateMilady").innerHTML=getFullDateMidlyEn+" , "+getFullDateMidlyAr
    
    // Full date (year,month,day,weekday)
    var resFullDateMidlyEn =  currentDate.toLocaleString('en',{  year: 'numeric', month: 'long', day: 'numeric', weekday: "long", });
    var resFullDateMidlyAr = currentDate.toLocaleString('ar',{  year: 'numeric', month: 'long', day: 'numeric', weekday: "long", })
    console.log(resFullDateMidlyAr)
   // document.getElementById("currentDateHigri").innerHTML=resFullDateMidlyEn+" , "+resFullDateMidlyAr

    // Hijri 
    // Full date (year,month,day,weekday)
    var resFullDateHijriEn = currentDate.toLocaleString('en-sa', {  year: 'numeric', month: 'long', day: 'numeric',}) 
    var resFullDateHijriAr = currentDate.toLocaleString('ar-sa', {  year: 'numeric', month: 'long', day: 'numeric',}) 
    //console.log(resFullDateHijriar)
    document.getElementById("currentDateHigri").innerHTML=resFullDateHijriEn+" , "+resFullDateHijriAr

}
appearCurrentDate()
    /*      *********** End the current date Hijri && milady script  ********** */  
/**
 * Start Appear current day 
 */