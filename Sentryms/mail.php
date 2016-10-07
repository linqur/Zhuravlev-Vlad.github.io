<?php 
if( $_POST ){
require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSMTP();

$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = ''; // логин от вашей почты
$mail->Password = ''; // пароль от почтового ящика
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';

$mail->CharSet = 'UTF-8';
$mail->From = ''; // адрес почты, с которой идет отправка
$mail->FromName = ''; // имя отправителя
$mail->addAddress('', '');

$mail->isHTML(true);

$mail->Subject = 'Тестовое письмо';
$mail->Body = "Name: {$_POST['name']}<br> Phone number: {$_POST['phone']}<br> E-mail: {$_POST['mail']}<br> Message: {$_POST['message']}";
$mail->AltBody ="Name: {$_POST['name']}\r\n Phone number: {$_POST['phone']}\r\n E-mail: {$_POST['mail']} <br> Message: {$_POST['message']}";
// $mail->SMTPDebug = 1;

if( $mail->send() ){
		$answer = '1';
	}else{
		$answer = '0';
		/*echo 'Письмо не может быть отправлено. ';
		echo 'Ошибка: ' . $mail->ErrorInfo;*/
	}
	die( $answer );

}
?>