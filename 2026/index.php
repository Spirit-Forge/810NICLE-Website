<?php
// Path to log file.
$logFile = __DIR__ . '/access.json';

// Get real client IP (handles Cloudflare headers).
if (isset($_SERVER['HTTP_CF_CONNECTING_IP'])) {
    $ip = $_SERVER['HTTP_CF_CONNECTING_IP'];
} elseif (isset($_SERVER['HTTP_CF_CONNECTING_IPV6'])) {
    $ip = $_SERVER['HTTP_CF_CONNECTING_IPV6'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}

// Create log entry.
$entry = [
    'timestamp'  => date('c'),
    'ip'         => $ip,
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown',
];

// Read existing log data or initialize empty array.
$logData = [];
if (file_exists($logFile)) {
    $existingData = file_get_contents($logFile);
    $logData = json_decode($existingData, true) ?: [];
}

// Add new entry.
$logData[] = $entry;

// Write back to file as proper JSON array.
file_put_contents($logFile, json_encode($logData, JSON_PRETTY_PRINT), LOCK_EX);

// Redirect to homepage.
header('Location: https://810nicleday.com/');
exit;
