/*
HACER
    Mostrar los totales por cada dimensión padre (modificar la forma de obtener los colspan y rowspan) ---YA
    Al pasar el mouse sobre cada dimensión padre, mostrar botonera (abrir/cerrar, título) ---YA
    Poner estilos diferenciados por nivel de dimensión, medida, total, etc. ---YA
    Agregar totales de totales abajo y a la derecha y el total de todo en la esquina inferior derecha ---NO, SE HACE CON COLUMNAS DE TOTALES
    
    
    Cuando se cierre una dimensión, mostrar la tabla completa igual pero poner display:none a las celdas de las dimensiones
        hijas (los totales no) y a las medidas de las dimensiones hijas ---YA
    
    En las dimensiones hijas de columnas hay que dejar un espacio para el total del padre y de los abuelos ---YA
    
    En las dimensiones hijas de filas hay que dejar un espacio para el total del padre y de los abuelos ---YA
    
    Al mostrar las medidas, se debe completar cada fila con celdas vacías hasta que todas las filas tengan el mismo tamaño ---YA
    
    Que los totales puedan ser suma o promedio
        Que se pueda indicar si los valores enteros se muestran sin decimales (,00) cuando la cantidad de decimales es mayor que 0
    
    Que se pueda formatear la medida para el caso que sea con decimales ---YA
    
    Agregar tooltips a los datos de las medidas ---YA
    
    Poner filtros a las medidas (todos o uno especifico - varios juntos si se puede) ---YA
    
    Arriba del cubo poner los nombres de cada fila o columna y que al hacer click en ellos se abra el filtro ---YA
    
    
    Arreglar las columnas al ocultar todos los meses menos uno ---YA
    
    Los totales deberían tener en cuenta los filtros ---YA
    
    Ubicar bien los drop down de filtros teniendo en cuenta el left y top de los parents ---YA
    
    Cambiar el icono de filtro por uno de refresh ---YA
    
    Al drag drop poner que la cantidad máxima de elementos dentro de un target sea igual a la cantidad de dimensiones menos 1 ---NO
    
    
    PARA EL CAMBIO DE ESTRUCTURA: ---YA
        VER SI SE PUEDE CREAR UN ARRAY DE PUNTEROS A DIMENSIONES Y QUE SE TRABAJE CON ESE EN LOS CICLOS ---YA
        QUE ESTE ARRAY TENGA EL ORDEN DE LAS DIMENSIONES ---YA
        DE TODAS MANERAS SE DEBEN RECARGAR LOS ARRAYS FILAS Y COLUMNAS ---YA
        LA ESTRUCTURA DEBERIA LLEVAR EL INDICE DE PUNTEROS ---YA
    
    Arreglar los estilos para dimensiones mayores a 3 (son los estilos que estan juntos) ---YA
    
    REVISAR POR QUE DA ERROR CUANDO SE PONEN 5 FILAS Y 1 COLUMNA ---YA
    
    LOS FILTROS NO ESTAN ANDANDO BIEN CUANDO SE MUEVE LA COLUMNA ---YA
    
    HAY QUE RECARGAR LOS FILTROS EN CADA REDIBUJO MANTENIENDO LOS ESTADOS ---YA
        GUARDAR EL DIV DONDE VA EL FILTRO ---YA
        AL DIBUJAR EL FILTRO, VER LAS OPCIONES QUE ESTAN CHEQUEADAS Y PONERLES EL MISMO ESTADO ---YA
        AL SELECT ALL SOLO CHEQUEARLO SI TODOS LOS CHECK ESTAN CHEQUEADOS ---YA
    
    ARREGLAR LOS ESTILOS PARA QUE TODAS LAS CELDAS TENGAN BORDE Y QUE LOS TOTALES DE TODOS LOS NIVELES QUEDEN CON LOS COLORES CORRECTOS ---YA
    
    HACER UN PANEL QUE DIGA RELOADING CUANDO SE ESTÁ DIBUJANDO LA TABLA ---NO, NO ANDA
    
    CONTROLAR QUE NO PUEDAN ESTAR TODAS LAS DIMENSIONES EN FILAS O EN COLUMNAS (VALIDADOR) ---YA
    
    VER QUE PASA CUANDO NO HAY NINGUNA DIMENSIÓN EXCLUIDA (ERROR! - CORREGIR) ---YA
    
    CREAR LA IMAGEN DE EXCLUIDAS (ICONO DE DRAG AND DROP) ---YA
    
    ARREGLAR LA POSICION DE LOS DROP DOWNS DE DIMENSIONES ---YA
    
    DIO PROBLEMAS CUANDO SELECCIONE: ---YA
        Pais    Provincia   Decada
        Ciudad  Año         Mes
    
    FUNCIONA MAL CUANDO UNA FILA Y UNA COLUMNA TIENEN LOS MISMOS VALORES (EJEMPLO "total") ---YA
    
    
*/


/*
LOS TOOLTIP SE DEFINEN EN EL MISMO VALOR QUE EL CAMPO SEPARANDOLO CON |. EJS: "VALOR|TOOLTIP", "07|JULIO"
*/







//Variables globales
var ClsCuboOlap_ImagenAbrirDimension = "../Imagenes/mas.gif";
var ClsCuboOlap_ImagenCerrarDimension = "../Imagenes/menos.gif";
var ClsCuboOlap_ImagenActualizar = "../Imagenes/refresh.gif";
var ClsCuboOlap_ImagenFilas = "../Imagenes/filas.gif";
var ClsCuboOlap_ImagenColumnas = "../Imagenes/columnas.gif";
var ClsCuboOlap_ImagenExcluidas = "../Imagenes/excluidas.gif";

/*var ClsCuboOlap_Language_Rows = "Filas";
var ClsCuboOlap_Language_Columns = "Columnas";*/
var ClsCuboOlap_Language_Close = "Cerrar";
var ClsCuboOlap_Language_Validacion = "Debe tener al menos una fila y una columna";



//Funciones
function CuboOlap_AbrirCerrarDimension(sTipo, iIndiceDimension, iIndiceItem)
{
    oCuboOlap_Cubo.AbrirCerrarDimension(sTipo, iIndiceDimension, iIndiceItem);
}

function CuboOlap_AbrirCerrarFiltro(sIdFiltro, sIdFiltroDropDown)
{
	var divLeft = 0;
	var divTop = 0;
	var divParent;
	var bExit = false;
	
    var oFiltro = document.getElementById(sIdFiltro);
    var oFiltroDD = document.getElementById(sIdFiltroDropDown);
    if (oFiltro && oFiltroDD)
    {
        if (oFiltroDD.style.display.toLowerCase() == "block")
        {
            oFiltroDD.style.display = "none";
        }
        else
        {
			/*divParent = oFiltro;
	        while (divParent.offsetParent){
		        divLeft += divParent.offsetLeft + (divParent.currentStyle?(parseInt(divParent.currentStyle.borderLeftWidth)).NaN_0():0);
		        divTop += divParent.offsetTop  + (divParent.currentStyle?(parseInt(divParent.currentStyle.borderTopWidth)).NaN_0():0);
		        divParent = divParent.offsetParent;
	        }*/
	        
			// Find the div's offsetTop and offsetLeft relative to the BODY tag.
			divLeft   = oFiltro.offsetLeft;
			divTop    = oFiltro.offsetTop;
			
			divParent = oFiltro.offsetParent;
		    while ((divParent) && (!bExit))
		    {
	            divLeft  += divParent.offsetLeft;
	            divTop   += divParent.offsetTop;
		        if (divParent.offsetParent)
		        {
		            divParent = divParent.offsetParent;
			    }
			    else
			    {
			        bExit = true;
			    }
		    }
		    
			//alert(divTop + ", " + oFiltro.offsetHeight);
            /*oFiltroDD.style.left = divLeft + "px";// + (oFiltro.currentStyle?(parseInt(oFiltro.currentStyle.borderLeftWidth)).NaN_0():0) + "px";
            oFiltroDD.style.top = (divTop + oFiltro.offsetHeight) + "px"; //+ (oFiltro.currentStyle?(parseInt(oFiltro.currentStyle.borderTopWidth)).NaN_0():0) + "px";*/
            oFiltroDD.style.display = "block";
            
        }
    }
}

function CuboOlap_MarcarDesmarcarFiltro(oChkTodos, sNameFiltroCheck)
{
    var aChks = document.getElementsByName(sNameFiltroCheck);
    var i = 0;
    if (aChks)
    {
        for (i=0; i<aChks.length; i++)
        {
            aChks[i].checked = oChkTodos.checked;
        }
    }
}

function CuboOlap_AplicarFiltros()
{
    //validacion
    var i = 0;
    var iFilas = 0;
    var iColumnas = 0;
    var iExcluidas = 0;
    var oFilas = document.getElementById("divContenedorFiltrosFilas");
    var oColumnas = document.getElementById("divContenedorFiltrosColumnas");
    var oExcluidas = document.getElementById("divContenedorFiltrosExcluidas");
    if (oFilas)
    {
        var aFilas = oFilas.getElementsByTagName("DIV");
        for (i=0; i<aFilas.length; i++)
        {
            if (aFilas[i].className == "DragBox") iFilas++;
        }
    }
    if (oColumnas)
    {
        var aColumnas = oColumnas.getElementsByTagName("DIV");
        for (i=0; i<aColumnas.length; i++)
        {
            if (aColumnas[i].className == "DragBox") iColumnas++;
        }
    }
    if (oExcluidas)
    {
        var aExcluidas = oExcluidas.getElementsByTagName("DIV");
        for (i=0; i<aExcluidas.length; i++)
        {
            if (aExcluidas[i].className == "DragBox") iExcluidas++;
        }
    }
    if ((iFilas == 0) || (iColumnas == 0))
    {
        alert(ClsCuboOlap_Language_Validacion);
    }
    else
    {
        //Rearmar tabla
        oCuboOlap_Cubo.ReordenarEstructura();
        oCuboOlap_Cubo.Dibujar();
    }
}











