function DeshabilitarClickDerecho(){ 
    return false;
}

function ConfirmarInactivar(Boton){
    if(BuscarRadioChecked(Boton) == true){
        var Posicion = (Boton.src).indexOf("Off");
        if (Posicion == -1){
            if (confirm('\u00BFEsta seguro que desea desactivar el registro seleccionado?') == true){
                return true;
            }
            else{
	            return false;
            }
        }
        else{
 	        return false;
        }
    }
    else{
        return false;
    }
}

function ConfirmarEliminacion(Boton){
    if(BuscarRadioChecked(Boton) == true){
        var Posicion = (Boton.src).indexOf("Off");
        if (Posicion == -1){
            if (confirm('\u00BFEsta seguro que desea eliminar el registro seleccionado?') == true){
                return true;
            }
            else{
	            return false;
            }
        }
        else{
 	        return false;
        }
    }
    else{
        return false;
    }
}

function OcultarCajaCliente(estado){
    
    if(estado.checked == false){    
    document.getElementById("ctl00_cphMaster_txtCorreo").visible = false;     
    document.getElementById("ctl00_cphMaster_txtCorreo").disabled = true; 
    }else if (estado.checked == true){    
    document.getElementById("ctl00_cphMaster_txtCorreo").visible = true;           
    document.getElementById("ctl00_cphMaster_txtCorreo").disabled = false; 
    }

}

function Alternar(Seccion){ 
    
    Seccion.style.display="none";
    
}

function OcultarGrilla(objTabla){    
    alert(objTabla.rows.length-1);

    var row;
    var cel;
    for(i=0;i<objTabla.rows.length;i++){
        row = objTabla.rows[i];        
        cel = row.cells[0].style.display='none';
        cel = row.cells[1].style.display='none';
    }
}   

 
    
function ItemsLista(objTabla, idrow, objListaSelect, objListaTabla){

        var aut = 0;
        var longitud = 0;
        var tableid = String(objTabla.id).substring(InStr(''+objTabla.id,'y')+1, Len(objTabla.id));       
        var tablename = String(objTabla.id).substring(InStr(''+objTabla.id,'x')+1, InStr(''+objTabla.id,'y')-4);
                        
        if (idrow>0){
        idrow=idrow+1;        
        aut = idrow+1
        }        
        if (idrow==0){
        idrow=1;        
        aut = 0;
        }        
        
    var celdaId = objTabla.cells[6*(idrow)].innerText;            
    var celdaDesc = objTabla.cells[8*(idrow)-aut].innerText;
    var agregarTabla = false;
     
    Seleccionlongitud = objListaSelect.length;
    Tablalongitud = objListaTabla.length;
    
            for(i=0;0<Seleccionlongitud;i++){
                if ((objListaSelect.options[i]!= null) && (objListaSelect.options[i].value != celdaId.value)) {   
                    alert(celdaDesc &'-'& celdaId);                         
                    objListaSelect.options[Seleccionlongitud] = new Option(celdaDesc, celdaId);                         
                    break;
                        }
                }    
                
                
                
          
             for(i=0;0<Seleccionlongitud-1;i++){
                if ((objListaTabla.options[i]!= null) && (objListaTabla.options[i].value != tableid.value)) {                            
                    agregarTabla = true;    
                     break; 
                    }                    
            }                
            
                if (agregarTabla==true){
                    objListaTabla.options[Tablalongitud] = new Option(tablename, tableid);                         
                   
                }
                else{
                Alert('Dato Repetido.')
                }
        
    }
    
function BuscarRadioChecked(Boton){
    if((Boton.src).indexOf("Off") == -1){
        var f = document.forms.length;
        var i = 0;
        var pos = -1;
        while(pos == -1 && i < f){
            var e = document.forms[i].elements.length;
            var j = 0;
            var k = 0;
            while(pos == -1 && j < e){
                if(document.forms[i].elements[j].type == 'radio'){
                    if(document.forms[i].elements[j].checked == true)
                        return true;
                    k++;
                }
                j++;
            }
            i++;
        }
        if(k > 0){
            alert('Debe seleccionar un registro.');
        }
        else{
            alert('No hay registros.');
        }
        return false;
    }
    else{
        return false;
    }
}



function EjecutarValidators(){
    if(typeof(Page_ClientValidate) == 'function'){
        Page_ClientValidate();
    }
}

