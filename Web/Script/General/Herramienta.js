//document.write("<script language='javascript' type='text/javascript' src='../../Scripts/General/AlertaAnimadoPopup/AlertaAnimadoPopup.js'></script>");
// Archivo JScript
//function AlertaAnimado(Control,Mensaje,TiempoDuracion)
//{
//    AlertaAnimadoHelp(Control,Mensaje,TiempoDuracion);
//}
//function AlertaAnimadoAlert(AlertAni,control,mensaje)
//{
//    if (AlertAni==true)
//    {
//        alert(location.pathname)
//        AlertaAnimado(control,mensaje,1.5);
//    }
//    else
//    {
//        alert(mensaje);
//    }
//}
//
//TextBox, ListBox, DropDownList, Button
function BackColorOnFocus(fld,select) 
{
    //fld.className = 'focusfld';
    fld.style.backgroundColor ='#FFFFCC';
    if (select != null)
    {
        fld.select();
    }
}
function BackColorOnBlur(fld) {
    //fld.className='normalfld';
    fld.style.backgroundColor ='#FFFFFF';
}
//
function MensajeSpam(mensaje,TipoMsn)
{
    var estilo='error-msg';
    if (TipoMsn==1) {estilo='error-msg';}
    else if(TipoMsn==2){estilo='warning-msg';}
    else if(TipoMsn==3){estilo='information-msg';}
    else if(TipoMsn==5){estilo='confirmation-msg';}
    return("<div id='DivMensaje' class='messages'><li class='"+estilo+"'>"+mensaje+"</li></div>");
    //return("<div id='DivMensaje'><ul class='messages'><li class='"+estilo+"'>"+mensaje+"</li></ul></div>");
}
function LabelMensaje(ControlLabel,Mensaje,TipoMsn)
{
    var control=document.getElementById(ControlLabel);
    if(control!=null)
    {
        control.innerHTML=MensajeSpam(Mensaje,TipoMsn);
    }
    else
    {
        alert(Mensaje);
    }
}
function LimpiaControl(control)
{
    var control=document.getElementById(control);
    if(control!=null)
    {
        control.value="";
    }
}
function EnfocarControl(control)
{
    var control=document.getElementById(control);
    if(control!=null)
    {
        control.focus();
    }
}
function ValidaTexto(control,LabelMsg,mensaje)
{
    var control=document.getElementById(control);
    var label=document.getElementById(LabelMsg);
    if(control!=null){
        if(Trim(control.value)=="")
        {
            if (mensaje!="")
            {
                if (label!=null)
                {
                    label.innerHTML=MensajeSpam(mensaje);
                }
                else
                {
                    alert(mensaje);
                }
            }
            control.focus();
            return false;
        }
        return true;
    }
}
function ValidaTextoRVacio(control)
{
    var control=document.getElementById(control);
    if(control!=null)
    {
        if(Trim(control.value)=="")    
        {
            return true;
        }
        return false;
    }
}
function ValidaLabel(control,LabelMsg,mensaje)
{
    var control=document.getElementById(control);
    var label=document.getElementById(LabelMsg);
    if(control!=null){
        if(Trim(control.innerHTML)=="")    
        {
            if (mensaje!="")
            {
                if (label!=null)
                {
                    label.innerHTML=MensajeSpam(mensaje);
                }
                else
                {
                    alert(mensaje);
                }
            }
            return false;
        }
        return true;
    }
}
function ValidaCombo(control,LabelMsg,mensaje)
{
    var control=document.getElementById(control);
    var label=document.getElementById(LabelMsg);
    if(control!=null)
    {
        if(control.selectedIndex==-1)
        {
            if (mensaje!="")
            {
                if (label!=null)
                {
                    label.innerHTML=MensajeSpam(mensaje);
                }
                else
                {
                    alert(mensaje);
                }
            }
            control.focus();
            return false;
        }
        return true;
    }    
}
function ValidaComboSelectDefaultd(control,LabelMsg,mensaje)
{
    var control=document.getElementById(control);
    var label=document.getElementById(LabelMsg);
    if(control!=null)
    {
        if(control.selectedIndex==0)
        {
            if (mensaje!="")
            {
                if (label!=null)
                {
                    label.innerHTML=MensajeSpam(mensaje);
                }
                else
                {
                    alert(mensaje);
                }
            }
            control.focus();
            return false;
        }
        return true;
    }    
}
function ValidaComboText(control,LabelMsg,mensaje)
{
    var control=document.getElementById(control);
    var label=document.getElementById(LabelMsg);
    if(control!=null)
    {
        var indice=control.selectedIndex;
        if (indice==0)
        {
            if (mensaje!="")
            {
                if (label!=null)
                {
                    label.innerHTML=MensajeSpam(mensaje);
                }
                else
                {
                    alert(mensaje);
                }
            }
            control.focus();
            return false;
        }
        var valor=control.options[indice].text;
        return valor;
    }    
}
function RadioButtonValor(control)
{
    control=document.getElementById(control);
    if (control!=null)
    {
        return control.checked;
    }
}
function ActivarIntroBus(ControlTextbox,ControlButton,LabelMsg,mensaje)
{
    var CTextbox=document.getElementById(ControlTextbox);
    var CButton=document.getElementById(ControlButton);
    var label=document.getElementById(LabelMsg);
    if(CTextbox!=null && CButton!=null)
    {
        if (event.keyCode == 13)
        {
            if (Trim(CTextbox.value)=="")
            {
                if (mensaje!="")
                {
                    if (label!=null)
                    {
                        label.innerHTML=MensajeSpam(mensaje);
                    }
                    else
                    {
                        alert(mensaje);
                    }
                }
                CTextbox.focus();
                return false;
            }
            event.returnValue=false;
            event.cancel = true;
            CButton.click();
            //CButton.disabled=true;
            return true;
        }
    }
}
function ControlHabiliDeshabi(vcontrol,valor)
{
    var control=document.getElementById(vcontrol);
    if (control!=null)
    {
        control.disabled=valor;
    }
}
function Mayusculas()//INGRESAR SOLO LETRAS MINUSCULAS
{
    var textoOriginal = String.fromCharCode(window.event.keyCode); 
    window.event.keyCode = 0;
    var textoMayuscula = textoOriginal.toUpperCase();
    window.event.keyCode = textoMayuscula.charCodeAt();
    return false;
}
function Minusculas() // INGRESAR SOLO LETRAS MINUSCULA
{
    var textoOriginal = String.fromCharCode(window.event.keyCode); 
    window.event.keyCode = 0;
    var textoMayuscula = textoOriginal.toLowerCase();
    window.event.keyCode = textoMayuscula.charCodeAt();
    return false;
}
function EnterBloquear()
{
    var key = window.event.keyCode;
    if (key==13)
    {
        window.event.keyCode=0;
    }
}
//Ejemplo: txtcecbarra.Attributes.Add("onKeypress", "EnterBloquear()");