//clase ClsCuboOlap_Dimension
function ClsCuboOlap_Dimension(sNombreCampo, sTitulo, sTipo, iIndice)
{
    //Attributes
    this.NombreCampo = sNombreCampo;
    this.Titulo = sTitulo;
    this.Tipo = sTipo; //fila, columna o excluida
    this.Items = new Array();
    this.IndiceDimension = iIndice;
    
    //Methods
    this.AgregarItem = ClsCuboOlap_Dimension_AgregarItem;
    this.SetearPadresCerradosDeHijos = ClsCuboOlap_Dimension_SetearPadresCerradosDeHijos;
}

function ClsCuboOlap_Dimension_AgregarItem(oItem)
{
    this.Items[this.Items.length] = oItem;
    oItem.IndiceItem = this.Items.length - 1;
}

function ClsCuboOlap_Dimension_SetearPadresCerradosDeHijos()
{
    var i = 0;
    var bAux = false;
    for (i = 0; i < this.Items.length; i++)
    {
        bAux = this.Items[i].AlgunPadreCerrado();
    }
}



/*******************************************************************************************************************************/


//clase ClsCuboOlap_ItemDimension
function ClsCuboOlap_ItemDimension(oPadre, oDimension, sValor, iIndiceDimension)
{
    //Attributes
    this.Padre = oPadre;
    this.Dimension = oDimension;
    this.Valor = sValor;
    this.Hijos = new Array();
    this.Abierto = true;
    this.TieneAlgunPadreCerrado = false;
    this.EstaFiltrado = false;
    this.IndiceDimension = iIndiceDimension;
    this.IndiceItem = -1;
    
    //Methods
    this.AgregarHijo = ClsCuboOlap_ItemDimension_AgregarHijo;
    this.ObtenerCantidadHijos = ClsCuboOlap_ItemDimension_ObtenerCantidadHijos;
    this.ObtenerCantidadHijosNoProfundizarCerrados = ClsCuboOlap_ItemDimension_ObtenerCantidadHijosNoProfundizarCerrados;
    this.ObtenerCantidadHijosNoFiltradosNoProfundizarCerrados = ClsCuboOlap_ItemDimension_ObtenerCantidadHijosNoFiltradosNoProfundizarCerrados;
    this.ObtenerCantidadHijosUltimoNivel = ClsCuboOlap_ItemDimension_ObtenerCantidadHijosUltimoNivel;
    this.CantidadPadresEsUltimoItem = ClsCuboOlap_ItemDimension_CantidadPadresEsUltimoItem;
    this.AbrirCerrar = ClsCuboOlap_ItemDimension_AbrirCerrar;
    this.ObtenerIndice = ClsCuboOlap_ItemDimension_ObtenerIndice;
    this.AlgunPadreCerrado = ClsCuboOlap_ItemDimension_AlgunPadreCerrado;
    this.ChequearSiEstaFiltrado = ClsCuboOlap_ItemDimension_ChequearSiEstaFiltrado;
}

function ClsCuboOlap_ItemDimension_AgregarHijo(oHijo)
{
    this.Hijos[this.Hijos.length] = oHijo;
}

function ClsCuboOlap_ItemDimension_ObtenerCantidadHijos()
{
    var iReturn = 0;
    var i = 0;
    
    if (this.Hijos.length == 0)
    {
        iReturn = 0;
    }
    else
    {
        iReturn += this.Hijos.length;
        for (i = 0; i < this.Hijos.length; i++)
        {
            /*if (this.Hijos[i].Hijos.length == 0)
            {
                iReturn = this.Hijos.length;
            }
            else
            {*/
                iReturn += this.Hijos[i].ObtenerCantidadHijos();
            //}
        }
    }
    
    return iReturn;
}

function ClsCuboOlap_ItemDimension_ObtenerCantidadHijosNoProfundizarCerrados()
{
    var iReturn = 0;
    var i = 0;
    
    if (this.Abierto)
    {
        if (this.Hijos.length == 0)
        {
            iReturn = 0;
        }
        else
        {
            /*for (i = 0; i < this.Hijos.length; i++)
            {
                if (this.Hijos[i].Abierto) iReturn++;
            }*/
            iReturn += this.Hijos.length;
            for (i = 0; i < this.Hijos.length; i++)
            {
                /*if (this.Hijos[i].Hijos.length == 0)
                {
                    iReturn = this.Hijos.length;
                }
                else
                {*/
                    if (this.Hijos[i].Abierto) iReturn += this.Hijos[i].ObtenerCantidadHijosNoProfundizarCerrados();
                //}
            }
        }
    }
    
    return iReturn;
}

function ClsCuboOlap_ItemDimension_ObtenerCantidadHijosNoFiltradosNoProfundizarCerrados()
{
    var iReturn = 0;
    var i = 0;
    
    if (this.Abierto)
    {
        if (this.Hijos.length == 0)
        {
            iReturn = 0;
        }
        else
        {
            /*for (i = 0; i < this.Hijos.length; i++)
            {
                if (this.Hijos[i].Abierto) iReturn++;
            }*/
            ////iReturn += this.Hijos.length;
            for (i = 0; i < this.Hijos.length; i++)
            {
                /*if (this.Hijos[i].Hijos.length == 0)
                {
                    iReturn = this.Hijos.length;
                }
                else
                {*/
                    if (!this.Hijos[i].EstaFiltrado) iReturn++;
                    if ((this.Hijos[i].Abierto) && (!this.Hijos[i].EstaFiltrado)) iReturn += this.Hijos[i].ObtenerCantidadHijosNoFiltradosNoProfundizarCerrados();
                //}
            }
        }
    }
    
    return iReturn;
}

function ClsCuboOlap_ItemDimension_ObtenerCantidadHijosUltimoNivel()
{
    var iReturn = 0;
    var i = 0;
    
    if (this.Hijos.length == 0)
    {
        iReturn = 0;
    }
    else
    {
        for (i = 0; i < this.Hijos.length; i++)
        {
            if (this.Hijos[i].Hijos.length == 0)
            {
                iReturn = this.Hijos.length;
            }
            else
            {
                iReturn += this.Hijos[i].ObtenerCantidadHijosUltimoNivel();
            }
        }
    }
    
    return iReturn;
}

function ClsCuboOlap_ItemDimension_CantidadPadresEsUltimoItem(aArrayItems, iIndiceItem, iIndiceDimension)
{
    iReturn = 0;
    if (iIndiceItem == (aArrayItems.length - 1))
    {
        iReturn = iIndiceDimension;
    }
    else
    {
        var oPadreYo = this.Padre;
        var oPadreItemSiguiente = aArrayItems[iIndiceItem + 1].Padre;
        while ((oPadreYo != null) && (oPadreItemSiguiente != null))
        {
            if (oPadreYo != oPadreItemSiguiente)
            {
                iReturn++;
                oPadreYo = oPadreYo.Padre;
                oPadreItemSiguiente = oPadreItemSiguiente.Padre;
            }
            else
            {
                oPadreYo = null;
                oPadreItemSiguiente = null;
            }
        }
    }
    return iReturn;
}

function ClsCuboOlap_ItemDimension_AbrirCerrar()
{
    if (this.Abierto)
    {
        this.Abierto = false;
    }
    else
    {
        this.Abierto = true;
    }
}

function ClsCuboOlap_ItemDimension_ObtenerIndice()
{
    var iReturn = -1;
    var i = 0;
    while ((i < this.Dimension.Items.length) && (iReturn == -1))
    {
        if (this.Dimension.Items[i] == this) iReturn = i;
        i++;
    }
    return iReturn;
}

function ClsCuboOlap_ItemDimension_AlgunPadreCerrado()
{
    var bReturn = false;
    var oPadre = this.Padre;
    while ((oPadre != null) && (!bReturn))
    {
        if (!oPadre.Abierto) bReturn = true;
        oPadre = oPadre.Padre;
    }
    
    this.TieneAlgunPadreCerrado = bReturn;
    
    return bReturn;
}

function ClsCuboOlap_ItemDimension_ChequearSiEstaFiltrado()
{
    var bReturn = false;
    var oChk = null;
    var oPadre = this;
    var sPrefijo = "chkDimension_";//((this.Dimension.Tipo == "fila") ? "chkFila_" : "chkColumna_");

    while ((oPadre != null) && (!bReturn))
    {
        oChk = document.getElementById(sPrefijo + oPadre.Dimension.IndiceDimension + "_" + (oPadre.IndiceItem + 1) + "");
        //alert(sPrefijo + oPadre.IndiceDimension + "_" + oPadre.IndiceItem + "");
        if (oChk) if (!oChk.checked) bReturn = true;
        //if (!oPadre.Abierto) bReturn = true;
        oPadre = oPadre.Padre;
    }
    
    this.EstaFiltrado = bReturn;
    
    return bReturn;
    
    
    
    /*
    var bReturn = false;
    var oChk = null;
    var k = 0;

        alert("chkColumna_" + this.IndiceDimension + "_" + this.IndiceItem + "" + ", " + this.IndiceDimension + ", " + this.IndiceItem);
        oChk = document.getElementById("chkColumna_" + this.IndiceDimension + "_" + this.IndiceItem + "");
        //if (oChk) if (!oChk.checked) { alert("chkColumna_" + this.IndiceDimension + "_" + this.IndiceItem + "" + ", " + this.IndiceDimension + ", " + this.IndiceItem); bReturn = true; }
        if (oChk) if (!oChk.checked) bReturn = true;

    
    this.EstaFiltrado = bReturn;
    */
    return bReturn;
}


/*******************************************************************************************************************************/


//clase ClsCuboOlap_ItemEstructuraDatos
function ClsCuboOlap_ItemEstructuraDatos(sTitulo, sNombreColumna, sTipoColumna, sUbicacion)
{
    //Attributes
    this.Titulo = sTitulo;
    this.NombreColumna = sNombreColumna;
    this.Tipo = sTipoColumna;  //Tipos válidos: "dimension", "medida"
    this.Ubicacion = sUbicacion;  //Ubicaciones válidas: "fila", "columna", "excluida"
    
    //Methods
}


/*******************************************************************************************************************************/


//clase ClsCuboOlap_EstructuraDatos
function ClsCuboOlap_EstructuraDatos()
{
    //Attributes
    this.Columnas = new Array(); //Array de ClsCuboOlap_ItemEstructuraDatos
    this.IndiceColumnas = new Array(); //Array de indices parea ordenar las columnas
    
    //Methods
    this.AgregarColumna = ClsCuboOlap_EstructuraDatos_AgregarColumna;
    this.ObtenerLongitud = ClsCuboOlap_EstructuraDatos_ObtenerLongitud;
    this.BuscarIndice = ClsCuboOlap_EstructuraDatos_BuscarIndice;
    this.BuscarIndiceMedida = ClsCuboOlap_EstructuraDatos_BuscarIndiceMedida;
}

