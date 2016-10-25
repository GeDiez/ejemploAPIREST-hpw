<?php
  echo "Mis Pruebas de Funciones en PHP"; 
  include Lib/Arreglo.php;
  
  $resultado = map(
    function($item){
      return $item * 2;
    }, array(1, 2, 3, 4));
    
  var_dump($resultado);
  
?>



$app->post('/actividades/:id_sc/unidadeseconomicas/:id_ue', function($id_sc, $id_ue)use($app, $db){
  $sql = $db->prepare("select id_ue from u_economica where id_ue=:id");
  $sql->execute(array('id' => $id_ue));
  $dato = $sql->fetchAll(PDO::FETCH_ASSOC);
  
  if (count($dato) === 0) {
    $sql = $db->prepare("insert into u_economica (id_ue, nombre_unidad, razon_social, codigo_scian, personal, tipo_establecimiento, email, pagina_web, fecha_denue)
    values (:id, :nombre, :razon_social, :codigo_scian, :personal, :tipo_establecimiento, :email, :pagina_web, :fecha_denue)");
    $cuerpo_peticion = json_decode($app->request->getBody(), true);
    var_dump( $app->request->getBody() );
    var_dump(  );
    /*$sql->execute(
     array(
        'id' => $id_ue, 
        'nombre' => $cuerpo_peticion['nombre'],
        'razon_social' => $cuerpo_peticion['razon_social'],
        'codigo_scian' => $id_sc,
        'personal' => $cuerpo_peticion['personal'],
        'tipo_establecimiento' => $cuerpo_peticion['tipo_establecimiento'],
        'email' => $cuerpo_peticion['email'],
        'pagina_web' => $cuerpo_peticion['pagina_web'],
        'fecha_denue' => $cuerpo_peticion['fecha_denue']
        )
    );
    $app->response->status(201);
    $mensaje = array(
      "mensaje" => "Recurso creado con exito"
    );
    $app->response->setBody(json_encode($mensaje));
    */
  }
  else{
    $mensaje = array(
      "mensaje" => "Este identificador de recurso ya existe"
    );
    $app->response->setBody(json_encode($mensaje));
    var_dump($app->request->getBody());      
  } 
});






{
      "id_ue": "1",
      "nombre_unidad": "nombre",
      "razon_social": "SIN razon",
      "id_scian": "212321"
      "personal": "10 personas",
      "tipo_establecimiento: "fijo",
      "email": "email",
      "pagina_web": "pagina",
      "fecha_denue" : "jun-14"
}

39.8 68 .6.6