$(document).delegate('#giden', 'pageshow', function() 
 {
 
	var id = getUrlVars()["id"];
	$.getJSON('http://localhost/esovtajlocal9/services/gelenmesajlarim.php?id='+id, displayGidenMesajlar);

});


function displayGidenMesajlar(data) {
	
	var employees = data.items;
	console.log(employees);
	$('#gidenmesajList li').remove();

    console.log(employees);
		
	$.each(employees, function(index, employee) {

	$('#gidenmesajList').append('<li>' + employee.giden + '</li>');
    });
	$('#gidenmesajList').listview('refresh');
	
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