function AbrirVentanaTelefono(Pagina){
    var Cadena;

    Cadena = window.showModalDialog(Pagina, null, 'center:yes;resizable:no;help:no;status:no;dialogWidth:550px;dialogHeight:400px');

    document.all['ctl00_cphMaster_ddlTelefono'].options.length = 0;

    if(Cadena != ''){
        var Telefonos = Cadena.split(',')
        var i = 0;

        for(i=0; i<Telefonos.length-1; i++){
            document.all['ctl00_cphMaster_ddlTelefono'].options[document.all['ctl00_cphMaster_ddlTelefono'].length] = new Option(Telefonos[i], Telefonos[i]);
        }
    }
}

function AbrirVentanaPoliza(Pagina){
    var Cadena;

    Cadena = window.showModalDialog(Pagina, null, 'center:yes;resizable:no;help:no;status:no;dialogWidth:650px;dialogHeight:400px');

    if(Cadena != ''){
        //        var Cadena = IdTipoPersona     + '@' + [0]  __doPostBack
        //                     IdTitulo          + '@' + [1]  __doPostBack
        //                     Nombre            + '@' + [2]
        //                     ApellidoPaterno   + '@' + [3]
        //                     ApellidoMaterno   + '@' + [4]
        //                     IdSexo            + '@' + [5]  __doPostBack
        //                     FechaNacimiento   + '@' + [6]
        //                     IdTipoDocumento   + '@' + [7]  __doPostBack
        //                     Documento         + '@' + [8]
        //                     IdUbigeo          + '@' + [9]  __doPostBack
        //                     DireccionCobranza + '@' + [10]
        //                     IdTelefono        + '@' + [11] __doPostBack
        //                     IdTipoTelefono;           [12] __doPostBack

        var Cliente = Cadena.split('@')

        document.all['ctl00_cphMaster_txtNombre'].value = Cliente[2]
        document.all['ctl00_cphMaster_txtApellidoPaterno'].value = Cliente[3]
        document.all['ctl00_cphMaster_txtApellidoMaterno'].value = Cliente[4]
        document.all['ctl00_cphMaster_calFechaNacimiento_txtFecha'].value = Cliente[6]
        document.all['ctl00_cphMaster_txtDocumento'].value = Cliente[8]
        document.all['ctl00_cphMaster_txtDireccionCobranza'].value = Cliente[10]
    }

    document.all['ctl00_cphMaster_txtCliente'].value = Cadena;

    __doPostBack('ctl00_cphMaster_ddlTipoPersona', '');
}



function ExpandirColapsar(Fila){
    var imagen='img' + Fila;

    if(document.getElementById(Fila).style.display=='none'){
        document.getElementById(Fila).style.display = '';
        document.getElementById(imagen).src='../imagenes/colapsar.gif';
    }
    else
    {
        document.getElementById(Fila).style.display = 'none';
        document.getElementById(imagen).src='../imagenes/expandir.gif';
    }
}

function ContadorTexto(txt, maxlength){
    if(txt.value.length > maxlength){
        txt.value = txt.value.substring(0, maxlength);
    }
}

    function onClickCrearPlanilla()
    {    
        var ctrltxtImporte=$get('<%= txt_importe.ClientID %>');
        var ctrllblImporte=$get('<%= lblImporte.ClientID %>');
                       
        ctrltxtImporte.value=ctrllblImporte.innerText;                
    }
    
    function LimpiarCajasPopup()
    {       
    $get('<%= txt_nrooperacion.ClientID %>').value = "";
    $get('<%= txt_referencia.ClientID %>').value = "";
    $get('<%= txt_importe.ClientID %>').value = "";
    $get('ctl00_cphMaster_fecha_pago_txt_TextoFecha').value = "";    
    $get('<%= lblImporte_bk.ClientID %>').innerText = "0";    
    $get('<%= lblImporte.ClientID %>').innerText = "0";    
    
    
    var f = document.forms.length;
        var i = 0;
        var pos = -1;
        while(pos == -1 && i < f){
            var e = document.forms[i].elements.length;
            var j = 0;
            var k = 0;
            while(pos == -1 && j < e){            
                if(document.forms[i].elements[j].type == 'checkbox'){
                    document.forms[i].elements[j].checked = false;                        
                    k++;
                }
                j++;
            }
            i++;
        }
    
    }
    
function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}
    
function GrillaCheking(){
        
        var dato = false; 
        var ruta=document.getElementById('ibtnChecked').src;
        var pos=document.getElementById('ibtnChecked').src.lastIndexOf('/');
        var archivo=Right(ruta,(ruta.length - pos)-1);
        
        if(archivo == "checked.gif"){
            dato = true;
            document.getElementById('ibtnChecked').src = "../imgs/unchecked.gif";     
        }
        else{
            dato = false;
            document.getElementById('ibtnChecked').src = "../imgs/checked.gif";} 
                               
            
        var f = document.forms.length;
        var i = 0;
        var pos = -1;
        while(pos == -1 && i < f){
            var e = document.forms[i].elements.length;
            var j = 0;
            var k = 0;
            while(pos == -1 && j < e){            
                if(document.forms[i].elements[j].type == 'checkbox'){
                    document.forms[i].elements[j].checked = dato;                        
                    k++;
                }
                j++;
            }
            i++;
        }
}