function ClsCuboOlap_EstructuraDatos_AgregarColumna(sTitulo, sNombreColumna, sTipoColumna, sUbicacion)
{
    this.Columnas[this.Columnas.length] = new ClsCuboOlap_ItemEstructuraDatos(sTitulo, sNombreColumna, sTipoColumna, sUbicacion);
    this.IndiceColumnas[this.IndiceColumnas.length] = this.IndiceColumnas.length;
}

function ClsCuboOlap_EstructuraDatos_ObtenerLongitud()
{
    return this.Columnas.length;
}

function ClsCuboOlap_EstructuraDatos_BuscarIndice(sNombreColumna)
{
    var iIndice = -1;
    var i = 0;
    while ((i < this.Columnas.length) && (iIndice == -1))
    {
        if (this.Columnas[i].NombreColumna == sNombreColumna) iIndice = i;
        i++;
    }
    return iIndice;
}

function ClsCuboOlap_EstructuraDatos_BuscarIndiceMedida()
{
    var iIndice = -1;
    var i = 0;
    while ((i < this.Columnas.length) && (iIndice == -1))
    {
        if (this.Columnas[i].Tipo.toLowerCase() == "medida") iIndice = i;
        i++;
    }
    return iIndice;
}


/*******************************************************************************************************************************/



//clase ClsCuboOlap_Datos
function ClsCuboOlap_Datos()
{
    //Attributes
    this.Estructura = null;
    this.Datos = new Array();
    
    //Methods
    this.SetEstructura = ClsCuboOlap_Datos_SetEstructura;
    this.AgregarDatos = ClsCuboOlap_Datos_AgregarDatos;
    this.ValidarDatosConEstructura = ClsCuboOlap_Datos_ValidarDatosConEstructura;
}

function ClsCuboOlap_Datos_SetEstructura(oEstructura)
{
    this.Estructura = oEstructura;
}

function ClsCuboOlap_Datos_AgregarDatos()
{
    this.Datos[this.Datos.length] = arguments;
}

function ClsCuboOlap_Datos_ValidarDatosConEstructura()
{
    var sReturn = "";
    var iFilasIncorrectas = 0;
    var i = 0;
    
    if (this.Estructura == null)
    {
        sReturn += "No se definió la estructura de datos";
    }
    else
    {
        var iLongitudEstructura = this.Estructura.ObtenerLongitud();
        for (i=0; i<this.Datos.length; i++)
        {
            if (this.Datos[i].length != iLongitudEstructura) iFilasIncorrectas++;
        }
        if (iFilasIncorrectas > 0)
        {
            if (iFilasIncorrectas != 1)
            {
                sReturn += "Existen " + iFilasIncorrectas + " filas incorrectas";
            }
            else
            {
                sReturn += "Existe 1 fila incorrecta";
            }
        }
    }
    
    return sReturn;
}


/*******************************************************************************************************************************/



//clase ClsCuboOlap_Cubo
function ClsCuboOlap_Cubo()
{
    //Attributes
    this.Datos = null;
    this.Filas =  new Array(); //dimensiones
    this.Columnas = new Array(); //dimensiones
    this.Excluidas = new Array(); //dimensiones
    this.ItemsDimensiones = new Array();
    this.Medidas = new Array();
    this.Contenedor = null;
    this.ContenedorFiltro = null;
    this.Decimales = 2;
    this.SeparadorDecimal = ",";
    this.EliminarDecimalesCero = true;
    this.Operacion = "sum"; //sum o avg

    //Methods
    this.SetDatos = ClsCuboOlap_Cubo_SetDatos;
    this.VaciarArrays = ClsCuboOlap_Cubo_VaciarArrays;
    this.AgregarFila = ClsCuboOlap_Cubo_AgregarFila;
    this.AgregarColumna = ClsCuboOlap_Cubo_AgregarColumna;
    this.AgregarExcluida = ClsCuboOlap_Cubo_AgregarExcluida;
    this.Procesar = ClsCuboOlap_Cubo_Procesar;
    this.CargarDimensiones = ClsCuboOlap_Cubo_CargarDimensiones;
    this.CargarItemsDimensiones = ClsCuboOlap_Cubo_CargarItemsDimensiones;
    this.CargarItemsDimensionesArray = ClsCuboOlap_Cubo_CargarItemsDimensionesArray;
    this.CargarMedidas = ClsCuboOlap_Cubo_CargarMedidas;
    this.AgregarItemDimension = ClsCuboOlap_Cubo_AgregarItemDimension;
    //this.ExisteValor = ClsCuboOlap_Cubo_ExisteValor;
    this.ObtenerIndiceEstructura = ClsCuboOlap_Cubo_ObtenerIndiceEstructura;
    this.CorrespondeAgregar = ClsCuboOlap_Cubo_CorrespondeAgregar;
    this.ObtenerIndiceDimension = ClsCuboOlap_Cubo_ObtenerIndiceDimension;
    this.AbrirCerrarDimension = ClsCuboOlap_Cubo_AbrirCerrarDimension;
    this.SetearPadresCerrados = ClsCuboOlap_Cubo_SetearPadresCerrados;
    this.SetearFiltros = ClsCuboOlap_Cubo_SetearFiltros;
    this.ReordenarEstructura = ClsCuboOlap_Cubo_ReordenarEstructura;
    this.ObtenerCodigo = ClsCuboOlap_Cubo_ObtenerCodigo;
    this.ObtenerCodigoFiltros = ClsCuboOlap_Cubo_ObtenerCodigoFiltros;
    this.FormatearNumero = ClsCuboOlap_Cubo_FormatearNumero;
    this.Dibujar = ClsCuboOlap_Cubo_Dibujar;
}

function ClsCuboOlap_Cubo_SetDatos(oDatos)
{
    this.Datos = oDatos;
//    this.Datos.Estructura.IndiceColumnas[3]+=2;
//    this.Datos.Estructura.IndiceColumnas[5]-=2;
    this.Procesar();
}

function ClsCuboOlap_Cubo_VaciarArrays()
{
    this.Filas = [];
    this.Filas.length = 0;
    this.Columnas = [];
    this.Columnas.length = 0;
    this.Excluidas = [];
    this.Excluidas.length = 0;
    this.ItemsDimensiones = [];
    this.ItemsDimensiones.length = 0;
    this.Medidas = [];
    this.Medidas.length = 0;
}

function ClsCuboOlap_Cubo_AgregarFila(sNombreCampo, sTitulo, iIndice)
{
    this.Filas[this.Filas.length] = new ClsCuboOlap_Dimension(sNombreCampo, sTitulo, "fila", iIndice);
}

function ClsCuboOlap_Cubo_AgregarColumna(sNombreCampo, sTitulo, iIndice)
{
    this.Columnas[this.Columnas.length] = new ClsCuboOlap_Dimension(sNombreCampo, sTitulo, "columna", iIndice);
}

function ClsCuboOlap_Cubo_AgregarExcluida(sNombreCampo, sTitulo, iIndice)
{
    this.Excluidas[this.Excluidas.length] = new ClsCuboOlap_Dimension(sNombreCampo, sTitulo, "excluida", iIndice);
}

function ClsCuboOlap_Cubo_Procesar()
{
    this.CargarDimensiones();
    this.CargarItemsDimensiones();
    this.CargarMedidas();
}

function ClsCuboOlap_Cubo_CargarDimensiones()
{   
    var i = 0;
    var iLongitudEstructura = this.Datos.Estructura.ObtenerLongitud();
    
    this.VaciarArrays();
    
    for (i = 0; i < iLongitudEstructura; i++)
    {
        if (this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[i]].Tipo.toLowerCase() == "dimension")
        {
            switch (this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[i]].Ubicacion.toLowerCase())
            {
                case "fila":
                    this.AgregarFila(this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[i]].NombreColumna, this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[i]].Titulo, this.Datos.Estructura.IndiceColumnas[i]);
                    break;
                case "columna":
                    this.AgregarColumna(this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[i]].NombreColumna, this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[i]].Titulo, this.Datos.Estructura.IndiceColumnas[i]);
                    break;
                case "excluida":
                case "":
                    this.AgregarExcluida(this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[i]].NombreColumna, this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[i]].Titulo, this.Datos.Estructura.IndiceColumnas[i]);
                    break;
            }
        }
    }
}

function ClsCuboOlap_Cubo_CargarItemsDimensiones()
{   
    this.CargarItemsDimensionesArray(this.Filas, 0, null);
    this.CargarItemsDimensionesArray(this.Columnas, 0, null);
    this.CargarItemsDimensionesArray(this.Excluidas, 0, null);
}

function ClsCuboOlap_Cubo_CargarItemsDimensionesArray(aDimensiones, iIndice, oPadre)
{
    var i = 0;
    var oItem = null;
    var iIndiceColumna = 0;
    
    if (aDimensiones[iIndice] != null)
    {
        iIndiceColumna = this.ObtenerIndiceEstructura(aDimensiones[iIndice].NombreCampo);
        
        if (iIndiceColumna != -1)
        {
            for (i = 0; i < this.Datos.Datos.length; i++)
            {
                //if (!this.ExisteValor(aDimensiones, iIndice, this.Datos.Datos[i][iIndiceColumna]))
                if (this.CorrespondeAgregar(oPadre, i, aDimensiones, iIndice, this.Datos.Datos[i][iIndiceColumna]))
                {
                //document.getElementById("t").value += "Verdadero: " + this.Datos.Datos[i][iIndiceColumna] + "\n";
                    //Agregar valor
                    oItem = this.AgregarItemDimension(oPadre, aDimensiones[iIndice], this.Datos.Datos[i][iIndiceColumna], iIndice);
                    if (oPadre != null) oPadre.AgregarHijo(oItem);
                    aDimensiones[iIndice].AgregarItem(oItem);
                    if ((iIndice + 1) < aDimensiones.length)
                    {
                        this.CargarItemsDimensionesArray(aDimensiones, iIndice + 1, oItem);
                    }
                }
                //else
                //document.getElementById("t").value += "Falso: " + this.Datos.Datos[i][iIndiceColumna] + "\n";
            }
        }
    }
}

