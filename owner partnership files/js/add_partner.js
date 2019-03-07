$(document).ready(function(){
        // load partner div
		
		//START hide / show append partner
		$('div.addpartnership').css('display','none');
		$('fieldset#individual-partner-entity').css('display','none');
		$('fieldset#none-individual-partner-entity').css('display','none');
		$( document ).on('click','button#addpartner',function(){
			$('div.addpartnership').show('fast')	
			});
			//$( document ).on('click','.resetpartnershipbtn',function(){
//				$( this ).parent().parent().parent().remove();
//			});
		//END hide / show append partner
		
		function fadeOutPartnerInfo(){
			$('#individual-partner-entity').fadeOut(1000);
			$('#none-individual-partner-entity').fadeOut(1000);
		}
	
		function disableNoneIndiviualRequiredfields(){
			$('#owner-name').prop("required", false);
			$('#owner-type').prop("required", false);
			$('#owner-state').prop("required", false);
		}
	
		function enableNoneIndiviualRequiredfields(){
			$('#owner-name').prop("required", true);
			$('#owner-type').prop("required", true);
			$('#owner-state').prop("required", true);
		}
	
		function disableIndiviualRequiredfields(){
			$('#partner-first-name').prop("required", false);
			$('#partner-last-name').prop("required", false);
		}
	
		function enableIndiviualRequiredfields() {
			$('#partner-first-name').prop("required", true);
			$('#partner-last-name').prop("required", true);
		}

        $('#domestic-entity-dropdown-partner').change( function () {
            var subtype_val = this.value;
            if(subtype_val == "none"){
                //fade out every thing
                fadeOutPartnerInfo();
            }
            if(subtype_val == "Individual"){
                fadeOutPartnerInfo();
                $('#individual-partner-entity').fadeIn(1000);
                disableNoneIndiviualRequiredfields();
                enableIndiviualRequiredfields();
            }
            if(subtype_val == "Sole Proprietorship"){
                fadeOutPartnerInfo();
                $('#individual-partner-entity').fadeIn(1000);  // same owner entity fields as individual
                disableNoneIndiviualRequiredfields();
                enableIndiviualRequiredfields();
            }

            if(subtype_val == "Limited Liability Company"){
                setTimeout(function() {
                    // after 1000 ms we add the class animated to the login/register card
                    fadeOutPartnerInfo();
                }, 500);
                setTimeout(function() {
                    // after 1000 ms we add the class animated to the login/register card
                    $('#none-individual-partner-entity').fadeIn(1000);
                }, 1000);
                disableIndiviualRequiredfields();
                enableNoneIndiviualRequiredfields();
                // same owner entity fields as individual
            }
			
            if(subtype_val == "Partnership"){
                setTimeout(function() {
                    // after 1000 ms we add the class animated to the login/register card
                    fadeOutPartnerInfo();
                }, 500);
                setTimeout(function() {
                    // after 1000 ms we add the class animated to the login/register card
                    $('#none-individual-partner-entity').fadeIn(1000);
                }, 1000);
                disableIndiviualRequiredfields();
                enableNoneIndiviualRequiredfields();
            }

            if(subtype_val == "Joint Venture"){
                setTimeout(function() {
                    // after 1000 ms we add the class animated to the login/register card
                    fadeOutPartnerInfo();
                }, 500);
                setTimeout(function() {
                    // after 1000 ms we add the class animated to the login/register card
                    $('#none-individual-partner-entity').fadeIn(1000);
                }, 1000);
                disableIndiviualRequiredfields();
                enableNoneIndiviualRequiredfields();
            }

            if(subtype_val == "Trust"){
                setTimeout(function() {
                    // after 1000 ms we add the class animated to the login/register card
                    fadeOutPartnerInfo();
                }, 500);
                setTimeout(function() {
                    // after 1000 ms we add the class animated to the login/register card
                    $('#none-individual-partner-entity').fadeIn(1000);
                }, 1000);
                disableIndiviualRequiredfields();
                enableNoneIndiviualRequiredfields();
            }

            if(subtype_val == "Estate"){
                setTimeout(function() {
                    // after 1000 ms we add the class animated to the login/register card
                    fadeOutPartnerInfo();
                }, 500);
                setTimeout(function() {
                    // after 1000 ms we add the class animated to the login/register card
                    $('#none-individual-partner-entity').fadeIn(1000);
                }, 1000);
                disableIndiviualRequiredfields();
                enableNoneIndiviualRequiredfields();
            }
            //saveProjectInfo("set-Owner-entity-types", "US"+"+"+subtype_val, appInternalID); // static from radio buttton
        });
});