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
ALTER TABLE Usuario ADD COLUMN primera_vez BOOLEAN DEFAULT TRUE;
ALTER TABLE Usuario ADD COLUMN ultimo_tema INT DEFAULT 1;

-- Tabla de temas
CREATE TABLE Tema (
    id_tema INT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    nivel VARCHAR(20) NOT NULL,
    id_padre INT,
    numero VARCHAR(10),
    imagen_url VARCHAR(500),
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
INSERT INTO Tema (id_tema, titulo, nivel, id_padre, numero, imagen_url) VALUES
(1, 'Números y Conteo', 'básico', NULL, '1', 'https://matematicasxgrado.com/wp-content/uploads/Numeros-del-1-al-10-para-imprimir-pdf-gratis.jpg'),
(2, 'Conteo del 1 al 100', 'básico', 1, '1.1', 'https://i.pinimg.com/736x/5d/12/4e/5d124e4f4c6910b77a519dbd65b525ab.jpg'),
(3, 'Valor posicional (unidad, decena, centena)', 'básico', 1, '1.2', 'https://i.pinimg.com/736x/f6/81/eb/f681eba7f8a9e97e27ad7878645d05f3.jpg'),
(4, 'Números pares e impares', 'básico', 1, '1.3', 'https://i.pinimg.com/736x/ab/56/24/ab562439a1df237b3ae96af5b1e6ba84.jpg'),
(5, 'Examen de desempeño 1', 'básico', 1, 'Ex1', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(6, 'Operaciones Básicas', 'básico', NULL, '2', 'https://i.pinimg.com/736x/8e/c9/34/8ec93424c5e0af3bee5205d5ceb42e59.jpg'),
(7, 'Sumas y restas con y sin llevadas', 'básico', 6, '1.4', 'https://i.pinimg.com/736x/fe/24/e1/fe24e1a4e9159623da8ef4565ec4de2a.jpg'),
(8, 'Problemas con suma y resta', 'básico', 6, '1.5', 'https://www.liveworksheets.com/sites/default/files/styles/worksheet/public/def_files/2020/4/24/4241056112749/4241056112749001.jpg?itok=kOQfY93Q'),
(9, 'Introducción a la multiplicación (repetición de sumas)', 'básico', 6, '1.6', 'https://i.pinimg.com/736x/8c/4e/43/8c4e43036bc9cdafc504db0ac5a7ce39.jpg'),
(10, 'Tablas de multiplicar (2 al 5)', 'básico', 6, '1.7', 'https://bonitoparaimprimir.com/wp-content/uploads/2019/08/tablas-para-multiplicar-plantillas.jpg'),
(11, 'Examen de desempeño 2', 'básico', 6, 'Ex2', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(12, 'Medición y Magnitudes', 'básico', NULL, '3', 'https://i.pinimg.com/736x/a5/f4/5c/a5f45c2bbd399e31d0794560fe6696b8.jpg'),
(13, 'Unidades de longitud (cm, m)', 'básico', 12, '1.8', 'https://i.pinimg.com/736x/76/dd/e1/76dde12f98e80c7ace73127f7f48bf1e.jpg'),
(14, 'Medición del tiempo (hora y media hora)', 'básico', 12, '1.9', 'https://i.pinimg.com/736x/dc/08/51/dc08512a0fff88eab7501dcb43adb971.jpg'),
(15, 'Medición de peso y capacidad (kg, l)', 'básico', 12, '1.10', 'https://i.pinimg.com/736x/92/55/e8/9255e8f5e9f6e2d9aa11aa9d76bfd519.jpg'),
(16, 'Examen de desempeño 3', 'básico', 12, 'Ex3', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(17, 'Figuras y Espacio', 'básico', NULL, '4', 'https://i.pinimg.com/736x/a5/85/d4/a585d4086f01fe1b32ea7f9d0548aaae.jpg'),
(18, 'Figuras geométricas básicas (cuadrado, triángulo, círculo)', 'básico', 17, '1.11', 'https://i.pinimg.com/736x/d9/32/02/d93202ee4d5afeacceedb1339e8399a6.jpg'),
(19, 'Ubicación espacial (arriba, abajo, izquierda, derecha)', 'básico', 17, '1.12', 'https://i.pinimg.com/736x/cb/d3/f6/cbd3f64eeeb0ba9e17061cade63a0cbf.jpg'),
(20, 'Examen de desempeño 4', 'básico', 17, 'Ex4', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(21, 'Datos y Representaciones', 'básico', NULL, '5', 'https://i.pinimg.com/736x/83/6b/13/836b13d2ab2da2bd00fb16cba3b5ec91.jpg'),
(22, 'Recolección de datos simples', 'básico', 21, '1.13', 'https://i.pinimg.com/736x/da/a1/d2/daa1d2d8f8381fc8ac9d078f8071ff8f.jpg'),
(23, 'Lectura de tablas y pictogramas', 'básico', 21, '1.14', 'https://i.pinimg.com/736x/0b/25/21/0b25210c5cb1acab24e25bae468335fe.jpg'),
(24, 'Examen de desempeño 5', 'básico', 21, 'Ex5', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(25, 'Números y Operaciones Avanzadas', 'intermedio', NULL, '6', ''),
(26, 'Números naturales grandes (hasta millones)', 'intermedio', 25, '2.1', 'https://4.bp.blogspot.com/-QfdfsPO-ndY/UjPtoSJUvKI/AAAAAAAAAbY/d1048uTZT-4/s400/mill%C3%B3n.jpg'),
(27, 'Multiplicación y división con números naturales', 'intermedio', 25, '2.2', 'https://i.pinimg.com/736x/d8/96/7c/d8967c3ab662d586c8320f82045292ac.jpg'),
(28, 'Múltiplos y divisores', 'intermedio', 25, '2.3', 'https://i.pinimg.com/736x/5b/d3/e7/5bd3e786102e3a1f2dd4d0316ca7a5e6.jpg'),
(29, 'Examen de desempeño 6', 'intermedio', 25, 'Ex6', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(30, 'Fracciones y Decimales', 'intermedio', NULL, '7', 'https://i.pinimg.com/736x/83/44/21/834421fafb6737a5dca76e03e4244236.jpg'),
(31, 'Concepto de fracción', 'intermedio', 30, '2.4', 'https://i.pinimg.com/736x/e0/ea/a8/e0eaa89b69f04206b4576c47ae8918af.jpg'),
(32, 'Comparación y equivalencia de fracciones', 'intermedio', 30, '2.5', 'https://i.pinimg.com/736x/88/e3/f7/88e3f716a81288437ccbf45381c3d039.jpg'),
(33, 'Suma y resta de fracciones con igual denominador', 'intermedio', 30, '2.6', 'https://i.pinimg.com/736x/2d/ff/fd/2dfffd6926aacfa635346937fd84f4b1.jpg'),
(34, 'Introducción a los decimales y su relación con fracciones', 'intermedio', 30, '2.7', 'https://i.pinimg.com/736x/de/dc/27/dedc27aacb1271876d8a39712d96283a.jpg'),
(35, 'Examen de desempeño 7', 'intermedio', 30, 'Ex7', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(36, 'Geometría y Medición', 'intermedio', NULL, '8', ''),
(37, 'Perímetro y área de figuras planas', 'intermedio', 36, '2.8', 'https://i.pinimg.com/736x/40/2b/71/402b71c3c37fa19df468ec28379c47b9.jpg'),
(38, 'Clasificación de triángulos y cuadriláteros', 'intermedio', 36, '2.9', 'https://i.pinimg.com/736x/ca/18/51/ca1851d534a6b8af0b835dbbe52669d0.jpg'),
(39, 'Uso del transportador y medidas de ángulos', 'intermedio', 36, '2.10', 'https://i.pinimg.com/736x/2b/4f/96/2b4f963ae8aef31f1e2a86a54945d881.jpg'),
(40, 'Examen de desempeño 8', 'intermedio', 36, 'Ex8', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(41, 'Proporcionalidad y Porcentajes', 'intermedio', NULL, '9', ''),
(42, 'Proporciones y regla de tres', 'intermedio', 41, '2.11', 'https://i.pinimg.com/736x/c2/14/db/c214dbe13cf3c7acdc154933c6bb5b2e.jpg'),
(43, 'Porcentajes: cálculo de descuentos y aumentos', 'intermedio', 41, '2.12', 'https://i.pinimg.com/736x/9b/d4/d0/9bd4d031b3620d00a0048908b995e1de.jpg'),
(44, 'Examen de desempeño 9', 'intermedio', 41, 'Ex9', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(45, 'Estadística y Probabilidad', 'intermedio', NULL, '10', ''),
(46, 'Interpretación de gráficas de barras y circulares', 'intermedio', 45, '2.13', 'https://i.pinimg.com/736x/39/c5/ac/39c5acdd57597504b42d960ec4c58922.jpg'),
(47, 'Experimentos aleatorios simples', 'intermedio', 45, '2.14', 'https://th.bing.com/th/id/R.6f0974f871a0fde993e89f6433287ef8?rik=J1cOqt5OCq4ApQ&pid=ImgRaw&r=0'),
(48, 'Examen de desempeño 10', 'intermedio', 45, 'Ex10', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(49, 'Álgebra', 'avanzado', NULL, '11', ''),
(50, 'Expresiones algebraicas', 'avanzado', 49, '3.1', 'https://th.bing.com/th/id/OIP.duOMt37xpcB-CZUNgfUCTwHaEK?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3'),
(51, 'Ecuaciones de primer grado', 'avanzado', 49, '3.2', 'https://i.ytimg.com/vi/GeM6ZC5pEbU/maxresdefault.jpg'),
(52, 'Uso de paréntesis y jerarquía de operaciones', 'avanzado', 49, '3.3', 'https://i.pinimg.com/736x/0b/d3/a4/0bd3a460b272022a50ff78c40db2c826.jpg'),
(53, 'Examen de desempeño 11', 'avanzado', 49, 'Ex11', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(54, 'Funciones y Proporcionalidad', 'avanzado', NULL, '12', ''),
(55, 'Relaciones de proporcionalidad directa', 'avanzado', 54, '3.4', 'https://i0.wp.com/nte.mx/wp-content/uploads/2021/06/B64-IMG-m21r35yE5c-IwK4K7ZOcq.png?w=1200&ssl=1'),
(56, 'Representación gráfica de funciones lineales', 'avanzado', 54, '3.5', 'https://th.bing.com/th/id/R.71d2c66166e54846abff04262b098f34?rik=EsP9chLeh0LjsA&riu=http%3a%2f%2fwww.universoformulas.com%2fimagenes%2fmatematicas%2fanalisis%2ffuncion-lineal.jpg&ehk=yK%2fAXocQkFfp7untOW%2bH8u9UERMRUu1FfSAa8Cdk7Tc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'),
(57, 'Examen de desempeño 12', 'avanzado', 54, 'Ex12', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(58, 'Números Racionales y Reales', 'avanzado', NULL, '13', 'https://pbs.twimg.com/media/ETrIm4BXYAAzJAh.jpg'),
(59, 'Operaciones con fracciones y decimales', 'avanzado', 58, '3.6', 'https://i.ytimg.com/vi/zhWKKjjs7mo/maxresdefault.jpg'),
(60, 'Números negativos y valor absoluto', 'avanzado', 58, '3.7', 'https://th.bing.com/th/id/OIP.vs8j5e6QGiZPuloKnM2RUAHaDh?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3'),
(61, 'Examen de desempeño 13', 'avanzado', 58, 'Ex13', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(62, 'Geometría Analítica y Espacial', 'avanzado', NULL, '14', ''),
(63, 'Coordenadas cartesianas', 'avanzado', 62, '3.8', 'https://th.bing.com/th/id/R.9084856f258bb860efbac28404a89717?rik=HyhRnw2lnpYdkg&pid=ImgRaw&r=0'),
(64, 'Ángulos, triángulos y teorema de Pitágoras', 'avanzado', 62, '3.9', 'https://static.significados.com.br/foto/como-calcular-teorema-de-pitagoras.jpg'),
(65, 'Volumen de cuerpos geométricos (prismas, cilindros)', 'avanzado', 62, '3.10', 'https://educared.fundaciontelefonica.com.pe/wp-content/uploads/2021/08/image-193.jpeg'),
(66, 'Examen de desempeño 14', 'avanzado', 62, 'Ex14', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg'),

(67, 'Probabilidad y Estadística', 'avanzado', NULL, '15', 'https://i.pinimg.com/736x/73/f1/a5/73f1a5cb553774a5d3edf94a427b6b71.jpg'),
(68, 'Medidas de tendencia central (media, mediana, moda)', 'avanzado', 67, '3.11', 'https://th.bing.com/th/id/R.9444d44d52660a4ac3c08d00802c8719?rik=HyDtnbULofxbNA&pid=ImgRaw&r=0&sres=1&sresct=1'),
(69, 'Probabilidad clásica y frecuencias relativas', 'avanzado', 67, '3.12', 'https://i.ytimg.com/vi/3wSV95fmSb8/maxresdefault.jpg'),
(70, 'Examen de desempeño 15', 'avanzado', 67, 'Ex15', 'https://i.pinimg.com/736x/89/35/a8/8935a811bfade8674354cbbdb01b2750.jpg');

ALTER TABLE Tema ADD COLUMN video BOOLEAN DEFAULT FALSE;

-- Vistas
CREATE VIEW vista_temas_principales AS
SELECT id_tema, titulo, nivel, numero
FROM Tema
WHERE id_padre IS NULL;

CREATE OR REPLACE VIEW vista_temas_basico AS
SELECT
    t.id_tema,
    t.titulo,
    t.nivel,
    t.numero,
    t.imagen_url,
    t.id_padre,
    p.titulo AS nombre_padre
FROM
    Tema t
JOIN
    Tema p ON t.id_padre = p.id_tema
WHERE
    t.nivel = 'básico';

CREATE OR REPLACE VIEW vista_temas_intermedio AS
SELECT
    t.id_tema,
    t.titulo,
    t.nivel,
    t.numero,
    t.imagen_url,
    t.id_padre,
    p.titulo AS nombre_padre
FROM
    Tema t
JOIN
    Tema p ON t.id_padre = p.id_tema
WHERE
    t.nivel = 'intermedio';

CREATE OR REPLACE VIEW vista_temas_avanzado AS
SELECT
    t.id_tema,
    t.titulo,
    t.nivel,
    t.numero,
    t.imagen_url,
    t.id_padre,
    p.titulo AS nombre_padre
FROM
    Tema t
JOIN
    Tema p ON t.id_padre = p.id_tema
WHERE
    t.nivel = 'avanzado';


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

-- DROP PROCEDURE completar_tema;
CREATE PROCEDURE completar_tema (
    IN _id_usuario INT,
    IN _id_tema INT
)
BEGIN
    DECLARE _id_padre INT;

    -- 1. Insertar o actualizar en la tabla Avance
    INSERT INTO Avance (id_usuario, id_tema, completado, fecha_completado)
    VALUES (_id_usuario, _id_tema, TRUE, NOW())
    ON DUPLICATE KEY UPDATE completado = TRUE, fecha_completado = NOW();

    -- 2. Obtener el id_padre del tema completado
    SELECT id_padre INTO _id_padre
    FROM Tema
    WHERE id_tema = _id_tema;

    -- 3. Actualizar el campo ultimo_tema en Usuario
    UPDATE Usuario
    SET ultimo_tema = _id_padre
    WHERE id_usuario = _id_usuario;
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

-- DROP PROCEDURE obtener_avance_usuario;
CREATE PROCEDURE obtener_avance_usuario (
    IN _id_usuario INT,
    IN _nivel VARCHAR(20),
    IN _id_padre INT
)
BEGIN
    SELECT 
        T.id_tema,
        T.titulo,
        T.nivel,
        T.numero,
        T.id_padre,
        T.imagen_url,
        T.video,
        P.titulo AS nombre_padre,
        P.numero AS numero_padre,
        COALESCE(A.completado, FALSE) AS completado,
        A.fecha_completado
    FROM Tema T
    INNER JOIN Tema P ON T.id_padre = P.id_tema  -- Solo si tiene padre
    LEFT JOIN Avance A ON T.id_tema = A.id_tema AND A.id_usuario = _id_usuario
    WHERE 
        (_nivel IS NULL OR T.nivel = _nivel)
        AND (_id_padre IS NULL OR T.id_padre = _id_padre)
    ORDER BY 
        T.id_tema;
END //

CREATE PROCEDURE obtener_subtemas_por_padre(IN padre_id INT)
BEGIN
    SELECT id_tema, titulo, nivel, numero
    FROM Tema
    WHERE id_padre = padre_id;
END //

CREATE PROCEDURE obtener_porcentaje_avance_todos_niveles (
    IN _id_usuario INT,
    OUT porcentaje_basico INT,
    OUT porcentaje_intermedio INT,
    OUT porcentaje_avanzado INT
)
BEGIN
    DECLARE total_basico INT DEFAULT 0;
    DECLARE total_intermedio INT DEFAULT 0;
    DECLARE total_avanzado INT DEFAULT 0;

    DECLARE completado_basico INT DEFAULT 0;
    DECLARE completado_intermedio INT DEFAULT 0;
    DECLARE completado_avanzado INT DEFAULT 0;

    -- Obtener total de temas por nivel
    SELECT COUNT(*) INTO total_basico
    FROM Tema
    WHERE nivel = 'básico';

    SELECT COUNT(*) INTO total_intermedio
    FROM Tema
    WHERE nivel = 'intermedio';

    SELECT COUNT(*) INTO total_avanzado
    FROM Tema
    WHERE nivel = 'avanzado';

    -- Obtener completados por nivel
    SELECT COUNT(*) INTO completado_basico
    FROM Avance A
    JOIN Tema T ON A.id_tema = T.id_tema
    WHERE A.id_usuario = _id_usuario
      AND A.completado = TRUE
      AND T.nivel = 'básico';

    SELECT COUNT(*) INTO completado_intermedio
    FROM Avance A
    JOIN Tema T ON A.id_tema = T.id_tema
    WHERE A.id_usuario = _id_usuario
      AND A.completado = TRUE
      AND T.nivel = 'intermedio';

    SELECT COUNT(*) INTO completado_avanzado
    FROM Avance A
    JOIN Tema T ON A.id_tema = T.id_tema
    WHERE A.id_usuario = _id_usuario
      AND A.completado = TRUE
      AND T.nivel = 'avanzado';

    -- Calcular los porcentajes (enteros)
    SET porcentaje_basico = IF(total_basico = 0, 0, FLOOR((completado_basico * 100) / total_basico));
    SET porcentaje_intermedio = IF(total_intermedio = 0, 0, FLOOR((completado_intermedio * 100) / total_intermedio));
    SET porcentaje_avanzado = IF(total_avanzado = 0, 0, FLOOR((completado_avanzado * 100) / total_avanzado));
END //


DELIMITER ;
