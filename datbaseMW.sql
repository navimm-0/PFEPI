DROP DATABASE IF EXISTS MathData;
CREATE DATABASE MathData;
USE MathData;

-- Tabla de usuarios
CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    contrasena_hash VARCHAR(255) NOT NULL,
    fecha_creacion DATETIME NOT NULL DEFAULT NOW(),
    ultima_sesion DATETIME DEFAULT NULL,
	tiempo_total_actividad INT DEFAULT 0
);

-- Tabla de temas
CREATE TABLE Tema (
    id_tema INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    nivel ENUM('básico', 'intermedio', 'avanzado') NOT NULL,
    id_padre INT DEFAULT NULL,
    FOREIGN KEY (id_padre) REFERENCES Tema(id_tema) ON DELETE SET NULL
);

-- Tabla de avance
CREATE TABLE Avance (
    id_usuario INT,
    id_tema INT,
    completado BOOLEAN DEFAULT FALSE,
    fecha_completado DATETIME,
    PRIMARY KEY (id_usuario, id_tema),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_tema) REFERENCES Tema(id_tema) ON DELETE CASCADE
);

-- Insertar los temas (id_tema, titulo, nivel, id_padre)
INSERT INTO Tema (id_tema, titulo, nivel, id_padre) VALUES
(1, 'Números y Conteo', 'básico', NULL),
(2, 'Conteo del 1 al 100', 'básico', 1),
(3, 'Valor posicional (unidad, decena, centena)', 'básico', 1),
(4, 'Números pares e impares', 'básico', 1),
(5, 'Examen de desempeño 1', 'básico', 1),
(6, 'Operaciones Básicas', 'básico', NULL),
(7, 'Sumas y restas con y sin llevadas', 'básico', 6),
(8, 'Problemas con suma y resta', 'básico', 6),
(9, 'Introducción a la multiplicación (repetición de sumas)', 'básico', 6),
(10, 'Tablas de multiplicar (2 al 5)', 'básico', 6),
(11, 'Examen de desempeño 2', 'básico', 6),
(12, 'Medición y Magnitudes', 'básico', NULL),
(13, 'Unidades de longitud (cm, m)', 'básico', 12),
(14, 'Medición del tiempo (hora y media hora)', 'básico', 12),
(15, 'Medición de peso y capacidad (kg, l)', 'básico', 12),
(16, 'Examen de desempeño 3', 'básico', 12),
(17, 'Figuras y Espacio', 'básico', NULL),
(18, 'Figuras geométricas básicas (cuadrado, triángulo, círculo)', 'básico', 17),
(19, 'Ubicación espacial (arriba, abajo, izquierda, derecha)', 'básico', 17),
(20, 'Examen de desempeño 4', 'básico', 17),
(21, 'Datos y Representaciones', 'básico', NULL),
(22, 'Recolección de datos simples', 'básico', 21),
(23, 'Lectura de tablas y pictogramas', 'básico', 21),
(24, 'Examen de desempeño 5', 'básico', 21),

(25, 'Números y Operaciones Avanzadas', 'intermedio', NULL),
(26, 'Números naturales grandes (hasta millones)', 'intermedio', 25),
(27, 'Multiplicación y división con números naturales', 'intermedio', 25),
(28, 'Múltiplos y divisores', 'intermedio', 25),
(29, 'Examen de desempeño 6', 'intermedio', 25),

(30, 'Fracciones y Decimales', 'intermedio', NULL),
(31, 'Concepto de fracción', 'intermedio', 30),
(32, 'Comparación y equivalencia de fracciones', 'intermedio', 30),
(33, 'Suma y resta de fracciones con igual denominador', 'intermedio', 30),
(34, 'Introducción a los decimales y su relación con fracciones', 'intermedio', 30),
(35, 'Examen de desempeño 7', 'intermedio', 30),

