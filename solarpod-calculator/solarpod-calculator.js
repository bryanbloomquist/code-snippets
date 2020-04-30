
$=jQuery.noConflict();
$(document).ready(function() {
	var $code_new = 0;
	var MyArrayOld = {AL: 1.1, AK: 0.7, AZ: 1.7, AR: 1.2, CA: 1.5, CO: 1.4, CT: 0.9, DE: 1, FL: 1.1, GA: 1.1, HI: 1, ID: 1.1, IL: 1, IN: 1, IA: 1.1, KS: 1.1, KY: 1, LA: 1.2, ME: 0.8, MD: 1, MA: 0.9, MI: 0.9, MN: 1, MS: 1.1, MO: 1.1, MT: 1.2, NE: 1.3, NV: 1.5, NH: 0.8, NJ: 1, NM: 1.7, NY: 0.9, NC: 1.1, ND: 1.2, OH: 1, OK: 1.2, OR: 1.2, PA: 1, RI: 0.9, SC: 1.1, SD: 1.2, TN: 1, TX: 1.4, UT: 1.4, VT: 0.9, VA: 1, WA: 1, WV: 1, WI: 0.95, WY: 1.3};
	var MyArray = {AL:1.44,AK:0.91,AZ:2.22,AR:1.56,CA:1.96,CO:1.83,CT:1.17,DE:1.3,FL:1.44,GA:1.44,HI:1.3,ID:1.44,IL:1.3,IN:1.3,IA:1.44,KS:1.44,KY:1.3,LA:1.88,ME:1.04,MD:1.3,MA:1.17,MI:1.17,MN:1.3,MS:1.44,MO:1.44,MT:1.56,NE:1.7,NV:1.96,NH:1.04,NJ:1.3,NM:2.22,NY:1.17,NC:1.44,ND:1.56,OH:1.3,OK:1.56,OR:1.56,PA:1.3,RI:1.17,SC:1.44,SD:1.56,TN:1.3,TX:1.83,UT:1.83,VT:1.17,VA:1.3,WA:1.3,WV:1.3,WI:1.24,WY:1.7};
	function calculateSolarPods(){
		var element = document.getElementById("state");
		var myDiv = document.getElementById("myDiv");
		var Statevalue = element.value;
		var count = $("#Totalyear").val();
		for(var key in MyArray){
			if(key==Statevalue){
				$factor= MyArray[key];
				$year1= $factor*1200;
				$year2= $year1*0.96;
				$estimatedTime = (count)/($year2);
				$estimatedTime2= Math.ceil($estimatedTime);
			}
		}
		if($estimatedTime2 > 0){
			myDiv.innerHTML = "To reach 100% Solar PV, You Will Need an Estimated " + $estimatedTime2 + " SolarPod";
			if($estimatedTime2 > 1) myDiv.innerHTML += "s";
		}else{
			myDiv.innerHTML = "To reach 100% Solar PV, You Will Need an Estimated LOTS OF SolarPods";
		}
	}
	$("#Totalyear").keyup(function(e)  { 
		calculateSolarPods();
	})
	$("#state").change(function(e)  { 
		calculateSolarPods();
	})
});