$(document).delegate('#gelen', 'pageshow', function() 
 {
 
	var id = getUrlVars()["id"];
	$.getJSON('http://localhost/esovtajlocal9/services/gelenmesajlarim.php?id='+id, displayGelenMesajlar);

});


function displayGelenMesajlar(data) {
	
	var employees = data.items;
	console.log(employees);
	$('#gelenmesajList li').remove();
	
	$.each(employees, function(index, employee) {
	$('#gelenmesajList').append('<li>' + employee.gelen + '</li>');
	});
	$('#gelenmesajList').listview('refresh');
	
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
