var serviceURL = "http://localhost/esovtajlocal9/services/";

var employees;

 $(document).delegate('#employeeListPage', 'pageshow', function() {
	getEmployeeList();

});

function getEmployeeList() {

$("select").bind ("change", function (event)
{
  var type = $(this).val ();
  
    if(type == "1")
  {
      $.getJSON('http://localhost/esovtajlocal9/services/getaraclararfiyatagoreartan.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
	});
  }
  
  if(type == "2")
  {
      $.getJSON('http://localhost/esovtajlocal9/services/getaraclarFiyataGoreAzalan.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a  rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
	
		$('#employeeList').listview('refresh');
	});
  }
   if(type == "3")
  {
      $.getJSON('http://localhost/esovtajlocal9/services/getaraclarakaryakit.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a  rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
	
		$('#employeeList').listview('refresh');
	});
  }
   if(type == "4")
  {
      $.getJSON('http://localhost/esovtajlocal9/services/getaraclaramarka.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a  rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
	
		$('#employeeList').listview('refresh');
	});
  }
   if(type == "5")
  {
      $.getJSON('http://localhost/esovtajlocal9/services/getaraclarmodel.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
				$('#employeeList').append('<li data-icon="false"><a  rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
	
		$('#employeeList').listview('refresh');
	});
  }	
		
 if(type == "6")
  {
      $.getJSON('http://localhost/esovtajlocal9/services/getaraclarvitesturu.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a  rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
	
		$('#employeeList').listview('refresh');
	});
  }
 if(type == "7")
  {
      $.getJSON('http://localhost/esovtajlocal9/services/getaraclarencokteklifalanlar.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a  rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
	
		$('#employeeList').listview('refresh');
	});
  }
  if(type == '8')
  {
	$.getJSON('http://localhost/esovtajlocal9/services/getaraclar.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a  rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
	
		$('#employeeList').listview('refresh');
	});
  }
if(type == "9")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/calinti.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "10")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/belgeturu.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external"  href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "11")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/hurda.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "12")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/millilestirilmis.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "13")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/Plakali.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == '14')
  {
	$.getJSON('http://localhost/esovtajlocal9/services/getaraclar.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a  rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
	
		$('#employeeList').listview('refresh');
	});
  }
	
	 if(type == "15")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/kamyonet.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "16")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/husui.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "17")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/cekici.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "18")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/ismakinasi.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "19")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/otobus.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "20")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/taksi.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "21")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/traktor.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == '22')
  {
	$.getJSON('http://localhost/esovtajlocal9/services/getaraclar.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a  rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
	
		$('#employeeList').listview('refresh');
	});
  }
	
	if(type == "23")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/markaastra.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "24")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/markaaudi.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "25")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/markaopel.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "26")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/markabmw.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "27")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/markaVolkswagen.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "28")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/markaford.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "29")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/markatofas.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == '30')
  {
	$.getJSON('http://localhost/esovtajlocal9/services/getaraclar.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a  rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
	
		$('#employeeList').listview('refresh');
	});
  }
	
	 if(type == "31")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/yakitdizel.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "32")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/yakitbenzin.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == '33')
  {
	$.getJSON('http://localhost/esovtajlocal9/services/getaraclar.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a  rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
	
		$('#employeeList').listview('refresh');
	});
  }
	
	 if(type == "34")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/vitesmanuel.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}
	if(type == "35")
	{
      $.getJSON('http://localhost/esovtajlocal9/services/vitesotomatik.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
		
		$('#employeeList').listview('refresh');
		});
	}

});

       $.getJSON('http://localhost/esovtajlocal9/services/getaraclar.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			$('#employeeList').append('<li data-icon="false"><a  rel="external" href="#detailsPage?id=' + employee.idaraclar + '">' +
					'<img widht="120" height="90" src="pics/' +  employee.image + '"/><img class="staricon" widht="40" height="40" align="right" src="pics/star.jpg"/>' +
					'<h4>' + employee.marka + ' ' + employee.yer + '</h4>' +
					'<p>' + employee.Belge_Turu + '</p>' +
					'</a></li>');
			
		});
	
		$('#employeeList').listview('refresh');
	});
	
   	
	 $('#employeeList').listview('refresh');
}

