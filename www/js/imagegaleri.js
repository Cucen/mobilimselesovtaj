$('#images').bind('pageshow', function(event)
 {
	var id = getUrlVars()["id"];
	$.getJSON('http://localhost/esovtajlocal9/services/getimage.php?id='+id, displayImage);
});

function displayImage(data) {
	var employee = data.item;
	console.log(employee);	
	$('#picture1').attr('href', 'http://localhost/esovtajlocal9/www/pics/'+employee.idimages+'/' + employee.image1);
	$('#picture2').attr('href', 'http://localhost/esovtajlocal9/www/pics/'+employee.idimages+'/' + employee.image2);
	$('#picture3').attr('href', 'http://localhost/esovtajlocal9/www/pics/'+employee.idimages+'/' + employee.image3);	
	$('#employeePic1').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idimages+'/' + employee.image1);
	$('#employeePic2').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idimages+'/' + employee.image2);
	$('#employeePic3').attr('src', 'http://localhost/esovtajlocal9/www/pics/'+employee.idimages+'/' + employee.image3);	
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
