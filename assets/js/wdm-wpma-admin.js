( function ( $ ) {
	"use strict";

	var $doc = $( document );

	// select/deselect all table rows
	$doc.on( "click", ".wdm-wpma-select-all", function () {
		var checked = this.checked;
		$( "table[class*=\'mail-queue_page\'] input[name=\'id[]\'],.wdm-wpma-select-all" ).each( function () {
			this.checked = checked;
		});
	});

}) ( jQuery );
