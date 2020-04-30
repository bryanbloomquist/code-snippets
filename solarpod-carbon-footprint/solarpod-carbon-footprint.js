function testNum(rNum) {
  if (isNaN(rNum)) {
    rNum = 0;
    return rNum;
  } else {
    return rNum;
  }
}
function calcupdate(obj) {
  var idNum = obj.id.substring(1);
  var idType = obj.id.substring(0, 1);
  // Prevent Minute Overflow
  if (idType === "m" && obj.value > 59) {
    obj.value = 59;
    alert("You cannot enter more than 59 minutes in this field.");
  }
  // Remove Null Values
  if (isNaN(obj.value) || obj.value == "0") obj.value = "";
  // Wattage for each line item
  var idItem = new Array();
  idItem[1] = 30;
  idItem[2] = 15;
  idItem[3] = 3;
  idItem[4] = 75;
  idItem[5] = 8800;
  idItem[6] = 1000;
  idItem[7] = 375;
  idItem[8] = 1500;
  idItem[9] = 300;
  idItem[10] = 725;
  idItem[11] = 2800;
  idItem[12] = 1200;
  idItem[13] = 3000;
  idItem[14] = 94742;
  idItem[15] = 2000;
  idItem[16] = 725;
  idItem[17] = 3;
  idItem[18] = 15;
  idItem[19] = testNum(document.getElementById("ow1").value);
  idItem[20] = testNum(document.getElementById("ow2").value);
  idItem[21] = testNum(document.getElementById("ow3").value);
  idItem[22] = testNum(document.getElementById("ow4").value);
  idItem[23] = testNum(document.getElementById("ow5").value);
  idItem[24] = testNum(document.getElementById("ow6").value);
  // Get Hours for current line
  var hrs = parseInt(document.getElementById("h" + idNum).value);
  if (isNaN(hrs)) hrs = 0;
  // Get Minutes for current line as fraction of an hour
  var mns = parseInt(document.getElementById("m" + idNum).value) / 60;
  mns = Math.round(mns * 100) / 100; // round to nearest hundreth
  if (isNaN(mns)) mns = 0;
  var ttl = hrs + mns; // Time for current line
  var pwr = idItem[idNum]; // power for current line
  // Calculate Line
  var lineDisplay = document.getElementById("o" + idNum);
  var lineOut = document.getElementById("oh" + idNum);
  lineDisplay.value = "";
  lineOut.value = "";
  if (ttl != 0) {
    lineDisplay.value =
      "(" + pwr + " * " + ttl + ") / 1000 = " + (pwr * ttl) / 1000;
    lineOut.value = (pwr * ttl) / 1000;
  }
  // update running total
  var rTot = 0;
  for (i = 1; i < 24; i++) rTot += document.getElementById("oh" + i).value * 1;
  document.getElementById("eupd").value = Math.round(rTot * 100) / 100;
  if (rTot == 0) document.getElementById("eupd").value = "";
  document.getElementById("tcfp").value =
    Math.round((rTot / 0.3) * 2 * 100) / 100;
  if (rTot == 0) document.getElementById("tcfp").value = "";
  var flts =
    document.getElementById("eupd").value / (weightkg * 9.8 * 3.2 * 0.00000028);
  document.getElementById("numflights").value = Math.round(flts);
  if (flts == 0) document.getElementById("numflights").value = "";
}
var weightkg = 0;
function updateWeight(obj) {
  if (obj.id === "cweight")
    document.getElementById("cweightkg").value =
      Math.round(obj.value * 0.45359237 * 100) / 100;
  else
    document.getElementById("cweight").value = parseInt(obj.value / 0.45359237);
  weightkg = document.getElementById("cweightkg").value;
  calcupdate(document.getElementById("h1")); //call to update the calculation
}
function changeUnits(obj) {
  obj.style.display = "none";
  if (obj.id === "kgsbutton") {
    document.getElementById("lbsbutton").style.display = "block";
    document.getElementById("kgwt").style.display = "block";
    document.getElementById("cweightkg").style.display = "inline";
    document.getElementById("lbwt").style.display = "none";
    document.getElementById("cweight").style.display = "none";
  } else {
    document.getElementById("kgsbutton").style.display = "block";
    document.getElementById("kgwt").style.display = "none";
    document.getElementById("cweightkg").style.display = "none";
    document.getElementById("lbwt").style.display = "block";
    document.getElementById("cweight").style.display = "inline";
  }
}
