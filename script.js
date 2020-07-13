let m = moment().format("dddd MMM Do YYYY");
$("#currentDay").text(m);
// var startTime = moment().format('LT');
var nowTime = moment();

// var startTime = moment("12:16:59 am", "HH:mm:ss a");
// var endTime = moment("06:12:07 pm", "HH:mm:ss a");
// var startTime = moment("12 am", "HH a");
var endTime = moment("06:12:07 pm", "HH:mm:ss a");
const eightAM = moment("08:00 am", "HH:mm a");
const nineAM = moment("09:00 am", "HH:mm a");
const tenAM = moment("10:00 am", "HH:mm a");
const elevenAM = moment("11:00 am", "HH:mm a");
const twelvePM = moment("12:00 pm", "HH:mm a");
const onePM = moment("01:00 pm", "HH:mm a");
const twoPM = moment("2:00 pm", "HH:mm a");
const threePM = moment("03:00 pm", "HH:mm a");
const fourPM = moment("04:00 pm", "HH:mm a");
const fivePM = moment("05:00 pm", "HH:mm a");
const sixPM = moment("06:00 pm", "HH:mm a");
const sevenPM = moment("07:00 pm", "HH:mm a");
const eightPM = moment("08:00 pm", "HH:mm a");
const ninePM = moment("9:00 pm", "HH:mm a");
const tenPM = moment("10:00 pm", "HH:mm a");
// const timeDifference =  moment.duration(nowTime.diff(eightAM)).asSeconds();
const timesArray = [eightAM, nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM, ninePM,tenPM];

var timeDifference8am = moment.duration(nowTime.diff(eightAM)).asHours();
if (timeDifference8am >= 1){ $("#eightAM").addClass("past");
}
else if (timeDifference8am > 0 && timeDifference8am < 1){$("#eightAM").addClass("present");
}
else{ $("eightAM").addClass("future");
}

var timeDifference9am = moment.duration(nowTime.diff(nineAM)).asHours();
if (timeDifference9am >= 1){ $("#nineAM").addClass("past");
}
else if (timeDifference9am > 0 && timeDifference9am < 1){$("#nineAM").addClass("present");
}
else{ $("#nineAM").addClass("future");
}



var timeDifference10am = moment.duration(nowTime.diff(tenAM)).asHours();
if (timeDifference10am >= 1){ $("#tenAM").addClass("past");
}
else if (timeDifference10am > 0 && timeDifference10am < 1){$("#tenAM").addClass("present");
}
else{ $("tenAM").addClass("future");
}

var timeDifference11am = moment.duration(nowTime.diff(elevenAM)).asHours();
if (timeDifference11am >= 1){ $("#elevenAM").addClass("past");
}
else if (timeDifference11am > 0 && timeDifference11am < 1){$("#elevenAM").addClass("present");
}
else{ $("elevenAM").addClass("future");
}


var timeDifference12pm = moment.duration(nowTime.diff(twelvePM)).asHours();
if (timeDifference12pm >= 1){ $("#twelvePM").addClass("past");
}
else if (timeDifference12pm > 0 && timeDifference12pm < 1){$("#twelvePM").addClass("present");
}
else{ $("#twelvePM").addClass("future");
}

var timeDifference1pm = moment.duration(nowTime.diff(onePM)).asHours();
if (timeDifference1pm >= 1){ $("#onePM").addClass("past");
}
else if (timeDifference1pm > 0 && timeDifference1pm < 1){$("#onePM").addClass("present");
}
else{ $("#onePM").addClass("future");
}

var timeDifference2pm = moment.duration(nowTime.diff(twoPM)).asHours();
if (timeDifference2pm >= 1){ $("#twoPM").addClass("past");
}
else if (timeDifference2pm > 0 && timeDifference2pm < 1){$("#twoPM").addClass("present");
}
else{ $("#twoPM").addClass("future");
}

var timeDifference3pm = moment.duration(nowTime.diff(threePM)).asHours();
if (timeDifference3pm >= 1){ $("#threePM").addClass("past");
}
else if (timeDifference3pm > 0 && timeDifference3pm < 1){$("#threePM").addClass("present");
}
else{ $("#threePM").addClass("future");
}

var timeDifference4pm = moment.duration(nowTime.diff(fourPM)).asHours();
if (timeDifference4pm >= 1){ $("#fourPM").addClass("past");
}
else if (timeDifference4pm > 0 && timeDifference4pm < 1){$("#fourPM").addClass("present");
}
else{ $("#fourPM").addClass("future");
}


var timeDifference5pm = moment.duration(nowTime.diff(fivePM)).asHours();
if (timeDifference5pm >= 1){ $("#fivePM").addClass("past");
}
else if (timeDifference5pm > 0 && timeDifference5pm < 1){$("#fivePM").addClass("present");
}
else{ $("#fivePM").addClass("future");
}


var timeDifference6pm = moment.duration(nowTime.diff(sixPM)).asHours();
if (timeDifference6pm >= 1){ $("#sixPM").addClass("past");
}
else if (timeDifference6pm > 0 && timeDifference6pm < 1){$("#sixPM").addClass("present");
}
else{ $("#sixPM").addClass("future");
}

var timeDifference7pm = moment.duration(nowTime.diff(sevenPM)).asHours();
if (timeDifference7pm >= 1) { $("#sevenPM").addClass("past");
}
else if (timeDifference7pm > 0 && timeDifference7pm < 1){$("#sevenPM").addClass("present");
}
else{ $("#sevenPM").addClass("future");
}

