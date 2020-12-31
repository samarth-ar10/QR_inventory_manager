var stop_flag = 0;
function docReady(fn) {
// see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    		setTimeout(fn, 1);
    } else {
            document.addEventListener("DOMContentLoaded", fn);
    }
}
docReady(function () {
    var resultContainer = document.getElementById('qr-reader-results');
    var lastResult, countResults = 0;
    function onScanSuccess(qrCodeMessage) {
        if (qrCodeMessage !== lastResult && stop_flag == 0 ) {
            ++countResults;
            lastResult = qrCodeMessage;
            resultContainer.innerHTML += `<div>${qrCodeMessage}</div>`;
            stop_flag = 1;
            console.log("stop_flag - " + stop_flag);
			html5QrCode.stop().then(ignore => {
  // QR Code scanning is stopped.
  			console.log("QR Code scanning stopped.");
			}).catch(err => {
  // Stop failed, handle it.
  			console.log("Unable to stop scanning.");
			});
		}
    }
	var html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 250 });
        html5QrcodeScanner.render(onScanSuccess);
});
function edit_name( ele ){
    window.localStorage.setItem("Name", ele.value);
    document.getElementById("em-name").innerHTML = ele.value;
}

function take_device(){
    var qr_result = document.getElementById("qr-reader-results");
    var em_name = document.getElementById("em-name");
    var date = document.getElementById("current_date");
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1/QR_inventory_manager/page_management/sql_connect.php",
        data: "item="+qr_result+"&name="+em_name+"&date="+date,
    }).done(function( msg ) {
        alert( "Data Saved: " + msg );
    });
}
function submit_device(){
    var qr_result = document.getElementById("qr-reader-results");
    var em_name = document.getElementById("em-name");
    var date = document.getElementById("current_date");
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1/QR_inventory_manager/page_management/sql_connect.php",
        data: "item="+qr_result+"&name="+em_name+"&date="+date,
    }).done(function( msg ) {
        alert( "Data Saved: " + msg );
    });
}





