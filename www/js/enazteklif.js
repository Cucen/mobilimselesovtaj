$(document).delegate('#enazteklifSayfasi', 'pageshow', function() {
	getazteklifList();
	
});

function getazteklifList() {
	$.getJSON('http://localhost/esovtajlocal9/services/enazteklif.php', function(data) {
		$('#enazteklifList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#enazteklifList').append('<li><a rel="external" href="#enazteklifDetay?id=' + employee.idaraclar + '">' +
					'<img  widht="120" height="90" src="pics/' + employee.image + '"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
		});
		$('#enazteklifList').listview('refresh');
		
	});
	
}