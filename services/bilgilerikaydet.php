<?php
$con=mysqli_connect("localhost","root","","mobilimsel");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
$sql="INSERT INTO kullanicilar (adi,soyadi,kullanici_adi,parola,dogumtarihi,dogumyeri,tckimlikno,telefonno)
VALUES
('$_POST[txtAd]','$_POST[txtSoyad]','$_POST[txtKullaniciAd]','$_POST[txtKullaniciParola]','$_POST[dogumtarihi]','$_POST[dogumyeri]','$_POST[txtTcKimlikNo]','$_POST[txttelefonNo]')";

if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }
 else{
echo 'Kayýt Ýþlemi Tamamlandý...';

}
mysqli_close($con);
?>