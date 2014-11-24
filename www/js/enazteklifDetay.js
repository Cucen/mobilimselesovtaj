$(document).delegate('#enazteklifDetay', 'pageshow', function() {
 
	var id = getUrlVars()["id"];
	$.getJSON('http://localhost/esovtajlocal9/services/getarac.php?id='+id, displayenazteklifdetay);

});
var image1=new Image();
	var image2=new Image();
	var image3=new Image();
var step=1;

function displayenazteklifdetay(data) {
	
	var employee = data.item;
	console.log(employee);
$('#enazteklifDetayList li').remove();
$('#employeePic1').attr('src','pics/' + employee.image);
	
	
    $('#aracId').attr('value', ''+employee.idaraclar+'');
	$('#user').attr('value', '2');
	
	if (employee.idaraclar>0) {
		$('#enazteklifDetayList').append('<li><p>' + employee.marka + '</p>' +
				'<p style="color:orange;">' + employee.Belge_Turu + '</p></li>');
	}
	
	$('#enazteklifDetayList').append('<li><b>Araç Bilgileri</b><br></li>');
	
	if (employee.yer) {
		$('#enazteklifDetayList').append('<li><b>Bulunduğu Yer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plaka No</b>' +
				'<p>' + employee.yer + '&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+employee.Plaka_No+'</p>'+
				'<b>Dosya No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Takip No</b>' +
				'<p>' + employee.dosyaNo+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+employee.takipNo+'</p></li>');
	}

    $('#enazteklifDetayList').append('<li><b>İhale Bilgileri</b><br>');
	if (employee.ihaleNo) {
		$('#enazteklifDetayList').append('<li><b>İhale No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;İhale Bitiş Zamanı</b>' +
				'<p>' + employee.ihaleNo + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+employee.ihaleBitisi+'</p>'+
				'<b>İhale Sorumlusu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Piyasa Bedeli</b>' +
				'<p>' + employee.ihaleSorumlusu + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+employee.piyasaBedeli+'</p></li>');
	}
	$('#enazteklifDetayList').append('<li><b>Hasar Bilgileri</b><br></li>');
	if (employee.kazaSayisi) {
		$('#enazteklifDetayList').append('<li>'+ employee.sasiNo +' Sasino lu arac '+ employee.kazaSayisi +' adet kazaya karışmıştır.</li>');
		if (employee.kaza1) {
		$('#enazteklifDetayList').append('<li><p>' + employee.kaza1 + '</p></li>');
	}
	if (employee.kaza2) {
		$('#enazteklifDetayList').append('<li><p>' + employee.kaza2 + '</p></li>');
	}
	if (employee.kaza3) {
		$('#enazteklifDetayList').append('<li><p>' + employee.kaza3 + '</p></li>');
	}
	
	$('#enazteklifDetayList').append('<li><p style="color:red;"> GEÇMİŞ DÖNEME AİT TRAMER SORGUSUDUR. SON HASARA AİT TRAMER KAYITLARI DEĞİŞİKLİK GÖSTEREBİLECEĞİNDEN LÜTFEN TRAMER SORGUSU YAPARAK TEKLİF VERİNİZ.</p></li>');
	
	}

	$('#enazteklifDetayList').listview('refresh');

	
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
