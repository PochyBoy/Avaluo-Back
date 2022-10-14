export const querys = {
  getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products]",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",

  getAllusuario: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[aut_usuario]",
  getusuarioById: "SELECT * FROM [dbavaluos].[dbo].[aut_usuario]Where id_usuario = @id_usuario",
  addNewusuario: "INSERT INTO [dbavaluos].[dbo].[aut_usuario] (nombre, codigo, email,rol, estado, fecha_alta, fecha_baja, fecha_modi, password, direccion, telefono) VALUES (@nombre, @codigo, @email,@rol, @estado, @fecha_alta, @fecha_baja, @fecha_modi, @password, @direccion, @telefono);",
  deleteusuario: "DELETE FROM [dbavaluos].[dbo].[aut_usuario] WHERE id_usuario= @id_usuario",
  getTotalusuario: "SELECT COUNT(*) FROM dbavaluos.dbo.aut_usuario",
  updateusuarioById:
    "UPDATE [dbavaluos].[dbo].[aut_usuario] SET  nombre = @nombre, email = @email, rol = @rol, estado = @estado,  fecha_alta = @fecha_alta,  fecha_baja = @fecha_baja,  fecha_modi = @fecha_modi, direccion = @direccion, telefono = @telefono  WHERE id_usuario = @id_usuario",

  getAllasignacion: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_asignacion]",
  getasignacionById: "SELECT * FROM [dbavaluos].[dbo].[cat_asignacion]Where id_asignacion = @id_asignacion",
  addNewasignacion: "INSERT INTO [dbavaluos].[dbo].[cat_asignacion] (descripcion, codigo,estado, fecha_alta, fecha_baja, fecha_modi) VALUES (@descripcion, @codigo, @estado, @fecha_alta, @fecha_baja, @fecha_modi);",
  deleteasignacion: "DELETE FROM [dbavaluos].[dbo].[cat_asignacion] WHERE id_asignacion= @id_asignacion",
  getTotalasignacion: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_asignacion",
  updateasignacionById:
    "UPDATE [dbavaluos].[dbo].[cat_asignacion] SET codigo = @codigo, descripcion = @descripcion, estado = @estado,  fecha_alta = @fecha_alta,  fecha_baja = @fecha_baja,  fecha_modi = @fecha_modi  WHERE id_asignacion = @id_asignacion",

  getAllasignacionsla: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_asignacionsla]",
  getasignacionslaById: "SELECT * FROM [dbavaluos].[dbo].[cat_asignacionsla]Where id_asignacionsla = @id_asignacionsla",
  addNewasignacionsla: "INSERT INTO [dbavaluos].[dbo].[cat_asignacionsla] (actividad, codigo, regla ,tiempo,observacion, estado, fecha_alta, fecha_baja, fecha_modi) VALUES (@actividad, @codigo, @regla, @tiempo,@observacion, @estado, @fecha_alta, @fecha_baja, @fecha_modi);",
  deleteasignacionsla: "DELETE FROM [dbavaluos].[dbo].[cat_asignacionsla] WHERE id_asignacionsla= @id_asignacionsla",
  getTotalasignacionsla: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_asignacionsla",
  updateasignacionslaById:
    "UPDATE [dbavaluos].[dbo].[cat_asignacionsla] SET codigo = @codigo, actividad = @actividad, regla = @regla ,tiempo = @tiempo, observacion = @observacion, estado = @estado,  fecha_alta = @fecha_alta,  fecha_baja = @fecha_baja,  fecha_modi = @fecha_modi  WHERE id_asignacionsla = @id_asignacionsla",

  getAllbanca: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_banca]",
  getbancaById: "SELECT * FROM [dbavaluos].[dbo].[cat_banca]Where id_banca = @id_banca",
  addNewbanca: "INSERT INTO [dbavaluos].[dbo].[cat_banca] (descripcion, codigo,estado, fecha_alta, fecha_baja, fecha_modi) VALUES (@descripcion, @codigo, @estado, @fecha_alta, @fecha_baja, @fecha_modi);",
  deletebanca: "DELETE FROM [dbavaluos].[dbo].[cat_banca] WHERE id_banca= @id_banca",
  getTotalbanca: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_banca",
  updatebancaById:
    "UPDATE [dbavaluos].[dbo].[cat_banca] SET codigo = @codigo, descripcion = @descripcion, estado = @estado,  fecha_alta = @fecha_alta,  fecha_baja = @fecha_baja,  fecha_modi = @fecha_modi  WHERE id_banca = @id_banca",


  getAllbien: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_bien]",
  getbienById: "SELECT * FROM [dbavaluos].[dbo].[cat_bien]Where id_bien = @id_bien",
  addNewbien: "INSERT INTO [dbavaluos].[dbo].[cat_bien] (descripcion, codigo,estado, fecha_alta, fecha_baja, fecha_modi) VALUES (@descripcion, @codigo, @estado, @fecha_alta, @fecha_baja, @fecha_modi);",
  deletebien: "DELETE FROM [dbavaluos].[dbo].[cat_bien] WHERE id_bien= @id_bien",
  getTotalbien: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_bien",
  updatebienById:
    "UPDATE [dbavaluos].[dbo].[cat_bien] SET codigo = @codigo, descripcion = @descripcion, estado = @estado,  fecha_alta = @fecha_alta,  fecha_baja = @fecha_baja,  fecha_modi = @fecha_modi  WHERE id_bien = @id_bien",


  getAllmunicipio: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_municipio]",
  getmunicipioById: "SELECT * FROM [dbavaluos].[dbo].[cat_municipio]Where id_municipio = @id_municipio",
  addNewmunicipio: "INSERT INTO [dbavaluos].[dbo].[cat_municipio] (descripcion, codigo,estado, fecha_alta, fecha_baja, fecha_modi) VALUES (@descripcion, @codigo, @estado, @fecha_alta, @fecha_baja, @fecha_modi);",
  deletemunicipio: "DELETE FROM [dbavaluos].[dbo].[cat_municipio] WHERE id_municipio= @id_municipio",
  getTotalmunicipio: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_municipio",
  updatemunicipioById:
    "UPDATE [dbavaluos].[dbo].[cat_municipio] SET codigo = @codigo, descripcion = @descripcion, estado = @estado,  fecha_alta = @fecha_alta,  fecha_baja = @fecha_baja,  fecha_modi = @fecha_modi  WHERE id_municipio = @id_municipio",

  getAllprofesion: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_profesion]",
  getprofesionById: "SELECT * FROM [dbavaluos].[dbo].[cat_profesion]Where id_profesion = @id_profesion",
  addNewprofesion: "INSERT INTO [dbavaluos].[dbo].[cat_profesion] (descripcion, codigo,estado, fecha_alta, fecha_baja, fecha_modi) VALUES (@descripcion, @codigo, @estado, @fecha_alta, @fecha_baja, @fecha_modi);",
  deleteprofesion: "DELETE FROM [dbavaluos].[dbo].[cat_profesion] WHERE id_profesion= @id_profesion",
  getTotalprofesion: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_profesion",
  updateprofesionById:
    "UPDATE [dbavaluos].[dbo].[cat_profesion] SET codigo = @codigo, descripcion = @descripcion, estado = @estado,  fecha_alta = @fecha_alta,  fecha_baja = @fecha_baja,  fecha_modi = @fecha_modi  WHERE id_profesion = @id_profesion",

  getAlltipodebien: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_tipodebien]",
  gettipodebienById: "SELECT * FROM [dbavaluos].[dbo].[cat_tipodebien]Where id_tipodebien = @id_tipodebien",
  addNewtipodebien: "INSERT INTO [dbavaluos].[dbo].[cat_tipodebien] (descripcion, codigo,estado, fecha_alta, fecha_baja, fecha_modi) VALUES (@descripcion, @codigo, @estado, @fecha_alta, @fecha_baja, @fecha_modi);",
  deletetipodebien: "DELETE FROM [dbavaluos].[dbo].[cat_tipodebien] WHERE id_tipodebien= @id_tipodebien",
  getTotaltipodebien: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_tipodebien",
  updatetipodebienById:
    "UPDATE [dbavaluos].[dbo].[cat_tipodebien] SET codigo = @codigo, descripcion = @descripcion, estado = @estado,  fecha_alta = @fecha_alta,  fecha_baja = @fecha_baja,  fecha_modi = @fecha_modi  WHERE id_tipodebien = @id_tipodebien",


  getAllavaluador: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_avaluador]",
  getavaluadorById: "SELECT * FROM [dbavaluos].[dbo].[cat_avaluador]Where id_avaluador = @id_avaluador",
  addNewavaluador: "INSERT INTO [dbavaluos].[dbo].[cat_avaluador] (fecha_inicio, fecha_fin,nombre, representante_legal, domicilio_legal, domicilio, municipio, profesion, especialidad_valuacion, tiempo_experiencia, contrato, correo_electronico,telefono_oficina, telefono_celular, ci, nit, capacidad_avaluos, estado,fecha_alta, fecha_baja, fecha_modi, tipo_de_persona) VALUES (@fecha_inicio, @fecha_fin,@nombre, @representante_legal, @domicilio_legal, @domicilio, @municipio, @profesion, @especialidad_valuacion, @tiempo_experiencia, @contrato, @correo_electronico,@telefono_oficina, @telefono_celular, @ci, @nit, @capacidad_avaluos, @estado,@fecha_alta, @fecha_baja, @fecha_modi, @tipo_de_persona);",
  deleteavaluador: "DELETE FROM [dbavaluos].[dbo].[cat_avaluador] WHERE id_avaluador= @id_avaluador",
  getTotalavaluador: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_avaluador",
  updateavaluadorById:
    "UPDATE [dbavaluos].[dbo].[cat_avaluador] SET fecha_inicio = @fecha_inicio , fecha_fin = @fecha_fin ,nombre = @nombre , representante_legal = @representante_legal , domicilio_legal = @domicilio_legal , domicilio = @domicilio , municipio = @municipio , profesion = @profesion , especialidad_valuacion = @especialidad_valuacion , tiempo_experiencia = @tiempo_experiencia , contrato = @contrato , correo_electronico = @correo_electronico ,telefono_oficina = @telefono_oficina , telefono_celular = @telefono_celular , ci = @ci , nit = @nit , capacidad_avaluos = @capacidad_avaluos , estado = @estado,fecha_alta = @fecha_alta , fecha_baja = @fecha_baja , fecha_modi = @fecha_modi, tipo_de_persona = @tipo_de_persona WHERE id_avaluador= @id_avaluador ",



  getAllsolicitante: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_solicitante]",
  getsolicitanteById: "SELECT * FROM [dbavaluos].[dbo].[cat_solicitante]Where id_solicitante = @id_solicitante",
  addNewsolicitante: "INSERT INTO [dbavaluos].[dbo].[cat_solicitante] (fecha_inicio, fecha_fin,nombre, domicilio, municipio, profesion,correo_electronico,telefono_oficina, telefono_celular, ci, nit, estado,fecha_alta, fecha_baja, fecha_modi) VALUES (@fecha_inicio, @fecha_fin, @nombre, @domicilio, @municipio, @profesion, @correo_electronico,@telefono_oficina, @telefono_celular, @ci, @nit,  @estado,@fecha_alta, @fecha_baja, @fecha_modi);",
  deletesolicitante: "DELETE FROM [dbavaluos].[dbo].[cat_solicitante] WHERE id_solicitante= @id_solicitante",
  getTotalsolicitante: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_solicitante",
  updatesolicitanteById:
    "UPDATE [dbavaluos].[dbo].[cat_solicitante] SET fecha_inicio = @fecha_inicio , fecha_fin = @fecha_fin ,nombre = @nombre ,domicilio = @domicilio , municipio = @municipio , profesion = @profesion , correo_electronico = @correo_electronico ,telefono_oficina = @telefono_oficina , telefono_celular = @telefono_celular , ci = @ci , nit = @nit , estado = @estado,fecha_alta = @fecha_alta , fecha_baja = @fecha_baja , fecha_modi = @fecha_modi WHERE id_solicitante= @id_solicitante",


  getAllsolicitud: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[mov_solicitud]",
  getsolicitudById: "SELECT * FROM [dbavaluos].[dbo].[mov_solicitud]Where id_solicitud = @id_solicitud",
  addNewsolicitud: "INSERT INTO [dbavaluos].[dbo].[mov_solicitud] (numero_solicitud, solicitante, fecha_solicitud, hora_solicitud ,tipo_banca, tipo_bien, persona_referencia, agencia, municipio, cod_cliente, nombre_cliente, telefono_celular, correo_electronico, tipo_requerimiento, convenio, tipo_asignacion, perito_asignado) VALUES (@numero_solicitud, @solicitante, @fecha_solicitud, @hora_solicitud ,@tipo_banca, @tipo_bien, @persona_referencia, @agencia, @municipio, @cod_cliente, @nombre_cliente, @telefono_celular, @correo_electronico, @tipo_requerimiento, @convenio, @tipo_asignacion, @perito_asignado);",
  deletesolicitud: "DELETE FROM [dbavaluos].[dbo].[mov_solicitud] WHERE id_solicitud= @id_solicitud",
  getTotalsolicitud: "SELECT COUNT(*) FROM dbavaluos.dbo.mov_solicitud",
  updatesolicitudById:
    "UPDATE [dbavaluos].[dbo].[mov_solicitud] SET numero_solicitud =@numero_solicitud , solicitante =@solicitante , fecha_solicitud =@fecha_solicitud , hora_solicitud =@hora_solicitud  ,tipo_banca =@tipo_banca , tipo_bien =@tipo_bien , persona_referencia =@persona_referencia , agencia =@agencia , municipio =@municipio , cod_cliente =@cod_cliente , nombre_cliente =@nombre_cliente , telefono_celular =@telefono_celular , correo_electronico =@correo_electronico , tipo_requerimiento =@tipo_requerimiento , convenio =@convenio , tipo_asignacion =@tipo_asignacion , perito_asignado =@perito_asignado WHERE id_solicitud= @id_solicitud",
    updatesolicitudByIdCliente: "UPDATE [dbavaluos].[dbo].[mov_solicitud] SET fecha_visita = @fecha_visita, fecha_pago = @fecha_pago , calificacion = @calificacion, comentario = @comentario, conformidad = @conformidad WHERE id_solicitud= @id_solicitud" ,

  getAllconvenios: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[mov_convenios]",
  getconveniosById: "SELECT * FROM [dbavaluos].[dbo].[mov_convenios]Where id = @id",
  addNewconvenios: "INSERT INTO [dbavaluos].[dbo].[mov_convenios] (municipio, perito ,nombre_proyecto, fecha_inicio, fecha_fin) VALUES (@municipio, @perito , @nombre_proyecto, @fecha_inicio, @fecha_fin);",
  deleteconvenios: "DELETE FROM [dbavaluos].[dbo].[mov_convenios] WHERE id= @id",
  getTotalconvenios: "SELECT COUNT(*) FROM dbavaluos.dbo.mov_convenios",
  updateconveniosById:
    "UPDATE [dbavaluos].[dbo].[mov_convenios] SET municipio =@municipio , perito =@perito  ,nombre_proyecto =@nombre_proyecto , fecha_inicio =@fecha_inicio , fecha_fin =@fecha_fin WHERE id= @id ",


  getAlltipodepersona: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_tipodepersona]",
  gettipodepersonaById: "SELECT * FROM [dbavaluos].[dbo].[cat_tipodepersona]Where id_tipodepersona = @id_tipodepersona",
  addNewtipodepersona: "INSERT INTO [dbavaluos].[dbo].[cat_tipodepersona] (descripcion, codigo,estado) VALUES (@descripcion, @codigo, @estado);",
  deletetipodepersona: "DELETE FROM [dbavaluos].[dbo].[cat_tipodepersona] WHERE id_tipodepersona= @id_tipodepersona",
  getTotaltipodepersona: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_tipodepersona",
  updatetipodepersonaById:
    "UPDATE [dbavaluos].[dbo].[cat_tipodepersona] SET codigo = @codigo, descripcion = @descripcion, estado = @estado  WHERE id_tipodepersona = @id_tipodepersona",


  getAllMovdocumentodesolicitud: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[mov_documentodesolicitud]",
  getMovdocumentodesolicitudById: "SELECT * FROM [dbavaluos].[dbo].[mov_documentodesolicitud]Where id_documentodesolicitud = @id_documentodesolicitud",
  addNewMovdocumentodesolicitud: "INSERT INTO [dbavaluos].[dbo].[mov_documentodesolicitud] (descripcion, obligatorio,  documento1, documento2, documento3, documento4, documento5, documento6, documento7,codigodesolicitud) VALUES (@descripcion, @obligatorio, @documento1, @documento2, @documento3, @documento4, @documento5, @documento6, @documento7, @codigodesolicitud);",
  deleteMovdocumentodesolicitud: "DELETE FROM [dbavaluos].[dbo].[mov_documentodesolicitud] WHERE id_documentodesolicitud= @id_documentodesolicitud",
  getTotalMovdocumentodesolicitud: "SELECT COUNT(*) FROM dbavaluos.dbo.mov_documentodesolicitud",
  updateMovdocumentodesolicitudById:
    "UPDATE [dbavaluos].[dbo].[mov_documentodesolicitud] SET obligatorio = @obligatorio, descripcion = @descripcion, documento1 =@documento1, documento2 =@documento2, documento3 =@documento3, documento4 =@documento4, documento5 =@documento5, documento6 =@documento6, documento7 =@documento7, codigodesolicitud = @codigodesolicitud WHERE id_documentodesolicitud = @id_documentodesolicitud",

  getAllCatdocumentodesolicitud: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_documentodesolicitud]",
  getCatdocumentodesolicitudById: "SELECT * FROM [dbavaluos].[dbo].[cat_documentodesolicitud]Where id_documentodesolicitud = @id_documentodesolicitud",
  addNewCatdocumentodesolicitud: "INSERT INTO [dbavaluos].[dbo].[cat_documentodesolicitud] (descripcion, obligatorio, estado) VALUES (@descripcion, @obligatorio, @estado);",
  deleteCatdocumentodesolicitud: "DELETE FROM [dbavaluos].[dbo].[cat_documentodesolicitud] WHERE id_documentodesolicitud= @id_documentodesolicitud",
  getTotalCatdocumentodesolicitud: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_documentodesolicitud",
  updateCatdocumentodesolicitudById:
    "UPDATE [dbavaluos].[dbo].[cat_documentodesolicitud] SET obligatorio = @obligatorio, descripcion = @descripcion, estado = @estado WHERE id_documentodesolicitud = @id_documentodesolicitud",

  getAllubicaciondesolicitud: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_ubicaciondesolicitud]",
  getubicaciondesolicitudById: "SELECT * FROM [dbavaluos].[dbo].[cat_ubicaciondesolicitud]Where id_ubicaciondesolicitud = @id_ubicaciondesolicitud",
  addNewubicaciondesolicitud: "INSERT INTO [dbavaluos].[dbo].[cat_ubicaciondesolicitud] (numerodesolicitante, responsable,nombre, email, direccion, coordenadasX, coordenadasY, puntoX, puntoY) VALUES (@numerodesolicitante, @responsable, @nombre, @email, @direccion, @coordenadasX, @coordenadasY, @puntoX, @puntoY);",
  deleteubicaciondesolicitud: "DELETE FROM [dbavaluos].[dbo].[cat_ubicaciondesolicitud] WHERE id_ubicaciondesolicitud= @id_ubicaciondesolicitud",
  getTotalubicaciondesolicitud: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_ubicaciondesolicitud",
  updateubicaciondesolicitudById:
    "UPDATE [dbavaluos].[dbo].[cat_ubicaciondesolicitud] SET numerodesolicitante = @numerodesolicitante, responsable = @responsable, nombre = @nombre,  email = @email,  direccion = @direccion,  coordenadasX = @coordenadasX, coordenadasY = @coordenadasY, puntoX = @puntoX, puntoY = @puntoY  WHERE id_ubicaciondesolicitud = @id_ubicaciondesolicitud",

    getAllvaloracion: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_valoracion]",
    getvaloracionById: "SELECT * FROM [dbavaluos].[dbo].[cat_valoracion]Where id_valoracion = @id_valoracion",
    addNewvaloracion: "INSERT INTO [dbavaluos].[dbo].[cat_valoracion] (fecha_visita, fecha_pago ,calificacion, comentario, email, conformidad) VALUES (@fecha_visita, @fecha_pago , @calificacion, @comentario, @email ,@conformidad);",
    deletevaloracion: "DELETE FROM [dbavaluos].[dbo].[cat_valoracion] WHERE id_valoracion= @id_valoracion",
    getTotalvaloracion: "SELECT COUNT(*) FROM dbavaluos.dbo.cat_valoracion",
    updatevaloracionById:
      "UPDATE [dbavaluos].[dbo].[cat_valoracion] SET fecha_visita = @fecha_visita, fecha_pago = @fecha_pago, calificacion = @calificacion,  comentario = @comentario, email =@email ,conformidad = @conformidad  WHERE id_valoracion = @id_valoracion",
   getvaloracionFechaNull: "SELECT * FROM [dbavaluos].[dbo].[cat_avaluador]  WHERE fecha_fin is null",
    getvaloracionByIdEmail: "SELECT TOP (1000) * FROM [dbavaluos].[dbo].[cat_valoracion] Where email = @email",
      
   
      getAllubicaciondesolicitudv2: "SELECT TOP(500) * FROM [dbavaluos].[dbo].[cat_ubicaciondesolicitud]",
