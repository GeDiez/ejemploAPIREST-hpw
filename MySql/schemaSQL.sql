
create table directorio(
  id_directorio integer primary key,
  sector varchar (100)
); 

create table scian(
  id_scian integer primary key,
  id_directorio integer,
  actividad varchar (250),
  foreign key (id_directorio) references directorio(id_directorio)
);

create table estado(
  id_estado integer primary key,
  nombre varchar(50)
);

create table municipio(
  id_municipio integer primary key,
  nombre varchar(50)
);

create table localidad(
  id_localidad integer primary key,
  nombre varchar(50)
);

create table u_economica(
  id_ue integer primary key,
  nombre_unidad varchar(150),
  razon_social varchar(150),
  codigo_scian varchar(6),
  personal varchar(25),
  tipo_establecimiento varchar(10),
  email varchar(75),
  pagina_web varchar(100),
  fecha_denue varchar(25)
);

create table direccion(
  id_direccion integer AUTO_INCREMENT not null primary key,
  id_ue integer,
  tipo_asentamiento varchar(50),
  nombre_asentamiento varchar(150),
  cp varchar(5),
  num_ext varchar(7),
  letra_ext varchar(35),
  manzana varchar(3),
  area_geo varchar(4),
  id_estado integer,
  id_municipio integer,
  id_localidad integer,
  foreign key (id_ue) references u_economica(id_ue),
  foreign key (id_estado) references estado(id_estado),
  foreign key (id_municipio) references municipio(id_municipio),
  foreign key (id_localidad) references localidad(id_localidad)
);

create table referencia_vial(
  id_direccion integer,
  tipo_vial1 varchar(50),
  nombre_vial1 varchar(150),
  tipo_vial2 varchar(50),
  nombre_vial2 varchar(150),
  tipo_vial3 varchar(50),
  nombre_vial3 varchar(150),
  tipo_vial4 varchar(50),
  nombre_vial4 varchar(150),
  foreign key(id_direccion) references direccion(id_direccion)
);
