$(document).delegate('#teklifDetay', 'pageshow', function() {
	var id = getUrlVars()["id"];
	$.getJSON('http://localhost/esovtajlocal9/services/getteklifdetay.php?id='+id, displayTeklif);
});

function displayTeklif(data) {
    $('#teklifDetayList li').remove();
	var employee = data.item;
	console.log(employee);
	$('#arsivPic').attr('src', 'pics/' + employee.image);
    
	$('#teklifDetayList').append('<li><h3>Teklif Fiyatı</h3>' +
				'<p>' + employee.teklifFiyati + '</p></li>');
	
	if (employee.takipNo>0) {
		$('#teklifDetayList').append('<li><h3>Takip No</h3>' +
				'<p>' + employee.takipNo + '</p></li>');
	}
		
	
	if (employee.yer) {
		$('#teklifDetayList').append('<li><h3>Bulunduğu Yer</h3>' +
				'<p>' + employee.yer +'</p></li>');
	}
	
	$('#teklifDetayList').append('<li><h3>Marka</h3>' +
				'<p>' + employee.marka + '</p></li>');
	
	$('#teklifDetayList').append('<li><h3>Belge Türü</h3>' +
				'<p>' + employee.Belge_Turu + '</p></li>');
	
	$('#teklifDetayList').append('<li><h3>Kullanım Tarzı</h3>' +
				'<p>' + employee.Kullanim_Tarzi + '</p></li>');
	
	$('#teklifDetayList').append('<li><h3>Model Yılı</h3>' +
				'<p>' + employee.Model_Yili + '</p></li>');
	
	$('#teklifDetayList').append('<li><h3>KM</h3>' +
				'<p>' + employee.KM + '</p></li>');
	
	$('#teklifDetayList').append('<li><h3>Renk</h3>' +
				'<p>' + employee.Renk + '</p></li>');
	
	$('#teklifDetayList').append('<li><h3>Yakıt Türü</h3>' +
				'<p>' + employee.Yakit_Turu + '</p></li>');

			
	$('#teklifDetayList:visible').listview('refresh');

	
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
