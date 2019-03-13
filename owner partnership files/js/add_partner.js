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
		
		//START hide /show + require / not require by selection
		$(document).on('change', '#domestic-entity-dropdown-partner', function() {
			var subtype_val = this.value;
			var thiselect = $(this);
			var individualpartnerentity = $('fieldset#individual-partner-entity');
			var individualpartnerentitynoneinputs = $('fieldset#none-individual-partner-entity input, fieldset#none-individual-partner-entity select');
			var individualpartnerentityinputs = $('fieldset#individual-partner-entity input, fieldset#individual-partner-entity select');
			var individualpartnerentitynone = $('fieldset#none-individual-partner-entity');
			var child = $( thiselect ).parent().parent().next('div').find( individualpartnerentity );
			var childtwo = $( thiselect ).parent().parent().next('div').find( individualpartnerentitynone );
			var fadetwo = {};
			var fadeone = {};
			$(function(){
				var fadeOutPartnerInfo = function(){
					$(child).hide('fast');
					$(individualpartnerentitynoneinputs).prop("required", true);
					$(individualpartnerentityinputs).prop("required", false);
					};
				var fadeOutPartnerInfoNone = function(){
					$(childtwo).hide('fast');
					$(individualpartnerentityinputs).prop("required", true);
					$(individualpartnerentitynoneinputs).prop("required", false);
					};
				fadetwo = fadeOutPartnerInfo;
				fadeone = fadeOutPartnerInfoNone;
			});
			if(subtype_val == "none"){
				//fade out every thing
				fadetwo();
				fadeone();
				}
			else if(subtype_val == "Individual"){
				fadeone();
				$(this).parent().parent().siblings().children('#individual-partner-entity').show('fast');
				}
			else if(subtype_val == "Sole Proprietorship"){
				fadeone();
				$(this).parent().parent().siblings().children('#individual-partner-entity').show('fast');  // same owner entity fields as individual
				}
			else if(subtype_val == "Limited Liability Company"){
				fadetwo();
				$(this).parent().parent().siblings().children('#none-individual-partner-entity').show('fast');
				}
				// same owner entity fields as individual
			else if(subtype_val == "Partnership"){
				fadetwo();
				$(this).parent().parent().siblings().children('#none-individual-partner-entity').show('fast');
				}
			else if(subtype_val == "Joint Venture"){
				fadetwo();
				$(this).parent().parent().siblings().children('#none-individual-partner-entity').show('fast');
				}
			else if(subtype_val == "Trust"){
				fadetwo();
				$(this).parent().parent().siblings().children('#none-individual-partner-entity').show('fast');
				}
			else if(subtype_val == "Estate"){
				fadetwo();
				$(this).parent().parent().siblings().children('#none-individual-partner-entity').show('fast');
				}
			//saveProjectInfo("set-Owner-entity-types", "US"+"+"+subtype_val, appInternalID); // static from radio buttton
		});
		//END hide /show + require / not require by selection
});
