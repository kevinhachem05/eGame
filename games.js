function buttonRight()
{
var e=document.getElementById("elt1");
e.scrollLeft +=10; 

var e1=document.getElementById("buttonRight");
if(e.scrollLeft>50)
  
{
  e1.style.display="none";
}

var e2=document.getElementById("buttonLeft");
if(e.scrollLeft>0)
 {
  e2.style.display="inline-block";
 }
}

function buttonLeft()
{
 var e=document.getElementById("elt1");
 e.scrollLeft +=-10; 

var e1=document.getElementById("buttonLeft");
if(e.scrollLeft=0)
 {
  e1.style.display="none";
 }

var e2=document.getElementById("buttonRight");
if(e.scrollLeft<50)
 {
  e2.style.display="inline-block";
 }
}

function buttonLeft2()
{ 
var e1=document.getElementById("slideCentreContent"); //here if it was translated to the right we re translate it to take his initial position

if(e1.style.transform=="translateY(-287px)")
 {
  var e=document.getElementById("slideLeftContent");
e.style.transform="translateX(-1200px)";

var e1=document.getElementById("slideCentreContent");
e1.style.transform="translateY(0px)";

var e2=document.getElementById("slideRightContent");
e2.style.transform="translateX(-755px)";
 }

else if(e1.style.transform="translateY(0px)")  //else if it was like the default state we are scrolling to the left side
 {
  var e=document.getElementById("slideLeftContent");
e.style.transform="translateX(-845px)";

var e1=document.getElementById("slideCentreContent");
e1.style.transform="translateY(-600px)"; //if positif it get up , here we put --600 cz the figure is below the first image , so to targert the second photo we shoud get down to her using --

var e2=document.getElementById("slideRightContent");
e2.style.transform="translateX(-0px)";
 } 


}

function buttonRight2()
{
var e1=document.getElementById("slideCentreContent");  //here if it was translated to the left we re translate it to take his initial position

if(e1.style.transform=="translateY(-600px)")
 {
  var e=document.getElementById("slideLeftContent");
e.style.transform="translateX(-1200px)";

var e1=document.getElementById("slideCentreContent");
e1.style.transform="translateY(0px)";

var e2=document.getElementById("slideRightContent");
e2.style.transform="translateX(-755px)";
 }

else if(e1.style.transform="translateX(0px)")    //else if it was like the default state we are scrolling to the right side
 {
  var e=document.getElementById("slideLeftContent");
  e.style.transform="translateX(-285px)";
  
  var e1=document.getElementById("slideCentreContent");
  e1.style.transform="translateY(-287px)";
  
  var e2=document.getElementById("slideRightContent");
  e2.style.transform="translateX(-285px)";
  e2.style.transform="translateY(-287px)";
 }


}

function div4()
{
var e=document.getElementById("div4");
e.style.display="inline-block";
var e=document.getElementById("div4_2");
e.style.display="none";
var e=document.getElementById("div4_3");
e.style.display="none";
var e=document.getElementById("div4_4");
e.style.display="none";
var e=document.getElementById("div4_5");
e.style.display="none";
var e=document.getElementById("div4_6");
e.style.display="none";
var e=document.getElementById("div4_7");
e.style.display="none";
var e=document.getElementById("div4_8");
e.style.display="none";
var e=document.getElementById("div4_9");
e.style.display="none";
var e=document.getElementById("div4_10");
e.style.display="none";
var e=document.getElementById("div4_11");
e.style.display="none";
var e=document.getElementById("div4_12");
e.style.display="none";
var e=document.getElementById("div4_13");
e.style.display="none";

var e=document.getElementById("mostPopular_1")
e.style.display="none";
var e=document.getElementById("mostPopular_2")
e.style.display="inline-block";
var e=document.getElementById("mostPopular_3")
e.style.display="none";


}

