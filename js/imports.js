$(document).ready(function(){
//start nameoftypeofbusiness options
	$( 'div#nametype' ).css('display','none');
	$( '#type' ).on('change',function(){
		$( 'div#nametype' ).show( 'fast' );
	});
//START additional phone
	var $append = $( ".appendto" );
	$("button#clonephone").one('click',function(){
		$append = $append.prev();
	  	$( $append ).clone().appendTo('.phone');
	});
//END additional phone
//start nameoftypeofbusiness options
//START fill from contacts values -- owner information
	$( "a#jacob" ).on('click',function() {
		var arrctry = [ 'United States', 'Canada' ];
		var arrstate = [ 'Virginia', 'Maryland', 'North Carolina' ];
		var arrphone = [ 'Cell', 'Home', 'Work', 'Fax' ];
		$('input#firstname').val( 'Jacob' );
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
		$('input#firstname').val( 'Jackie' );
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
		$('input#firstname').val( 'Avo' );
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
		$('input#firstname').val( 'Li' );
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
		$('input#firstname').val( 'Lynn' );
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
		$('input#firstname').val( 'Sarah' );
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