function ClsCuboOlap_Cubo_CargarMedidas()
{
    //Armar una estructura que soporte los datos en una forma de cubo
    //Las dimensiones se tienen que anidar
    //Las medidas deben indicar a que dimensiones corresponden (las de mas bajo nivel de cada eje)
    
    //por cada dato
        //buscar columna y fila de nivel menor
        //agregar medida en array de dos dimensiones en los indices de las dos medidas encontradas
    
    
    var i = 0;
    var j = 0;
    var iIndiceColumna = 0;
    var iIndiceFila = 0;
    var iIndiceMedida = 0;
    var iMaximaLongitud = 0;
    
    /*
    //obtener cantidad de filas de la tabla
    for (i = 0; i < this.Filas.length; i++)
    {
    }
    
    //obtener cantidad de columnas de la tabla
    */
    
    iIndiceMedida = this.Datos.Estructura.BuscarIndiceMedida();
    
    for (i = 0; i < this.Datos.Datos.length; i++)
    {
        iIndiceColumna = this.ObtenerIndiceDimension(this.Columnas, i);
        iIndiceFila = this.ObtenerIndiceDimension(this.Filas, i);
        
        if ((iIndiceColumna != -1) && (iIndiceFila != -1))
        {
            if (this.Medidas[iIndiceFila] == null) this.Medidas[iIndiceFila] = new Array();
            
            if (this.Medidas[iIndiceFila][iIndiceColumna] == null) this.Medidas[iIndiceFila][iIndiceColumna] = 0;
            
            this.Medidas[iIndiceFila][iIndiceColumna] += this.Datos.Datos[i][iIndiceMedida];
        }
    }
    
    for (i = 0; i < this.Medidas.length; i++)
    {
        if (this.Medidas[i]) if (this.Medidas[i].length > iMaximaLongitud) iMaximaLongitud = this.Medidas[i].length;
    }
    
    for (i = 0; i < this.Medidas.length; i++)
    {
        if (this.Medidas[i])
        {
            if (this.Medidas[i].length < iMaximaLongitud)
            {
                for (j = this.Medidas[i].length; j < iMaximaLongitud; j++)
                {
                    this.Medidas[i][j] = undefined;
                }
            }
        }
    }
}

function ClsCuboOlap_Cubo_ObtenerIndiceDimension(aDimensiones, iIndiceDatos)
{
    var iIndice = -1;
    var i = 0;
    //var j = 0;
    var iIndiceDimension = aDimensiones.length - 1;
    
    var iIndiceColumna = this.ObtenerIndiceEstructura(aDimensiones[iIndiceDimension].NombreCampo);
    var iIndiceColumna2 = 0;
    var oPadre = null;
    
    while ((i < aDimensiones[iIndiceDimension].Items.length) && (iIndice == -1))
    {
        if (aDimensiones[iIndiceDimension].Items[i].Valor == this.Datos.Datos[iIndiceDatos][iIndiceColumna])
        {
            iIndice = i;
            //j = iIndiceDimension;
            oPadre = aDimensiones[iIndiceDimension].Items[i].Padre;
            while (/*(j >= 0) && */(oPadre != null) && (iIndice != -1))
            {
                iIndiceColumna2 = this.ObtenerIndiceEstructura(oPadre.Dimension.NombreCampo);
                if (oPadre.Valor != this.Datos.Datos[iIndiceDatos][iIndiceColumna2]) iIndice = -1;
                oPadre = oPadre.Padre;
                //j--;
            }
        }
        i++;
    }
    
    return iIndice;
}

function ClsCuboOlap_Cubo_AgregarItemDimension(oPadre, oDimension, sValor, iIndiceColumna)
{
//alert(oDimension.Tipo + ", " + iIndiceColumna + ", " + iIndiceItem);
    this.ItemsDimensiones[this.ItemsDimensiones.length] = new ClsCuboOlap_ItemDimension(oPadre, oDimension, sValor, iIndiceColumna);
    return this.ItemsDimensiones[this.ItemsDimensiones.length - 1];
}

/*
function ClsCuboOlap_Cubo_ExisteValor(aDimensiones, iIndice, sValor)
{
    var bReturn = false;
    var i = 0;
    var iIndiceColumna = 0;
    while ((i < this.ItemsDimensiones.length) && (!bReturn))
    {
        if ((this.ItemsDimensiones[i].Valor == sValor) && (this.ItemsDimensiones[i].Dimension.NombreCampo == aDimensiones[iIndice].NombreCampo))
        {
            if (iIndice > 0)
            {
                iIndiceColumna = this.ObtenerIndiceEstructura(aDimensiones[iIndice - 1].NombreCampo);
                if (iIndiceColumna != -1)
                {
                    bReturn = this.ExisteValor(aDimensiones, iIndice - 1, this.Datos.Datos[i][iIndiceColumna]);
                }
                else
                {
                    bReturn = true;
                }
            }
            else
            {
                bReturn = true;
            }
        }
        i++;
    }
    return bReturn;
}
*/

function ClsCuboOlap_Cubo_CorrespondeAgregar(oPadre, iIndiceDatos, aDimensiones, iIndice, sValor)
{
    var bReturn = true;
    var i = 0;
    var iIndiceColumna = 0;
    
    
    if (oPadre != null)
    {
        //ver que el valor no esté agregado ya
        while ((i < oPadre.Hijos.length) && (bReturn))
        {
            if (oPadre.Hijos[i].Valor == sValor) bReturn = false;
            i++;
        }
        
        var oPadreAux = oPadre;
        
        //ver que el valor sea hijo de este padre
        i = iIndice - 1;
        while ((i >= 0) && (oPadreAux != null) && (bReturn))
        {
            iIndiceColumna = this.ObtenerIndiceEstructura(aDimensiones[i].NombreCampo);
            if (this.Datos.Datos[iIndiceDatos][iIndiceColumna] != oPadreAux.Valor) bReturn = false;
            i--;
            oPadreAux = oPadreAux.Padre;
        }
    }
    else
    {
        //ver que el valor no esté en la primera dimensión
        i = 0;
        while ((i < this.ItemsDimensiones.length) && (bReturn))
        {
            if ((this.ItemsDimensiones[i].Padre == null) && (this.ItemsDimensiones[i].Dimension == aDimensiones[iIndice]))
            {
                if (this.ItemsDimensiones[i].Valor == sValor) bReturn = false;
            }
            i++;
        }
    }
    
    return bReturn;
}

function ClsCuboOlap_Cubo_ObtenerIndiceEstructura(sNombreColumna)
{
    return this.Datos.Estructura.BuscarIndice(sNombreColumna);
}

function ClsCuboOlap_Cubo_AbrirCerrarDimension(sTipo, iIndiceDimension, iIndiceItem)
{
    switch (sTipo.toLowerCase())
    {
        case "fila":
            this.Filas[iIndiceDimension].Items[iIndiceItem].AbrirCerrar();
            break;
        case "columna":
            this.Columnas[iIndiceDimension].Items[iIndiceItem].AbrirCerrar();
            break;
        case "excluida":
            this.Excluidas[iIndiceDimension].Items[iIndiceItem].AbrirCerrar();
            break;
    }
    this.Dibujar();
}

function ClsCuboOlap_Cubo_SetearPadresCerrados()
{
    var i = 0;
    var bAux = false;
    for (i = 0; i < this.ItemsDimensiones.length; i++)
    {
        bAux = this.ItemsDimensiones[i].AlgunPadreCerrado();
    }
}

function ClsCuboOlap_Cubo_SetearFiltros()
{
    var i = 0;
    var bAux = false;
    
    for (i = 0; i < this.ItemsDimensiones.length; i++)
    {
        bAux = this.ItemsDimensiones[i].ChequearSiEstaFiltrado();
    }
}

function ClsCuboOlap_Cubo_ReordenarEstructura()
{
    var oDiv = null;
    var aDivs = null;
    var oHd = null;
    var i = 0;
    var j = 0;
    var sId = "";
    var iIndice = 0;
    var bCambioAlgo = false;
    
    oDiv = document.getElementById("divContenedorFiltrosFilas");
    if (oDiv)
    {
        aDivs = oDiv.getElementsByTagName("div");
        for (i=0; i<aDivs.length; i++)
        {
            sId = aDivs[i].id;
            if (aDivs[i].className == "DragBox")
            {
                oHd = document.getElementById(sId.replace("div","hd"));
                if (oHd)
                {
                    iIndice = parseInt(oHd.value);//parseInt(sId.replace("divFiltroFila_", ""));
                    if ((this.Datos.Estructura.IndiceColumnas[j] != iIndice) || (this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[j]].Ubicacion != "fila")) bCambioAlgo = true;
                    this.Datos.Estructura.IndiceColumnas[j] = iIndice;
                    this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[j]].Ubicacion = "fila";
                    j++;
                }
            }
        }
    }
    
    oDiv = document.getElementById("divContenedorFiltrosColumnas");
    if (oDiv)
    {
        aDivs = oDiv.getElementsByTagName("div");
        for (i=0; i<aDivs.length; i++)
        {
            sId = aDivs[i].id;
            if (aDivs[i].className == "DragBox")
            {
                oHd = document.getElementById(sId.replace("div","hd"));
                if (oHd)
                {
                    iIndice = parseInt(oHd.value);//parseInt(sId.replace("divFiltroColumna_", ""));
                    if ((this.Datos.Estructura.IndiceColumnas[j] != iIndice) || (this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[j]].Ubicacion != "columna")) bCambioAlgo = true;
                    this.Datos.Estructura.IndiceColumnas[j] = iIndice;
                    this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[j]].Ubicacion = "columna";
                    j++;
                }
            }
        }
    }
    
    oDiv = document.getElementById("divContenedorFiltrosExcluidas");
    if (oDiv)
    {
        aDivs = oDiv.getElementsByTagName("div");
        for (i=0; i<aDivs.length; i++)
        {
            sId = aDivs[i].id;
            if (aDivs[i].className == "DragBox")
            {
                oHd = document.getElementById(sId.replace("div","hd"));
                if (oHd)
                {
                    iIndice = parseInt(oHd.value);//parseInt(sId.replace("divFiltroExcluida_", ""));
                    if ((this.Datos.Estructura.IndiceColumnas[j] != iIndice) || (this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[j]].Ubicacion != "excluida")) bCambioAlgo = true;
                    this.Datos.Estructura.IndiceColumnas[j] = iIndice;
                    this.Datos.Estructura.Columnas[this.Datos.Estructura.IndiceColumnas[j]].Ubicacion = "excluida";
                    j++;
                }
            }
        }
    }
    
    if (bCambioAlgo) this.Procesar();
}

