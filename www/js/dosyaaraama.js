var serviceURL = "http://localhost/esovtajlocal9/services/";

var employees;


$('#dosyaaara').live('pageinit', function(event) {
	getDosyaNo();
	
});

function getDosyaNo() {
	
		$('#dosyaaralist li').remove();
	
			$('#dosyaaralist').append('<li>'+
				
			'<fieldset data-role="controlgroup">' +
	
     	'<input type="radio" name="radio-choice" id="radio-choice-1" value="choice-1" />' +
     	'<label for="radio-choice-1">Takip No:</label><br>' +

     	'<input type="radio" name="radio-choice" id="radio-choice-2" value="choice-2"  />' +
     	'<label for="radio-choice-2">Dosya No:</label><br>' +

     	'<input type="radio" name="radio-choice" id="radio-choice-3" value="choice-3"  />' +
     	'<label for="radio-choice-3">Plaka No:</label><br><li>');
		$('#dosyaaralist').append('<li>'+
		'<input type="text" id="dosyaId" name="dosyaId" value=""></input><li>');
		$('#dosyaaralist').append('<li>'+
	    '<a href="#detailDosyaPage?id='+document.getElementById("dosyaId").value+'"><button id="arabtn" data-theme="a">Sorgula</button></a><li>');

   ' </fieldset>	' +	
					
		
		$('#dosyaaralist').listview('refresh');
	
}
