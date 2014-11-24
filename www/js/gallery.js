
$(document).delegate('#galleryPage', 'pageshow', function() {
	var id = getUrlVars()["id"];
	$.getJSON('http://localhost/esovtajlocal9/services/getarac.php?id='+id, displayGallery);
    });

	function displayGallery(data) {
	var employee = data.item;
	$("#1").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$("#2").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$("#3").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image3);
	$("#4").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$("#5").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$("#6").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image3);
	$("#7").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$("#8").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$("#9").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$("#10").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image3);
	$("#11").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$("#img1").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$("#img2").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$("#img3").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image3);
	$("#img4").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$("#img5").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$("#img6").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image3);
	$("#img7").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);
	$("#img8").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$("#img9").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image2);
	$("#img10").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image3);
	$("#img11").attr("src", 'http://localhost/esovtajlocal9/www/pics/'+employee.idaraclar+'/' + employee.image1);

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