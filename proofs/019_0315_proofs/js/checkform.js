// JavaScript Document
		function checkForm(theForm) {
			var why = "";
			why  = checkText(theForm.team_name.value, "team name");
			why += checkText(theForm.producer_first_name.value, "first name");
			why += checkText(theForm.producer_last_name.value, "last name");
			why += checkText(theForm.address_1.value, "address");
			why += checkText(theForm.city.value, "city");
			why += checkDropdown(theForm.state.selectedIndex, "state");
			why += checkText(theForm.zip.value, "zip code");
			why += checkText(theForm.home_phone.value, "home phone");
			why += checkText(theForm.roster.value, "roster");
			why += checkEmail(theForm.email.value);
			why += checkSame(theForm.email.value, theForm.email_2.value, "emails");
			why += checkText(theForm.billing_first_name.value, "billing first name");
			why += checkText(theForm.billing_last_name.value, "billing last name");
			why += checkText(theForm.billing_address_1.value, "billing address");
			why += checkText(theForm.billing_city.value, "billing city");
			why += checkDropdown(theForm.billing_state.selectedIndex, "billing state");
			why += checkText(theForm.billing_zip.value, "billing zip code");
			why += checkText(theForm.billing_phone.value, "billing phone");
			why += checkText(theForm.card_number.value, "credit card number");
			why += checkDropdown(theForm.expiration_month.selectedIndex, "expiration month");
			why += checkDropdown(theForm.expiration_year.selectedIndex, "expiration year");
			if (why != "") {
				alert("Entry form is not complete.  Please fill in the following information.\n" + why);
				return false;
			}
			return true;
		}
