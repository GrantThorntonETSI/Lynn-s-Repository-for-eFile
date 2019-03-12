$(document).ready(function(){
        // load partner div
		
		//START hide / show append partner
		$('div.addpartnership').css('display','none');
		$('fieldset#individual-partner-entity').css('display','none');
		$('fieldset#none-individual-partner-entity').css('display','none');
		$( document ).on('click','button#addpartner',function(){
			if ($('div.addpartnership').is(":visible") ){
				var resetselects = [ 'Select' ];
				var resettype = jQuery.makeArray( resetselects );
				$( 'div.addpartnership:eq(0)' ).clone().appendTo( '.appendpartner' );
				$( 'div.addpartnership' ).last().find('select').val(resetselects[0]);
				$( 'div.addpartnership' ).last().find('input').val('');
				$( 'div.addpartnership' ).last().find('#individual-partner-entity').css('display','none');
				$( 'div.addpartnership' ).last().find('#none-individual-partner-entity').css('display','none');
				$( '.appendpartner .resetpartner' ).removeClass( 'visuallyremoved' ).css('border-top','1px solid #ddd').css('margin-bottom','.4em');
				//$( this ).removeClass( '.addphoneinitial' );
			}
			
			else {
				$( 'div.addpartnership' ).show('fast');
				$( 'div.addpartnership .resetpartner' ).removeClass( 'visuallyremoved' ).css('border-top','1px solid #ddd').css('margin-bottom','.4em');
				}
			});
			$( document ).on('click','.addpartnership .resetpartnerbtn',function(){
				var resetselects = [ 'Select' ];
				var resettype = jQuery.makeArray( resetselects );
				$( 'div.addpartnership' ).find('select').val(resetselects[0]);
				$( 'div.addpartnership' ).find('input').val('');
				$( 'div.addpartnership' ).last().find('#individual-partner-entity').css('display','none');
				$( 'div.addpartnership' ).last().find('#none-individual-partner-entity').css('display','none');
				$( this ).parent().parent().hide('fast');
			});
			$( document ).on('click','.appendpartner .resetpartnerbtn',function(){
				$( this ).parent().parent().remove();
			});
		//END hide / show append partner
		$(document).on('change', '#domestic-entity-dropdown-partner', function() {
			var subtype_val = this.value;
			function fadeOutPartnerInfo(){
				$('#individual-partner-entity').hide('fast');
				$('#none-individual-partner-entity').hide('fast');
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
			if(subtype_val == "none"){
				//fade out every thing
				$(this).parent().parent().siblings().children(fadeOutPartnerInfo);
				}
			else if(subtype_val == "Individual"){
				$(this).parent().parent().siblings().children(fadeOutPartnerInfo);
				$(this).parent().parent().siblings().children('#individual-partner-entity').show('fast');
				disableNoneIndiviualRequiredfields();
				enableIndiviualRequiredfields();
				}
			else if(subtype_val == "Sole Proprietorship"){
				$(this).parent().parent().siblings().children(fadeOutPartnerInfo);
				$(this).parent().parent().siblings().children('#individual-partner-entity').show('fast');  // same owner entity fields as individual
				disableNoneIndiviualRequiredfields();
				enableIndiviualRequiredfields();
				}
			else if(subtype_val == "Limited Liability Company"){
				$(this).parent().parent().siblings().children(fadeOutPartnerInfo);
				$(this).parent().parent().siblings().children('#none-individual-partner-entity').show('fast');
				disableIndiviualRequiredfields();
				enableNoneIndiviualRequiredfields();
				}
				// same owner entity fields as individual
			else if(subtype_val == "Partnership"){
				$(this).parent().parent().siblings().children(fadeOutPartnerInfo);
				$(this).parent().parent().siblings().children('#none-individual-partner-entity').show('fast');
				disableIndiviualRequiredfields();
				enableNoneIndiviualRequiredfields();
				}
			else if(subtype_val == "Joint Venture"){
				$(this).parent().parent().siblings().children(fadeOutPartnerInfo);
				$(this).parent().parent().siblings().children('#none-individual-partner-entity').show('fast');
				disableIndiviualRequiredfields();
				enableNoneIndiviualRequiredfields();
				}
			else if(subtype_val == "Trust"){
				$(this).parent().parent().siblings().children(fadeOutPartnerInfo);
				$(this).parent().parent().siblings().children('#none-individual-partner-entity').show('fast');
				disableIndiviualRequiredfields();
				enableNoneIndiviualRequiredfields();
				}
			else if(subtype_val == "Estate"){
				$(this).parent().parent().siblings().children(fadeOutPartnerInfo);
				$(this).parent().parent().siblings().children('#none-individual-partner-entity').show('fast');
				disableIndiviualRequiredfields();
				enableNoneIndiviualRequiredfields();
				}
			//saveProjectInfo("set-Owner-entity-types", "US"+"+"+subtype_val, appInternalID); // static from radio buttton
		});
});