getubicaciondesolicitudByIdv2: "SELECT * FROM [dbavaluos].[dbo].[cat_ubicaciondesolicitud]Where numerodesolicitante = @numerodesolicitante",
updateubicaciondesolicitudByIdv2:
  "UPDATE [dbavaluos].[dbo].[cat_ubicaciondesolicitud] SET  responsable = @responsable, nombre = @nombre,  email = @email,  direccion = @direccion,  coordenadasX = @coordenadasX, coordenadasY = @coordenadasY, puntoX = @puntoX, puntoY = @puntoY WHERE numerodesolicitante = @numerodesolicitante",
  deleteubicaciondesolicitudv2: "DELETE FROM [dbavaluos].[dbo].[cat_ubicaciondesolicitud] WHERE numerodesolicitante= @numerodesolicitante",
  addNewubicaciondesolicitudv2: "INSERT INTO [dbavaluos].[dbo].[cat_ubicaciondesolicitud] (numerodesolicitante, responsable,nombre, email, direccion, coordenadasX, coordenadasY, puntoX, puntoY) VALUES (@numerodesolicitante, @responsable, @nombre, @email, @direccion, @coordenadasX, @coordenadasY, @puntoX, @puntoY);",


  updateubicaciondesolicitudByIdPut:
    "UPDATE [dbavaluos].[dbo].[cat_ubicaciondesolicitud] SET validar = @validar  WHERE numerodesolicitante = @numerodesolicitante",


    
    updatesolicitudByIdput:
      "UPDATE [dbavaluos].[dbo].[mov_solicitud] SET validacion = @validacion  WHERE id_solicitud= @id_solicitud",
  


      getsolicitudByIdemail: "SELECT * FROM [dbavaluos].[dbo].[mov_solicitud]Where correo_electronico = @correo_electronico",


      getUserById:
    'SELECT id_usuario, codigo, nombre, email, rol, estado, fecha_alta, fecha_baja, fecha_modi, password FROM [dbavaluos].[dbo].[aut_usuario] WHERE id_usuario = @id_usuario',

    getUserLoginByEMail:
    'SELECT * FROM [dbavaluos].[dbo].[aut_usuario] WHERE email = @email',

    getUserpassword:
    'SELECT password FROM [dbavaluos].[dbo].[aut_usuario] WHERE email = @email',

    updateusuarioByIdPassword:
    "UPDATE [dbavaluos].[dbo].[aut_usuario] SET  password = @password  WHERE id_usuario = @id_usuario",

    getUsuarioRolCliente: "SELECT * FROM [dbavaluos].[dbo].[aut_usuario]  WHERE rol = 'Cliente'" ,

};