function GrillaChekingById(id){
        
        var dato = false; 
        var ruta=document.getElementById(id).src;
        var pos=document.getElementById(id).src.lastIndexOf('/');
        var archivo=Right(ruta,(ruta.length - pos)-1);
        
        if(archivo == "checked.gif"){
            dato = true;
            document.getElementById(id).src = "../imgs/unchecked.gif";     
        }
        else{
            dato = false;
            document.getElementById(id).src = "../imgs/checked.gif";} 
                               
            
        var f = document.forms.length;
        var i = 0;
        var pos = -1;
        while(pos == -1 && i < f){
            var e = document.forms[i].elements.length;
            var j = 0;
            var k = 0;
            while(pos == -1 && j < e){            
                if(document.forms[i].elements[j].type == 'checkbox'){
                    document.forms[i].elements[j].checked = dato;                        
                    k++;
                }
                j++;
            }
            i++;
        }
}

function VerificarMonto(){

    if (document.getElementById('ctl00_ContentPlaceHolder1_lblImporte').innerHTML == "0"){
        alert('Debe de recalcular el importe referencia.');
        return false;
    } else
     {  
        return true;      
        }
}
function Len(str)
        {  return String(str).length;  }
        

        
function Mid(str, start, len)
        {
                if (start < 0 || len < 0) return "";

                var iEnd, iLen = String(str).length;
                if (start + len > iLen)
                        iEnd = iLen;
                else
                        iEnd = start + len;

                return String(str).substring(start,iEnd);
        }
        
function InStr(strSearch, charSearchFor)
{
	for (i=0; i < Len(strSearch); i++)
	{
	    if (charSearchFor == Mid(strSearch, i, 1))
	    {
			return i;
	    }
	}
	return -1;
}

function Left(str, n)
        {
                if (n <= 0)     
                        return "";
                else if (n > String(str).length)   
                        return str;                
                else 
                        return String(str).substring(0,n);
        }

function Right(str, n)
        {
                if (n <= 0)     
                   return "";
                else if (n > String(str).length)   
                   return str;                     
                else { 
                   var iLen = String(str).length;
                   return String(str).substring(iLen, iLen - n);
                }
        }
        



//function BuscarCliente(){
//    window.open('../Busquedas/BuscarCliente.aspx','Buscar','scrollbars=yes,toolbar=0,location=0,width=500,height=400')
//}

//function BuscarPoliza(formulario){
//    window.open('../Busquedas/BuscarPoliza.aspx?formulario='+formulario,'Buscar','toolbar=0,location=0,width=650,height=350')
//}

//function RetornarValor(IdCliente,NombreCliente,Documento,FechaNacimiento,Direccion){
//    var ventanaPadre = window.opener;
//    var txtIdCliente = ventanaPadre.document.getElementById('ctl00_cphMaster_txtIdCliente');
//    var txtNombre = ventanaPadre.document.getElementById('ctl00_cphMaster_txtNombre');
//    var txtDocumento = ventanaPadre.document.getElementById('ctl00_cphMaster_txtDocumento');
//    var txtFechaNacimiento = ventanaPadre.document.getElementById('ctl00_cphMaster_txtFechaNacimiento');
//    var txtDireccion = ventanaPadre.document.getElementById('ctl00_cphMaster_txtDireccion');

//    txtIdCliente.value = IdCliente;
//    txtNombre.value = NombreCliente;
//    txtDocumento.value = Documento;
//    txtFechaNacimiento.value = FechaNacimiento;
//    txtDireccion.value = Direccion;
//    window.close();
//}

//function RetornarValorPoliza(IdTramite,formulario){
//var ventanaPadre = window.opener;

//switch(formulario){
//         case "solicitud":
//                           ventanaPadre.location.replace("../Solicitudes/CotizacionGenerico.aspx?ItemSubmitted=Modificar&IdSolicitud="+IdTramite+"&flgBuscador=1");
//                           break;
//         case "tramite":
//                           ventanaPadre.location.replace("../Tramites/PolizaGenericoRegistro.aspx?ItemSubmitted=Modificar&IdTramite="+IdTramite+"&flgBuscador=1");
//                           break;
//                    }
// window.close();
//}  

//function MostrarVentanaEmergente(rutaArchivo,opciones){
//    window.open(rutaArchivo, "", opciones);
//}