function div4_2()
{
var e=document.getElementById("div4");
e.style.display="none";
var e=document.getElementById("div4_2");
e.style.display="inline-block";
var e=document.getElementById("div4_3");
e.style.display="none";
var e=document.getElementById("div4_4");
e.style.display="none";
var e=document.getElementById("div4_5");
e.style.display="none";
var e=document.getElementById("div4_6");
e.style.display="none";
var e=document.getElementById("div4_7");
e.style.display="none";
var e=document.getElementById("div4_8");
e.style.display="none";
var e=document.getElementById("div4_9");
e.style.display="none";
var e=document.getElementById("div4_10");
e.style.display="none";
var e=document.getElementById("div4_11");
e.style.display="none";
var e=document.getElementById("div4_12");
e.style.display="none";
var e=document.getElementById("div4_13");
e.style.display="none";

var e=document.getElementById("mostPopular_1")
e.style.display="inline-block";
var e=document.getElementById("mostPopular_2")
e.style.display="none";
var e=document.getElementById("mostPopular_3")
e.style.display="none";
}

function div4_3()
{
var e=document.getElementById("div4");
e.style.display="none";
var e=document.getElementById("div4_2");
e.style.display="none";
var e=document.getElementById("div4_3");
e.style.display="inline-block";
var e=document.getElementById("div4_4");
e.style.display="none";
var e=document.getElementById("div4_5");
e.style.display="none";
var e=document.getElementById("div4_6");
e.style.display="none";
var e=document.getElementById("div4_7");
e.style.display="none";
var e=document.getElementById("div4_8");
e.style.display="none";
var e=document.getElementById("div4_9");
e.style.display="none";
var e=document.getElementById("div4_10");
e.style.display="none";
var e=document.getElementById("div4_11");
e.style.display="none";
var e=document.getElementById("div4_12");
e.style.display="none";
var e=document.getElementById("div4_13");
e.style.display="none";

var e=document.getElementById("mostPopular_1")
e.style.display="none";
var e=document.getElementById("mostPopular_2")
e.style.display="none";
var e=document.getElementById("mostPopular_3")
e.style.display="inline-block";
}

function div4_4()
{
var e=document.getElementById("div4");
e.style.display="none";
var e=document.getElementById("div4_2");
e.style.display="none";
var e=document.getElementById("div4_3");
e.style.display="none";
var e=document.getElementById("div4_4");
e.style.display="inline-block";
var e=document.getElementById("div4_5");
e.style.display="none";
var e=document.getElementById("div4_6");
e.style.display="none";
var e=document.getElementById("div4_7");
e.style.display="none";
var e=document.getElementById("div4_8");
e.style.display="none";
var e=document.getElementById("div4_9");
e.style.display="none";
var e=document.getElementById("div4_10");
e.style.display="none";
var e=document.getElementById("div4_11");
e.style.display="none";
var e=document.getElementById("div4_12");
e.style.display="none";
var e=document.getElementById("div4_13");
e.style.display="none";

var e=document.getElementById("mostPopular_1")
e.style.display="none";
var e=document.getElementById("mostPopular_2")
e.style.display="inline-block";
var e=document.getElementById("mostPopular_3")
e.style.display="none";
}

function div4_5()
{
var e=document.getElementById("div4");
e.style.display="none";
var e=document.getElementById("div4_2");
e.style.display="none";
var e=document.getElementById("div4_3");
e.style.display="none";
var e=document.getElementById("div4_4");
e.style.display="none";
var e=document.getElementById("div4_5");
e.style.display="inline-block";
var e=document.getElementById("div4_6");
e.style.display="none";
var e=document.getElementById("div4_7");
e.style.display="none";
var e=document.getElementById("div4_8");
e.style.display="none";
var e=document.getElementById("div4_9");
e.style.display="none";
var e=document.getElementById("div4_10");
e.style.display="none";
var e=document.getElementById("div4_11");
e.style.display="none";
var e=document.getElementById("div4_12");
e.style.display="none";
var e=document.getElementById("div4_13");
e.style.display="none";

var e=document.getElementById("mostPopular_1")
e.style.display="inline-block";
var e=document.getElementById("mostPopular_2")
e.style.display="none";
var e=document.getElementById("mostPopular_3")
e.style.display="none";
}

