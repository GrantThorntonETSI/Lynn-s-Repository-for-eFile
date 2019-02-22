$(document).ready(function(){
//start nameoftypeofbusiness options
	$( 'div#nametype' ).css('display','none');
	$( '#type' ).on('change',function(){
		$( 'div#nametype' ).show( 'fast' );
	});
//START additional phone rev
$( document ).on('click','button#addphone2',function(){	
	$( '.phones' ).first().clone().appendTo( '#appendphones' );
	$( '.phones' ).last().find('input').val('');
	$( '#appendphones .resetphone2' ).removeClass( 'visuallyremoved' );
	$( this ).removeClass( '.addphoneinitial' );
	});
	$( document ).on('click','.resetphonebtn',function(){
		$( this ).parent().parent().parent().remove();
	});
//END additional phone rev
//start nameoftypeofbusiness options
//START fill from contacts values -- owner information
function clearform() {
	  $( 'input#ownername' ).val( '' );
	  $( 'input#firstname' ).val( '' );
	  $( 'input#lastname' ).val( '' );
	  $( '#countryofcitizenship' ).val( '' );
	  $( 'input#addressline1' ).val( '');
	  $( 'input#attorney-lawfirm-name' ).val( '' );
	  $( '#attorney-country' ).val( '' );
	  $( '#attorney-country' ).val( );
	  $( 'input#attorney-address1' ).val( '' );
	  $( 'input#addressline2' ).val( '' );
	  $( 'input#city' ).val('' );
	  $( '#state' ).val( '' );
	  $( 'input#zipcode' ).val( '' );
	  $( 'input#email' ).val( '');
	  $( '#phonenumbertype' ).val( '' );
	  $( 'input#phonenumber' ).val( '' );
	  $( '#mydata2' ).find('span.glyphicon-ok-sign').removeClass( 'glyphicon-ok-sign' ).parent().parent().css('background-color','#9BB8D3').siblings().css('background-color','#9BB8D3');
	}
	$( "a#clearform" ).click(clearform);
	$( "a#jacob" ).on('click',function() {
		var arrctry = [ 'United States', 'Canada' ];
		var arrstate = [ 'Virginia', 'Maryland', 'North Carolina' ];
		var arrphone = [ 'Cell', 'Home', 'Work', 'Fax' ];
		$( 'input#ownername' ).val( 'Jacob Goldstein' );
		$( 'input#firstname' ).val( 'Jacob' );
		$( 'input#lastname' ).val( 'Goldstein' );
		$( '#countryofcitizenship' ).val( arrctry,2 );
		$( 'input#addressline1' ).val( '333 John Carlyle St # 500' );
		$( 'input#addressline2' ).val( '# 500' );
		$( 'input#city' ).val( 'Alexandria' );
		$( '#state' ).val( arrstate,0 );
		$( 'input#zipcode' ).val( '22314' );
		$( 'input#email' ).val( 'jacob@us.gt.com' );
		$( '#phonenumbertype' ).val( arrphone,2 );
		$( 'input#phonenumber' ).val( '571-444-1983' );
	});
	$( "a#jackie" ).on('click',function() {
		var arrctry = [ 'United States', 'Canada' ];
		var arrstate = [ 'Virginia', 'Maryland', 'North Carolina' ];
		var arrphone = [ 'Cell', 'Home', 'Work', 'Fax' ];
		$( 'input#firstname' ).val( 'Jackie' );
		$( 'input#ownername' ).val( 'Jackie Babos' );
		$( 'input#lastname' ).val( 'Babos' );
		$( '#countryofcitizenship' ).val( arrctry,2 );
		$( 'input#addressline1' ).val( '333 John Carlyle St # 500' );
		$( 'input#addressline2' ).val( '# 500' );
		$( 'input#city' ).val( 'Alexandria' );
		$( '#state' ).val( arrstate,0 );
		$( 'input#zipcode' ).val( '22314' );
		$( 'input#email' ).val( 'jackie@us.gt.com' );
		$( '#phonenumbertype' ).val( arrphone,2 );
		$( 'input#phonenumber' ).val( '571-444-1983' );
	});
	$( "a#avo" ).on('click',function() {
		var arrctry = [ 'United States', 'Canada' ];
		var arrstate = [ 'Virginia', 'Maryland', 'North Carolina' ];
		var arrphone = [ 'Cell', 'Home', 'Work', 'Fax' ];
		$( 'input#ownername' ).val( 'Avo Reid' );
		$( 'input#firstname' ).val( 'Avo' );
		$( 'input#lastname' ).val( 'Reid' );
		$( '#countryofcitizenship' ).val( arrctry,2 );
		$( 'input#addressline1' ).val( '333 John Carlyle St # 500' );
		$( 'input#addressline2' ).val( '# 500' );
		$( 'input#city' ).val( 'Alexandria' );
		$( '#state' ).val( arrstate,0 );
		$( 'input#zipcode' ).val( '22314' );
		$( 'input#email' ).val( 'avo@us.gt.com' );
		$( '#phonenumbertype' ).val( arrphone,2 );
		$( 'input#phonenumber' ).val( '571-444-1983' );
	});
	$( "a#li" ).on('click',function() {
		var arrctry = [ 'United States', 'Canada' ];
		var arrstate = [ 'Virginia', 'Maryland', 'North Carolina' ];
		var arrphone = [ 'Cell', 'Home', 'Work', 'Fax' ];
		$( 'input#ownername' ).val( 'Li Zhang' );
		$( 'input#firstname' ).val( 'Li' );
		$( 'input#lastname' ).val( 'Zhang' );
		$( '#countryofcitizenship' ).val( arrctry,2 );
		$( 'input#addressline1' ).val( '333 John Carlyle St # 500' );
		$( 'input#addressline2' ).val( '# 500' );
		$( 'input#city' ).val( 'Alexandria' );
		$( '#state' ).val( arrstate,0 );
		$( 'input#zipcode' ).val( '22314' );
		$( 'input#email' ).val( 'li@us.gt.com' );
		$( '#phonenumbertype' ).val( arrphone,2 );
		$( 'input#phonenumber' ).val( '571-444-1983' );
	});
	$( "a#lynn" ).on('click',function() {
		var arrctry = [ 'United States', 'Canada' ];
		var arrstate = [ 'Virginia', 'Maryland', 'North Carolina' ];
		var arrphone = [ 'Cell', 'Home', 'Work', 'Fax' ];
		$( 'input#ownername' ).val( 'Lynn Stanikmas' );
		$( 'input#firstname' ).val( 'Lynn' );
		$( 'input#lastname' ).val( 'Stanikmas' );
		$( '#countryofcitizenship' ).val( arrctry,2 );
		$( 'input#addressline1' ).val( '333 John Carlyle St # 500' );
		$( 'input#addressline2' ).val( '# 500' );
		$( 'input#city' ).val( 'Alexandria' );
		$( '#state' ).val( arrstate,0 );
		$( 'input#zipcode' ).val( '22314' );
		$( 'input#email' ).val( 'lynn@us.gt.com' );
		$( '#phonenumbertype' ).val( arrphone,2 );
		$( 'input#phonenumber' ).val( '571-444-1983' );
	});
	$( "a#sarah" ).on('click',function() {
		var arrctry = [ 'United States', 'Canada' ];
		var arrstate = [ 'Virginia', 'Maryland', 'North Carolina' ];
		var arrphone = [ 'Cell', 'Home', 'Work', 'Fax' ];
		$( 'input#ownername' ).val( 'Sarah Sara' );
		$( 'input#firstname' ).val( 'Sarah' );
		$( 'input#lastname' ).val( 'Sara' );
		$( '#countryofcitizenship' ).val( arrctry,2 );
		$( 'input#addressline1' ).val( '333 John Carlyle St # 500' );
		$( 'input#addressline2' ).val( '# 500' );
		$( 'input#city' ).val( 'Alexandria' );
		$( '#state' ).val( arrstate,0 );
		$( 'input#zipcode' ).val( '22314' );
		$( 'input#email' ).val( 'sarah@us.gt.com' );
		$( '#phonenumbertype' ).val( arrphone,2 );
		$( 'input#phonenumber' ).val( '571-444-1983' );
	});
//END fill from contacts values -- owner information
});
