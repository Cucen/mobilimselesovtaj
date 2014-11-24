<?php
$con=mysqli_connect("62.248.42.56","muzeyyen","333444","esovtaj");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$sql="INSERT INTO mail (mailadresi,aracId,userId)
VALUES
('$_POST[mesajmetni]','$_POST[aracId1]','$_POST[user1]')";

if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }
 else{
echo 'Mesajiniz Alindi';

}
mysqli_close($con);
?>