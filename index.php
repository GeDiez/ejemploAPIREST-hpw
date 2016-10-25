<?php
require 'Slim/Slim.php';
require_once 'Lib/XML.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

define('BD_SERVIDOR', 'localhost');
define('BD_NOMBRE', 'DENUE');
define('BD_USUARIO', 'root');
define('BD_PASSWORD', '');
$db = new PDO('mysql:host=' . BD_SERVIDOR . ';dbname=' . BD_NOMBRE, BD_USUARIO, BD_PASSWORD);

$app->get('/', function(){echo"API HPW";});

$app->get('/directorios', function()use($app, $db){
  $res = $app->response;
  $req = $app->request;
  $sql = $db->prepare('select * from directorio');
  $sql->execute();
  $datos = $sql->fetchAll(PDO::FETCH_ASSOC);
  if ($req->headers->get('Accept')==='application/json') {
    $contenido = json_encode($datos);
    $res->headers->set('Content-type', 'application/json');
  }
  elseif ($req->headers->get('Accept')==='application/xml') {
    $xml = new SimpleXMLElement('<denue/>');
    arreglo_a_xml($datos, $xml);
    $contenido = $xml->asXML();
    $res->headers->set('Content-type', 'application/xml');
  }
  $res->setBody($contenido);
});

$app->post('/directorios', function()use($app, $db)
{
  $res = $app->response;
  $req = $app->request;
  $body = json_decode($req->getBody(), true);
  $sql = $db->prepare('insert into directorio(id_directorio, sector) values (:id, :actividad)');
  $sql->execute(array("id" => $body["id_directorio"], "actividad"=>$body["actividad"]));
  $res->setBody(var_dump($body["actividad"]));
});

