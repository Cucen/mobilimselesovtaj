 $(document).delegate('#arsivDetay', 'pageshow', function() {
	var id = getUrlVars()["id"];
	$.getJSON('http://localhost/esovtajlocal9/services/getArsivId.php?id='+id, displayArsiv);
});

function displayArsiv(data) {
    $('#arsivDetayList li').remove();
	var employee = data.item;
	console.log(employee);
	$('#arsivPic').attr('src', 'pics/' + employee.image);

	$('#imagelink3').attr('href','#galleryPage?id='+employee.idaraclar);
	$('#imagelink4').attr('href','#galleryPage?id='+employee.idaraclar);
	$('#imagelink5').attr('href','#galleryPage?id='+employee.idaraclar);
	$('#employeePic').attr('src','pics/'+employee.idaraclar+'/' + employee.image1);
	$('#carPicA1').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$('#carPicA2').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$('#carPicA3').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image3);	
	$('#arsivDetayList').append('<li><p>' + employee.marka +
				'<p style="color:orange;">' + employee.Belge_Turu + '</p>'+
	'<hr><b>Araç Bilgileri</b><hr>'+
	'<b>Bulunduğu Yer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plaka No</b>' +
	'<p>' + employee.yer + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+employee.Plaka_No+'</p>'+
	'<b>Dosya No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Takip No</b>' +
	'<p>' + employee.dosyaNo+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+employee.takipNo+'</p>'+
	'<hr><b>İhale Bilgileri</b><hr>'+
	'<b>İhale No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;İhale Bitiş Zamanı</b>' +
	'<p>' + employee.ihaleNo + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+employee.ihaleBitisi+'</p>'+
	'<b>İhale Sorumlusu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Piyasa Bedeli</b>' +
	'<p>' + employee.ihaleSorumlusu + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+employee.piyasaBedeli+'</p>'+
	'<hr><b>Hasar Bilgileri</b><hr>'+
	'<p>'+ employee.sasiNo +' Sasino lu arac '+ employee.kazaSayisi +' adet kazaya karışmıştır.</p>');
	if (employee.kaza1) 
	{
		$('#arsivDetayList').append('<li><p>' + employee.kaza1 + '</p></li>');
	}
	if (employee.kaza2) 
	{
		$('#arsivDetayList').append('<li><p>' + employee.kaza2 + '</p></li>');
	}
	if (employee.kaza3) 
	{
		$('#arsivDetayList').append('<li><p>' + employee.kaza3 + '</p></li>');
	}

	$('#arsivDetayList').append('<li>' +
					'<h4>İhale Sorumlusu</h4><hr>' +
					'<p>' + employee.kisiAdi + '</p>' +
					'<p>' + employee.telefon + '</p>' +
					'<p>' + employee.adres + '</p>' +
					'</a></li>');
		
	$('#arsivDetayList').listview('refresh');

	
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
