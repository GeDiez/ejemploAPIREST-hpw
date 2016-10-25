<?php

function sql_ejecuta($sql)
{
  $buscar = $db->prepare($sql);
  if ($buscar->execute() !== false){
    return true; 
  }
  return $buscar.errorInfo();
}

?>