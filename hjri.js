 /**
  * 
  *  The correct  rule about convert date Gregorian to Hijri 

 // ميﻻدي
  const eventa = new Date(2023,0,1,0,0,0);
//Sun Jan 01 2023 00:00:00  يناير  01/2023 اﻻحد
console.log(eventa) 

// هجري
const eventSet = new Date(2023,0,1,0,0,0);
//الأحد، ٩ جمادى الثاني ١٤٤٤ هـ في ١٢:٠٠:٠٠ ص
console.log(eventSet.toLocaleString('ar-u-ca-islamic', {  year: 'numeric', month: 'long', day: 'numeric', weekday: "long", hour: "2-digit", minute: "2-digit",second: "2-digit"
}));
  */ 
//******************************************************************** */
// New date 
var newDateHijri = new Date(2023,6,18)
//var resNewHijri = newDateHijri.toLocaleString('ar-u-ca-islamic');
//console.log(resNewHijri)
// Old date
var oldDate = new Date()
var timeMilleSecond = newDateHijri - oldDate;
// Days 
var Days =parseInt(timeMilleSecond/(24*60*60*1000));
console.log(Days.toLocaleString('ar-u-ca-islamic'))
// //Hours
// var hours = Math.floor(timeMilleSecond/(60*60*1000))% 24 
// //minutes
// var mins = Math.floor(timeMilleSecond/(60*1000))%60  
// //Seconds
// var seconds = parseInt(timeMilleSecond/(1000))%60 



//******************************************************************** */
// //Old date
// var oldDateHijri = new Date()
// //var resOldHijri = oldDateHijri.toLocaleString('ar-u-ca-islamic');

// //var timeMilleSecondHijri = resNewHijri - resOldHijri;
// var timeMilleSecondHijri = newDateHijri - oldDateHijri;

// console.log(timeMilleSecondHijri.toLocaleString('ar-u-ca-islamic')); 
  


  // date is optional, defaults to today
/*function writeHijri(date, lang) {
    var date = date  ||  new Date();
    lang = lang || 'en';
    var options = {
      year: 'numeric', month: 'long', day: 'numeric', weekday: "long", hour: "2-digit", minute: "2-digit",second: "2-digit"
    };
    return date.toLocaleString(lang + '-u-ca-islamic',options);
  }
  
  // Today in English
  function calac(v){
    return v-1
  }
    console.log(writeHijri(new Date(2022,10,21,18,56,00), 'ar'));

  // 1 Jan 2017 converted to Hijri (3 Rab. II 1438) in Arabic
  
  setInterval(()=>{
    console.log(writeHijri());

  } ,2000) 
*/