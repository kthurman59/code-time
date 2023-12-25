<?php
// Include the file with your database connection logic
require_once('db_connection.php');

// Fetch a random JavaScript problem
$sql = "SELECT * FROM JavaScriptProblems ORDER BY RAND() LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of the random problem
    $row = $result->fetch_assoc();
    echo json_encode(["problem_statement" => $row["problem_statement"]]);
} else {
    echo json_encode(["error" => "No problems found"]);
}
?>