function SoloNumeros(Entrada) // SOLO INGRESAR NUMERO
{
	var key = window.event.keyCode;
	var keyini=0;
	var keyfin=0;
	var keyeslash=0;
	
	if (Entrada==0) //Solo Numeros
	{
	    keyini=48;
	    keyfin=57;
	}
	else if (Entrada==1) //Solo Numeros Incluye (,-.)
	{
	    keyini=44;
	    keyfin=57;
	}
	else if (Entrada==2) //Solo Numeros Incluye ( ()*+,-./:;>=< )
	{
	    keyini=40;
	    keyfin=62;
	}
	else if (Entrada==3) //Solo Numeros y / (Caso Fecha)
	{
	    keyini=47;
	    keyfin=57;
	    keyeslash=1;
	}
	if(key < keyini || key > keyfin)
    {
        window.event.keyCode=0;
    }
	if (keyeslash==0)
    {
        if(key == 47 ) // ( 47=/)
        {
            window.event.keyCode=0;
        }
    }
    return false;
}
//txtcecosto.Attributes.Add("onKeypress", "SoloNumeros(1)");
function SoloLetras()
{
	var key = window.event.keyCode;
	if((key < 65 || key >90) && (key < 97 || key >122)) //mayuscula y minusculas
	{
	    window.event.keyCode=0;
	}
    return false;
}

