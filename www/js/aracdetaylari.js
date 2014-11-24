$(document).delegate('#detailsPage', 'pageshow', function() {
 
	var id = getUrlVars()["id"];
	$.getJSON('http://localhost/esovtajlocal9/services/getarac.php?id='+id, displayEmployee);

});
var image1=new Image();
	var image2=new Image();
	var image3=new Image();
var step=1;

function displayEmployee(data) {
	
	var employee = data.item;
	console.log(employee);
$('#actionList li').remove();
$('#employeePic').attr('src','pics/' + employee.image);





image1.src='http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1;

image2.src='http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2;

image3.src='http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image3;
	
 
var step=1;
function slideit(){
//if browser does not support the image object, exit.
if (!document.images)
return
document.images.slide.src=eval("image"+step+".src")
if (step<3)
step++
else
step=1
//call function "slideit()" every 2.5 seconds
setTimeout("slideit()",2500)
}
window.onload = slideit();

	$('#imagelink').attr('href','http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$('#employeePic').attr('src','pics/'+employee.idaraclar+'/' + employee.image1);
	
	$('#carPic1').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$('#carPic2').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$('#carPic3').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image3);	
	$('#picture1').attr('href', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$('#picture2').attr('href', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$('#picture3').attr('href', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image3);		
	
    $('#aracId').attr('value', ''+employee.idaraclar+'');
	
	
	if (employee.idaraclar>0) {
		$('#actionList').append('<p>' + employee.marka + '<a href="#gelen?id='+document.getElementById("user").value+'" rel="external"><img src="pics/mesajbtn.jpg" align="right" id="mesajbtn"/></a>' +
				'<p style="color:orange;">' + employee.Belge_Turu + '</p></p><br><br>');
	}
	
	$('#actionList').append('<li><b>Araç Bilgileri</b></li>');
	
	if (employee.yer) {
		$('#actionList').append('<b>Bulunduğu Yer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plaka No</b>' +
				'<p>' + employee.yer + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+employee.Plaka_No+'</p>'+
				'<b>Dosya No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Takip No</b>' +
				'<p>' + employee.dosyaNo+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+employee.takipNo+'</p>');
	}

    $('#actionList').append('<li><b>İhale Bilgileri</b></li>');
	if (employee.ihaleNo) {
		$('#actionList').append('<b>İhale No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;İhale Bitiş Zamanı</b>' +
				'<p>' + employee.ihaleNo + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+employee.ihaleBitisi+'</p>'+
				'<b>İhale Sorumlusu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Piyasa Bedeli</b>' +
				'<p>' + employee.ihaleSorumlusu + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+employee.piyasaBedeli+'</p>');
	}
	$('#actionList').append('<li><b>Hasar Bilgileri</b></li>');
	if (employee.kazaSayisi) {
		$('#actionList').append('<b>'+ employee.sasiNo +' Sasino lu arac '+ employee.kazaSayisi +' adet kazaya karışmıştır.</b>');
		if (employee.kaza1) {
		$('#actionList').append('<p>' + employee.kaza1 + '</p>');
	}
	if (employee.kaza2) {
		$('#actionList').append('<p>' + employee.kaza2 + '</p>');
	}
	if (employee.kaza3) {
		$('#actionList').append('<p>' + employee.kaza3 + '</p>');
	}
	
	$('#actionList').append('<p style="color:red;"> GEÇMİŞ DÖNEME AİT TRAMER SORGUSUDUR. SON HASARA AİT TRAMER KAYITLARI DEĞİŞİKLİK GÖSTEREBİLECEĞİNDEN LÜTFEN TRAMER SORGUSU YAPARAK TEKLİF VERİNİZ.</p></li>');
	
	}
	
	  $("#detailsPage").find("thead:last").after;
	$("#detailsPage").trigger('create');	
	$('#actionList').listview('refresh');

(function(window, $, PhotoSwipe)
		{
			$(document).ready(function()
			{
				$("#gallery a").photoSwipe(
				{
					enableMouseWheel: false,
					enableKeyboard: false
				});
			});
		}(window, window.jQuery, window.Code.PhotoSwipe));
	
}



function slideit(){

//if browser does not support the image object, exit.
if (!document.images)
return
document.images.slide.src=eval("image"+step+".src")
if (step<3)
step++
else
step=1
//call function "slideit()" every 2.5 seconds
setTimeout("slideit()",2500)
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
