<?php

// Connect to a database
$conn = mysqli_connect('localhost', 'root', '', 'frontend2209');

// Check for POST variable
if (isset($_POST['firstname']) && isset($_POST['lastname']) && 
    isset($_POST['email']) && isset($_POST['city']) &&
    isset($_POST['zip']) && isset($_POST['psw'])) {

  $firstname = trim($_POST['firstname']);
  $lastname = trim($_POST['lastname']);
  $email = trim($_POST['email']);
  $city = trim($_POST['city']);
  $zip = $_POST['zip'];

  $psw = trim($_POST['psw']);
  $encrypt_password = password_hash($psw, PASSWORD_DEFAULT);

  $query = "INSERT INTO users(firstname, lastname, email, city, zip, password) 
    VALUES('$firstname', '$lastname', '$email', '$city', '$zip', '$encrypt_password')";

  mysqli_query($conn, $query);
}
?>