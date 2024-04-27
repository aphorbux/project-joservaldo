var barNum = ["7015467825479", "3873464575388"];
var barUnit = [32952, 5931];
var barVals = [740.99, 32.49];

var codBars = document.getElementsByClassName("codBar");
var codUnits = document.getElementsByClassName("codUnit");
var codPrics = document.getElementsByClassName("codPric");

for (var i = 0; i < codBars.length; i++) {
    codBars[i].innerText = barNum[i];
    codUnits[i].innerText = barUnit[i];
    codPrics[i].innerText = "R$ "+barVals[i];
}
function AddBtn(bar, uni){
    for(var t=0; bar != barNum[t];t++){
        if(bar==barNum[t]){id = t}}
    barUnit[t]+=uni;
}
function DecBtn(bar, uni){
    for(var t=0; bar != barNum[t];t++){
        if(bar==barNum[t]){id = t}}
    barUnit[t]-=uni;
}

