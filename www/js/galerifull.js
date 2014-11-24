$(document).delegate('#galleryFullScreen', 'pageshow', function() {
	var id = getUrlVars()["id"];
	$.getJSON('http://localhost/esovtajlocal9/services/getarac.php?id='+id, displayFullScreen);
    });

	function displayFullScreen(data) {
	var employee = data.item;
	console.log(employee);	
	$('#carPicFull1').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$('#carPicFull2').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$('#carPicFull3').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image3);	
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
