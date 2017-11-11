using System;
using System.Collections.Generic;
using System.Text;

  public enum SituacionProceso
  {
    Procesada = 1,
    Cerrada = 2,
  }
  
  public enum TipoMensaje
  {
    EXITO = 1,
    ERROR = 2
  } 
  /// <summary>
  /// Edicion: muestra los controles habilitados para modiicacion, muestra los botones Cancelar y Guardar
  /// Consulta: muestra los controles desabilitados, muestra el boton cancelar
  /// Consulta: muestra los controles desabilitados, no muestra los botones
  /// </summary>
  public enum mode
  {
    Nuevo = 1,
    Edicion = 2,
    Consulta = 3,
    ConsultaNoBotones = 4
  }

