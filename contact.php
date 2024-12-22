<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $name = $data['name'];
    $email = $data['email'];
    $subject = $data['subject'];
    $message = $data['message'];
    
    $to = "your.email@example.com"; // Replace with your email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    $emailBody = "
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong></p>
        <p>$message</p>
    ";
    
    $success = mail($to, "New Contact Form Submission: $subject", $emailBody, $headers);
    
    if ($success) {
        http_response_code(200);
        echo json_encode(['message' => 'Email sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Failed to send email']);
    }
}
?>