function div4_6()
{
var e=document.getElementById("div4");
e.style.display="none";
var e=document.getElementById("div4_2");
e.style.display="none";
var e=document.getElementById("div4_3");
e.style.display="none";
var e=document.getElementById("div4_4");
e.style.display="none";
var e=document.getElementById("div4_5");
e.style.display="none";
var e=document.getElementById("div4_6");
e.style.display="inline-block";
var e=document.getElementById("div4_7");
e.style.display="none";
var e=document.getElementById("div4_8");
e.style.display="none";
var e=document.getElementById("div4_9");
e.style.display="none";
var e=document.getElementById("div4_10");
e.style.display="none";
var e=document.getElementById("div4_11");
e.style.display="none";
var e=document.getElementById("div4_12");
e.style.display="none";
var e=document.getElementById("div4_13");
e.style.display="none";

var e=document.getElementById("mostPopular_1")
e.style.display="none";
var e=document.getElementById("mostPopular_2")
e.style.display="none";
var e=document.getElementById("mostPopular_3")
e.style.display="inline-block";
}

function div4_7()
{
var e=document.getElementById("div4");
e.style.display="none";
var e=document.getElementById("div4_2");
e.style.display="none";
var e=document.getElementById("div4_3");
e.style.display="none";
var e=document.getElementById("div4_4");
e.style.display="none";
var e=document.getElementById("div4_5");
e.style.display="none";
var e=document.getElementById("div4_6");
e.style.display="none";
var e=document.getElementById("div4_7");
e.style.display="inline-block";
var e=document.getElementById("div4_8");
e.style.display="none";
var e=document.getElementById("div4_9");
e.style.display="none";
var e=document.getElementById("div4_10");
e.style.display="none";
var e=document.getElementById("div4_11");
e.style.display="none";
var e=document.getElementById("div4_12");
e.style.display="none";
var e=document.getElementById("div4_13");
e.style.display="none";

var e=document.getElementById("mostPopular_1")
e.style.display="none";
var e=document.getElementById("mostPopular_2")
e.style.display="inline-block";
var e=document.getElementById("mostPopular_3")
e.style.display="none";
}

function div4_8()
{
var e=document.getElementById("div4");
e.style.display="none";
var e=document.getElementById("div4_2");
e.style.display="none";
var e=document.getElementById("div4_3");
e.style.display="none";
var e=document.getElementById("div4_4");
e.style.display="none";
var e=document.getElementById("div4_5");
e.style.display="none";
var e=document.getElementById("div4_6");
e.style.display="none";
var e=document.getElementById("div4_7");
e.style.display="none";
var e=document.getElementById("div4_8");
e.style.display="inline-block";
var e=document.getElementById("div4_9");
e.style.display="none";
var e=document.getElementById("div4_10");
e.style.display="none";
var e=document.getElementById("div4_11");
e.style.display="none";
var e=document.getElementById("div4_12");
e.style.display="none";
var e=document.getElementById("div4_13");
e.style.display="none";

var e=document.getElementById("mostPopular_1")
e.style.display="inline-block";
var e=document.getElementById("mostPopular_2")
e.style.display="none";
var e=document.getElementById("mostPopular_3")
e.style.display="none";
}

function div4_9()
{
var e=document.getElementById("div4");
e.style.display="none";
var e=document.getElementById("div4_2");
e.style.display="none";
var e=document.getElementById("div4_3");
e.style.display="none";
var e=document.getElementById("div4_4");
e.style.display="none";
var e=document.getElementById("div4_5");
e.style.display="none";
var e=document.getElementById("div4_6");
e.style.display="none";
var e=document.getElementById("div4_7");
e.style.display="none";
var e=document.getElementById("div4_8");
e.style.display="none";
var e=document.getElementById("div4_9");
e.style.display="inline-block";
var e=document.getElementById("div4_10");
e.style.display="none";
var e=document.getElementById("div4_11");
e.style.display="none";
var e=document.getElementById("div4_12");
e.style.display="none";
var e=document.getElementById("div4_13");
e.style.display="none";

var e=document.getElementById("mostPopular_1")
e.style.display="none";
var e=document.getElementById("mostPopular_2")
e.style.display="none";
var e=document.getElementById("mostPopular_3")
e.style.display="inline-block";
}

