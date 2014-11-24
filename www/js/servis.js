var serviceURL = "http://localhost/esovtajlocal/services/";

 $(document).delegate('#pagetwo', 'pageshow', function() {
var id = getUrlVars()["id"];
	$.getJSON('http://localhost/esovtajlocal9/services/getarac.php?id='+id, getservisDetay);	
});

function getservisDetay(data) {
		$('#servisDetay li').remove();
		var employee = data.item;
	    console.log(employee);
		
			$('#servisDetay').append('<li>' +
					'<h4>İhale Sorumlusu</h4><hr>' +
					'<p>' + employee.kisiAdi + '</p>' +
					'<p>' + employee.telefon + '</p>' +
					'<p>' + employee.adres + '</p>' +
					'</a></li>');
		
		$('#servisDetay').listview('refresh');

}

function getUrlVars() {

    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}