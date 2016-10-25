Aplicacion.Controlador =  (function() {
  var _principal = function() {
    Aplicacion.Vista.principal();
  }
  
  return{
    principal: _principal,
    Entidades: undefined,
    Directorios: undefined,
    Actividades: undefined
  }
})();

Aplicacion.Controlador.Entidades = (function() {
  var _inicio = function() {
    Aplicacion.Modelo.Entidades.get();
  } 
  
  var _res = function(_entidades) {
    Aplicacion.Vista.Entidades.inicio(_entidades);
  }
  
  var _getMun = function(_entidad) {
    Aplicacion.Modelo.Entidades.getMun(_entidad);
  }
  
  var _resMun = function(_municipios) {
    Aplicacion.Vista.Entidades.resMun(_municipios);
  }
  
  var _getue = function(_entidad) {
    Aplicacion.Modelo.Entidades.getue(_entidad);
  }
  
  var _resue = function(_unidades) {
    Aplicacion.Vista.Entidades.resue(_unidades);
  }
  
  return{
    inicio: _inicio,
    res: _res,
    getMun: _getMun,
    resMun: _resMun,
    getue: _getue,
    resue: _resue
  }
})();

Aplicacion.Controlador.Directorios = (function() {
  //Peticion
  var _inicio = function() {
    Aplicacion.Modelo.Directorios.get();
  }
  //Respuesta
  var _res = function(_directorios) {
    Aplicacion.Vista.Directorios.inicio(_directorios);
  }
  //Peticion
  var _getActividades = function(_directorio) {
    Aplicacion.Modelo.Directorios.getActividades(_directorio);
  }
  //Respuesta
  var _resActividades = function(_actividades) {
    Aplicacion.Vista.Directorios.resActividades(_actividades);
  }
  //Peticion
  var _petCrear = function(_obj) {
    Aplicacion.Modelo.Directorios.crear(_obj);
  } 
  //Respuesta
  var _resCrear = function(_mensaje) {
    Aplicacion.Vista.Directorios.resCrear(_mensaje);
  }
  // Vista
  var _crear = function() {
    Aplicacion.Vista.Directorios.crear();
  }
  
  return {
    inicio: _inicio,
    res: _res,
    getActividades: _getActividades,
    resActividades: _resActividades,
    crear: _crear,
    petCrear: _petCrear,
    resCrear: _resCrear
  }
})();

Aplicacion.Controlador.Actividades = (function() {
  var _inicio = function() {
    Aplicacion.Vista.Actividades.inicio();
  }
  
  var _get = function(){ 
    Aplicacion.Modelo.Actividades.get();
  }
  
  var _res = function(_actividades) {
    Aplicacion.Vista.Actividades.resAct(_actividades);
  }
  
  var _getue = function(_actividad) {
    Aplicacion.Modelo.Actividades.getue(_actividad);    
  }
  
  var _resue = function(_unidades) {
    Aplicacion.Vista.Actividades.resue(_unidades);
  }
  
  var _pet_nvue = function(_obj, id_act, id_ue) {
    Aplicacion.Modelo.Actividades.pet_nvue(_obj, id_act, id_ue);
  }
  
  var _res_nvue = function(_mensaje) {
    Aplicacion.Vista.Actividades.res_nvue(_mensaje);
  }
  
  var _x_ue = function(_id_act, _id_eu) {
    Aplicacion.Modelo.Actividades.x_ue(_id_act, _id_eu);
  }
  
  var _res_xue = function(_mensaje) {
    Aplicacion.Vista.Actividades.res_xue
  }
  
  var _pet_edit = function(_obj, _id_act, _id_ue) {
    Aplicacion.Modelo.Actividades.pet_edit()
  }

  var _res_edit = function(_mensaje) {
    Aplicacion.Vista.Actividades.pet_edit()
  }
  
  return{
    inicio: _inicio,
    get: _get,
    res: _res,
    getue: _getue,
    resue: _resue,
    pet_nvue: _pet_nvue,
    res_nvue: _res_nvue,
    x_ue: _x_ue,
    res_xue: _res_xue,
    pet_edit: _pet_edit,
    re_edit: _res_edit
  }
})();