(36, 'Geometría y Medición', 'intermedio', NULL),
(37, 'Perímetro y área de figuras planas', 'intermedio', 36),
(38, 'Clasificación de triángulos y cuadriláteros', 'intermedio', 36),
(39, 'Uso del transportador y medidas de ángulos', 'intermedio', 36),
(40, 'Examen de desempeño 8', 'intermedio', 36),

(41, 'Proporcionalidad y Porcentajes', 'intermedio', NULL),
(42, 'Proporciones y regla de tres', 'intermedio', 41),
(43, 'Porcentajes: cálculo de descuentos y aumentos', 'intermedio', 41),
(44, 'Examen de desempeño 9', 'intermedio', 41),

(45, 'Estadística y Probabilidad', 'intermedio', NULL),
(46, 'Interpretación de gráficas de barras y circulares', 'intermedio', 45),
(47, 'Experimentos aleatorios simples', 'intermedio', 45),
(48, 'Examen de desempeño 10', 'intermedio', 45),

(49, 'Álgebra', 'avanzado', NULL),
(50, 'Expresiones algebraicas', 'avanzado', 49),
(51, 'Ecuaciones de primer grado', 'avanzado', 49),
(52, 'Uso de paréntesis y jerarquía de operaciones', 'avanzado', 49),
(53, 'Examen de desempeño 11', 'avanzado', 49),

(54, 'Funciones y Proporcionalidad', 'avanzado', NULL),
(55, 'Relaciones de proporcionalidad directa', 'avanzado', 54),
(56, 'Representación gráfica de funciones lineales', 'avanzado', 54),
(57, 'Examen de desempeño 12', 'avanzado', 54),

(58, 'Números Racionales y Reales', 'avanzado', NULL),
(59, 'Operaciones con fracciones y decimales', 'avanzado', 58),
(60, 'Números negativos y valor absoluto', 'avanzado', 58),
(61, 'Examen de desempeño 13', 'avanzado', 58),

(62, 'Geometría Analítica y Espacial', 'avanzado', NULL),
(63, 'Coordenadas cartesianas', 'avanzado', 62),
(64, 'Ángulos, triángulos y teorema de Pitágoras', 'avanzado', 62),
(65, 'Volumen de cuerpos geométricos (prismas, cilindros)', 'avanzado', 62),
(66, 'Examen de desempeño 14', 'avanzado', 62),

(67, 'Probabilidad y Estadística', 'avanzado', NULL),
(68, 'Medidas de tendencia central (media, mediana, moda)', 'avanzado', 67),
(69, 'Probabilidad clásica y frecuencias relativas', 'avanzado', 67),
(70, 'Examen de desempeño 15', 'avanzado', 67);

-- Stored procedures
DELIMITER //

CREATE PROCEDURE registrar_usuario (
    IN _nombre VARCHAR(100),
    IN _username VARCHAR(50),
    IN _contrasena_hash VARCHAR(255)
)
BEGIN
    INSERT INTO Usuario (nombre, username, contrasena_hash)
    VALUES (_nombre, _username, _contrasena_hash);
END //

CREATE PROCEDURE iniciar_sesion (
    IN _username VARCHAR(50)
)
BEGIN
    SELECT id_usuario, contrasena_hash
    FROM Usuario
    WHERE username = _username;
END //

CREATE PROCEDURE completar_tema (
    IN _id_usuario INT,
    IN _id_tema INT
)
BEGIN
    INSERT INTO Avance (id_usuario, id_tema, completado, fecha_completado)
    VALUES (_id_usuario, _id_tema, TRUE, NOW())
    ON DUPLICATE KEY UPDATE completado = TRUE, fecha_completado = NOW();
END //

CREATE PROCEDURE obtener_lecciones_completadas (
    IN _id_usuario INT
)
BEGIN
    SELECT T.id_tema, T.titulo, T.nivel, A.fecha_completado
    FROM Avance A
    JOIN Tema T ON A.id_tema = T.id_tema
    WHERE A.id_usuario = _id_usuario AND A.completado = TRUE
    ORDER BY A.fecha_completado DESC;
END //

DELIMITER ;
