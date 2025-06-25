DROP DATABASE IF EXISTS MathData;
CREATE DATABASE MathData;
USE MathData;

-- Tabla de usuarios
CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    correo VARCHAR(60) UNIQUE NOT NULL,
    contrasena_hash VARCHAR(255) NOT NULL,
    fecha_creacion DATETIME NOT NULL DEFAULT NOW(),
    ultima_sesion DATETIME DEFAULT NULL,
	tiempo_total_actividad INT DEFAULT 0
);

-- Tabla de temas
CREATE TABLE Tema (
    id_tema INT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    nivel VARCHAR(20) NOT NULL,
    id_padre INT,
    numero VARCHAR(10),
    FOREIGN KEY (id_padre) REFERENCES Tema(id_tema)
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
INSERT INTO Tema (id_tema, titulo, nivel, id_padre, numero) VALUES
(1, 'Números y Conteo', 'básico', NULL, '1'),
(2, 'Conteo del 1 al 100', 'básico', 1, '1.1'),
(3, 'Valor posicional (unidad, decena, centena)', 'básico', 1, '1.2'),
(4, 'Números pares e impares', 'básico', 1, '1.3'),
(5, 'Examen de desempeño 1', 'básico', 1, 'Ex1'),

(6, 'Operaciones Básicas', 'básico', NULL, '2'),
(7, 'Sumas y restas con y sin llevadas', 'básico', 6, '1.4'),
(8, 'Problemas con suma y resta', 'básico', 6, '1.5'),
(9, 'Introducción a la multiplicación (repetición de sumas)', 'básico', 6, '1.6'),
(10, 'Tablas de multiplicar (2 al 5)', 'básico', 6, '1.7'),
(11, 'Examen de desempeño 2', 'básico', 6, 'Ex2'),

(12, 'Medición y Magnitudes', 'básico', NULL, '3'),
(13, 'Unidades de longitud (cm, m)', 'básico', 12, '1.8'),
(14, 'Medición del tiempo (hora y media hora)', 'básico', 12, '1.9'),
(15, 'Medición de peso y capacidad (kg, l)', 'básico', 12, '1.10'),
(16, 'Examen de desempeño 3', 'básico', 12, 'Ex3'),

(17, 'Figuras y Espacio', 'básico', NULL, '4'),
(18, 'Figuras geométricas básicas (cuadrado, triángulo, círculo)', 'básico', 17, '1.11'),
(19, 'Ubicación espacial (arriba, abajo, izquierda, derecha)', 'básico', 17, '1.12'),
(20, 'Examen de desempeño 4', 'básico', 17, 'Ex4'),

(21, 'Datos y Representaciones', 'básico', NULL, '5'),
(22, 'Recolección de datos simples', 'básico', 21, '1.13'),
(23, 'Lectura de tablas y pictogramas', 'básico', 21, '1.14'),
(24, 'Examen de desempeño 5', 'básico', 21, 'Ex5'),

(25, 'Números y Operaciones Avanzadas', 'intermedio', NULL, '6'),
(26, 'Números naturales grandes (hasta millones)', 'intermedio', 25, '2.1'),
(27, 'Multiplicación y división con números naturales', 'intermedio', 25, '2.2'),
(28, 'Múltiplos y divisores', 'intermedio', 25, '2.3'),
(29, 'Examen de desempeño 6', 'intermedio', 25, 'Ex6'),

(30, 'Fracciones y Decimales', 'intermedio', NULL, '7'),
(31, 'Concepto de fracción', 'intermedio', 30, '2.4'),
(32, 'Comparación y equivalencia de fracciones', 'intermedio', 30, '2.5'),
(33, 'Suma y resta de fracciones con igual denominador', 'intermedio', 30, '2.6'),
(34, 'Introducción a los decimales y su relación con fracciones', 'intermedio', 30, '2.7'),
(35, 'Examen de desempeño 7', 'intermedio', 30, 'Ex7'),

(36, 'Geometría y Medición', 'intermedio', NULL, '8'),
(37, 'Perímetro y área de figuras planas', 'intermedio', 36, '2.8'),
(38, 'Clasificación de triángulos y cuadriláteros', 'intermedio', 36, '2.9'),
(39, 'Uso del transportador y medidas de ángulos', 'intermedio', 36, '2.10'),
(40, 'Examen de desempeño 8', 'intermedio', 36, 'Ex8'),

(41, 'Proporcionalidad y Porcentajes', 'intermedio', NULL, '9'),
(42, 'Proporciones y regla de tres', 'intermedio', 41, '2.11'),
(43, 'Porcentajes: cálculo de descuentos y aumentos', 'intermedio', 41, '2.12'),
(44, 'Examen de desempeño 9', 'intermedio', 41, 'Ex9'),

(45, 'Estadística y Probabilidad', 'intermedio', NULL, '10'),
(46, 'Interpretación de gráficas de barras y circulares', 'intermedio', 45, '2.13'),
(47, 'Experimentos aleatorios simples', 'intermedio', 45, '2.14'),
(48, 'Examen de desempeño 10', 'intermedio', 45, 'Ex10'),

(49, 'Álgebra', 'avanzado', NULL, '11'),
(50, 'Expresiones algebraicas', 'avanzado', 49, '3.1'),
(51, 'Ecuaciones de primer grado', 'avanzado', 49, '3.2'),
(52, 'Uso de paréntesis y jerarquía de operaciones', 'avanzado', 49, '3.3'),
(53, 'Examen de desempeño 11', 'avanzado', 49, 'Ex11'),

(54, 'Funciones y Proporcionalidad', 'avanzado', NULL, '12'),
(55, 'Relaciones de proporcionalidad directa', 'avanzado', 54, '3.4'),
(56, 'Representación gráfica de funciones lineales', 'avanzado', 54, '3.5'),
(57, 'Examen de desempeño 12', 'avanzado', 54, 'Ex12'),

(58, 'Números Racionales y Reales', 'avanzado', NULL, '13'),
(59, 'Operaciones con fracciones y decimales', 'avanzado', 58, '3.6'),
(60, 'Números negativos y valor absoluto', 'avanzado', 58, '3.7'),
(61, 'Examen de desempeño 13', 'avanzado', 58, 'Ex13'),

(62, 'Geometría Analítica y Espacial', 'avanzado', NULL, '14'),
(63, 'Coordenadas cartesianas', 'avanzado', 62, '3.8'),
(64, 'Ángulos, triángulos y teorema de Pitágoras', 'avanzado', 62, '3.9'),
(65, 'Volumen de cuerpos geométricos (prismas, cilindros)', 'avanzado', 62, '3.10'),
(66, 'Examen de desempeño 14', 'avanzado', 62, 'Ex14'),

(67, 'Probabilidad y Estadística', 'avanzado', NULL, '15'),
(68, 'Medidas de tendencia central (media, mediana, moda)', 'avanzado', 67, '3.11'),
(69, 'Probabilidad clásica y frecuencias relativas', 'avanzado', 67, '3.12'),
(70, 'Examen de desempeño 15', 'avanzado', 67, 'Ex15');

-- Stored procedures
DELIMITER //

CREATE PROCEDURE registrar_usuario (
    IN _nombre VARCHAR(100),
    IN _username VARCHAR(50),
    IN _correo VARCHAR(100),
    IN _contrasena_hash VARCHAR(255)
)
BEGIN
    INSERT INTO Usuario (nombre, username, correo, contrasena_hash)
    VALUES (_nombre, _username, _correo, _contrasena_hash);
END //

CREATE FUNCTION usuario_existe (_username VARCHAR(50))
RETURNS BOOLEAN
DETERMINISTIC
BEGIN
    DECLARE existe BOOLEAN;

    SELECT COUNT(*) > 0 INTO existe
    FROM Usuario
    WHERE username = _username;

    RETURN existe;
END //

CREATE FUNCTION correo_existe (_correo VARCHAR(60))
RETURNS BOOLEAN
DETERMINISTIC
BEGIN
    DECLARE existe BOOLEAN;

    SELECT COUNT(*) > 0 INTO existe
    FROM Usuario
    WHERE correo = _correo;

    RETURN existe;
END //

CREATE PROCEDURE iniciar_sesion (
    IN _username VARCHAR(50)
)
BEGIN
    SELECT id_usuario, contrasena_hash
    FROM Usuario
    WHERE username = _username;
END //

CREATE PROCEDURE cambiar_contrasena (
    IN _id_usuario VARCHAR(50),
    IN _nueva_contrasena_hash VARCHAR(255)
)
BEGIN
    UPDATE Usuario
    SET contrasena_hash = _nueva_contrasena_hash
    WHERE id_usuario = _id_usuario;
END //

CREATE PROCEDURE actualizar_datos_usuario (
    IN _id_usuario INT,
    IN _nuevo_username VARCHAR(50),
    IN _nuevo_correo VARCHAR(100),
    IN _nuevo_nombre VARCHAR(60)
)
BEGIN
    UPDATE Usuario
    SET
        username = _nuevo_username,
        nombre = _nuevo_nombre,
        correo = _nuevo_correo
    WHERE id_usuario = _id_usuario;
END //

CREATE PROCEDURE eliminar_usuario (
    IN _id_usuario INT
)
BEGIN
    DELETE FROM Usuario
    WHERE id_usuario = _id_usuario;
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

CREATE PROCEDURE obtener_temas_principales()
BEGIN
    SELECT id_tema, titulo, nivel, numero
    FROM Tema
    WHERE id_padre IS NULL;
END //

CREATE PROCEDURE obtener_subtemas_por_padre(IN padre_id INT)
BEGIN
    SELECT id_tema, titulo, nivel, numero
    FROM Tema
    WHERE id_padre = padre_id;
END //

DELIMITER ;
