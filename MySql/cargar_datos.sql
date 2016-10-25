insert into directorio set id_directorio = 1, sector = 'Mineria';
insert into directorio set id_directorio = 1, sector = 'Agricultura';

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Mineria_csv/SCIAN.csv'
INTO TABLE scian
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_scian,
  id_directorio,
  actividad
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Mineria_csv/estado.csv'
INTO TABLE estado
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_estado,
  nombre
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Mineria_csv/municipio.csv'
INTO TABLE municipio
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_municipio,
  nombre
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Mineria_csv/localidad.csv'
INTO TABLE localidad
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_localidad,
  nombre
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Mineria_csv/direccion.csv'
INTO TABLE direccion
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_direccion,
  id_ue,
  tipo_asentamiento,
  nombre_asentamiento,
  cp,
  num_ext,
  letra_ext,
  manzana,
  area_geo,
  id_estado,
  id_municipio,
  id_localidad
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Mineria_csv/unidadeconomica.csv'
INTO TABLE u_economica
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_ue, 
  nombre_unidad, 
  razon_social, 
  codigo_scian, 
  personal, 
  tipo_establecimiento, 
  email, 
  pagina_web, 
  fecha_denue
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Mineria_csv/edificio.csv'
INTO TABLE edificio
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_direccion,
  nombre,
  piso,
  num_int,
  letra_int
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Mineria_csv/mercado.csv'
INTO TABLE mercado
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_direccion,
  nombre,
  tipo,
  num_local
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Mineria_csv/referencia.csv'
INTO TABLE referencia_vial
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_direccion,
  tipo_vial1,
  nombre_vial1,
  tipo_vial2,
  nombre_vial2,
  tipo_vial3,
  nombre_vial3,
  tipo_vial4,
  nombre_vial4
);










LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Agricultura_csv/SCIAN.csv'
INTO TABLE scian
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_scian,
  id_directorio,
  actividad
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Agricultura_csv/estado.csv'
INTO TABLE estado
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_estado,
  nombre
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Agricultura_csv/municipio.csv'
INTO TABLE municipio
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_municipio,
  nombre
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Agricultura_csv/localidad.csv'
INTO TABLE localidad
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_localidad,
  nombre
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Agricultura_csv/direccion.csv'
INTO TABLE direccion
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_direccion,
  id_ue,
  tipo_asentamiento,
  nombre_asentamiento,
  cp,
  num_ext,
  letra_ext,
  manzana,
  area_geo,
  id_estado,
  id_municipio,
  id_localidad
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Agricultura_csv/unidadeconomica.csv'
INTO TABLE u_economica
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_ue, 
  nombre_unidad, 
  razon_social, 
  codigo_scian, 
  personal, 
  tipo_establecimiento, 
  email, 
  pagina_web, 
  fecha_denue
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Agricultura_csv/edificio.csv'
INTO TABLE edificio
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_direccion,
  nombre,
  piso,
  num_int,
  letra_int
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Agricultura_csv/mercado.csv'
INTO TABLE mercado
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_direccion,
  nombre,
  tipo,
  num_local
);

LOAD DATA LOCAL INFILE '/home/GeDiez10/www2/ProyectoAPIREST/MySql/tablas_Agricultura_csv/referencia.csv'
INTO TABLE referencia_vial
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(
  id_direccion,
  tipo_vial1,
  nombre_vial1,
  tipo_vial2,
  nombre_vial2,
  tipo_vial3,
  nombre_vial3,
  tipo_vial4,
  nombre_vial4
);
