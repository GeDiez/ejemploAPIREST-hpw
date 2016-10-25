Aplicacion.Vista = (function() {
  var _principal = function() {
    DOM.ID.limpiar("pagina");
    DOM.ID.append(
      "pagina",
      [
        HTML.append(
        Pure.mainPage(),
        [
          Pure.encabezado("Directorio de Estadistico Nacional de Unidades Economicas, del INEGI", "Aplicacion del Servicio Web"),   
          Pure.Menu.horizontal(
            [
              Pure.Menu.li_link("Directorios", "id-dir"),
              Pure.Menu.li_link("Entidades", "id-ent"),
              Pure.Menu.li_link("Actividades", "id-act")
            ]),
          HTML.hr(),
          HTML.div({id: "contenido"})
        ])
      ]);
      
  DOM.ID.click("id-ent",function() {
      Aplicacion.Controlador.Entidades.inicio();
    });
  DOM.ID.click("id-dir", function() {
    Aplicacion.Controlador.Directorios.inicio();
  });
  DOM.ID.click("id-act", function() {
    Aplicacion.Controlador.Actividades.inicio();
    Aplicacion.Controlador.Actividades.get();
  });
    
  }

  return{
    principal: _principal,
    Entidades: undefined,
    Directorios: undefined
  }
})();

Aplicacion.Vista.Entidades = (function() {
  var _inicio = function(_entidades) {
    DOM.ID.limpiar("contenido");
    DOM.ID.append(
      "contenido",
      [
        Pure.subencabezado("Entidades Donde se encuentran las Unidades Economicas"),
        HTML.append(
          Pure.GridResponsive.fila(),
          [
            HTML.append(
              Pure.GridResponsive.gridres("celda-1"),
              [
                Pure.Formulario.combo("id-opc1", "Entidades ", _entidades, function(_opcion){
                  return {texto: _opcion.nombre, valor: _opcion.id_estado};
                })
              ]),
            HTML.append(
              Pure.GridResponsive.gridres("celda-2"),
              [
                Pure.Boton.exito("Buscar Municipios", {id: "id-ent-mun"}),
                Pure.Boton.exito("Buscar Unidades Economicas", {id: "id-ent-ue"})
              ]),
            HTML.append(
              Pure.GridResponsive.gridres(),
              [
                HTML.div({id: "id-fila2"})
              ]
            )
          ])
      ]);
  DOM.ID.click("id-ent-mun",function() {
    var opcion = DOM.ID.value("id-opc1");
    Aplicacion.Controlador.Entidades.getMun(opcion);  
  });   
  DOM.ID.click("id-ent-ue", function() {
    var opcion = DOM.ID.value("id-opc1");
    Aplicacion.Controlador.Entidades.getue(opcion);
  });
  }
  
  var _resMun = function(_municipios) {
    DOM.ID.limpiar("id-fila2");
    DOM.ID.append(
      "id-fila2",
      [
        Pure.Tabla.bordeada(
          "tabla2",
          ["Número de Municipio", "Nombre del Municipio"],
          _municipios
        )
      ]
    );
  }
  
  var _resue = function(_unidades) {
    DOM.ID.limpiar("id-fila2");
    DOM.ID.append(
      "id-fila2",
      [
        Pure.Tabla.bordeada(
          "tabla2",
          ["Numero de U. E.", "Nombre de la Unidad", "Razon Social"],
          _unidades
        )
      ]
    );
  }
  
  return {
    inicio: _inicio,
    resMun: _resMun,
    resue: _resue
  }
})();

