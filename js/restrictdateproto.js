$(document).ready(function(){
	//set min max date filing basis a,b + filing basis a,b,d,e
	$(document).on('click', '#connectiondateone', function() {
		var options = { hour12: false, timeZone: 'America/New_York', year: 'numeric', month: 'numeric', day: 'numeric', timeZoneName: 'short' };
		var dtToday = new Date().toLocaleTimeString('en-US', options);
		var month = new Date().getMonth();     // getMonth() is zero-based
		var day = new Date().getDate();
		var year = new Date().getFullYear();
		console.log(month);
		console.log(year);
		if(month < 10)
		   month = '0' + month.toString();
		if(day < 10)
		   day = '0' + day.toString();
		var maxDate = year + '-' + month + '-' + day;
		$('#connectiondateone').attr('max', maxDate);
		
		function addDays(theDate, days) {
			return new Date(theDate.getTime() + days*24*60*60*1000);
		}	
		var minDate = addDays(new Date(), -60).toLocaleTimeString('en-US', options);
		var strmin = minDate; 
		var sliceyearmin = strmin.slice(4, 8);
		var slicemonthmin = strmin.slice(0, 1);
		var slicedaymin = strmin.slice(2, 3);
		$('#connectiondateone').attr("min", sliceyearmin + "-" + slicemonthmin + "-" + slicedaymin);
		
		console.log(document.getElementById("connectiondateone").min);
		console.log(document.getElementById("connectiondateone").max);
	});
	//set min max date filing basis a,b + filing basis a,b,d,e
});
//set min max date filing basis a,b + filing basis a,b,d,e