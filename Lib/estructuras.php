<?php 
function estructura($arreglo){
  return array(
    "nombre" => $arreglo["nombre"],
    "razon_social" => $arreglo["razon_social"],
    "personal" => $arreglo["personal"],
    "tipo_establecimiento" => $arreglo["tipo_establecimiento"],
    "email" => $arreglo["email"],
    "pagina_web" => $arreglo["pagina_web"],
    "fecha_denue" => $arreglo["fecha_denue"],
    "direccion" => array(
          "estado" => $arreglo["estado"],
          "municipio" => $arreglo["municipio"],
          "localidad" => $arreglo["localidad"],
          "tipo_asentamiento" => $arreglo["tipo_asentamiento"],
          "nombre_asentamiento" => $arreglo["nombre_asentamiento"],
          "cp" => $arreglo["cp"],
          "num_ext" => $arreglo["num_ext"],
          "letra_ext" => $arreglo["letra_ext"],
          "manzana" => $arreglo["manzana"],
          "area_geo" => $arreglo["area_geo"],
          "referencia_vial" => array(
                "tipo_viallidad1" => $arreglo["tipo_vial1"],
                "nombre_vialidad1" => $arreglo["nombre_vial1"]
            )
        )
  );
}
?>