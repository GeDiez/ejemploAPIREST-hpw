var Aplicacion = (function() {    
    var _main = function() {               
        Aplicacion.Controlador.principal();
    }
    
    return {
        "main" : _main,
        "Modelo": undefined,
        "Vista": undefined,
        "Controlador": undefined
    };
})();