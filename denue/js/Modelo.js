Aplicacion.Modelo = (function() {
  return {
    Entidades: undefined,
    Directorios: undefined  
  }
})();

Aplicacion.Modelo.Entidades = (function() {
  var _get = function() {
    XHR.get(
      'http://localhost/ProyectoAPIREST/index.php/entidades',
      function(XHR) {
        console.log("Respuesta del Servidor: "+ JSON.parse(XHR.responseText));
        Aplicacion.Controlador.Entidades.res(JSON.parse(XHR.responseText));
      },
      function(XHR) {
        console.error("Ocurrio un error "+ XHR.status());
      }
    );
  }
  
  var _getMun = function(_entidad) {
    XHR.get(
      'http://localhost/ProyectoAPIREST/index.php/entidades/'+_entidad+"/municipios",
      function(XHR) {
        Aplicacion.Controlador.Entidades.resMun(JSON.parse(XHR.responseText));
      },
      function(XHR) {
        console.error("Ocurrio un error "+ XHR.status());        
      }
    );
  }
  
  var _getue = function(_entidad) {
    XHR.get(
      'http://localhost/ProyectoAPIREST/index.php/entidades/'+_entidad+"/unidadeseconomicas",
      function(XHR) {
        Aplicacion.Controlador.Entidades.resue(JSON.parse(XHR.responseText));
      },
      function(XHR) {
        console.error("Ocurrio un error "+ XHR.status());        
      }
    );
  }
  
  return{
    get: _get,
    getMun: _getMun,
    getue: _getue
  }
})();

Aplicacion.Modelo.Directorios = (function() {
  var _get = function() {
    XHR.get(
      'http://localhost/ProyectoAPIREST/index.php/directorios',
      function(XHR) {
        console.log("Respuesta del Servidor: "+ JSON.parse(XHR.responseText));
        Aplicacion.Controlador.Directorios.res(JSON.parse(XHR.responseText));
      },
      function(XHR) {        
        console.error("Ocurrio un error "+ XHR.status);
      }
    );
  }
  
  var _getActividades = function(_directorio) {
    XHR.get(
      'http://localhost/ProyectoAPIREST/index.php/directorios/'+_directorio+"/actividades",
      function(XHR) {
        console.log("Respuesta del Servidor: "+ JSON.parse(XHR.responseText));
        Aplicacion.Controlador.Directorios.resActividades(JSON.parse(XHR.responseText));
      },
      function(XHR) {        
        console.error("Ocurrio un error "+ XHR.status);
      }
    );
  }
  
  var _crear = function(_obj) {
    XHR.post(
      'http://localhost/ProyectoAPIREST/index.php/directorios',
      _obj,
      function(XHR) {
        console.log(XHR.status);
        Aplicacion.Controlador.Directorios.resCrear("Recurso creado, estado: "+XHR.status);
      },
      function(XHR) {
        Aplicacion.Controlador.Directorios.resCrear("Error al crear el recurso, estado: "+XHR.status);
      }
    );
  }
  
  return {
    get: _get,
    getActividades: _getActividades,
    crear: _crear
  }
})();

Aplicacion.Modelo.Actividades = (function() {
  var _get = function() {
    XHR.get(
      'http://localhost/ProyectoAPIREST/index.php/actividades',
      function(XHR) {
        console.log("Respuesta del Servidor: "+ JSON.parse(XHR.responseText));
        Aplicacion.Controlador.Actividades.res(JSON.parse(XHR.responseText));
      },
      function(XHR) {        
        console.error("Ocurrio un error "+ XHR.status);
      }
    );
  }
  
  var _getue = function(_actividad) {
    XHR.get(
      'http://localhost/ProyectoAPIREST/index.php/actividades/'+_actividad+'/unidadeseconomicas',
      function(XHR) {
        console.log("Respuesta del Servidor: "+ JSON.parse(XHR.responseText));
        Aplicacion.Controlador.Actividades.resue(JSON.parse(XHR.responseText));
      },
      function(XHR) {        
        console.error("Ocurrio un error "+ XHR.status);
      }
    );
  }
  
  var _pet_nvue = function(_obj, id_act, id_ue) {
    console.log(id_act);    
    XHR.post(
      'http://localhost/ProyectoAPIREST/index.php/actividades/'+id_act+'/unidadeseconomicas/'+id_ue,
      _obj,
      function(XHR) {
        console.log(XHR.status);
        Aplicacion.Controlador.Actividades.res_nvue("Recurso creado, estado: "+XHR.status);
      },
      function(XHR) {
        console.log(XHR.status);
        Aplicacion.Controlador.Actividades.res_nvue("Error al crear el recurso, estado: "+XHR.status);
      }
    );
  }
  
  var _x_ue = function(_id_act, _id_ue) {
    XHR.delete(
      'http://localhost/ProyectoAPIREST/index.php/actividades/'+_id_act+'/unidadeseconomicas/'+_id_ue,
      function(XHR) {
        console.log(XHR.status);
        Aplicacion.Controlador.Actividades.res_xue("Recurso creado, estado: "+XHR.status);
      },
      function(XHR) {
        console.log(XHR.status);
        Aplicacion.Controlador.Actividades.res_xue("Error al crear el recurso, estado: "+XHR.status);
      }
    );
  }
  
  var _pet_edit = function(_obj, _id_act, _id_ue) {
    XHR.put(
      'http://localhost/ProyectoAPIREST/index.php/actividades/'+_id_act+'/unidadeseconomicas/'+_id_ue,
      _obj,
      function(XHR) {
        console.log(XHR.status);
        Aplicacion.Controlador.Actividades.res_edit("Recurso Modificado, estado: "+XHR.status);
      },
      function(XHR) {
        console.log(XHR.status);
        Aplicacion.Controlador.Actividades.res_edit("Error al Modificar el recurso, estado: "+XHR.status);
      }
    );
  }
  
  return{
    get: _get,
    getue: _getue,
    pet_nvue: _pet_nvue,
    x_ue: _x_ue,
    pet_edit: _pet_edit
  }
})();