function ClsCuboOlap_Cubo_FormatearNumero(iNumero)
{
	var sReturn = "" + (iNumero ? iNumero.toFixed(this.Decimales) : "0.00");
	sReturn = sReturn.replace(".",this.SeparadorDecimal);
	if (this.EliminarDecimalesCero)
	{
	    sReturn = sReturn.replace(this.SeparadorDecimal + "00", "");
	}
	return sReturn;
}

function ClsCuboOlap_Cubo_ObtenerCodigo()
{
//var kkk = 0;
//for (kkk=0; kkk<this.Datos.Estructura.IndiceColumnas.length;kkk++) alert(this.Datos.Estructura.IndiceColumnas[kkk]);
    var sReturn = "";
    //var iColumnas = this.Filas.length + this.Columnas[this.Columnas.length - 1].Items.length;
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;
    var m = 0;
    var x = 0;
    var iColSpan = 0;
    var iPadresQueCambian = 0;
    var iColumnasTotal = 0;
    var aFilasTotales = new Array();
    var aFilasElementos = new Array();
    var sStyle = "";
    var mValor = 0;
    
    
    var oPadre = null;
    var oItem = null;
    var oItemAnterior = null;
    var oItemAux = null;
    var sEncabezadosFila = "";
    var sFilaTotales = "";
    var iIndiceFila = 0;
    var iIndex = 0;
    var iTotal = new Array();
    var iTotalElementos = new Array();
    var iTotalTotal = new Array();
    var iTotalTotalElementos = new Array();
    var oPadreVisibilidadColumna = null;
    var oPadreVisibilidadFila = null;
    var bAlgunPadreCerrado = false;
    var bEstaFiltrado = false;
    
    var aTitulo = null;
    
    
    
    
    //sReturn += this.ObtenerCodigoFiltros();
    
    
    
    
    this.SetearPadresCerrados();
    this.SetearFiltros();
    
    
    sReturn += "<table border='0' cellpadding='0' cellspacing='0' class='Cubo'>";
    
    //dibujar encabezados
    var sEsqSupIzq = "<td colspan='" + this.Filas.length + "' rowspan='" + this.Columnas.length + "' class='EsqSupIzq'>&nbsp;</td>";
    
    /**/
    var iColSpanPadre = 0;
    for (i = 0; i < this.Columnas.length; i++)
    {
        sReturn += "<tr>";
        if (i == 0) sReturn += sEsqSupIzq;
        for (j = 0; j < this.Columnas[i].Items.length; j++)
        {
            iColSpan = this.Columnas[i].Items[j].ObtenerCantidadHijosNoFiltradosNoProfundizarCerrados() + 1;
            
            sStyle = "";
            if (this.Columnas[i].Items[j].TieneAlgunPadreCerrado || this.Columnas[i].Items[j].EstaFiltrado) sStyle = " style='display:none;'";
            
            //--if (this.Columnas[i].Items[j].EstaFiltrado) sStyle = " style='text-decoration: underline line-through;'"; //sStyle = " style='display:none'";
            
            aTitulo = this.Columnas[i].Items[j].Valor.toString().split("|");
            sReturn += "<td" + ((iColSpan != 1) ? " colspan='" + iColSpan + "'" : "") + " class='TituloDimensionColumna TituloDimensionColumna_" + i + "'" + sStyle + "" + ((aTitulo.length == 2) ? " title='" + this.Columnas[i].Titulo + ": " + aTitulo[1] + "'" : "") + ">" + ((i < (this.Columnas.length - 1)) ? "<a href='javascript:CuboOlap_AbrirCerrarDimension(\"columna\", " + i + ", " + j + ");'><img src='" + (this.Columnas[i].Items[j].Abierto ? ClsCuboOlap_ImagenCerrarDimension : ClsCuboOlap_ImagenAbrirDimension) + "' /></a>" : "") + aTitulo[0] + "</td>";
            //if ((i != 0) && (((j + 1) % (iColSpanPadre - 1)) == 0))
            //{
                iPadresQueCambian = this.Columnas[i].Items[j].CantidadPadresEsUltimoItem(this.Columnas[i].Items, j, i);
                oPadreVisibilidadColumna = this.Columnas[i].Items[j].Padre;
                for (k = 0; k < iPadresQueCambian; k++)
                {
                    sStyle = "";
                    for (x = 0; x < k; x++)
                    {
                        if (oPadreVisibilidadColumna != null) oPadreVisibilidadColumna = oPadreVisibilidadColumna.Padre;
                    }
                    if (oPadreVisibilidadColumna != null)
                    {
                        if (oPadreVisibilidadColumna.TieneAlgunPadreCerrado || oPadreVisibilidadColumna.EstaFiltrado) sStyle = " style='display:none;'";
            
                        //--if (oPadreVisibilidadColumna.EstaFiltrado) sStyle = " style='text-decoration: underline line-through;'"; //sStyle = " style='display:none'";
                    }
                    
                    sReturn += "<td class='TituloDimensionColumnaTotal TituloDimensionColumnaTotal_" + (i - k) + "'" + sStyle + ">-----</td>";
                    
                    oPadreVisibilidadColumna = this.Columnas[i].Items[j].Padre;
                }
                if (iPadresQueCambian > 0) iColumnasTotal++;
            //}
        }
        iColSpanPadre = iColSpan;
        sReturn += "</tr>";
    }
    /**/

    /*
    for (i = 0; i < this.Columnas.length; i++)
    {
        sReturn += "<tr>";
        if (i == 0) sReturn += sEsqSupIzq;
        for (j = 0; j < this.Columnas[i].Items.length; j++)
        {
            iColSpan = this.Columnas[i].Items[j].ObtenerCantidadHijosUltimoNivel();
            sReturn += "<td" + ((iColSpan != 0) ? " colspan='" + iColSpan + "'" : "") + " class='TituloDimensionColumna TituloDimensionColumna_" + i + "'>" + this.Columnas[i].Items[j].Valor + "</td>";
        }
        sReturn += "</tr>";
    }
    */
    
    for (l = 0; l < this.Columnas.length; l++)
    {
        iTotal[l] = 0;
        iTotalElementos[l] = 0;
    }
    
    for (l = 0; l < this.Columnas.length; l++)
    {
        iTotalTotal[l] = 0;
        iTotalTotalElementos[l] = 0;
    }
    
    
    
    
    
        
    iIndiceFila = this.Filas.length - 1;
        
        
    //dibujar filas
    for (i = 0; i < this.Medidas.length; i++)
    {
        
        
    
        oItem = this.Filas[iIndiceFila].Items[i];
        
        
        
        
        
        
        
        //poner totales horizontales
        if (oItemAnterior != null)
        {
            sFilaTotales = "";
            iIndex = 0;
            
            oPadre = oItem.Padre;
            oPadreAnterior = oItemAnterior.Padre;
            while ((oPadre != null) && (oPadreAnterior != null))
            {
                if (oPadre == oPadreAnterior)
                {
                    oPadre = null;
                    oPadreAnterior = null;
                }
                else
                {
                    sFilaTotales += "<tr>";
                    
                    sStyle = "";
                    bAlgunPadreCerrado = oPadreAnterior.TieneAlgunPadreCerrado;
                    bEstaFiltrado = oPadreAnterior.EstaFiltrado;
                    if (bAlgunPadreCerrado || bEstaFiltrado) sStyle = " style='display:none;'";
            
                    //--if (bEstaFiltrado) sStyle = " style='text-decoration: underline line-through;'"; //sStyle = " style='display:none'";
                    
                    sFilaTotales += "<td class='TituloDimensionFilaTotal TituloDimensionFilaTotal_" + (iIndiceFila - iIndex) + "' " + ((iIndex > 0) ? " colspan='" + (iIndex + 1) + "'" : "") + "" + sStyle + ">-----</td>";
                    for (j = 0; j < (this.Medidas[i].length); j++)
                    {
                    
                        sStyle = "";
                        if (this.Columnas.length > 0)
                        {
                            if (this.Columnas[this.Columnas.length - 1].Items[j].TieneAlgunPadreCerrado || this.Columnas[this.Columnas.length - 1].Items[j].EstaFiltrado) sStyle = " style='display:none;'";
            
                            //--if (this.Columnas[this.Columnas.length - 1].Items[j].EstaFiltrado) sStyle = " style='text-decoration: underline line-through;'"; //sStyle = " style='display:none'";
                        }
                        if (bAlgunPadreCerrado || bEstaFiltrado) sStyle = " style='display:none;'";
                        //--if (bEstaFiltrado) sStyle = " style='text-decoration: underline line-through;'";
            
                        mValor = aFilasTotales[iIndiceFila - iIndex][j];
                        if ((mValor != undefined) && (aFilasElementos[iIndiceFila - iIndex][j] != undefined))
                        {
                            if (this.Operacion == "avg") if (aFilasElementos[iIndiceFila - iIndex][j] != 0) mValor = mValor / aFilasElementos[iIndiceFila - iIndex][j]; else mValor = undefined;
                        }
                        
                        sFilaTotales += "<td class='MedidaTotalFilas MedidaTotal__" + (iIndiceFila - iIndex) + "'" + sStyle + ">" + ((mValor != undefined) ? this.FormatearNumero(mValor) : "&nbsp;") + "</td>";
                        
                        
                        
                        
                        iPadresQueCambian = this.Columnas[this.Columnas.length - 1].Items[j].CantidadPadresEsUltimoItem(this.Columnas[this.Columnas.length - 1].Items, j, this.Columnas.length - 1);
                        oPadreVisibilidadColumna = this.Columnas[this.Columnas.length - 1].Items[j].Padre;
                        
                        if (oPadreVisibilidadColumna)
                        {
                            for (l = 0; l < this.Columnas.length; l++)
                            {
                                iTotalTotal[l] += (((aFilasTotales[iIndiceFila - iIndex][j] != undefined) && (!this.Columnas[this.Columnas.length - 1].Items[j].EstaFiltrado)) ? aFilasTotales[iIndiceFila - iIndex][j] : 0);
                                iTotalTotalElementos[l] += (((aFilasTotales[iIndiceFila - iIndex][j] != undefined) && (!this.Columnas[this.Columnas.length - 1].Items[j].EstaFiltrado)) ? aFilasElementos[iIndiceFila - iIndex][j] : 0);
                                /*iTotalTotal[l] += (((aFilasTotales[iIndiceFila - iIndex][j] != undefined) && (!oPadreVisibilidadColumna.EstaFiltrado)) ? aFilasTotales[iIndiceFila - iIndex][j] : 0);
                                iTotalTotalElementos[l] += (((aFilasTotales[iIndiceFila - iIndex][j] != undefined) && (!oPadreVisibilidadColumna.EstaFiltrado)) ? aFilasElementos[iIndiceFila - iIndex][j] : 0);*/
                            }
                            
                            //oPadreVisibilidadFila = this.Filas[this.Filas.length - 1].Items[i].Padre;
                            for (k = 0; k < iPadresQueCambian; k++)
                            {
                                sStyle = "";
                                for (x = 0; x < k; x++)
                                {
                                    if (oPadreVisibilidadColumna != null) oPadreVisibilidadColumna = oPadreVisibilidadColumna.Padre;
                                }
                                if (oPadreVisibilidadColumna != null)
                                {
                                    if (oPadreVisibilidadColumna.TieneAlgunPadreCerrado || oPadreVisibilidadColumna.EstaFiltrado) sStyle = " style='display:none;'";
                
                                    //if (oPadreVisibilidadColumna.EstaFiltrado) sStyle = " style='text-decoration: underline line-through;'"; //sStyle = " style='display:none'";
                                }
                                /*if (oPadreVisibilidadFila != null)
                                {
                                    if (oPadreVisibilidadFila.TieneAlgunPadreCerrado) sStyle = " style='display:none'";
                                }*/
                                if (bAlgunPadreCerrado || bEstaFiltrado) sStyle = " style='display:none;'";
                                //--if (bEstaFiltrado) sStyle = " style='text-decoration: underline line-through;'";
                    
                                mValor = iTotalTotal[k];
                                if ((mValor != undefined) && (iTotalTotalElementos[k] != undefined))
                                {
                                    if (this.Operacion == "avg") if (iTotalTotalElementos[k] != 0) mValor = mValor / iTotalTotalElementos[k]; else mValor = undefined;
                                }
                                
                                sFilaTotales += "<td class='MedidaTotalFilasColumnas MedidaTotal_" + (this.Columnas.length - k - 1) + "_" + (iIndiceFila - iIndex) + "'" + sStyle + ">" + ((mValor/*aFilasTotales[iIndiceFila - iIndex][j]*/ != undefined) ? this.FormatearNumero(mValor)/*"&nbsp;"aFilasTotales[iIndiceFila - iIndex][j]*/ : "&nbsp;") + "</td>";
                                iTotalTotal[k] = 0;
                                iTotalTotalElementos[k] = 0;
                                
                                oPadreVisibilidadColumna = this.Columnas[this.Columnas.length - 1].Items[j].Padre;
                            }
                        }
            
                        aFilasTotales[iIndiceFila - iIndex][j] = 0;
                        aFilasElementos[iIndiceFila - iIndex][j] = 0;
                    }
                    sFilaTotales += "</tr>";
                    
                    oPadre = oPadre.Padre;
                    oPadreAnterior = oPadreAnterior.Padre;
                }
                iIndex++;
            }
            
            if (sFilaTotales != "") sReturn += sFilaTotales;
        }
        
        oItemAnterior = oItem;
        
        
        
        
        
        
        
        sReturn += "<tr>";
        
        sStyle = "";
        bAlgunPadreCerrado = oItem.TieneAlgunPadreCerrado;
        bEstaFiltrado = oItem.EstaFiltrado;
        if (bAlgunPadreCerrado || bEstaFiltrado) sStyle = " style='display:none;'";
        
        //--if (bEstaFiltrado) sStyle = " style='text-decoration: underline line-through;'"; //sStyle = " style='display:none'";
        
        iIndex = 0;
        aTitulo = oItem.Valor.toString().split("|");
        sEncabezadosFila = "<td class='TituloDimensionFila TituloDimensionFila_" + (iIndiceFila - iIndex) + "'" + sStyle + "" + ((aTitulo.length == 2) ? " title='" + this.Filas[iIndiceFila].Titulo + ": " + aTitulo[1] + "'" : "") + ">" + aTitulo[0] + "</td>";
        oPadre = oItem.Padre;
        oItemAux = oItem;
        while (oPadre != null)
        {
            //sEncabezadosFila = "" + sEncabezadosFila;
            if (oPadre.Hijos[0] == oItemAux)
            {
                iIndex++;
                
                sStyle = "";
                if (oPadre.TieneAlgunPadreCerrado || oPadre.EstaFiltrado) sStyle = " style='display:none;'";
            
                //--if (oPadre.EstaFiltrado) sStyle = " style='text-decoration: underline line-through;'"; //sStyle = " style='display:none'";
                
                aTitulo = oPadre.Valor.toString().split("|");
                sEncabezadosFila = "<td rowspan='" + (oPadre.ObtenerCantidadHijos() + 1) + "' class='TituloDimensionFila TituloDimensionFila_" + (iIndiceFila - iIndex) + "'" + sStyle + "" + ((aTitulo.length == 2) ? " title='" + this.Filas[iIndiceFila - iIndex].Titulo + ": " + aTitulo[1] + "'" : "") + "><a href='javascript:CuboOlap_AbrirCerrarDimension(\"fila\", " + (iIndiceFila - iIndex) + "," + oPadre.ObtenerIndice() + ");'><img src='" + (oPadre.Abierto ? ClsCuboOlap_ImagenCerrarDimension : ClsCuboOlap_ImagenAbrirDimension) + "' /></a>" + aTitulo[0] + "</td>" + sEncabezadosFila;
                oItemAux = oPadre;
                oPadre = oPadre.Padre;
            }
            else
            {
                oPadre = null;
            }
        }
        
        sReturn += sEncabezadosFila;
        
        if (this.Medidas[i])
        {
            for (j = 0; j < this.Medidas[i].length; j++)
            {
        
                for (l = 0; l < this.Columnas.length; l++)
                {
                    iTotal[l] += (((this.Medidas[i][j] != undefined) && (!this.Columnas[this.Columnas.length - 1].Items[j].EstaFiltrado)) ? this.Medidas[i][j] : 0);
                    iTotalElementos[l] += (((this.Medidas[i][j] != undefined) && (!this.Columnas[this.Columnas.length - 1].Items[j].EstaFiltrado)) ? 1 : 0);
                }
                //iTotal[i] += ((this.Medidas[i][j] != undefined) ? this.Medidas[i][j] : 0);
                
                sStyle = "";
                if (this.Columnas.length > 0)
                {
                    if (this.Columnas[this.Columnas.length - 1].Items[j].TieneAlgunPadreCerrado || this.Columnas[this.Columnas.length - 1].Items[j].EstaFiltrado) sStyle = " style='display:none;'";
                
                    //--if (this.Columnas[this.Columnas.length - 1].Items[j].EstaFiltrado) sStyle = " style='text-decoration: underline line-through;'"; //sStyle = " style='display:none'";
                }
                /*if (this.Filas.length > 0)
                {
                    if (this.Filas[this.Filas.length - 1].Items[i].TieneAlgunPadreCerrado) sStyle = " style='display:none'";
                }*/
                if (bAlgunPadreCerrado || bEstaFiltrado) sStyle = " style='display:none;'";
                //--if (bEstaFiltrado) sStyle = " style='text-decoration: underline line-through;'";
                
                /*if (sStyle == "")
                {*/
                    sReturn += "<td class='Medida'" + sStyle + ">" + ((this.Medidas[i][j] != undefined) ? this.FormatearNumero(this.Medidas[i][j]) : "&nbsp;") + "</td>";
                /*}
                else
                {
                    sReturn += "<td" + sStyle + ">&nbsp;</td>";
                }*/
                
                for (m = 0; m < this.Filas.length; m++)
                {
                    if (aFilasTotales[m] == undefined) aFilasTotales[m] = new Array();
                    if (aFilasElementos[m] == undefined) aFilasElementos[m] = new Array();
                    if (aFilasTotales[m][j] == undefined) aFilasTotales[m][j] = 0;
                    if (aFilasElementos[m][j] == undefined) aFilasElementos[m][j] = 0;
                    aFilasTotales[m][j] += (((this.Medidas[i][j] != undefined) && (!bEstaFiltrado)) ? this.Medidas[i][j] : 0);
                    aFilasElementos[m][j] += ((!bEstaFiltrado) ? 1 : 0);
                }

                iPadresQueCambian = this.Columnas[this.Columnas.length - 1].Items[j].CantidadPadresEsUltimoItem(this.Columnas[this.Columnas.length - 1].Items, j, this.Columnas.length - 1);
                oPadreVisibilidadColumna = this.Columnas[this.Columnas.length - 1].Items[j].Padre;
                for (k = 0; k < iPadresQueCambian; k++)
                {
                    sStyle = "";
                    for (x = 0; x < k; x++)
                    {
                        if (oPadreVisibilidadColumna != null) oPadreVisibilidadColumna = oPadreVisibilidadColumna.Padre;
                    }
                    if (oPadreVisibilidadColumna != null)
                    {
                        if (oPadreVisibilidadColumna.TieneAlgunPadreCerrado || oPadreVisibilidadColumna.EstaFiltrado) sStyle = " style='display:none;'";
                
                        //--if (oPadreVisibilidadColumna.EstaFiltrado) sStyle = " style='text-decoration: underline line-through;'"; //sStyle = " style='display:none'";
                    }
                    /*if (this.Filas.length > 0)
                    {
                        if (this.Filas[this.Filas.length - 1].Items[i].TieneAlgunPadreCerrado) sStyle = " style='display:none'";
                    }*/
                    if (bAlgunPadreCerrado || bEstaFiltrado) sStyle = " style='display:none;'";
                    //if (bEstaFiltrado) sStyle = " style='text-decoration: underline line-through;'";
                    
                    mValor = iTotal[this.Columnas.length - k - 1];
                    if ((mValor != undefined) && (iTotalElementos[this.Columnas.length - k - 1] != undefined))
                    {
                        if (this.Operacion == "avg") if (iTotalElementos[this.Columnas.length - k - 1] != 0) mValor = mValor / iTotalElementos[this.Columnas.length - k - 1]; else mValor = undefined;
                    }
                    
                    sReturn += "<td class='MedidaTotalColumnas MedidaTotal_" + (this.Columnas.length - k - 1) + "'" + sStyle + ">" + this.FormatearNumero(mValor) + "</td>";
                    iTotal[this.Columnas.length - k - 1] = 0;
                    iTotalElementos[this.Columnas.length - k - 1] = 0;
                    
                    oPadreVisibilidadColumna = this.Columnas[this.Columnas.length - 1].Items[j].Padre;
                }
            }
        }
        
        sReturn += "</tr>";
        
    }
    /**/
    
    
    //poner totales horizontales del final
    if (oItemAnterior != null)
    {
        sFilaTotales = "";
        iIndex = 0;
        
        oPadreAnterior = oItemAnterior.Padre;
        while (oPadreAnterior != null)
        {
            sFilaTotales += "<tr>";
                    
            sStyle = "";
            bAlgunPadreCerrado = oPadreAnterior.TieneAlgunPadreCerrado;
            bEstaFiltrado = oPadreAnterior.EstaFiltrado;
            if (bAlgunPadreCerrado || bEstaFiltrado) sStyle = " style='display:none;'";
            
            //--if (bEstaFiltrado) sStyle = " style='text-decoration: underline line-through;'"; //sStyle = " style='display:none'";
                    
            sFilaTotales += "<td class='TituloDimensionFilaTotal TituloDimensionFilaTotal_" + (iIndiceFila - iIndex) + "' " + ((iIndex > 0) ? " colspan='" + (iIndex + 1) + "'" : "") + "" + sStyle + ">-----</td>";
            for (j = 0; j < (this.Medidas[this.Medidas.length - 1].length); j++)
            {
                    
                sStyle = "";
                if (this.Columnas.length > 0)
                {
                    if (this.Columnas[this.Columnas.length - 1].Items[j].TieneAlgunPadreCerrado || this.Columnas[this.Columnas.length - 1].Items[j].EstaFiltrado) sStyle = " style='display:none;'";
            
                    //--if (this.Columnas[this.Columnas.length - 1].Items[j].EstaFiltrado) sStyle = " style='text-decoration: underline line-through;'"; //sStyle = " style='display:none'";
                }
                if (bAlgunPadreCerrado || bEstaFiltrado) sStyle = " style='display:none;'";
                //if (bEstaFiltrado) sStyle = " style='text-decoration: underline line-through;'";
                        
                mValor = aFilasTotales[iIndiceFila - iIndex][j];
                if ((mValor != undefined) && (aFilasElementos[iIndiceFila - iIndex][j] != undefined))
                {
                    if (this.Operacion == "avg") if (aFilasElementos[iIndiceFila - iIndex][j] != 0) mValor = mValor / aFilasElementos[iIndiceFila - iIndex][j]; else mValor = undefined;
                }
                
                sFilaTotales += "<td class='MedidaTotalFilas MedidaTotal__" + (iIndiceFila - iIndex) + "'" + sStyle + ">" + ((mValor != undefined) ? this.FormatearNumero(mValor) : "&nbsp;") + "</td>";
                        
                iPadresQueCambian = this.Columnas[this.Columnas.length - 1].Items[j].CantidadPadresEsUltimoItem(this.Columnas[this.Columnas.length - 1].Items, j, this.Columnas.length - 1);
                oPadreVisibilidadColumna = this.Columnas[this.Columnas.length - 1].Items[j].Padre;
                //oPadreVisibilidadFila = this.Filas[this.Filas.length - 1].Items[this.Medidas.length - 1].Padre;
                
                if (oPadreVisibilidadColumna)
                {
                    for (l = 0; l < this.Columnas.length; l++)
                    {
                        iTotalTotal[l] += (((aFilasTotales[iIndiceFila - iIndex][j] != undefined) && (!this.Columnas[this.Columnas.length - 1].Items[j].EstaFiltrado)) ? aFilasTotales[iIndiceFila - iIndex][j] : 0);
                        iTotalTotalElementos[l] += (((aFilasTotales[iIndiceFila - iIndex][j] != undefined) && (!this.Columnas[this.Columnas.length - 1].Items[j].EstaFiltrado)) ? aFilasElementos[iIndiceFila - iIndex][j] : 0);
                        /*iTotalTotal[l] += (((aFilasTotales[iIndiceFila - iIndex][j] != undefined) && (!oPadreVisibilidadColumna.EstaFiltrado)) ? aFilasTotales[iIndiceFila - iIndex][j] : 0);
                        iTotalTotalElementos[l] += (((aFilasTotales[iIndiceFila - iIndex][j] != undefined) && (!oPadreVisibilidadColumna.EstaFiltrado)) ? aFilasElementos[iIndiceFila - iIndex][j] : 0);*/
                    }
                    
                    
                    for (k = 0; k < iPadresQueCambian; k++)
                    {
                        sStyle = "";
                        for (x = 0; x < k; x++)
                        {
                            if (oPadreVisibilidadColumna != null) oPadreVisibilidadColumna = oPadreVisibilidadColumna.Padre;
                        }
                        if (oPadreVisibilidadColumna != null)
                        {
                            if (oPadreVisibilidadColumna.TieneAlgunPadreCerrado || oPadreVisibilidadColumna.EstaFiltrado) sStyle = " style='display:none;'";
                
                            //if (oPadreVisibilidadColumna.EstaFiltrado) sStyle = " style='text-decoration: underline line-through;'"; //sStyle = " style='display:none'";
                        }
                        /*if (oPadreVisibilidadFila != null)
                        {
                            if (oPadreVisibilidadFila.TieneAlgunPadreCerrado) sStyle = " style='display:none'";
                        }*/
                        if (bAlgunPadreCerrado || bEstaFiltrado) sStyle = " style='display:none;'";
                        //if (bEstaFiltrado) sStyle = " style='text-decoration: underline line-through;'";
                        
                        mValor = iTotalTotal[k];
                        if ((mValor != undefined) && (iTotalTotalElementos[k] != undefined))
                        {
                            if (this.Operacion == "avg") if (iTotalTotalElementos[k] != 0) mValor = mValor / iTotalTotalElementos[k]; else mValor = undefined;
                        }
                        
                        sFilaTotales += "<td class='MedidaTotalFilasColumnas MedidaTotal_" + (this.Columnas.length - k - 1) + "_" + (iIndiceFila - iIndex) + "'" + sStyle + ">" + ((mValor/*aFilasTotales[iIndiceFila - iIndex][j]*/ != undefined) ? this.FormatearNumero(mValor)/*"&nbsp;"aFilasTotales[iIndiceFila - iIndex][j]*/ : "&nbsp;") + "</td>";
                        iTotalTotal[k] = 0;
                        iTotalTotalElementos[k] = 0;
                                
                        oPadreVisibilidadColumna = this.Columnas[this.Columnas.length - 1].Items[j].Padre;
                    }
                }
                        
                aFilasTotales[iIndiceFila - iIndex][j] = 0;
                aFilasElementos[iIndiceFila - iIndex][j] = 0;
            }
            sFilaTotales += "</tr>";
            
            oPadreAnterior = oPadreAnterior.Padre;
            iIndex++;
        }
        
        if (sFilaTotales != "") sReturn += sFilaTotales;
    }
        
        
    
    sReturn += "</table>";
    
    return sReturn;
}

