$('#girissayfa').click(function(){

	
   $.getJSON('http://localhost/esovtajlocal9/services/getusers.php', function(data) {

		employees = data.items;
		$('#employeeList li').remove();
		$.each(employees, function(index, employee) {
		
			if(( document.getElementById('txtUser').value==employee.username && document.getElementById('txtPass').value==employee.password) ){
				window.open("anasayfa.html","_self");
			
			}
			else
			{
				alert("Kullanıcı Adı ya da Parola Yanlış")/*displays error message*/
			}
});
			
		});
	
	
	}); 