$app->get('/directorios/:id/actividades', function($id)use($app, $db){
  $res = $app->response;
  $req = $app->request;
  $sql = $db->prepare('select id_scian, actividad from directorio 
  inner join scian using(id_directorio) 
  where id_directorio = :id');
  $sql->execute(array("id" => $id));
  $datos = $sql->fetchAll(PDO::FETCH_ASSOC);
  if ($req->headers->get('Accept')==='application/json') {
    $contenido = json_encode($datos);
    $res->headers->set('Content-type', 'application/json');
  }
  elseif ($req->headers->get('Accept')==='application/xml') {
    $xml = new SimpleXMLElement('<denue/>');
    arreglo_a_xml($datos, $xml);
    $contenido = $xml->asXML();
    $res->headers->set('Content-type', 'application/xml');
  }
  $res->setBody($contenido);
});

$app->get('/entidades/:id/municipios', function($id) use($app, $db){
  $res = $app->response;
  $req = $app->request;
  $sql = $db->prepare('select m.id_municipio, m.nombre from direccion 
  inner join estado as e using(id_estado) 
  inner join municipio as m using(id_municipio) 
  where id_estado = :id 
  group by id_municipio');
  $sql->execute(array("id" => $id));
  $datos = $sql->fetchAll(PDO::FETCH_ASSOC);
  if ($req->headers->get('Accept')==='application/json') {
    $contenido = json_encode($datos);
    $res->headers->set('Content-type', 'application/json');
  }
  elseif ($req->headers->get('Accept')==='application/xml') {
    $xml = new SimpleXMLElement('<denue/>');
    arreglo_a_xml($datos, $xml);
    $contenido = $xml->asXML();
    $res->headers->set('Content-type', 'application/xml');
  }
  $res->setBody($contenido);
});

$app->get('/entidades', function()use($app, $db){
  $res = $app->response;
  $req = $app->request;
  $sql = $db->prepare('select * from estado');
  $sql->execute();
  $datos = $sql->fetchAll(PDO::FETCH_ASSOC);
  if ($req->headers->get('Accept')==='application/json') {
    $json = json_encode($datos);
    $res->headers->set('Content-type', 'application/json');
    $res->setBody($json);
  }
  elseif ($req->headers->get('Accept')==='application/xml') {
    $xml = new SimpleXMLElement('<denue/>');
    arreglo_a_xml($datos, $xml);
    $res->setBody($xml->asXML());    
    $res->headers->set('Content-type', 'application/xml');
  }
});

$app->get('/entidades/:id/unidadeseconomicas', function($id)use($app, $db){
  $res = $app->response;
  $req = $app->request;
  $sql = $db->prepare(
    'select ue.id_ue, ue.nombre_unidad, ue.razon_social from u_economica as ue 
    inner join direccion using(id_ue) 
    inner join estado as e using(id_estado)
    where id_estado = :id');
  $sql->execute(array("id" => $id));
  $datos = $sql->fetchAll(PDO::FETCH_ASSOC);
  if ($req->headers->get('Accept')==='application/json') {
    $contenido = json_encode($datos);
    $res->headers->set('Content-type', 'application/json');
  }
  elseif ($req->headers->get('Accept')==='application/xml') {
    $xml = new SimpleXMLElement('<denue/>');
    arreglo_a_xml($datos, $xml);
    return $xml->asXML();
    $res->headers->set('Content-type', 'application/xml');
  }
  $res->setBody($contenido);
});

$app->get('/unidadeseconomicas', function($id)use($app, $db){
  $res = $app->response;
  $req = $app->request;
  $sql = $db->prepare(
    'select * from u_economica as ue');
  $sql->execute(array("id" => $id));
  $datos = $sql->fetchAll(PDO::FETCH_ASSOC);
  if ($req->headers->get('Accept')==='application/json') {
    $contenido = json_encode($datos);
    $res->headers->set('Content-type', 'application/json');
  }
  elseif ($req->headers->get('Accept')==='application/xml') {
    $xml = new SimpleXMLElement('<denue/>');
    arreglo_a_xml($datos, $xml);
    return $xml->asXML();
    $res->headers->set('Content-type', 'application/xml');
  }
  $res->setBody($contenido);
});
//$app->get('/directorios/:id/entidades/:id/municipios', function()use($app, $db){});
//$app->get('/directorios/:id/entidades/:id/municipios/:id/unidadeseconomicas', function()use($app, $db){});
//$app->get('/directorios/:id/actividades/', function()use($app, $db){});
$app->get('/actividades', function()use($app, $db){
  $res = $app->response;
  $req = $app->request;
  $sql = $db->prepare(
    'select id_scian, actividad from scian');
  $sql->execute();
  $datos = $sql->fetchAll(PDO::FETCH_ASSOC);
  if ($req->headers->get('Accept')==='application/json') {
    $contenido = json_encode($datos);
    $res->headers->set('Content-type', 'application/json');
  }
  elseif ($req->headers->get('Accept')==='application/xml') {
    $xml = new SimpleXMLElement('<denue/>');
    arreglo_a_xml($datos, $xml);
    return $xml->asXML();
    $res->headers->set('Content-type', 'application/xml');
  }
  $res->setBody($contenido);
});

$app->post('directorios/:dir/actividades/:id_act', function($dir, $id_act) use($app, $db){
  $res = $app->response;
  $req = $app->request;
  $sql = $db->prepare("select id_act from scian where id_scian = ".$id_act);
  if ($sql->execute()) {
    $filas = $sql->fetchAll(PDO::FETCH_ASSOC);
    if(count($filas) !== 0){
      $res->status(412);
      return;
    }
  }
  $body = json_decode($req->getBody(), true);
  $sql = $db->prepare(
    'insert into scian(id_scian, id_directorio, actividad) 
    values (:id_scian, :id_dir, act)'
    );
  $sql->execute(
    array(
      "id_dir" => $id_directorio,
      "id_scian" => $id_act,
      "actividad" => $actividad));
  $res->status(201);
});

$app->get('/actividades/:id/unidadeseconomicas', function($id)use($app, $db){
  $res = $app->response;
  $req = $app->request;
  $sql = $db->prepare(
   'select id_ue, nombre_unidad, razon_social, personal, email, pagina_web, id_scian 
   from scian inner join u_economica on(codigo_scian = id_scian) 
   where codigo_scian = :id');
  $sql->execute(array("id" => $id));
  $datos = $sql->fetchAll(PDO::FETCH_ASSOC);
  if ($req->headers->get('Accept')==='application/json') {
    $contenido = json_encode($datos);
    $res->headers->set('Content-type', 'application/json');
  }
  elseif ($req->headers->get('Accept')==='application/xml') {
    $xml = new SimpleXMLElement('<denue/>');
    arreglo_a_xml($datos, $xml);
    $contenido = $xml->asXML();
    $res->headers->set('Content-type', 'application/xml');
  }
  $res->setBody($contenido);
});

$app->delete('/actividades/:id/unidadeseconomicas/:id_ue', function ($id, $id_ue) use ($app, $db)
{
  $res = $app->response;
  $req = $app->request;
  $body = json_decode($req->getBody(), true); 
  $sql = $db->prepare(
    'delete from u_economica where id_ue = :id_ue and codigo_scian = :id'
    );
  $sql->execute(array("id_ue" => $id_ue, "id" => $id));
  $res->status(200);
});

$app->put('/actividades/:id_act/unidadeseconomicas/:id_ue', function($id_act, $id_ue) use($app, $db){
  $res = $app->response;
  $req = $app->request;
  $sql = $db->prepare("select id_ue from u_economica where id_ue = ".$id_ue);
  if ($sql->execute()) {
    $filas = $sql->fetchAll(PDO::FETCH_ASSOC);
    if(count($filas) === 0){
      $res->status(404);
      return;
    }
  }
  $body = json_decode($req->getBody(), true);
  var_dump($body);
  var_dump("update u_economica set 
    nombre_unidad = '".$body["nombre_unidad"]."', razon_social='".$body["razon_social"]."', personal = '".$body["personal"]."', tipo_establecimiento = '".$body["tipo_establecimiento"]."', email = '".$body["email"]."', pagina_web = '".$body["pagina_web"]."', fecha_denue = '".$body["fecha_denue"]."' where id_ue = ".$id_ue);
  $sql = $db->prepare(
    "update u_economica set 
    nombre_unidad = '".$body["nombre_unidad"]."', razon_social='".$body["razon_social"]."', personal = '".$body["personal"]."', tipo_establecimiento = '".$body["tipo_establecimiento"]."', email = '".$body["email"]."', pagina_web = '".$body["pagina_web"]."', fecha_denue = '".$body["fecha_denue"]."'where id_ue = ".$id_ue
    );
  $sql->execute();
   var_dump($sql->errorInfo());
  $res->status(200);
});

$app->post('/actividades/:id_act/unidadeseconomicas/:id_ue', function($id_act, $id_ue) use($app, $db){
  $res = $app->response;
  $req = $app->request;
  $sql = $db->prepare("select id_ue from u_economica where id_ue = ".$id_ue);
  if ($sql->execute()) {
    $filas = $sql->fetchAll(PDO::FETCH_ASSOC);
    if(count($filas) !== 0){
      $res->status(412);
      return;
    }
  }
  $body = json_decode($req->getBody(), true);
  $sql = $db->prepare(
    'insert into u_economica(id_ue, nombre_unidad, razon_social, codigo_scian, personal, tipo_establecimiento, email, pagina_web, fecha_denue) 
    values (:id, :nombre, :rz, :id_scian, :personal, :te, :email, :pw, :fd)'
    );
  $sql->execute(
    array(
      "id" => $id_ue,
      "nombre" => $body["nombre_unidad"],
      "rz" => $body["razon_social"],
      "id_scian" => $id_act ,
      "personal" => $body["personal"],
      "te" => $body["tipo_establecimiento"],
      "email" => $body["email"],
      "pw" => $body["pagina_web"],
      "fd" => $body["fecha_denue"]));  
  $res->status(201);
});

$app->run();

?>