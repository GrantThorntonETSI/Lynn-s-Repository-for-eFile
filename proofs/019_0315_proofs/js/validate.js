function checkEmail(string) {
	if (string == "") {
		return "<li>Please enter an email address.\n</li>";
	}
	var emailFilter=/^.+@.+\..{2,4}$/;
	if (!(emailFilter.test(string))) { 
		return "<li>Please enter a valid email address.\n</li>";
	}
	var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/;
	if (string.match(illegalChars)) {
		return "<li>The email address contains illegal characters.\n</li>";
	}
	return "";
}
function checkDropdown(choice, name) {
	if (choice == 0) {
		return "<li>Please select " + name + ".\n</li>";
	}	 
	return "";
}
function checkText(string, name) {
	if (string == "") {
		return "<li>Please enter " + name + ".\n</li>";
	}	 
	return "";
}