Aplicacion.Vista.Directorios = (function() {
  var _inicio = function(_directorios) {
    DOM.ID.limpiar("contenido");
    DOM.ID.append(
      "contenido",
      [
        Pure.subencabezado("Directorios en el servidor de las Unidades Economicas"),
        HTML.append(
          Pure.GridResponsive.fila(),
          [
            HTML.append(
              Pure.GridResponsive.gridres(),
              [
                Pure.Formulario.combo("id-opc2","Directorios ", _directorios, function(_opcion) {
                  return {texto: _opcion.sector, valor: _opcion.id_directorio}
                })
              ]),
            HTML.append(
              Pure.GridResponsive.gridres(),
              [
                Pure.Boton.exito("Ver Sectores", {id: "btn-dir-sec"}),             
                Pure.Boton.exito("Crear Directorio", {id: "btn-dir-crear"})             
              ])
          ]),
        HTML.div({id:"id-fila"})
      ]);
    DOM.ID.click("btn-dir-sec", function() {
      var opcion = DOM.ID.value("id-opc2");
      Aplicacion.Controlador.Directorios.getActividades(opcion);
    });
    DOM.ID.click("btn-dir-crear", function() {
      Aplicacion.Controlador.Directorios.crear();
    });
  }
  
  var _resActividades = function(_actividades) {
    DOM.ID.limpiar("id-fila");
    DOM.ID.append(
      "id-fila",
      [
        Pure.Tabla.bordeada(
          "tabla1",
          ["Codigo Scian", "Actividad que realiza"],
          _actividades
        )
      ]);
  }
  
  var _crear = function() {
    DOM.ID.limpiar("id-fila");
    DOM.ID.append(
      "id-fila",
      [
        HTML.p("", {id: "mensaje"}),
        Pure.Formulario.crear(
          [
            Pure.Formulario.campo_texto("ID del Directorio","identificador","txt-dir"),
            Pure.Formulario.campo_texto("Nombre ","Nombre del directorio","txt-nombre"),
            Pure.Boton.exito("Guardar", {id:"btn-guardar"})
          ]
        )
      ]);
      
      DOM.ID.click("btn-guardar", function(){
        var _obj = {
          "id_directorio": DOM.ID.value("txt-dir"),
          "actividad": DOM.ID.value("txt-nombre")
        }
        Aplicacion.Controlador.Directorios.petCrear(_obj)
      });
  }
  
  var _resCrear = function(_mensaje) {
    DOM.ID.get("mensaje").textContent = _mensaje;
  }
  
  return{
    inicio: _inicio,
    resActividades: _resActividades,
    crear: _crear,
    resCrear: _resCrear
  }
})();

