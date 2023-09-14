<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Proses pesan Anda di sini, seperti mengirim email atau menyimpan ke database

    // Contoh pengiriman email
    $to = "hafizmuhammad930@gmail.com";
    $subject = "Pesan dari $name";
    $headers = "From: $email";
    $message = "Telepon: $phone\n\n$message";

    if (mail($to, $subject, $message, $headers)) {
        $response = array("message" => "Pesan berhasil terkirim.");
    } else {
        $response = array("message" => "Terjadi kesalahan saat mengirim pesan.");
    }

    header("Content-Type: application/json");
    echo json_encode($response);
}
?>