//function CerrarVentanaEmergente(){
//    window.close();
//}
function SoloLetras(Contador, obj, len){
   k = event.keyCode;
    if (k>=65 && k<=90){   } //A-Z
    else if(k>=97 && k<=122){   } //a-z
    else
    {
        event.keyCode=0;
    } 
}

function SoloNombres(Contador, obj, len){
   k = event.keyCode;
   
   switch(k){
    case 32:
    case 39:
    case 241: //ñ
    case 209: //Ñ
        break;
    default:
        if (k>=65 && k<=90){   }
        else if(k>=97 && k<=122){   } //a-z
        else if(k>=192 && k<=197){   } //A
        else if(k>=200 && k<=207){   } //E  I
        else if(k>=210 && k<=214){   } //O
        else if(k>=217 && k<=220){   } //U
        
        else if(k>=224 && k<=229){   } // a
        else if(k>=232 && k<=246){   } // e i ñ o
        else if(k>=250 && k<=252){   } // u
        else
        {
            event.keyCode=0;
            return false;
        } 
   }
   if(Contador==1){
    ContadorTexto(obj,len)
   }
   return true;
}

function SoloDireccion(Contador, obj, len){
   k = event.keyCode;
   
   switch(k){
    case 32:    
    case 45://  -
    case 35://  #    
    case 46://  .
    case 209: //Ñ
        break;
    default:
        if (k>=65 && k<=90){   } //A-Z
        else if(k>=48 && k<=57){   }  //0-9
        else if(k>=97 && k<=122){   }  //a-z
        else if(k>=192 && k<=197){   } //A
        else if(k>=200 && k<=207){   } //E  I
        else if(k>=210 && k<=214){   } //O
        else if(k>=217 && k<=220){   } //U
        
        else if(k>=224 && k<=229){   } // a
        else if(k>=232 && k<=246){   } // e i ñ o
        else if(k>=250 && k<=252){   } // u
        else
        {
            event.keyCode=0;
            return false;
        } 
   }
   if(Contador==1){
    ContadorTexto(obj,len)
   }
   return true;
}

//function SoloLetras(obj){
//    k = event.keyCode;
//    if (k>=48 && k<=57){
//       event.keyCode=0 
//    }
//}
    
function SoloEnteros(){
	k = event.keyCode;
	if(k>=48 && k<=57){}
	else{ event.keyCode=0; }
}

function SoloDecimales(obj){
	valor = obj.value;
	k = event.keyCode;
	if(k==46){
		if(valor.length==0){
			event.keyCode=0;
		}else{
            if (valor.indexOf(".") != -1 && valor.indexOf(",") != -1) {
				event.keyCode = 0;
			}
		}
	}else{
		if(k>=48 && k<=57){}
		else{ event.keyCode=0; }	
	}
}

function SoloTelefono(obj){
    valor =obj.value;
	k = event.keyCode;
	if(k>=48 && k<=57){}
	else{ 
	    switch(k){
	        //case 32://espacio
	        //case 40://  (
	        //case 41://  )
	        //case 45://  -
            //case 35://  #
            case 42://  *
	        return;
	    }
	    event.keyCode=0; 
	}
}
   
function ComparaFechas(dtf1, dtf2){
//la fecha 2 debe ser necesariamente mayor a fecha1
	fi = dtf1.split("/");
	ff = dtf2.split("/");
	_fechai = fi[0]*10000 + fi[1]*100 + fi[2];
	_fechaf = ff[0]*10000 + ff[1]*100 + ff[2];
	n = _fechaf - _fechai;
	if(n>0) return true;
	else return false;
}
function SoloFecha(obj){
   //valido para formato dd/mm/yyyy
   f = obj.value;
   switch(f.length){
    case 2: case 5:  
        f=f+"/"; 
        obj.value=f;
        break;
   }
}
function SoloFechaNumero(obj) {
    //valido para formato dd/mm/yyyy
    f = obj.value;
    switch (f.length) {
        case 2: case 5:
            f = f + "/";
            obj.value = f;
            break;
    }
    if (f.length <= 9)
    { }
    else {
        event.keyCode = 0;
    }
    k = event.keyCode;
    if (k >= 48 && k <= 57) { }
    else { event.keyCode = 0; }
   
}        
function SoloHora(obj){
	k = event.keyCode;
	if(k>=48 && k<=57){}
	else{ 
	    switch(k){
	        case 58:
	        return;
	    }
	    event.keyCode=0; 
	}  
}
function SoloURL(){
    k = event.keyCode;
	switch(k){
	    case 32: event.keyCode=0;
	}
}

//compara las longitudes
function longitudMinima(valor,lmin)
{
    return (valor.length>=lmin)
}