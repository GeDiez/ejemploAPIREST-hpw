<?php
function arreglo_a_xml($array, $xml) {
  foreach($array as $key => $value) {
    if(is_array($value)) {
      if(!is_numeric($key)){
        $subnode = $xml->addChild("$key");
        arreglo_a_xml($value, $subnode);
      }else{
        $subnode = $xml->addChild("item$key");
        arreglo_a_xml($value, $subnode);
      }
    }else {
        $xml->addChild("$key",htmlspecialchars("$value"));
    }
  }
}
?>