function VentanaModal(DireccionURL,Argumento,Alto,Ancho)
{
    return (window.showModalDialog(DireccionURL,Argumento,'dialogHeight:' + Alto + 'px;dialogWidth:' + Ancho + 'px;center:1;scroll:0;status:0'));
    //dialogWidth minimo es 250
}
function VentanaOpen(DireccionURL,Titulo,Alto,Ancho,PosArriba,PosIzquierda,resizable)
{
    //Tamaño Ventana
    var AltoAncho = '';
    if (Alto == null && Ancho == null)
    {
        Alto = screen.availHeight;
        Ancho = screen.availWidth;
    }
    AltoAncho = 'height=' + Alto + ', width=' + Ancho + ',';
    //
    //Posicion Ventana
    var PosVentana = '';
    if (PosArriba == null || PosIzquierda == null)
    {
        PosVentana = 'Top=window.screen.height / 2, Left=window.screen.With / 2,';
    }
    else
    {
        PosVentana = 'Top=' + PosArriba + ', Left=' + PosIzquierda + ',';
    }
    //Tamaño Resible
    var TamCambiante = '';
    if (resizable == null)
    {
        TamCambiante = 'resizable=1,';
    }
    else
    {
        TamCambiante = 'resizable=' + resizable + ',';
    }
    var CaracteOtros='fullscreen = no,center=yes, status= no, menubar=no, scrollbars=yes, help= no';
    
    var Caracteristica = AltoAncho + PosVentana + TamCambiante + CaracteOtros
    Titulo = Replace(Titulo," ","_");
    //
    window.open(DireccionURL, Titulo, Caracteristica, false);
}
function VentanaMaximizar()
{
    resizeTo(screen.availWidth, screen.availHeight)
    moveTo(0, 0);
}
function RefrescarClick(boton)
{
    var control=document.getElementById(boton);
    if(control!=null)
    {
        control.click();
    }
}
function ConfirmaDelRegistro()
{
    return confirm('¿ Está seguro de Eliminar el Registro Seleccionado ?')
}

