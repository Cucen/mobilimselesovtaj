var serviceURL = "http://localhost/esovtajlocal9/services/";

var employees;

$('#arsivpage').bind('pageshow', function(event) {
	getarsivdetay();
	
});

function getarsivdetay() {
	$.getJSON(serviceURL + 'getArsiv.php', function(data) {
		$('#aarsivList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#aarsivList').append('<li><a href="#detailsPage?id=' + employee.idarsiv + '">' +
					'<img src="pics/' + employee.image + '"/>' +
					'<h4>' + employee.urunTanimi + ' ' + employee.modelYili + '</h4>' +
					'<p>' + employee.plakaNo + '</p>' +
					'</a></li>');
		});
		$('#aarsivList').listview('refresh');
	});
}