function ClsCuboOlap_Cubo_ObtenerCodigoFiltros()
{
    var sReturn = "";
    var sFiltros = "";
    var i = 0;
    var j = 0;
    var k = 0;
    var oChk = null;
    var bChecked = false;
    
    sReturn += "<fieldset id='Demo0'>";
    
    sReturn += "<table class='tableHerramientas'>";
    sReturn += "<tr>";
    sReturn += "<td>";
    
    sReturn += "<img src='" + ClsCuboOlap_ImagenFilas + "' /><br />";
    
    sReturn += "</td>";
    sReturn += "<td>";
    
    sReturn += "<img src='" + ClsCuboOlap_ImagenColumnas + "' /><br />";
    
    sReturn += "</td>";
    sReturn += "<td>";
    
    sReturn += "<img src='" + ClsCuboOlap_ImagenExcluidas + "' /><br />";
    
    sReturn += "</td>";
    sReturn += "</tr>";
    sReturn += "<tr>";
    sReturn += "<td>";
    
    sReturn += "<div class='DragContainer' overclass='OverDragContainer' id='divContenedorFiltrosFilas'>";
    for (i=0; i<this.Filas.length; i++)
    {
        bChecked = true;
        oChk = document.getElementById("chkDimension_" + this.Filas[i].IndiceDimension + "_0");
        if (oChk) bChecked = oChk.checked;

        sReturn += "<div class='DragBox' overClass='OverDragBox' dragClass='DragDragBox' id='divFiltroFila_" + this.Filas[i].IndiceDimension + "'><a href=\"javascript:CuboOlap_AbrirCerrarFiltro('divFiltroFila_" + this.Filas[i].IndiceDimension + "', 'divFiltroFilaDropDown_" + this.Filas[i].IndiceDimension + "');\" title='" + this.Filas[i].Titulo + "'>" + this.Filas[i].Titulo + "</a><input type='hidden' id='hdFiltroFila_" + this.Filas[i].IndiceDimension + "' name='hdFiltroFila_" + this.Filas[i].IndiceDimension + "' value='" + this.Datos.Estructura.BuscarIndice(this.Filas[i].NombreCampo) + "' /></div>";
        sReturn += "<div class='divFiltroDropDown' id='divFiltroFilaDropDown_" + this.Filas[i].IndiceDimension + "'>";
        sReturn += "<div class='divFiltroDropDownCerrar'><a href=\"javascript:CuboOlap_AbrirCerrarFiltro('divFiltroFila_" + this.Filas[i].IndiceDimension + "', 'divFiltroFilaDropDown_" + this.Filas[i].IndiceDimension + "');\" title='" + ClsCuboOlap_Language_Close + "'>" + ClsCuboOlap_Language_Close + "</a></div>";
        sReturn += "<input type='checkbox' id='chkDimension_" + this.Filas[i].IndiceDimension + "_0' name='chkDimension_" + this.Filas[i].IndiceDimension + "_0'" + ((bChecked) ? " checked" : "") + " onclick=\"CuboOlap_MarcarDesmarcarFiltro(this, 'chkDimension_" + this.Filas[i].IndiceDimension + "');\"><label for='chkFila_" + this.Filas[i].IndiceDimension + "_0' style='font-weight: bold;'>Todos</label><br />";
        sReturn += "<div class='divFiltroDropDown_Lista'>";
        k = 0;
        for (j=0; j<this.ItemsDimensiones.length; j++)
        {
            if (this.ItemsDimensiones[j].Dimension == this.Filas[i])
            {
                k++;
                bChecked = true;
                oChk = document.getElementById("chkDimension_" + this.Filas[i].IndiceDimension + "_" + k);
                if (oChk) bChecked = oChk.checked;
                sReturn += "<input type='checkbox' id='chkDimension_" + this.Filas[i].IndiceDimension + "_" + k + "' name='chkDimension_" + this.Filas[i].IndiceDimension + "'" + ((bChecked) ? " checked" : "") + "><label for='chkFila_" + this.Filas[i].IndiceDimension + "_" + k + "'>" + this.ItemsDimensiones[j].Valor.toString().split("|")[0] + "</label><br />";
            }
        }
        sReturn += "</div>";
        sReturn += "</div>";
    }
    sReturn += "</div>";
    
    sReturn += "</td>";
    sReturn += "<td>";
    
    sReturn += "<div class='DragContainer' overclass='OverDragContainer' id='divContenedorFiltrosColumnas'>";
    for (i=0; i<this.Columnas.length; i++)
    {
        bChecked = true;
        oChk = document.getElementById("chkDimension_" + this.Columnas[i].IndiceDimension + "_0");
        if (oChk) bChecked = oChk.checked;

        sReturn += "<div class='DragBox' overClass='OverDragBox' dragClass='DragDragBox' id='divFiltroColumna_" + this.Columnas[i].IndiceDimension + "'><a href=\"javascript:CuboOlap_AbrirCerrarFiltro('divFiltroColumna_" + this.Columnas[i].IndiceDimension + "', 'divFiltroColumnaDropDown_" + this.Columnas[i].IndiceDimension + "');\" title='" + this.Columnas[i].Titulo + "'>" + this.Columnas[i].Titulo + "</a><input type='hidden' id='hdFiltroColumna_" + this.Columnas[i].IndiceDimension + "' name='hdFiltroColumna_" + this.Columnas[i].IndiceDimension + "' value='" + this.Datos.Estructura.BuscarIndice(this.Columnas[i].NombreCampo) + "' /></div>";
        sReturn += "<div class='divFiltroDropDown' id='divFiltroColumnaDropDown_" + this.Columnas[i].IndiceDimension + "'>";
        sReturn += "<div class='divFiltroDropDownCerrar'><a href=\"javascript:CuboOlap_AbrirCerrarFiltro('divFiltroColumna_" + this.Columnas[i].IndiceDimension + "', 'divFiltroColumnaDropDown_" + this.Columnas[i].IndiceDimension + "');\" title='" + ClsCuboOlap_Language_Close + "'>" + ClsCuboOlap_Language_Close + "</a></div>";
        sReturn += "<input type='checkbox' id='chkDimension_" + this.Columnas[i].IndiceDimension + "_0' name='chkDimension_" + this.Columnas[i].IndiceDimension + "_0'" + ((bChecked) ? " checked" : "") + " onclick=\"CuboOlap_MarcarDesmarcarFiltro(this, 'chkDimension_" + this.Columnas[i].IndiceDimension + "');\"><label for='chkColumna_" + this.Columnas[i].IndiceDimension + "_0' style='font-weight: bold;'>Todos</label><br />";
        sReturn += "<div class='divFiltroDropDown_Lista'>";
        k = 0;
        for (j=0; j<this.ItemsDimensiones.length; j++)
        {
            if (this.ItemsDimensiones[j].Dimension == this.Columnas[i])
            {
                k++;
                bChecked = true;
                oChk = document.getElementById("chkDimension_" + this.Columnas[i].IndiceDimension + "_" + k);
                if (oChk) bChecked = oChk.checked;
                sReturn += "<input type='checkbox' id='chkDimension_" + this.Columnas[i].IndiceDimension + "_" + k + "' name='chkDimension_" + this.Columnas[i].IndiceDimension + "'" + ((bChecked) ? " checked" : "") + "><label for='chkColumna_" + this.Columnas[i].IndiceDimension + "_" + k + "'>" + this.ItemsDimensiones[j].Valor.toString().split("|")[0] + "</label><br />";
            }
        }
        sReturn += "</div>";
        sReturn += "</div>";
    }
    sReturn += "</div>";
    
    sReturn += "</td>";
    sReturn += "<td>";
    
    sReturn += "<div class='DragContainer' overclass='OverDragContainer' id='divContenedorFiltrosExcluidas'>";
    for (i=0; i<this.Excluidas.length; i++)
    {
        bChecked = true;
        oChk = document.getElementById("chkDimension_" + this.Excluidas[i].IndiceDimension + "_0");
        if (oChk) bChecked = oChk.checked;

        sReturn += "<div class='DragBox' overClass='OverDragBox' dragClass='DragDragBox' id='divFiltroExcluida_" + this.Excluidas[i].IndiceDimension + "'><a href=\"javascript:CuboOlap_AbrirCerrarFiltro('divFiltroExcluida_" + this.Excluidas[i].IndiceDimension + "', 'divFiltroExcluidaDropDown_" + this.Excluidas[i].IndiceDimension + "');\" title='" + this.Excluidas[i].Titulo + "'>" + this.Excluidas[i].Titulo + "</a><input type='hidden' id='hdFiltroExcluida_" + this.Excluidas[i].IndiceDimension + "' name='hdFiltroExcluida_" + this.Excluidas[i].IndiceDimension + "' value='" + this.Datos.Estructura.BuscarIndice(this.Excluidas[i].NombreCampo) + "' /></div>";
        sReturn += "<div class='divFiltroDropDown' id='divFiltroExcluidaDropDown_" + this.Excluidas[i].IndiceDimension + "'>";
        sReturn += "<div class='divFiltroDropDownCerrar'><a href=\"javascript:CuboOlap_AbrirCerrarFiltro('divFiltroExcluida_" + this.Excluidas[i].IndiceDimension + "', 'divFiltroExcluidaDropDown_" + this.Excluidas[i].IndiceDimension + "');\" title='" + ClsCuboOlap_Language_Close + "'>" + ClsCuboOlap_Language_Close + "</a></div>";
        sReturn += "<input type='checkbox' id='chkDimension_" + this.Excluidas[i].IndiceDimension + "_0' name='chkDimension_" + this.Excluidas[i].IndiceDimension + "_0'" + ((bChecked) ? " checked" : "") + " onclick=\"CuboOlap_MarcarDesmarcarFiltro(this, 'chkDimension_" + this.Excluidas[i].IndiceDimension + "');\"><label for='chkExcluida_" + this.Excluidas[i].IndiceDimension + "_0' style='font-weight: bold;'>Todos</label><br />";
        sReturn += "<div class='divFiltroDropDown_Lista'>";
        k = 0;
        for (j=0; j<this.ItemsDimensiones.length; j++)
        {
            if (this.ItemsDimensiones[j].Dimension == this.Excluidas[i])
            {
                k++;
                bChecked = true;
                oChk = document.getElementById("chkDimension_" + this.Excluidas[i].IndiceDimension + "_" + k);
                if (oChk) bChecked = oChk.checked;
                sReturn += "<input type='checkbox' id='chkDimension_" + this.Excluidas[i].IndiceDimension + "_" + k + "' name='chkDimension_" + this.Excluidas[i].IndiceDimension + "'" + ((bChecked) ? " checked" : "") + "><label for='chkExcluida_" + this.Excluidas[i].IndiceDimension + "_" + k + "'>" + this.ItemsDimensiones[j].Valor.toString().split("|")[0] + "</label><br />";
            }
        }
        sReturn += "</div>";
        sReturn += "</div>";
    }
    sReturn += "</div>";
    
    sReturn += "</td>";
    sReturn += "</tr>";
    sReturn += "</table>";
    
    sReturn += "</fieldset>";
    
    sReturn += "<div class='divContenedorFiltro divContenedorFiltroBoton'>";
    sReturn += "<a href=\"javascript:CuboOlap_AplicarFiltros();CuboOlap_AbrirCerrarFiltro('divHerramientas','divFiltros');\" title=\"Filtrar\"><img src=\"" + ClsCuboOlap_ImagenActualizar + "\" /></a>";
    sReturn += "</div>";
    
    return sReturn;
}

function ClsCuboOlap_Cubo_Dibujar(sContenedorId, sContenedorFiltrosId)
{
    if (sContenedorId != null) this.Contenedor = sContenedorId; else sContenedorId = this.Contenedor;
    if (sContenedorFiltrosId != null) this.ContenedorFiltros = sContenedorFiltrosId; else sContenedorFiltrosId = this.ContenedorFiltros;
    if (this.Contenedor != null)
    {
        var oContenedor = document.getElementById(this.Contenedor);
        var oContenedorFiltros = (sContenedorFiltrosId ? document.getElementById(sContenedorFiltrosId) : null);
        if (oContenedor)
        {
            oContenedor.innerHTML = this.ObtenerCodigo();
            if (oContenedorFiltros) oContenedorFiltros.innerHTML = this.ObtenerCodigoFiltros();
        }
    }
    if (window.InicializarDragAndDrop) InicializarDragAndDrop();
}


/*******************************************************************************************************************************/






var oCuboOlap_Cubo = new ClsCuboOlap_Cubo();