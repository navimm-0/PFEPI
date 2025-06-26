<?php
session_start();
require_once("conexion.php");

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['id_usuario'])) {
    http_response_code(401);
    echo json_encode(['error' => 'No autorizado.']);
    exit();
}

$id_usuario = $_SESSION['id_usuario'];

try {
    $stmt = $conn->prepare("CALL obtener_lecciones_completadas(?)");
    $stmt->execute([$id_usuario]);
    $temas = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($temas);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error en la base de datos']);
}
?>
