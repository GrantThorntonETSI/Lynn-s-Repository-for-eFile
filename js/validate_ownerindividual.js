// JavaScript Document
function checkForm(theForm) {
	var why = "";
	why  = checkText(theForm.firstname.value, "first name");
	var firstnameval = document.getElementById("firstname").value;
	var highlightfirstname = document.getElementById("firstname");
		if (firstnameval) {
			var highlightfirstname = document.getElementById("firstname");
			document.getElementById("firstname").classList.remove("highlighted");
			highlightfirstname.classList.remove("highlighted");
			highlightfirstname.setAttribute("aria-invalid", "false");
			}
		if (firstnameval.length == 0) {
		highlightfirstname.classList.add("highlighted");
		highlightfirstname.setAttribute("aria-invalid", "true");
		}
	why += checkText(theForm.lastname.value, "last name");
	var lastnameval = document.getElementById("lastname").value;
	var highlightlastname = document.getElementById("lastname");
		if (lastnameval) {
			var highlightlastname = document.getElementById("lastname");
			document.getElementById("lastname").classList.remove("highlighted");
			highlightlastname.classList.remove("highlighted");
			highlightlastname.setAttribute("aria-invalid", "false");
			}
		if (lastnameval.length == 0) {
		highlightlastname.classList.add("highlighted");
		highlightlastname.setAttribute("aria-invalid", "true");
		}
	why += checkDropdown(theForm.territory.selectedIndex, "country/US territory");
	var territoryval = document.getElementById("territory").selectedIndex;
	var highlightterritory = document.getElementById("territory");
		if (territoryval > 0) {
			var highlightterritory = document.getElementById("territory");
			document.getElementById("territory").classList.remove("highlighted");
			highlightterritory.classList.remove("highlighted");
			highlightterritory.setAttribute("aria-invalid", "false");
			}
		if (territoryval < 1) {
		highlightterritory.classList.add("highlighted");
		highlightterritory.setAttribute("aria-invalid", "true");
		}
	why += checkText(theForm.addressline1.value, "address line 1");
	var addressline1val = document.getElementById("addressline1").value;
	var highlightaddressline1 = document.getElementById("addressline1");
		if (addressline1val) {
			var highlightaddressline1 = document.getElementById("addressline1");
			document.getElementById("addressline1").classList.remove("highlighted");
			highlightaddressline1.classList.remove("highlighted");
			highlightaddressline1.setAttribute("aria-invalid", "false");
			}
		if (addressline1val.length == 0) {
		highlightaddressline1.classList.add("highlighted");
		highlightaddressline1.setAttribute("aria-invalid", "true");
		}
	why += checkText(theForm.city.value, "city");
	var cityval = document.getElementById("city").value;
	var highlightcity = document.getElementById("city");
		if (cityval) {
			var highlightcity = document.getElementById("city");
			document.getElementById("city").classList.remove("highlighted");
			highlightcity.classList.remove("highlighted");
			highlightcity.setAttribute("aria-invalid", "false");
			}
		if (cityval.length == 0) {
		highlightcity.classList.add("highlighted");
		highlightcity.setAttribute("aria-invalid", "true");
		}
	why += checkDropdown(theForm.state.selectedIndex, "state");
	var stateval = document.getElementById("state").selectedIndex;
	var highlightstate = document.getElementById("state");
		if (stateval > 0) {
			var highlightstate = document.getElementById("state");
			document.getElementById("state").classList.remove("highlighted");
			highlightstate.classList.remove("highlighted");
			highlightstate.setAttribute("aria-invalid", "false");
			}
		if (stateval < 1) {
		highlightstate.classList.add("highlighted");
		highlightstate.setAttribute("aria-invalid", "true");
		}
	why += checkText(theForm.zipcode.value, "zip code");
	var zipcodeval = document.getElementById("zipcode").value;
	var highlightzipcode = document.getElementById("zipcode");
		if (zipcodeval) {
			var highlightzipcode = document.getElementById("zipcode");
			document.getElementById("zipcode").classList.remove("highlighted");
			highlightzipcode.classList.remove("highlighted");
			highlightzipcode.setAttribute("aria-invalid", "false");
			}
		if (zipcodeval.length == 0) {
		highlightzipcode.classList.add("highlighted");
		highlightzipcode.setAttribute("aria-invalid", "true");
		}
	why += checkText(theForm.email.value, "email address");
	var emailval = document.getElementById("email").value;
	var highlightemail = document.getElementById("email");
		if (emailval) {
			var highlightemail = document.getElementById("email");
			document.getElementById("email").classList.remove("highlighted");
			highlightemail.classList.remove("highlighted");
			highlightemail.setAttribute("aria-invalid", "false");
			}
		if (emailval.length == 0) {
		highlightemail.classList.add("highlighted");
		highlightemail.setAttribute("aria-invalid", "true");
		}
		if (why != "") {
			var textnode = "The form is not complete. Please enter the following information.\n" + why;
			var node = document.createElement("ul");
			node.innerHTML = (textnode);
			document.getElementById("errorslist").appendChild(node);
			document.getElementById("errorslist").focus();
			document.getElementById("errorslist").tabIndex = "-1";
			window.scrollTo(0, 0);
			var c = document.getElementById("errorslist").childElementCount;
			if (c > 1) {
				document.getElementById("errorslist").firstElementChild.remove();
			}
			node.setAttribute('aria-invalid', 'true');						
			return false;
		} 
		else {
	return true;
	}
}