function div4_10()
{
var e=document.getElementById("div4");
e.style.display="none";
var e=document.getElementById("div4_2");
e.style.display="none";
var e=document.getElementById("div4_3");
e.style.display="none";
var e=document.getElementById("div4_4");
e.style.display="none";
var e=document.getElementById("div4_5");
e.style.display="none";
var e=document.getElementById("div4_6");
e.style.display="none";
var e=document.getElementById("div4_7");
e.style.display="none";
var e=document.getElementById("div4_8");
e.style.display="none";
var e=document.getElementById("div4_9");
e.style.display="none";
var e=document.getElementById("div4_10");
e.style.display="inline-block";
var e=document.getElementById("div4_11");
e.style.display="none";
var e=document.getElementById("div4_12");
e.style.display="none";
var e=document.getElementById("div4_13");
e.style.display="none";

var e=document.getElementById("mostPopular_1")
e.style.display="none";
var e=document.getElementById("mostPopular_2")
e.style.display="inline-block";
var e=document.getElementById("mostPopular_3")
e.style.display="none";
}

function div4_11()
{
var e=document.getElementById("div4");
e.style.display="none";
var e=document.getElementById("div4_2");
e.style.display="none";
var e=document.getElementById("div4_3");
e.style.display="none";
var e=document.getElementById("div4_4");
e.style.display="none";
var e=document.getElementById("div4_5");
e.style.display="none";
var e=document.getElementById("div4_6");
e.style.display="none";
var e=document.getElementById("div4_7");
e.style.display="none";
var e=document.getElementById("div4_8");
e.style.display="none";
var e=document.getElementById("div4_9");
e.style.display="none";
var e=document.getElementById("div4_10");
e.style.display="none";
var e=document.getElementById("div4_11");
e.style.display="inline-block";
var e=document.getElementById("div4_12");
e.style.display="none";
var e=document.getElementById("div4_13");
e.style.display="none";

var e=document.getElementById("mostPopular_1")
e.style.display="inline-block";
var e=document.getElementById("mostPopular_2")
e.style.display="inline-block";
var e=document.getElementById("mostPopular_3")
e.style.display="none";
}

function div4_12()
{
var e=document.getElementById("div4");
e.style.display="none";
var e=document.getElementById("div4_2");
e.style.display="none";
var e=document.getElementById("div4_3");
e.style.display="none";
var e=document.getElementById("div4_4");
e.style.display="none";
var e=document.getElementById("div4_5");
e.style.display="none";
var e=document.getElementById("div4_6");
e.style.display="none";
var e=document.getElementById("div4_7");
e.style.display="none";
var e=document.getElementById("div4_8");
e.style.display="none";
var e=document.getElementById("div4_9");
e.style.display="none";
var e=document.getElementById("div4_10");
e.style.display="none";
var e=document.getElementById("div4_11");
e.style.display="none";
var e=document.getElementById("div4_12");
e.style.display="inline-block";
var e=document.getElementById("div4_13");
e.style.display="none";

var e=document.getElementById("mostPopular_1")
e.style.display="none";
var e=document.getElementById("mostPopular_2")
e.style.display="none";
var e=document.getElementById("mostPopular_3")
e.style.display="inline-block";
}

function div4_13()
{
var e=document.getElementById("div4");
e.style.display="none";
var e=document.getElementById("div4_2");
e.style.display="none";
var e=document.getElementById("div4_3");
e.style.display="none";
var e=document.getElementById("div4_4");
e.style.display="none";
var e=document.getElementById("div4_5");
e.style.display="none";
var e=document.getElementById("div4_6");
e.style.display="none";
var e=document.getElementById("div4_7");
e.style.display="none";
var e=document.getElementById("div4_8");
e.style.display="none";
var e=document.getElementById("div4_9");
e.style.display="none";
var e=document.getElementById("div4_10");
e.style.display="none";
var e=document.getElementById("div4_11");
e.style.display="none";
var e=document.getElementById("div4_12");
e.style.display="none";
var e=document.getElementById("div4_13");
e.style.display="inline-block";

var e=document.getElementById("mostPopular_1")
e.style.display="none";
var e=document.getElementById("mostPopular_2")
e.style.display="inline-block";
var e=document.getElementById("mostPopular_3")
e.style.display="none";
}

function updateDateTime() {
  var currentDate = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
  var formattedDate = currentDate.toLocaleDateString('en-US', options);
  
  document.getElementById('datetime').textContent = formattedDate;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