//Expresiones Regulares
function ValorIsInteger(ControlValor,mensaje)
{
    var control=document.getElementById(ControlValor);
    if (control!=null)
    {
        var valorstr=control.value;
        if (valorstr.length==0) 
        {
            if (mensaje!='')
            {
                alert(mensaje);
            }
            else
            {
                alert('Ingrese el Valor Numérico');
            }
            control.focus();
            return false
        }
        var patron=/^(?:\+|-)?\d+$/; //Anteponer antes y al final de la Expresion Regular el Caracter /
        if (valorstr.match(patron))
        {
            //alert('Valor Numérico ok');
            return true;
        }
        else
        {
            alert('Formato Incorrecto del Valor Entero');
            return true;
        }
    }
}
function ValorIsDecimal(ControlValor,mensaje)
{
    var control=document.getElementById(ControlValor);
    if (control!=null)
    {
        var valorstr=control.value;
        if (valorstr.length==0)
        {
            if (mensaje!='')
            {
                alert(mensaje);
            }
            else
            {
                alert('Ingrese el Valor Numérico');
            }
            control.focus();
            return false;
        }
        var patron=/^(?:\+|-)?\d+\.\d*$/;
        if (valorstr.match(patron))
        {
            //alert('Valor con decimal');
            return true;
        }
        else
        {
            alert('Formato Incorrecto del Valor Decimal');
            return false;
        }
    }
}
function ValorIsTimer(ControlValor,LabelMsg,mensaje)
{
    var control=document.getElementById(ControlValor);
    var label=document.getElementById(LabelMsg);
    if (control!=null)
    {
        var valorstr=control.value;
        if (valorstr.length==0)
        {
            if (mensaje=='' || mensaje==null)
            {
                mensaje='Ingrese la Hora';
            }
            if (label!=null)
            {
                label.innerHTML=MensajeSpam(mensaje);
            }
            else
            {
                alert(mensaje);
            }
            control.focus();
            return false;
        }
        var patron=/^(0[1-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
        if (valorstr.match(patron))
        {
            return true;
        }
        else
        {
            mensaje='Formato Incorrecto de la Hora';
            if (label!=null)
            {
                label.innerHTML=MensajeSpam(mensaje);
            }
            else
            {
                alert(mensaje);
            }
            control.focus();
            return false;
        }
    }
}
function ValorIsFecha(ControlValor,LabelMsg,mensaje)
{
    var control=document.getElementById(ControlValor);
    var label=document.getElementById(LabelMsg);
    if (control!=null)
    {
        var valorstr=control.value;
        if (valorstr.length==0)
        {
            if (mensaje=='' || mensaje==null)
            {
                mensaje='Ingrese la Fecha';
            }
            LabelMensaje(LabelMsg,mensaje);
            control.focus();
            return false;
        }
        var patron= /^([0][1-9]|[12][0-9]|3[01])(\.|-|\/)(0[1-9]|1[012])\2(\d{4})$/;
        if (valorstr.match(patron))
        {
            //Validando Mes de Febrero**************
            var fechaVal=valorstr.split("/");
            var dia=parseInt(fechaVal[0],10);
            var mes=parseInt(fechaVal[1],10);
            var ano=parseInt(fechaVal[2],10);
            if (mes==2)
            {
                mensaje='Fecha Incorrecta';
                if (dia>=30)
                {
                    LabelMensaje(LabelMsg,mensaje);
                    control.focus();
                    return false;
                }
                else if (dia==29 && isLeapYear(ano)==false) //Año bisiesto en Java 
                {
                    LabelMensaje(LabelMsg,mensaje);
                    control.focus();
                    return false;
                }
            }
            //**************************************
            return true;
        }
        else
        {
            mensaje='Formato Incorrecto de la Fecha';
            LabelMensaje(LabelMsg,mensaje);
            control.focus();
            return false;
        }
    }
}
function ValorIsEMail(ControlValor,LabelMsg,mensaje,Email)
{
    var control=document.getElementById(ControlValor);
    var label=document.getElementById(LabelMsg);
    if (control!=null)
    {
        var valorstr=control.value;
        if (Email!='' || Email!=null)
        {
            valorstr=Email;
        }
        if (valorstr.length==0)
        {
            if (mensaje=='' || mensaje==null)
            {
                mensaje='Ingrese el E-Mail';
            }
            if (label!=null)
            {
                label.innerHTML=MensajeSpam(mensaje);
            }
            else
            {
                alert(mensaje);
            }
            control.focus();
            return false;
        }
        var patron=/(^[0-9a-zA-Z]+(?:[._][0-9a-zA-Z]+)*)@([0-9a-zA-Z]+(?:[._-][0-9a-zA-Z]+)*\.[0-9a-zA-Z]{2,3})$/;
        if (valorstr.match(patron))
        {
            //alert('Valor es EMail');
            return true;
        }
        else
        {
            mensaje='Formato Incorrecto del E-Mail';
            if (label!=null)
            {
                label.innerHTML=MensajeSpam(mensaje);
            }
            else
            {
                alert(mensaje);
            }
            control.focus();
            return false;
        }
    }
}

//Funciones Visual Basic
function IsNumeric(ControlValor,LabelMsg,mensaje)
{
    var control=document.getElementById(ControlValor);
    var label=document.getElementById(LabelMsg);
    if (control==null) return false;
    //
    var expression=control.value;
    var nums = '0123456789.-,';
    var puntosnum=0;
    var decimalnum=0;
    var decimalestado=true;
    var comanum=0;
    var comaestado=false;
    var comanumdeci=0;
    if (expression.length==0)
    {
        if (mensaje=='' || mensaje==null)
        {
            mensaje='Ingrese el Valor Numérico';
        }
        if (label!=null)
        {
            label.innerHTML=MensajeSpam(mensaje);
        }
        else
        {
            alert(mensaje);
        }
        control.focus();
        return false;
    }
    for (var n=0; n < expression.length; n++)
    {
        if(nums.indexOf(expression.charAt(n))==-1) 
        {
            mensaje='Existen Valores no Numericos';
            if (label!=null)
            {
                label.innerHTML=MensajeSpam(mensaje);
            }
            else
            {
                alert(mensaje);
            }
            control.focus();
            return false;
        }
        else
        {
            //Validando numero de puntos decimales existen
            if (expression.charAt(n)=='.')
            {
                puntosnum+=1;
                decimalestado=false;
                //
                //Validando miles coma ,
                if (comaestado==true)
                {
                    if (comanumdeci==3)
                    {
                        comaestado=false;
                        comanumdeci=0;
                    }
                    else
                    {
                        mensaje='Formato Incorrecto Coma de Miles';
                        if (label!=null)
                        {
                            label.innerHTML=MensajeSpam(mensaje);
                        }
                        else
                        {
                            alert(mensaje);
                        }
                        control.focus();
                        return false;
                    }
                }
            }
            if (expression.charAt(n)==',')
            {
                comanum+=1;
                //Validando miles coma ,
                if (comaestado==false)
                {
                    comaestado=true;
                    comanumdeci=0;
                }
                else
                {
                    if (comaestado==true && comanumdeci==3)
                    {
                        comaestado=false;
                        comanumdeci=0;
                    }
                    else
                    {
                        mensaje='Formato Incorrecto Coma de Miles';
                        if (label!=null)
                        {
                            label.innerHTML=MensajeSpam(mensaje);
                        }
                        else
                        {
                            alert(mensaje);
                        }
                        control.focus();
                        return false;
                    }
                }
            }
            else
            {
                //Contando numero de valores enteros
                if (decimalestado==true && expression.charAt(n)!='-')
                {
                    decimalnum+=1;
                    if (comaestado==true)
                    {
                        comanumdeci+=1;
                        if (comanumdeci>3)
                        {
                            mensaje='Sobre paso los Valores Enteros al Valor de la Coma de Miles';
                            if (label!=null)
                            {
                                label.innerHTML=MensajeSpam(mensaje);
                            }
                            else
                            {
                                alert(mensaje);
                            }
                            control.focus();
                            return false;
                        }
                    }
                }
            }
        }
    }
    //
    mensaje=''                
    if (puntosnum>1)
    {
        mensaje='Existen màs de un Punto Decimal';
    }
    if (decimalnum==0)
    {
        mensaje='No existen Numeros Enteros';
    }
    if (decimalnum<((comanum*3)+1) && comanum>0)
    {
        mensaje='Los valores no coinciden';
    }
    //
    if (mensaje!='')
    {
        if (label!=null)
        {
            label.innerHTML=MensajeSpam(mensaje);
        }
        else
        {
            alert(mensaje);
        }
        control.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function Replace(valor,nBuscar,cRemplazar)
{ 
    var valor = valor.split(nBuscar); 
    valor = valor.join(cRemplazar);
    return valor;

}
function LTrim(date)
{ 
    var i = 0; 
    var j = date.length - 1; 
    if (date == null)  return (false); 
    for (i = 0; i < date.length; i++) 
    {  
        if (date.substr(i, 1) != ' ' &&      date.substr(i, 1) != '\t')   break; 
    } 
    if (i <= j)  return (date.substr(i, (j+1)-i)); 
    else  return ('');
}
function RTrim(date)
{ 
    var i = 0; 
    var j = date.length - 1; 
    if (date == null)  return (false); 
    for(j = date.length - 1; j >= 0; j--) 
    {  
        if (date.substr(j, 1) != ' ' &&   date.substr(j, 1) != '\t')  break; 
    } 
    if (i <= j)  return (date.substr(i, (j+1)-i)); 
    else  return ('');
}
function Trim(date)
{ 
    if (date == null)  return (false); 
    return RTrim(LTrim(date));
}
function Space(n)
{ 
    var t=""; 
    for(var i=1; i<=n; i++)  t=t+" ";
    return t;
}
function Mid(s, n, c)
{ 
    var numargs=Mid.arguments.length; 
    if(numargs<3)  c=s.length-n+1; 
    if(c<1)  c=s.length-n+1; 
    if(n+c >s.length)  c=s.length-n+1; 
    if(n>s.length)  return ""; 
    return s.substring(n-1,n+c-1);
}
function Left(s, n)
{ 
    if(n>s.length)  n=s.length; 
    return s.substring(0, n);
}
function Right(s, n)
{ 
    var t=s.length; if(n>t)  n=t; 
    return s.substring(t-n, t);
}
function Len(d)
{ 
    if (Trim(d) != "") 
    {  
        return(d.length); 
    } 
    else 
    {  
        return(0); 
    }
}
//Retornando Valor
function ComboValor(control,ValorTipo)
{
    var control=document.getElementById(control);
    var ValorResultado=''
    if(control!=null)
    {
        if (ValorTipo=='1') //indice
        {
            ValorResultado=control.selectedIndex;
        }
        else if (ValorTipo=='2') //value
        {
            ValorResultado= control.options[control.selectedIndex].value;
        }
        else if (ValorTipo=='3') //text
        {
            ValorResultado= control.options[control.selectedIndex].text;
        }
        return ValorResultado;
    }    
}
function CheckBoxValor(control)
{
    control=document.getElementById(control);
    if (control!=null)
    {
        return control.checked;
    }
}
function TextoValor(control)
{
    var vControl=document.getElementById(control);
    if(vControl!=null)
    {
        return Trim(vControl.value);
    }
    else
    {
        return '';
    }
}
function LabelValor(control)
{
    var vControl=document.getElementById(control);
    if(vControl!=null)
    {
        return Trim(vControl.innerHTML);
    }
    else
    {
        return '';
    }
}
function TextoInputValor(control,texto)
{
    var vControl=document.getElementById(control);
    if(vControl!=null)
    {
        vControl.value=texto;
    }
}
function LabelInputValor(control,texto)
{
    var vControl=document.getElementById(control);
    if(vControl!=null)
    {
        vControl.innerHTML=texto;
    }
}
function SetSelected(control)
{
    var control = document.getElementById(control);
    if (control!=null)
    {
        control.select();
    }
}
function isArray(variable) 
{
    return (variable.constructor == Array);
}
//Año bisiesto en Java 
function isLeapYear(inputYear)
{
	if(inputYear%400==0||(inputYear%4==0&&inputYear%100!=0)) return true;
	return false;
}
function ControlLength(control)
{
    var vControl=document.getElementById(control);
    if(vControl!=null)
    {
        return vControl.value.length;
    }
    return 0;
}
function ValorIsAno(control,LabelMsg)
{
    var Lendatos=ControlLength(control)
    if (Lendatos==0)
    {
        LabelMensaje(LabelMsg,'Ingrese el Año')
        EnfocarControl(control)
        return false;
    }
    if (Lendatos<4)
    {
        LabelMensaje(LabelMsg,'Formato de Año Incorrecto')
        EnfocarControl(control);
        return false;
    }
    return true;
}
function ValidaRangoFecha(FechaInicial,FechaFinal,LabelMsg)
{
    //Valida
    if (ValorIsFecha(FechaInicial,LabelMsg)==false) return false;
    if (ValorIsFecha(FechaFinal,LabelMsg)==false) return false;
    //
    //Captura
    var FechaIni=TextoValor(FechaInicial);
    var FechaFi=TextoValor(FechaFinal);
    //
    //Desglosando Fecha 01
    var fecha01=FechaIni.split("/");
    var dia01=parseInt(fecha01[0],10);
    var mes01=parseInt(fecha01[1],10);
    var ano01=parseInt(fecha01[2],10);
    //Desglosando Fecha 02
    var fecha02=FechaFi.split("/");
    var dia02=parseInt(fecha02[0],10);
    var mes02=parseInt(fecha02[1],10);
    var ano02=parseInt(fecha02[2],10);
    //Calculando Dias
    var DTotal01=parseInt(dia01+(mes01*30)+ano01);
    var DTotal02=parseInt(dia02+(mes02*30)+ano02);
    //Validando Rango Fecha
    if (DTotal01>DTotal02)
    {
        LabelMensaje(LabelMsg,'Fecha Inicial debe ser menor a Final')
        EnfocarControl(FechaInicial);
        return false;
    }
    return true;
}
function CapturaFechaAno(Fecha)
{
    //Captura
    var FechaIni=TextoValor(Fecha);
    //
    //Desglosando Fecha
    var fecha01=FechaIni.split("/");
    var ano01=parseInt(fecha01[2],10);
    //
    return ano01;
}
function TabActiveMView(Control)
{
    var controlactivo=document.getElementById(Control)
    if (controlactivo!=null)
    {
        if (controlactivo.className=='TabLBBotonSeleccionado'){return false;}
        return true;
    }
}
function DivCentrar(DivMascara)
{
    var control = document.getElementById(DivMascara);
    if (control!=null)
    {
        //position: absolute
        control.style.position = 'absolute';
        //
        //nos posicionamos en el centro del navegador*/
        control.style.top=50 + '%';
		control.style.left=50 + '%';
		//
		//indicamos que el margen izquierdo, es la mitad de la anchura
		vwidth = -(control.clientWidth - 10)/2;
		control.style.marginLeft = vwidth + 'px';
		//indicamos que el margen superior, es la mitad de la altura
        vheight = -(control.clientHeight - 10)/2;
        control.style.marginTop = vheight + 'px';
    }
}



//Paginas
//Expresiones Regulares
//http://gollum.inforg.uniovi.es/aii/valida_regexp.php

//Agregando Funciones en JavaScript
//http://turboprogramacion.blogspot.com/2008/12/funciones-visual-basic-para-javascript.html