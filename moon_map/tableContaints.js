function getTextFile (fname) {
var text = null;
var ajax = new XMLHttpRequest();
with (ajax) {
/*@if(1) onreadystatechange @else@*/ onload /*@end@*/ =
function () { readyState == 4 && status == 200 && (text = responseText); };
open('GET', fname, false);
send(null);
};
return text;
}
var X = initX();
var text2=getTextFile('destination.txt');
var info = 4;
var text3 = new Array(info);

function splitText(){
var lineData = text2.split("\n");
var i=0;
var j=0;
while(i<lineData.length){
for(j=0;j<info;j++){
text3[j]=lineData[i];
i++;
}
var flag = eval(text3[0]);
if(flag == X) break;
}
}

function returnName(){
splitText();
document.write(text3[1]);
}

function returnPlace(){
splitText();
document.write(text3[2]);
}

function returnReport(){
splitText();
document.write(text3[3])
}
function returnValue(){
splitText();
var T = 0;
return T = text3[1] + "</br>" + text3[2]  + "</br>" + text3[3];
}

var P_text2=getTextFile('sample.txt');


function displayPlace(){
initLatLon();
var P_info = 5;
var lineData = P_text2.split('\n');
var i=0;
var j=0;
var lat = 0;
var lon=0;
while(i<lineData.length-1){
var name = lineData[i];
lat = lineData[i+1];
lon = lineData[i+2];
var report = lineData[i+3];
var url = lineData[i+4];
i+=5;
lat =eval(lat);
lon = eval(lon);

//*****目的地にマーカーを置く*****
placemark0 = ge.createPlacemark('');
var icon = ge.createIcon('');
icon.setHref('http://localhost/man.png');
var style = ge.createStyle(''); //create a new style
style.getIconStyle().setIcon(icon); //apply the icon to the style
style.getIconStyle().setScale(3.0);
placemark0.setStyleSelector(style); //apply the style to the placemark
placemark0.setName("");
placemark0.setDescription('目的地:</br>' + returnValue());
var point2 = ge.createPoint('');
point2.setLatitude(lat);
point2.setLongitude(lon);
placemark0.setGeometry(point2);
placemark0.setVisibility(ge.VISIBILITY_SHOW);
ge.getFeatures().appendChild(placemark0);
//*****************************
}
}