Aplicacion.Vista.Actividades = (function() {
  var _inicio = function() {
    DOM.ID.limpiar("contenido");
    DOM.ID.append(
      "contenido",
      [
        HTML.p("Actividades o Sectores Especificos", {class: "texto"}),
        HTML.append(
          Pure.GridResponsive.fila(),
          [
            Pure.GridResponsive.gridres("celda-1"),
            Pure.GridResponsive.gridres("celda-2"),
            HTML.append(
              Pure.GridResponsive.gridres("celda-3"),
              [
                Pure.Boton.exito("Crear", {id:"btn-crear"}),
                Pure.Boton.error("Eliminar", {id:"btn-delete"})
              ])
          ]),
        HTML.p("", {id: "mensaje"}),
        HTML.div({id:"id-fila"})        
      ]);
    
    DOM.ID.click("btn-crear", function() {
      Aplicacion.Vista.Actividades.crear();
    });
    
    DOM.ID.click("btn-delete", function() {
      var _id_act = DOM.ID.value("id-cmb");
      var _id_ue = DOM.ID.value("id-cmb2");
      Aplicacion.Controlador.Actividades.x_ue(_id_act, _id_ue);
    });
  }
//Funcion que se ejecuta cuando la respuesta de buscar termine
  var _resAct = function(_actividades) {
    DOM.ID.limpiar("celda-1");
    DOM.ID.append(
      "celda-1",
      [
        Pure.Formulario.combo("id-cmb", "Actividades ", _actividades, function(_opcion) {
        return {texto: _opcion.actividad, valor: _opcion.id_scian}; })
      ]
    );
    DOM.ID.click("id-cmb", function() {
      var _opcion = DOM.ID.value("id-cmb");
      console.log(_opcion);
      Aplicacion.Controlador.Actividades.getue(_opcion);
    })
  }
//funcion que se ejecuta cuando la peticion de las unidades economicas llegue.
  var _resue = function(_unidades) {
    DOM.ID.limpiar("celda-2");
    DOM.ID.append(
      "celda-2",
      [
        Pure.Formulario.combo("id-cmb2", "Unidades Economicas ", _unidades, function(_opcion) {
          return {texto: _opcion.nombre_unidad, valor: _opcion.id_ue};
        })
      ]);
    DOM.ID.limpiar("id-fila");
    DOM.ID.append(
      "id-fila",
      [
        Pure.Tabla.bordeada(
          "tabla1",
          ["ID de la unidad", "Nombre", "Razon Social", "Numero de Personal", "Correo Electronico", "Pagina Web", "SCIAN"],
          _unidades
        )
      ]);
    DOM.TAG.click_varios(DOM.TAG.get("tr"), function(_tr) {
      console.log(_tr.target.parentNode.fila);
      Aplicacion.Vista.Actividades.editar(_tr.target.parentNode.fila);
    });
  }
  
  var _editar = function(_unidad) {
    console.log(_unidad);
    DOM.ID.limpiar("id-fila");
    DOM.ID.append(
      "id-fila",
      [
        Pure.Formulario.crear(
          [
            Pure.Formulario.campo_texto("Id de la unidad", "Id", "id", _unidad.id_ue),
            Pure.Formulario.campo_texto("Nombre", "nombre", "id-nom", _unidad.nombre_unidad),
            Pure.Formulario.campo_texto("Razon Social", "","id-rs", _unidad.razon_social),
            Pure.Formulario.campo_texto("Correo Electronico", "", "id-email", _unidad.email),
            Pure.Formulario.campo_texto("Pagina web", "", "id-pw", _unidad.pagina_web),
            Pure.Boton.exito("Guardar", {id:"btn-guardar"}),            
            Pure.Boton.exito("Regresar", {id:"btn-regresar"})
          ])
      ]);
      DOM.ID.click("btn-guardar", function() {
        var _obj = _unidad;
        var _id_act = DOM.ID.value("id-cmb");
        Aplicacion.Controlador.Actividades.pet_edit(_obj, _id_act, DOM.ID.value("id"));
        });
      DOM.ID.click("btn-regresar", function() {
        Aplicacion.Controlador.Actividades.inicio();
        Aplicacion.Controlador.Actividades.get();
      });
  }
  
  var _crear = function() {
    DOM.ID.limpiar("id-fila");
    DOM.ID.append(
      "id-fila",
      [
        Pure.Formulario.crear(
          [
            Pure.Formulario.campo_texto("Id de la unidad", "Id", "id"),
            Pure.Formulario.campo_texto("Nombre", "nombre", "id-nom"),
            Pure.Formulario.campo_texto("Razon Social", "","id-rs"),
            Pure.Formulario.campo_texto("Personal ", "", "id-p"),
            Pure.Formulario.campo_texto("Correo Electronico", "", "id-email"),
            Pure.Formulario.campo_texto("Pagina web", "", "id-pw"),
            Pure.Boton.exito("Guardar", {id:"btn-guardar"})
          ]
        )
      ]);
      DOM.ID.click("btn-guardar", function() {
        var _obj = {
        "id_ue": DOM.ID.value("id"),
        "nombre_unidad": DOM.ID.value("id-nom"),
        "razon_social": DOM.ID.value("id-rs"),
        "personal": DOM.ID.value("id-p"),
        "email": DOM.ID.value("id-email"),
        "pagina_web": DOM.ID.value("id-pw")
      };
      var _id_act = DOM.ID.value("id-cmb");
      Aplicacion.Controlador.Actividades.pet_nvue(_obj, _id_act, DOM.ID.value("id"));
    });
  }
  
  var _res_nvue = function(_mensaje) {
    DOM.ID.get("mensaje").textContent = _mensaje;
  }
  
  var _res_xue = function(_mensaje) {
    DOM.ID.get("mensaje").textContent = _mensaje;    
  }
  
  return{
    inicio: _inicio,
    editar: _editar,
    resue: _resue,
    resAct: _resAct,
    crear: _crear,
    res_nvue: _res_nvue,
    res_xue: _res_xue
  }
})();

