$(document).delegate('#arsivSayfasikazanilan', 'pageshow', function() {
	var id = getUrlVars()["id"];
	$.getJSON('http://localhost/esovtajlocal9/services/arsivkazandiklarim.php?id='+id, getarsivListKazanilan);
	
});

function getarsivListKazanilan(data) {
	
		$('#arsivListKazanilan li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#arsivListKazanilan').append('<li><a rel="external" href="#arsivDetay?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' + employee.image + '"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
		});
		$('#arsivListKazanilan').listview('refresh');
			
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
