$(document).delegate('#detailDosyaPage', 'pageshow', function() {
	var id = getUrlVars()["id"];
	if (!$("input[value='choice-1']").is(':checked')) {
    $.getJSON('http://localhost/esovtajlocal9/services/aramadosyano.php?id='+id, displaydosya);
   }
   else if (!$("input[value='choice-2']").is(':checked'))  {
   $.getJSON('http://localhost/esovtajlocal9/services/aramatakipno.php?id='+id, displaydosya);
    } 
	else if (!$("input[value='choice-3']").is(':checked')){
	var plakano = getUrlVars()["plakaNo"];
	$.getJSON('http://localhost/esovtajlocal9/services/aramaplakano.php?plakano='+plakano, displaydosya);
	}
 
});

function displaydosya(data) {
   $('#dosyadetaylist li').remove();
	$('#dosyadetaylist li').remove();
	$('#dosyacarpic src').remove();

	var employee = data.item;
	console.log(employee);
	$('#dosyacarpic').attr('src','pics/' + employee.image);
	$('#carPicDosya1').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$('#carPicDosya2').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$('#carPicDosya3').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image3);		
    $('#aracIdDosya').attr('value', ''+employee.idaraclar+'');
		
	$('#dosyadetaylist').append('<li><p>' + employee.marka + '<a href="#gelen?id='+document.getElementById("user").value+'" rel="external"><img src="pics/mesajbtn.jpg" align="right" id="mesajbtn"/></a>' +
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
		$('#dosyadetaylist').append('<li><p>' + employee.kaza1 + '</p></li>');
	}
	if (employee.kaza2) 
	{
		$('#dosyadetaylist').append('<li><p>' + employee.kaza2 + '</p></li>');
	}
	if (employee.kaza3) 
	{
		$('#dosyadetaylist').append('<li><p>' + employee.kaza3 + '</p></li>');
	}

	$('#dosyadetaylist').append('<li>' +
					'<h4>İhale Sorumlusu</h4><hr>' +
					'<p>' + employee.kisiAdi + '</p>' +
					'<p>' + employee.telefon + '</p>' +
					'<p>' + employee.adres + '</p>' +
					'</a></li>');	
					
	$('#dosyadetaylist').append('<div data-role="content"><li><p style="color:red;"> GEÇMİŞ DÖNEME AİT TRAMER SORGUSUDUR. SON HASARA AİT TRAMER KAYITLARI DEĞİŞİKLİK GÖSTEREBİLECEĞİNDEN LÜTFEN TRAMER SORGUSU YAPARAK TEKLİF VERİNİZ.</p></li></div>');

	$('#dosyadetaylist').listview('refresh');
	
	
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