var timeDifference8pm = moment.duration(nowTime.diff(eightPM)).asHours();
if (timeDifference8pm >= 1){ $("#eightPM").addClass("past");
}
else if (timeDifference8pm > 0 && timeDifference8pm < 1){$("#eightPM").addClass("present");
}
else{ $("#eightPM").addClass("future");
}

var timeDifference9pm = moment.duration(nowTime.diff(ninePM)).asHours();
if (timeDifference9pm >= 1){ $("#ninePM").addClass("past");
}
else if (timeDifference9pm > 0 && timeDifference9pm < 1){$("#ninePM").addClass("present");
}
else{ $("#ninePM").addClass("future");
}

var timeDifference10pm = moment.duration(nowTime.diff(tenPM)).asHours();
if (timeDifference10pm >= 1){ $("#tenPM").addClass("past");
}
else if (timeDifference10pm > 0 && timeDifference10pm < 1){$("#tenPM").addClass("present");
}
else{ $("#tenPM").addClass("future");
}

// I tried doing the above with a loop, didn't work
// var timeDifference = moment.duration(nowTime.diff(timesArray[i])).asHours();
// for ( let i=0; i<timesArray.length; i++){

//   
// if(timeDifference >= 1){
//     document.getElementById(timesArray[i]).setAttrbute("class", ".past");
// }
// else if (timeDifference10pm > 0 && timeDifference10pm < 1){
//     document.getElementById(timesArray[i]).setAttrbute("class", ".present");
// }

// else{
//     document.getElementById(timesArray[i]).setAttrbute("class",".future");
// }
    // }
     function renderPreviousInput(){
        const eightAMactivity = localStorage.getItem("toDo8am");
        const nineAMactivity = localStorage.getItem("toDo9am");
        const tenAMactivity = localStorage.getItem("toDo10am");
        const elevenAMactivity = localStorage.getItem("toDo11am");
        const twelvePMactivity = localStorage.getItem("toDo12pm");
        const onePMactivity = localStorage.getItem("toDo1pm");
        const twoPMactivity = localStorage.getItem("toDo2pm");
        const threePMactivity = localStorage.getItem("toDo3pm");
        const fourPMactivity = localStorage.getItem("toDo4pm");
        const fivePMactivity = localStorage.getItem("toDo5pm");
        const sixPMactivity = localStorage.getItem("toDo6pm");
        const sevenPMactivity = localStorage.getItem("toDo7pm");
        const eightPMactivity = localStorage.getItem("toDo8pm");
        const ninePMactivity = localStorage.getItem("toDo9pm");
        const tenPMactivity = localStorage.getItem("toDo10pm");
   
   const saveBtn = $(".btn");
   saveBtn.on("click", function(){
       event.preventDefault();
       const eightAMtextArea = $("#eightAM");
       eightAMtextArea.textContent = eightAMactivity;
       localStorage.setItem("toDo8am", eightAMactivity );
       
       const nineAMtextArea = $("#nineAM");
       nineAMtextArea.textContent = nineAMactivity;
       localStorage.setItem("toDo9am", nineAMactivity );
       
       const tenAMtextArea = $("#tenAM");
       tenAMtextArea.textContent = tenAMactivity;
       localStorage.setItem("toDo10am", tenAMactivity );

       const elevenAMtextArea = $("#elevenAM");
       elevenAMtextArea.textContent = elevenAMactivity;
       localStorage.setItem("toDo11am", elevenAMactivity );

       const twelvePMtextArea = $("#twelvePM");
       twelvePMtextArea.textContent = twelvePMactivity;
       localStorage.setItem("toDo12pm", twelvePMactivity );
       
       const onePMtextArea = $("#onePM");
       onePMtextArea.textContent = onePMactivity;
       localStorage.setItem("toDo1pm", onePMactivity );

       const twoPMtextArea = $("#twoPM");
       twoPMtextArea.textContent = twoPMaMactivity;
       localStorage.setItem("toDo2pm", twoPMactivity );

       const threePMtextArea = $("#threePM");
       threePMtextArea.textContent = threePMactivity;
       localStorage.setItem("toDo3pm", threePMactivity );

       const fourPMtextArea = $("#fourPM");
       fourPMtextArea.textContent = fourPMactivity;
       localStorage.setItem("toDo4pm", fourPMactivity );

       const fivePMtextArea = $("#fivePM");
       fivePMtextArea.textContent = fivePMactivity;
       localStorage.setItem("toDo5pm", fivePMactivity );

       const sixPMtextArea = $("#sixPM");
       sixPMtextArea.textContent = sixPMactivity;
       localStorage.setItem("toDo6pm", sixPMactivity );

       const sevenPMtextArea = $("#sevenPM");
       sevenPMtextArea.textContent = sevenPMactivity;
       localStorage.setItem("toDo7pm", sevenPMactivity );

       const eightPMtextArea = $("#eightPM");
       eightPMtextArea.textContent = eightPMactivity;
       localStorage.setItem("toDo8pm", eightPMactivity );

       const ninePMtextArea = $("#ninePM");
       ninePMtextArea.textContent = ninePMactivity;
       localStorage.setItem("toDo9pm", eightAMactivity );
       
       const tenPMtextArea = $("#tenPM");
       tenPMtextArea.textContent = tenPMactivity;
       localStorage.setItem("toDo10pm", tenPMactivity );
   
   })
}
