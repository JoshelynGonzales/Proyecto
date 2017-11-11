
var nav4 = window.event ? true : false;
var K_COLOR_DESHABILITADO="gainsboro";
var K_COLOR_HABILITADO="";//"#EFF3FB";
var K_COLOR_OBLIGATORIO="";
var K_COLOR_SOLO_LECTURA="#fff";

function setEnabled(id,value){
    document.getElementById(id).disabled = value;
    if (value == true)
        document.getElementById(id).style.background = K_COLOR_DESHABILITADO;
    else{
        document.getElementById(id).style.background = K_COLOR_HABILITADO;
    }
}

function setReadOnly(id,value){
    document.getElementById(id).readOnly = value;
    /*
    if (value == true)
        document.getElementById(id).style.background = K_COLOR_SOLO_LECTURA;
    else{
        document.getElementById(id).style.background = K_COLOR_HABILITADO;
    }
    */
}



function setClearControls(lista){
    var ar= lista.split(',');    
	for (var i=0; i< ar.length ; i++){
	    var id = "'" +  lista[i] + "'";
	    setValue(id,'');
	}	
}
function enterSiguienteControl(evt,nextID){
    if (document.all){
		if (event.keyCode == 13){
			setFocus(nextID,false);	
		}
	}
}
function setStyle(id,newClass){
    var c = document.getElementById(id);
    if (c == null)
		return;
	c.style.className = newClass;
}
function setFocus(id,select){	
	if (document.getElementById(id) == null)
		return;
	if (document.getElementById(id).disabled == true)
		return;	
	document.getElementById(id).focus();
	if (select == true)
	    document.getElementById(id).select();	
}
function setValue(id,value){
	if (document.getElementById(id) == null)
		return;
	document.getElementById(id).value = value;
}
function setValueHtml(id,value){
	if ( document.getElementById(id) == null)
		return;
	document.getElementById(id).innerHTML = value;
}

function setValorHtml(id,value){
	if ( document.getElementById(id) == null)
		return;
	document.getElementById(id).innerHTML = value;
}
function getValue(id){
	if (document.getElementById(id) == null)
		return '';	
	return document.getElementById(id).value;
}
function getValueHTML(id){
	if (document.getElementById(id) == null) return '';	
	return document.getElementById(id).innerHTML;
}

function setVisible(id,visible){
	if (document.getElementById(id) == null)
		return ;	
    if (visible==true)  //Lo muestra
        document.getElementById(id).style.display = "";
    else        //Lo acoulta
        document.getElementById(id).style.display = "none";
}
function trim(cadena){	
	while (cadena.substr(0,1)==" ")
		cadena=cadena.substr(1);
	while (cadena.substr(cadena.length-1,1)==" ")
		cadena=cadena.substr(0,cadena.length-1);
	while (cadena.search(/  /)!=-1)
		cadena=cadena.replace("  "," ");
	return(cadena);
}
function habilitarControles(lista,value){		
    var ar= lista.split(',');
	for (var i=0; i< ar.length ; i++){
	    var id = "'" +  lista[i] + "'";
	    //setEnabled(lista[i],value);
	    setEnabled(id,value);
	}	
}
function isNumber(pString){	
	var ok = "yes";	var temp;
    var valid = "0123456789"; 
	for (var i=0; i< pString.length ; i++){
		temp = "" + pString.substring(i, i+1);
		if (valid.indexOf(temp) == "-1") ok = "no";
	}
	if (ok == "no") {return (false);} else {return (true);}
}

function ValidaNumero(control,campo,vacio)
{
	var flag=true;
	var i,j,a,cadena;
	eval("cadena = " + control + ".value");
	cadena=trim(cadena);
	if ((cadena == null) || (cadena.length == 0)&&(!vacio)){
		eval("" + control + ".select()");
		alert('Debe ingresar ' + campo );
		return false;
	}
	
	for(i=0;i<cadena.length;i++)
	{ 	a=(cadena.substr(i,1));
		if (a==' ') {
			flag=false;
		}

		j=a.charCodeAt(0);
		if ( !( (j>=48) && (j<=57))   )
			flag=false;
	}
	if (! flag)
	{
		alert(campo + " contiene caracteres no validos");
		eval(control + ".select()")
	}
  return flag;
}
function ComparaFecha(fechainicio,fechafin,flag){ 
		comp1 	= fechainicio.substr(6,4) + '' + fechainicio.substr(3,2) + '' + fechainicio.substr(0,2);
		comp2 	= fechafin.substr(6,4) + '' + fechafin.substr(3,2) + '' + fechafin.substr(0,2);
		if (flag=='0')
		{		
			if 	((comp1) > (comp2)){			
				return false;
			}							
		}
		if (flag=='1'){		
			if 	((comp1) >= (comp2)){			
				return false;
			}							
		}
		return true;				
}

function validateFecha(valor){
    var flag;
    var Day, Month, Year;
    if ( validateDateMask(valor)==false ){
		return false;
	}
	
    Day = getvalue(valor,1,"/");
    Month = getvalue(valor,2,"/");
    Year = getvalue(valor,3,"/");
    if ((isNumber(Day) && isNumber(Month) && isNumber(Year) && (Year.length==4)&& (Day.length<=2) && (Month.length<=2)) ||((Month==2) && (Day<=29)))    {
        if ((Day!=0)&&(Month!=0)&&(Year!=0)&&(Month<=12)&&(Day<=31)&&(Month!=2)){
			
			if ( Month==4 || Month==6 || Month==9 || Month==11  ){
				if (Day>30 ){
					return false;
				}			
			}else if ( Month==1 || Month==3 || Month==5 || Month==7 || Month==8 || Month==10 || Month==12 ){
				if (Day>31 ){
					return false;
				}		
			}		
            return true;
         }
        else if((Month==2)&&(Day<=29)&&((Year%4)==0)&&((Year % 100)!=0))
            return true;
        else if((Month==2)&&(Day<=29)&&((Year%400)==0))
            return true;
        else if((Month==2)&&(Day<=28))
            return true;
        else    {
            if(Month > 12) {				
                flag = false;
            }
            else if(Year.length!=4) {				
                flag = false;
            }
            else if((Month==2)&&(Day==29)&&((Year%4)==0)&&(Year%100)==0) {				
                flag = false;
            }
            else{
                flag = false;
            }    
            return flag;
        }
    }
    else    {
        return false;
    }
}

function validarFecha(oControl) { 
    var flag = false;
    var Day, Month, Year;
    var Fecha=document.getElementById(oControl);
    //var Fecha = xname.value;
	var valor=Fecha.value;
	var controlValida;
	controlValida=Fecha.id;
	if ( validateDateMask(valor)==false ){
		//alert('Fecha no valida. Debe ingresar el formato (DD/MM/AAAA)');
		//msg = 'Fecha no valida. Debe ingresar el formato (DD/MM/AAAA)';
		//return msg;
		return false;
	}
	
    Day = getvalue(valor,1,"/");
    Month = getvalue(valor,2,"/");
    Year = getvalue(valor,3,"/");
    if ((isNumber(Day) && isNumber(Month) && isNumber(Year) && (Year.length==4)&& (Day.length<=2) && (Month.length<=2)) ||((Month==2) && (Day<=29)))    {
        if ((Day!=0)&&(Month!=0)&&(Year!=0)&&(Month<=12)&&(Day<=31)&&(Month!=2)){
			
			if ( Month==4 || Month==6 || Month==9 || Month==11  ){
				if (Day>30 ){					
					//alert('Fecha no valida. Debe ingresar el formato (DD/MM/YYYY)');
					//msg = 'Fecha no valida. Debe ingresar el formato (DD/MM/YYYY)';
					//return msg;
					return false;
				}			
			}else if ( Month==1 || Month==3 || Month==5 || Month==7 || Month==8 || Month==10 || Month==12 ){
				if (Day>31 ){					
					//alert('Fecha no valida. Debe ingresar el formato (DD/MM/YYYY)');
					//msg = 'Fecha no valida. Debe ingresar el formato (DD/MM/YYYY)';
					//return msg;
					return false;
				}		
			}		
            return true;
         }
        else if((Month==2)&&(Day<=29)&&((Year%4)==0)&&((Year % 100)!=0))
            return true;
        else if((Month==2)&&(Day<=29)&&((Year%400)==0))
            return true;
        else if((Month==2)&&(Day<=28))
            return true;
        else    {
            if(Month > 12) {				
                alert('El campo de mes debe como maximo 12.');
                flag = false;
            }
            else if(Year.length!=4) {				
                flag = false;
            }
            else if((Month==2)&&(Day==29)&&((Year%4)==0)&&(Year%100)==0) {				
                alert('Año no bisiesto.');
                flag = false;
            }
            else{
                alert('Fecha no valida');
                flag = false;
            }    
            if(Fecha.disabled==false)        
				Fecha.focus();
				
            Fecha.select();
            return flag;
        }
    }
    else    {
		//alert('Fecha no valida. Debe ingresar el formato (DD/MM/YYYY)');	
		//msg = 'Fecha no valida. Debe ingresar el formato (DD/MM/YYYY)';
        return false;
    }
}

function validarFecha2(oControl) {
    var flag = false;
    var Day, Month, Year;
    var Fecha = document.getElementById(oControl);
    //var Fecha = xname.value;
    var valor = Fecha.value;
    var controlValida;    
    if (validateDateMask(valor) == false) {
        //alert('Fecha no valida. Debe ingresar el formato (DD/MM/AAAA)');
        //msg = 'Fecha no valida. Debe ingresar el formato (DD/MM/AAAA)';
        //return msg;
        return false;
    }

    Day = getvalue(valor, 1, "/");
    Month = getvalue(valor, 2, "/");
    Year = getvalue(valor, 3, "/");
    if ((isNumber(Day) && isNumber(Month) && isNumber(Year) && (Year.length == 4) && (Day.length <= 2) && (Month.length <= 2)) || ((Month == 2) && (Day <= 29))) {
        if ((Day != 0) && (Month != 0) && (Year != 0) && (Month <= 12) && (Day <= 31) && (Month != 2)) {

            if (Month == 4 || Month == 6 || Month == 9 || Month == 11) {
                if (Day > 30) {
                    //alert('Fecha no valida. Debe ingresar el formato (DD/MM/YYYY)');
                    //msg = 'Fecha no valida. Debe ingresar el formato (DD/MM/YYYY)';
                    //return msg;
                    return false;
                }
            } else if (Month == 1 || Month == 3 || Month == 5 || Month == 7 || Month == 8 || Month == 10 || Month == 12) {
                if (Day > 31) {
                    //alert('Fecha no valida. Debe ingresar el formato (DD/MM/YYYY)');
                    //msg = 'Fecha no valida. Debe ingresar el formato (DD/MM/YYYY)';
                    //return msg;
                    return false;
                }
            }
            return true;
        }
        else if ((Month == 2) && (Day <= 29) && ((Year % 4) == 0) && ((Year % 100) != 0))
            return true;
        else if ((Month == 2) && (Day <= 29) && ((Year % 400) == 0))
            return true;
        else if ((Month == 2) && (Day <= 28))
            return true;
        else {
            if (Month > 12) {
                alert('El campo de mes debe como maximo 12.');
                flag = false;
            }
            else if (Year.length != 4) {
                flag = false;
            }
            else if ((Month == 2) && (Day == 29) && ((Year % 4) == 0) && (Year % 100) == 0) {
                alert('Año no bisiesto.');
                flag = false;
            }
            else {
                alert('Fecha no valida');
                flag = false;
            }
            if (Fecha.disabled == false)
                Fecha.focus();

            Fecha.select();
            return flag;
        }
    }
    else {
        //alert('Fecha no valida. Debe ingresar el formato (DD/MM/YYYY)');	
        //msg = 'Fecha no valida. Debe ingresar el formato (DD/MM/YYYY)';
        return false;
    }
}
function validateDateMask(strDate) {
    if (mask(strDate,'##/##/####')!=1)
        return false;    
    else 
		return true;
}
function validateTimeMask(strTime){
    if (mask(strTime,'##:## ##')!=1)
        return false;    
    else 
		return true;
}
function getvalue(strData, intFieldNumber, separator)   { 
    var intCurrentField, intFoundPos, strValue, strNames;
    var bool = false;
    strNames = strData;
    intCurrentField = 0;
    while( (intCurrentField != intFieldNumber)&& !bool )    {
        intFoundPos = strNames.indexOf(separator);
        intCurrentField = intCurrentField + 1;
        if (intFoundPos != 0)   { 
            strValue = strNames.substring(0,intFoundPos);
            strNames = strNames.substring(intFoundPos + 1, strNames.length);
        }
        else    { 
            if(intCurrentField == intFieldNumber)
                strValue = strNames;
            else
                strValue = ""; 
            bool = true;
        }
    }
    if(strValue!="")
        return strValue;
    else
        return strNames;
}
function mask (InString, Mask)  {
	LenStr = InString.length;
	LenMsk = Mask.length;
	if ((LenStr==0) || (LenMsk==0))	
		return 0;
	if (LenStr!=LenMsk)
		return 0;
	TempString = ""
	for (Count=0; Count<=InString.length; Count++)  {
		StrChar = InString.substring(Count, Count+1);
		MskChar = Mask.substring(Count, Count+1);
		if (MskChar=='#') {
			if(!isNumberOrChar(StrChar))
				return 0;
		}
		else if (MskChar=='?') {
			if(!isAlphabeticChar(StrChar))
				return 0;
		}
		else if (MskChar=='!') {
			if(!isNumOrChar(StrChar))
				return 0;
		}
		else if (MskChar=='*') {
		}
		else {
			if (MskChar!=StrChar)
				return 0;
		}
	}
 return  1;
} 
function isNumberChar (InString)  {
 if(InString.length!=1)
  return (false);
 RefString="1234567890";
 if (RefString.indexOf (InString, 0)==-1)
  return (false);
 return (true);
}
function isNumberOrChar (InString)  {
 if(InString.length!=1)
  return (false);
 RefString="1234567890APMapm";
 if (RefString.indexOf (InString, 0)==-1)
  return (false);
 return (true);
}
function Right(s, n){
	// Devuelve los n últimos caracteres de la cadena
	var t=s.length;
	if(n>t)
		n=t;
		
	return s.substring(t-n, t);
}
function SoloEntero()
{
	if ( !( ((event.keyCode>=48) && (event.keyCode<=57))) && !(event.keyCode==13) )
		event.keyCode=0;
}
function SoloEnteros() {
    k = event.keyCode;
    if (k >= 48 && k <= 57) { }
    else { event.keyCode = 0; }
}
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
//HANS FERNANDO, QUISPE ESPINOZA
function soloNumerosv2() {
    var key = window.event.keyCode;
    if (key < 48 || key > 57) {
        window.event.keyCode = 0;
    }
}
function SoloNumeros(evt){	
	// NOTE: Backspace = 8, Enter = 13, '0' = 48, '9' = 57	
	var key = nav4 ? evt.which : evt.keyCode;
	if (!(key <= 13 || (key >= 48 && key <= 57)))
	    event.keyCode=0;
}
//
function onlyIntegerKeys(textbox) {
    /************************************************************************
    *	AUTOR:		HQUISPE
    *	FECHA:		20/12/2011
    *	FUNCION:	SOLO PERMITE DIGITAR TECLAS NUMERICAS (PARA ENTEROS)
    ************************************************************************/
    if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
        //		if(event.keyCode!=8 && event.keyCode!=9 && event.keyCode!=13 && event.keyCode!= 46){
        if (event.keyCode != 8 && event.keyCode != 9 && event.keyCode != 46) {
            //ARA:22/01/2007 MODIFICACION PARA TECLADO NUMERICO
            if (!(event.keyCode >= 48 && event.keyCode <= 57) && !(event.keyCode >= 96 && event.keyCode <= 105)) {
                if (!(event.keyCode >= 35 && event.keyCode <= 40)) {
                    //NO ES INICIO NI FIN NI FLECHAS										
                    event.returnValue = false;
                }
            }
        }
    }
}
function SoloDecimal()
{
    //event.keyCode == 44)
	if ( !((event.keyCode == 46) ||((event.keyCode>=48) && (event.keyCode<=57))) && !(event.keyCode==13) )
		event.keyCode=0;

}
function SoloDecimalDosDecimales(control){	
	//var expreg=/(^\d+$)|(^\d+\.\d+$)/
	/*
	var expreg=/^[0-9]+(,[0-9]+)*$/
	var valor = control.value;
	if ( control.value !=''){
		if (!( expreg.test(valor))){			
			event.keyCode=0;
			return;
		}		
	}
	*/
	// caracter punto ==> keyCode = 46
	if ( !( (event.keyCode == 45) || (event.keyCode == 46) ||((event.keyCode>=48) && (event.keyCode<=57))) && !(event.keyCode==13) )
		event.keyCode=0;

	var valor = control.value;
	var hayPunto = false;
	var hayDosDecimales = false;
	if (valor.indexOf('.') != '-1')
		hayPunto = true;
		
	if (hayPunto == true && event.keyCode == 46){
		event.keyCode=0;
		return;
	}
}

function SoloLetras(evt){	
	// NOTE: Backspace = 8, Enter = 13, '0' = 48, '9' = 57	'A' = 65, 'Z' = 90, 'a' = 97, 'z' = 122
	var key = nav4 ? evt.which : evt.keyCode;
	//return (key <= 13 || !(key >= 48 && key <= 57));
	return (key <= 13 || (key >= 65 && key <= 90) || (key >= 97 && key <= 122) || key == 32 || key == 241 || key == 209);
}

function SoloLetrasConPunto(evt){
    var key = nav4 ? evt.which : evt.keyCode; 
    return (key <= 13 || (key >= 65 && key <= 90) || (key >= 97 && key <= 122) || key == 46 || key == 45 || key == 32);
}

function SoloDomicilio(evt){
    var key = nav4 ? evt.which : evt.keyCode;    
    return (key <= 13 || (key >= 48 && key <= 57) || (key >= 65 && key <= 90) || (key >= 97 && key <= 122) || key == 46 || key == 45 || key == 32 || key == 35);
}

function isDecimal(pString){
	var valor = parseFloat(pString) 
       //alert(valor);
      //Compruebo si es un valor numérico 
      if (isNaN(valor)) {
            //entonces (no es numero) devuelvo el valor cadena vacia 
            return false;   
      }else{ 
            //En caso contrario (Si era un número) devuelvo el valor 
            return true;
      } 
}

function isDecimal2(value){
    
    //var reNumero = /^\d{1,3}(\.\d{3,3})*(\,\d+)?$/gi;
    //var reNumero = /^\d{1,3}*\.\d+)?$/gi;
    //document.write(/^\d+\.?\d*$/.test('15.22'));
    //^(|([0-9]{1,2}(\\.([0-9]{1,2})?)?))$
    //var reNumero = /^(\+|-|)\d{0,3}(\,?\d{3})*(\.\d{1,5})?$/gi;
    var reNumero = /^\d{0,3}(\,?\d{3})*(\.\d{1,5})?$/gi;
    //var reNumero = /^\d{1,3}(\,?\d{1,3})(\.\d{1,4})?$/gi;
    //var reNumero = /^\d{1,9}(\.\d{1,4})?$/gi;
    return (value.search (reNumero) >= 0);
}
function isDecimal5(value){
    
    //var reNumero = /^\d{1,3}(\.\d{3,3})*(\,\d+)?$/gi;
    //var reNumero = /^\d{1,3}*\.\d+)?$/gi;
    //document.write(/^\d+\.?\d*$/.test('15.22'));
    //^(|([0-9]{1,2}(\\.([0-9]{1,2})?)?))$
    var reNumero = /^(\+|-|)\d{0,3}(\,?\d{3})*(\.\d{1,5})?$/gi;
    //var reNumero = /^\d{1,3}(\,?\d{1,3})(\.\d{1,4})?$/gi;
    //var reNumero = /^\d{1,9}(\.\d{1,4})?$/gi;
    return (value.search (reNumero) >= 0);
}
/*
function openVentana(url,w,h,name,scroll){
    var	leftScreen =(screen.width - w) / 2;
	var topScreen = (screen.height - h) / 2;
	var opciones = '';
	if (scroll == true) //Muestra la pagina con scroll
	    opciones = "directories=no,menubar=no,scrollbars=yes,status=yes,resizable=no,width=" +w +",height="+ h +",left="+leftScreen +",top=" + topScreen;
	else 
	    opciones = "directories=no,menubar=no,scrollbars=no,status=yes,resizable=no,width=" +w +",height="+ h +",left="+leftScreen +",top=" + topScreen;
	    
	ventana = window.open( url ,name, opciones);
	ventana.focus();
}
*/
function openVentana(url,w,h,name){
	var	leftScreen =(screen.width - w) / 2;
	var topScreen = (screen.height - h) / 2;
	var opciones = "directories=no,menubar=no,scrollbars=no,status=yes,resizable=no,width=" +w +",height="+ h +",left="+leftScreen +",top=" + topScreen;
	ventana = window.open( url ,name, opciones);
	ventana.focus();
}

function openVentanaConScroll(url,w,h,name){
	var	leftScreen =(screen.width - w) / 2;
	var topScreen = (screen.height - h) / 2;
	//var opciones = "directories=no,menubar=no,scrollbars=no,status=no,resizable=no,width=" +w +",height="+ h +",left="+leftScreen +",top=" + topScreen;
	var opciones = "directories=no,menubar=no,scrollbars=yes,status=yes,resizable=no,width=" +w +",height="+ h +",left="+leftScreen +",top=" + topScreen;
	ventana = window.open( url ,name, opciones);
	ventana.focus();
}
function openVentanaRedimensionable(url,w,h,name){
	var	leftScreen =(screen.width - w) / 2;
	var topScreen = (screen.height - h) / 2;
	//var opciones = "directories=no,menubar=no,scrollbars=no,status=no,resizable=no,width=" +w +",height="+ h +",left="+leftScreen +",top=" + topScreen;
	var opciones = "directories=no,menubar=yes,scrollbars=yes,status=yes,resizable=yes,width=" +w +",height="+ h +",left="+leftScreen +",top=" + topScreen;
	ventana = window.open( url ,name, opciones);
	ventana.focus();
}
function openVentanaMaximizada(pagina,name){
    var sOptions;
    sOptions = 'status=yes,menubar=no,scrollbars=yes,resizable=no,toolbar=no';
    sOptions = sOptions + ',width=' + (screen.availWidth - 10).toString();
    sOptions = sOptions + ',height=' + (screen.availHeight - 122).toString();
    sOptions = sOptions + ',screenX=0,screenY=0,left=0,top=0';
    //open(pagina,name, "toolbar=no,directories=no,menubar=no,status=no,fullscreen=yes");
    wOpen = window.open(pagina,name, sOptions);
    wOpen.moveTo( 0, 0 );
    wOpen.resizeTo( screen.availWidth, screen.availHeight );
}
function validarHora(value){
    //var reHora = /^(1|01|2|02|3|03|4|04|5|05|6|06|7|07|8|08|9|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24)\:([0-5]0|[0-5][1-9])$/;
    var reHora = /^(1|01|2|02|3|03|4|04|5|05|6|06|7|07|8|08|9|09|10|11|12)\:([0-5]0|[0-5][1-9])\ (A.M.|P.M.|a.m.|p.m.)$/;
    return (reHora.test(value));
}
/*
function isEmail(value){
    //var reEmail = /^([a-zA-Z0-9_'+*$%\^&!\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9:]{2,4})+$;
    //var reEmail = /^[a-z][a-z|0-9|]*([_][a-z|0-9]+)*([.][a-z|0-9]+([_][a-z|0-9]+)*)?@[a-z][a-z|0-9|]*\.([a-z][a-z|0-9]*(\.[a-z][a-z|0-9]*)?)$;
    var reEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(( [a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$;
    //var reEmail = /^(([^<;>;()[\]\\.,;:\s@\""]+(\.[^<;>;()[\]\\.,;:\s@\""]+)*)|(\"".+\""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$;
    //var reEmail = /^(\+|-|)\d{0,3}(\,?\d{3})*(\.\d{1,4})?$/gi;
    
    return (value.search(reEmail) >= 0);
}
*/

function validarEmail(value){
    //var reEmail = [a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b;
    //var reEmail = '^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(( [a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$';
    //var reEmail = '/^[-_a-z0-9\'+*$^&%=~!?{}]++(?:\.[-_a-z0-9\'+*$^&%=~!?{}]+)*+@(?:(?![-.])[-a-z0-9.]+(?<![-.])\.[a-z]{2,6}|\d{1,3}(?:\.\d{1,3}){3})(?::\d++)?$/iD';
    //var reEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //var reEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(( [a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var reEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return (reEmail.test(value));
    //return (value.search(reEmail) >= 0);
}

function validarPaginaWeb(value){
    //var reWeb = '/^((ht|f)tp(s?)\:\/\/|~/|/)?([\w]+:\w+@)?([a-zA-Z]{1}([\w\-]+\.)+([\w]{2,5}))(:[\d]{1,5})?((/?\w+/)+|/?)(\w+\.[\w]{3,4})?((\?\w+=\w+)?(&\w+=\w+)*)?/';
    var reWeb = /(((ht|f)tp(s?):\/\/)|(www\.[^ \[\]\(\)\n\r\t]+)|(([012]?[0-9]{1,2}\.){3}[012]?[0-9]{1,2})\/)([^ \[\]\(\),;&quot;'&lt;&gt;\n\r\t]+)([^\. \[\]\(\),;&quot;'&lt;&gt;\n\r\t])|(([012]?[0-9]{1,2}\.){3}[012]?[0-9]{1,2})/; 
    return (reWeb.test(value));
    //return (value.search(reWeb) >= 0);
}

function isTelefono(value){
    var reTelefono = /^(\s?([0-9])\s?)*(\-?\s?\d{1,5})?\s?$/;
    return (reTelefono.test(value));
}

function ConvertToDecimal(numero, decimales){
    if (numero == undefined || numero == '') numero = '0.00';
    else numero = numero.toString().split(',').join('');
    if (typeof decimales == 'undefined') return parseFloat(numero);
    else return redondear(numero, decimales);
}

/* para formatear */

function redondear(cantidad, decimales) {
    var cantidad = parseFloat(cantidad);
    var decimales = parseFloat(decimales);
    decimales = (!decimales ? 2 : decimales);
    return Math.round(cantidad * Math.pow(10, decimales)) / Math.pow(10, decimales);
}

function Redondeo(Valor, NroDecimales) {
    var rnum = Valor;
    var rlength = NroDecimales;
    if (rnum > 8191 && rnum < 10485) {
        rnum = rnum - 5000;
        var newnumber = Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
        newnumber = newnumber + 5000;
    }
    else {
        var newnumber = Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
    }
    return newnumber;
}

function Rellena_Ceros(cadena,N)  // Funcion que antepone ceros a una cadena hasta alcazar
{                                 // una longitud N. Si N es menor que la longitud, no pone ninguno.
    var k=0;
    var resultado=cadena.toString();
    //alert(resultado);
    //alert(resultado.length);
    //for (k=resultado.length; k<N; k++)
    for (k; k<N; k++)
		    resultado=resultado.toString() + "0";
    return resultado;
}

function ConvertToString(monto, nroDecimales){
    if (monto == undefined) return '0.00';
    var i=0;
    var pos;
    var decimales = '';
    var valor = monto.toString();
    var max = valor.length;
    for (var j = 0; j<max; j++){
        if (valor.charAt(j) == '.'){
            pos = j;
            break;
        }
    }
    var monto_redondeo = redondear(monto,nroDecimales);
    //alert(monto_redondeo);
    valor = monto_redondeo.toString();
    pos = parseInt(pos);
    if (pos > 0){
        decimales = valor.substring(pos + 1,valor.length);
        decimales = Rellena_Ceros(decimales, nroDecimales - decimales.length);
    }
    else
        decimales = Rellena_Ceros(decimales, nroDecimales);
    
    //if (decimales == '') decimales = '00';
    var entero = parseInt(monto_redondeo);
    var tmp = parseInt(entero/1000);
    var miles;
    var centenas;
    var total_miles;
    if (tmp > 0){
        total_miles = tmp.toString().length;
    }
    else
        total_miles = 0;
    
    if (total_miles > 0){
        miles = entero.toString().substring(0,total_miles);
        centenas = entero%1000;
        centenas = centenas.toString()
        var cen = centenas.length;
        if (cen == 1)
            centenas = '00' + centenas;
        else if (cen == 2)
            centenas = '0' + centenas;
            
        resultado = miles + ',' + centenas;
    }
    else
        resultado = entero;
    
    resultado = resultado + '.' + decimales;
    return resultado;
}

function formato_decimal(monto){
    if (monto == undefined) return '0.00';
    var i=0;
    var pos;
    //var decimales;
    var valor = monto.toString();
    var max = valor.length;
    for (var j = 0; j<max; j++){
        if (valor.charAt(j) == '.'){
            pos = j;
            break;
        }
    }
    var monto_redondeo = redondear(monto,2);
    //alert(monto_redondeo);
    valor = monto_redondeo.toString();
    pos = parseInt(pos);
    if (pos > 0){
        decimales = valor.substring(pos + 1,valor.length);
        switch(decimales.length){
            case 1:
                decimales = decimales + '0';
                break;
            case 2:
                decimales = decimales + '';
                break;
        }
    }
    else
        decimales = '00';
    
    if (decimales == '') decimales = '00';
    var entero = parseInt(monto_redondeo);
    var tmp = parseInt(entero/1000);
    var miles;
    var centenas;
    var total_miles;
    if (tmp > 0){
        total_miles = tmp.toString().length;
    }
    else
        total_miles = 0;
    
    if (total_miles > 0){
        miles = entero.toString().substring(0,total_miles);
        centenas = entero%1000;
        centenas = centenas.toString()
        var cen = centenas.length;
        if (cen == 1)
            centenas = '00' + centenas;
        else if (cen == 2)
            centenas = '0' + centenas;
            
        resultado = miles + ',' + centenas;
    }
    else
        resultado = entero;
    
    resultado = resultado + '.' + decimales;
    return resultado;
}

function formato_decimal4(monto){
    if (monto == undefined) return '0.0000';
    var i=0;
    var pos;
    //var decimales;
    var valor = monto.toString();
    var max = valor.length;
    for (var j = 0; j<max; j++){
        if (valor.charAt(j) == '.'){
            pos = j;
            break;
        }   
    }
    var monto_redondeo = redondear(monto,4);
    //alert(monto_redondeo);
    valor = monto_redondeo.toString();
    pos = parseInt(pos);
    if (pos > 0){
        decimales = valor.substring(pos + 1,valor.length);
        switch(decimales.length){
            case 1:
                decimales = decimales + '000';
                break;
            case 2:
                decimales = decimales + '00';
                break;
            case 3:
                decimales = decimales + '0';
                break;
            case 4:
                break;
        }
    }
    else
        decimales = '0000';
    
    if (decimales == '') decimales = '0000';
    var entero = parseInt(monto_redondeo);
    var tmp = parseInt(entero/1000);
    var miles;
    var centenas;
    var total_miles;
    if (tmp > 0){
        total_miles = tmp.toString().length;
    }
    else
        total_miles = 0;
    
    if (total_miles > 0){
        miles = entero.toString().substring(0,total_miles);
        centenas = entero%1000;
        centenas = centenas.toString()
        var cen = centenas.length;
        if (cen == 1)
            centenas = '00' + centenas;
        else if (cen == 2)
            centenas = '0' + centenas;
            
        resultado = miles + ',' + centenas;
    }
    else
        resultado = entero;
    
    resultado = resultado + '.' + decimales;
    return resultado;
}

function formato_decimal5(monto){
    if (monto == undefined) return '0.00';
    var i=0;
    var pos;
    //var decimales;
    var valor = monto.toString();
    var max = valor.length;
    for (var j = 0; j<max; j++){
        if (valor.charAt(j) == '.'){
            pos = j;
            break;
        }   
    }
    var monto_redondeo = redondear(monto,5);
    //alert(monto_redondeo);
    valor = monto_redondeo.toString();
    pos = parseInt(pos);
    if (pos > 0){
        decimales = valor.substring(pos + 1,valor.length);
        switch(decimales.length){
            case 1:
                decimales = decimales + '0000';
                break;
            case 2:
                decimales = decimales + '000';
                break;
            case 3:
                decimales = decimales + '00';
                break;
            case 4:
                decimales = decimales + '0';
                break;
            case 5:
                break;
        }
    }
    else
        decimales = '00000';
    
    if (decimales == '') decimales = '00000';
    var entero = parseInt(monto_redondeo);
    var tmp = parseInt(entero/1000);
    var miles;
    var centenas;
    var total_miles;
    if (tmp > 0){
        total_miles = tmp.toString().length;
    }
    else
        total_miles = 0;
    
    if (total_miles > 0){
        miles = entero.toString().substring(0,total_miles);
        centenas = entero%1000;
        centenas = centenas.toString()
        var cen = centenas.length;
        if (cen == 1)
            centenas = '00' + centenas;
        else if (cen == 2)
            centenas = '0' + centenas;
            
        resultado = miles + ',' + centenas;
    }
    else
        resultado = entero;
    
    resultado = resultado + '.' + decimales;
    return resultado;
}

function formatea_miles(monto)        //Funcion que pone el punto separador de los millares, etc.
{
    if (monto == undefined) return '0.00';
    var i=0;
    var pos;
    var decimales;
    var valor = monto.toString();
    var max = valor.length;
    for (var j = 0; j<max; j++){
        if (valor.charAt(j) == '.'){
            pos = j;
            break;
        }   
    }
    var monto_redondeo = redondear(monto,4);
    //alert(monto_redondeo);
    valor = monto_redondeo.toString();
    pos = parseInt(pos);
    if (pos > 0){
        decimales = valor.substring(pos + 1,valor.length);
        switch(decimales.length){
            case 1:
                decimales = decimales + '000';
                break;
            case 2:
                decimales = decimales + '00';
                break;
            case 3:
                decimales = decimales + '0';
                break;
        }
    }
    else
        decimales = '0000';
    
    if (decimales == '') decimales = '0000';
    var entero = parseInt(monto_redondeo);
    var tmp = parseInt(entero/1000);
    var miles;
    var centenas;
    var total_miles;
    if (tmp > 0){
        total_miles = tmp.toString().length;
    }
    else
        total_miles = 0;
    
    if (total_miles > 0){
        miles = entero.toString().substring(0,total_miles);
        centenas = entero%1000;
        centenas = centenas.toString()
        var cen = centenas.length;
        if (cen == 1)
            centenas = '00' + centenas;
        else if (cen == 2)
            centenas = '0' + centenas;
            
        resultado = miles + ',' + centenas;
    }
    else
        resultado = entero;
    
    resultado = resultado + '.' + decimales;
    
    /*
    while (tmp>0)
	    {
	    resultado=Rellena_Ceros((tmp%1000),2) + "." + resultado;
	    //resultado = 
	    tmp=parseInt(tmp/1000);
	    }
    while (resultado.charAt(0)=='0')			// Quitar los 0 iniciales
	    resultado=resultado.substring(1,resultado.length);
	*/
    return resultado;
}

function formato_miles(donde,caracter,campo){
    var decimales = false
    campo = eval("donde.form." + campo)
	for (d =0; d < campo.length; d++){
		if(campo[d].checked == true){
			dec = new Number(campo[d].value)
			break;
			}
		}
	if (dec != 0)
		{decimales = true}
    pat = /[\*,\+,\(,\),\?,\\,\$,\[,\],\^]/
    valor = donde.value
    largo = valor.length
    crtr = true
if(isNaN(caracter) || pat.test(caracter) == true)
	{
	if (pat.test(caracter)==true) 
		{caracter = "\\" + caracter}
	carcter = new RegExp(caracter,"g")
	valor = valor.replace(carcter,"")
	donde.value = valor
	crtr = false
	}
else
	{
	var nums = new Array()
	cont = 0
	for(m=0;m<largo;m++)
		{
		if(valor.charAt(m) == "." || valor.charAt(m) == " " || valor.charAt(m) == ",")
			{continue;}
		else{
			nums[cont] = valor.charAt(m)
			cont++
			}
		
		}
	}

if(decimales == true) {
	ctdd = eval(1 + dec);
	nmrs = 1
	}
else {
	ctdd = 1; nmrs = 3
	}
var cad1="",cad2="",cad3="",tres=0
if(largo > nmrs && crtr == true)
	{
	for (k=nums.length-ctdd;k>=0;k--){
		cad1 = nums[k]
		cad2 = cad1 + cad2
		tres++
		if((tres%3) == 0){
			if(k!=0){
				cad2 = "." + cad2
				}
			}
		}
		
	for (dd = dec; dd > 0; dd--)	
	{cad3 += nums[nums.length-dd] }
	if(decimales == true)
	{cad2 += "," + cad3}
	 donde.value = cad2
	}
donde.focus()
}

function faqswitch(idnum)
{
	if(document.getElementById){
		if(document.getElementById("bloque"+idnum)){
			var elem = document.getElementById("bloque"+idnum);
			var hdr = document.getElementById("faqHeader"+idnum)
			if(elem == null) { return; }
			if(elem.style.display == "none")
			{
				if(hdr != null)	{	hdr.className="faqHeaderOpen";	}
				elem.style.display = "block";
				if(document.getElementById("faqplus"+idnum)){document.getElementById("faqplus"+idnum).style.display = "";}
				if(document.getElementById("faqminus"+idnum)){document.getElementById("faqminus"+idnum).style.display = "none";}
			}
			else
			{
				elem.style.display = "none";
				if(hdr != null)	{	hdr.className="faqHeaderClosed";	}
				if(document.getElementById("faqplus"+idnum)){document.getElementById("faqplus"+idnum).style.display = "none";}
				if(document.getElementById("faqminus"+idnum)){document.getElementById("faqminus"+idnum).style.display = "";}
			}
		}
		window.event.cancelBubble = true;
		return false;
	}

}
function PresionaEnter(event)
{
    var Key = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    return Key;
}
function TeclaEnter(e)
{
    var keyPressed;	            
    if (document.all) 
    {
    //Browser used: Internet Explorer 6
    keyPressed = e.keyCode;
    } 
    else 
    {                    
    keyPressed = e.which;//Browser used: Firefox
    }
    return keyPressed;
}
function doClick(buttonName, e) {
    //the purpose of this function is to allow the enter key to 
    //point to the correct button to click.
    var key;

    if (window.event)
        key = window.event.keyCode;     //IE
    else
        key = e.which;     //firefox

    if (key == 13) {
        //Get the button the user wants to have clicked
        var btn = document.getElementById(buttonName);
        if (btn != null) { //If we find the button click it
            btn.click();
            event.keyCode = 0
        }
    }
}
/* Funcion que cambia el tab de un tabControl */

function setTabIndex(tab, index){
    var tabContainer = $find(tab);
    tabContainer.set_activeTabIndex(index);
    /*
    var tabContainer = $find(tab);
    arrtab = tabContainer.get_tabs();
    if (tabContainer == null) return;
    if (index < 0 || index >= arrtab.length) return;
    tabContainer.set_activeTabIndex(index);
    */
}

    var fila_ant="";
    var color_anterior="";       
    var color_mouseOver="";
    function Resaltar_On(grid){
        if(grid != null){
            if (grid.style.backgroundColor !="#00c0c0")
            {
                color_mouseOver=grid.style.backgroundColor;
                grid.originalBgColor = grid.style.backgroundColor;
                grid.style.backgroundColor="#DBE7F6";
            }
        }
    }
    
    function Resaltar_Off(grid){
        if(grid != null){
            if (grid.style.backgroundColor !="#00c0c0")
            {        
            grid.style.backgroundColor = grid.originalBgColor;
            }
        }
    }
            

    function Resaltar_Fila(GridView)
    {     
        if(GridView != null)
        {
           if(fila_ant=="")
           {
                fila_ant=GridView;
                color_anterior=color_mouseOver;
           }               
           fila_ant.style.backgroundColor = color_anterior;
           color_anterior=color_mouseOver;
           GridView.style.backgroundColor="#00C0C0";
           fila_ant=GridView;           
        }
    }
    
    
function TamVentana(){//devuelve el tamaño del cuerpo de la ventana disponible
    var Tamanyo = [0, 0];
    if (typeof window.innerWidth != 'undefined')
    {
        Tamanyo = [
        window.innerWidth,
        window.innerHeight
        ];
    }
    else if (typeof document.documentElement != 'undefined'
          && typeof document.documentElement.clientWidth !=
          'undefined' && document.documentElement.clientWidth != 0)
    {//entra aqui en IE7
        Tamanyo = [
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ];
    }
    else
    {
        Tamanyo = [
            document.getElementsByTagName('body')[0].clientWidth,
            document.getElementsByTagName('body')[0].clientHeight
        ];
    }
    return Tamanyo;
}
/*
function resizeLista(id, margin){
    var tam = TamVentana();
    var div = document.getElementById(id);
    
    div.style.height = tam[1] - margin;
    
    width = div.style.width;
    if(isNaN(width))//si w=100px
        width = div.style.width.substring(0,div.style.width.length-2);
    if(width > tam[0])
        div.style.width = tam[0] - 10;
}
  */  
//Redimensionar una Ventana
function setWindowSize(width, height) {
    //si es mayor que tamaño de la pantalla
    if(width > window.screen.width) width = window.screen.width;
    if(height > window.screen.height) height = window.screen.height;
    
    if (window.outerWidth) {
        window.outerWidth = width;
        window.outerHeight = height;
    }
    else if (window.resizeTo) {
        window.resizeTo(width,height);
    }
    else {
        alert("Not supported.");
    }
    var	leftScreen =(screen.width - width) / 2;
    var topScreen = (screen.height - height) / 2;
    window.moveTo(leftScreen, topScreen);
}

/*JQuery, cambia el color de los input text, textarea y botones al ser enfocados*/
//<![CDATA[
$(document).ready(function () {
    Estilo();
});
//$(function(){    
//    Estilo();
//});
function Estilo()
{
    $("text").focus(function(){
        $(this).addClass("Focus");
    });
//    $("input[@type=text]").blur(function(){
//        $(this).removeClass("Focus");
//    });
    $("text").blur(function(){
        $(this).removeClass("Focus");
    });
    $("textarea").focus(function(){
        $(this).addClass("Focus");
    });
    $("textarea").blur(function(){
        $(this).removeClass("Focus");
    });
    
//    $("select").focus(function(){
//        $("#" + this.id + " option").addClass("Focus");
//        $(this).addClass("Focus");
//    });
//    $("select").blur(function(){
//        $("#" + this.id + " option").removeClass("Focus");
//        $(this).removeClass("Focus");
//    });
    
    $("input.noStyle").focus(function(){
        $(this).css("background-color", "#FFF");
    });
    $("input.noStyle").blur(function(){
        $(this).css("background-color", "#FFF");
    });
    $("button").hover(function(){
        $(this).css("color", "#006");
    }, function(){
        $(this).css("color", "#21658A");
    });
//    $("input[@type=button]").hover(function(){
//        $(this).css("color", "#006");
//    }, function(){
//        $(this).css("color", "#21658A");
//    });

}
//Animacion GridView//
function resaltarTodasFilas(table, flag)
{
    if(flag)
    {
        $("#" + table + " tr.GridView_Alternating_Row").addClass("GridView_Row_Res");
        $("#" + table + " tr.GridView_Row").addClass("GridView_Row_Res");
    }
    else
    {
        $("#" + table + " tr.GridView_Alternating_Row").removeClass("GridView_Row_Res");
        $("#" + table + " tr.GridView_Row").removeClass("GridView_Row_Res");
    }
}
function resaltarFila(table, tr, radio)
{
    if(radio)
    {
        $("#" + table + " tr.GridView_Alternating_Row").removeClass("GridView_Row_Res");
        $("#" + table + " tr.GridView_Row").removeClass("GridView_Row_Res");
        $(tr).addClass("GridView_Row_Res");
    }
    else
    {
        var numClases = $(tr).attr("class").split(' ').length;
        if(numClases > 1) $(tr).removeClass("GridView_Row_Res");
        else $(tr).addClass("GridView_Row_Res");
    }
}
function resizeAnchoTabla(id, width)
{
    $('#' + id + ' table').css('width', width);
}

//]]>
///Obtiene la posicion (x,y) la posición y las dimensiones de cualquier elemento html (div, table, img, etc.) que haya en el documento.
function getDimensions(oElement){
    var x, y, w, h;
    x = y = w = h = 0;
    if (document.getBoxObjectFor) { // Mozilla
    var oBox = document.getBoxObjectFor(oElement);
    x = oBox.x-1;
    w = oBox.width;
    y = oBox.y-1;
    h = oBox.height;
    }
    else if (oElement.getBoundingClientRect) { // IE
    var oRect = oElement.getBoundingClientRect();
    x = oRect.left-2;
    w = oElement.clientWidth;
    y = oRect.top-2;
    h = oElement.clientHeight;
    }
    return {x: x, y: y, w: w, h: h};
}

function ValidarControl(nameControl, mensaje, focus, width){
    if (tooltipObj == null){
        tooltipObj = new DHTMLgoodies_formTooltip();
        tooltipObj.imagePath = '../Imagenes/';
    }
    if (typeof width == 'undefined') width = 100;
    tooltipObj.controlToValidate = nameControl;
    tooltipObj.mensaje = mensaje;
    tooltipObj.setTooltipWidth(width);
    tooltipObj.initFormFieldTooltip();
    tooltipObj.showMensaje();
    setFocus(nameControl, focus);
}

function siguienteControl(grid, txt){
    var id = txt.id;
    id = id.replace(grid+'_','');
    var arr_id = id.split('_');
    var current_row = arr_id[0];
    var current_txt = arr_id[1];
    current_row = current_row.replace('ctl','');
    var n = parseInt(current_row,10);
    // siguiente fila
    n++;
    var next_row = n;
    if (n<10)
            next_row = '0'+ n ;
            
    //alert(grid + '_ctl' + next_row + '_' + current_txt);
    var next_control_id = grid + '_ctl' + next_row + '_' + current_txt
    var next_control = document.getElementById(next_control_id);
    if (next_control != null){
        next_control.focus();
        next_control.select();
        return;
    }
}


//deluxePopupWindow.open('empty', '#8: Empty Style', 'width=180,height=270,resizable,scrollbars=no,middle,right,fade-effect', 'simple')

/*

var deluxePopupWindow={
    mainbox:'deluxePopupWindow-container',
    globalprefix:'jaw_',cd:'_sidebar',
    activeclasses:{handle:'jaw_handle',
    header:'jaw_header',
    minimize:'jaw_minimize',
    fullscreen:'jaw_fullscreen',
    close:'jaw_close',
    contentarea:'jaw_contentarea',
    statusarea:'jaw_statusarea',
    resizearea:'jaw_resizearea'},passiveclasses:{restore:'jaw_restore'},titles:{normalization:'Normalization',fullscreen:'FullScreen',restore:'Restore',minimize:'Minimize',unminimize:'Unminimize'},errors:{skinload:'Error! Skin Load!'},sidebarborder:3,minsize:{'width':100,'height':10},cf:0,offsetborder:0,winminimize:0,ah:[],cg:[],init:function(){this.addEvent(window,function(){cg.check();deluxePopupWindow.isPageloaded=true;},'load');this.addEvent(window,function(){deluxePopupWindow.fixed();},'scroll');this.addEvent(window,function(){for(var i=0;i<deluxePopupWindow.ah.length;i++){var jw=deluxePopupWindow.ah[i];if(jw.state=='fullscreen'){jw.ca=null;deluxePopupWindow.fullScreen(jw.fullscreen,jw);}}},'resize');document.write('<div style="left:0px;top:0px;position:absolute;" id="'+deluxePopupWindow.mainbox+'" height="100%" width="100%"><div style="display:none">&nbsp;</div></div>');},open:function(jw,contentsource,title,attr,ag,contype){jw=deluxePopupWindow.make.apply(this,arguments);jw.show();return jw;},make:function(jw,contentsource,title,attr,ag,contype){var d=deluxePopupWindow;contype=(typeof contype=='undefined')?'auto':contype;var parametersInit=function(str,cd){var as=cd;var aa=str.split(',');for(var i=0;i<aa.length;i++){if(aa[i].indexOf('=')!=-1){var value=aa[i].substr(aa[i].indexOf('=')+1);if(value=='yes'){value=true;}else if(value=='no'){value=false;}as[aa[i].substr(0,aa[i].indexOf('='))]=value;}else{as[aa[i]]=true;}}return as;};var cd={'resizable':true,'scrollbars':true,'minimizable':true,'closable':true,'fullscreen':true,'left':0,'top':0,'floatable':true,'opacity':1};var aa=parametersInit(attr,cd);if(document.getElementById(jw)==null){jw=this.create(jw,ag);}else{jw=document.getElementById(jw);}jw.defaultskin=deluxePopupWindow.globalprefix+'skin_'+ag;if(jw.ca)deluxePopupWindow.fullScreen(jw.fullscreen,jw);jw.setSize((aa['width']+'px'),(aa['height']+'px'));var _shorts={'left':['center','right','left'],'top':['middle','bottom','top']};for(var key in _shorts){for(var i=0;i<_shorts[key].length;i++){if(typeof aa[_shorts[key][i]]!='undefined'){aa[key]=((aa[_shorts[key][i]]===true)?_shorts[key][i]:aa[_shorts[key][i]]+'px');break;}}}var xpos=aa['left'];var ypos=aa['top'];if(!this.scroll_top)this.scroll_top=0;if(!deluxePopupWindow.isPageloaded&&this.scroll_top==0){if(/MSIE /i.test(navigator.userAgent)){this.addEvent(window,function(){setTimeout(function(){jw.moveTo(xpos,ypos)},400)},'load');}else{this.addEvent(window,function(){jw.moveTo(xpos,ypos)},'load');}}jw.setResize((aa['resizable']?true:false));jw.setScrolling((aa['scrollbars']?true:false));jw.setFullscreen((aa['fullscreen']?true:false));jw.setMinimizable((aa['minimizable']?true:false));jw.m((aa['closable']?true:false));jw.setFloatable((aa['floatable']?true:false));jw.defaultopacity=aa['opacity'];jw.da(aa['opacity']);for(var key in aa){if(/-effect$/i.test(key)){jw.effect={name:key.substr(0,key.length-'-effect'.length),value:aa[key]};break;}}jw.style.visibility='visible';jw.contentarea.style.display='block';jw.style.display='block';jw.moveTo(xpos,ypos);jw.style.display='none';jw.load(contentsource,title,contype);if(jw.state=='minimized'){jw.state='fullview';}return jw;},create:function(jw,ag){if(!deluxePopupWindow.ak){var ak=document.createElement('div');ak.className=deluxePopupWindow.globalprefix+'skin_'+ag+deluxePopupWindow.cd;ak.style.borderWidth=deluxePopupWindow.sidebarborder+'px';document.getElementById(deluxePopupWindow.mainbox).appendChild(ak);deluxePopupWindow.ak=ak;var backsidebar=document.createElement('div');with(backsidebar.style){position='absolute';width='1px';height='1px';top='0px';left='0px';display='none';background='#222';if((/Firefox/i.test(navigator.userAgent))){MozOpacity='.0';}else if((/MSIE /i.test(navigator.userAgent))){filter='alpha(style=0,opacity=0)';}else if((/Safari/i.test(navigator.userAgent))){KhtmlOpacity='0.0';}else if((/Opera/i.test(navigator.userAgent))){visibility='hidden';}}document.getElementById(deluxePopupWindow.mainbox).appendChild(backsidebar);deluxePopupWindow.backsidebar=backsidebar;}var searchElements=function(_obj,_attribute,_sets,_results){var elms=_obj.getElementsByTagName('*');for(var i=0;i<elms.length;i++){for(var j in _sets){if(elms[i][_attribute]&&elms[i][_attribute]==_sets[j]){_results[_sets[j]]=elms[i];}}}};var addVisualEffect=function(obj){var events=['onmouseover','onmouseout','onmousedown','onmouseup'];for(var i=0;i<events.length;i++){eval('if (obj[0]) obj[0][events[i]] = function(){deluxePopupWindow.classChanger(this,"'+events[i]+'",obj[1]);};');}};var domwindow=document.createElement('div');domwindow.id=jw;domwindow.className=deluxePopupWindow.globalprefix+'skin_'+ag;var domwindowdata=deluxePopupWindow.loadSkin(ag);if(domwindowdata==null){alert(deluxePopupWindow.errors.skinload);return null;}domwindow.innerHTML=domwindowdata;document.getElementById(deluxePopupWindow.mainbox).appendChild(domwindow);this.cb=(this.cb)?this.cb+1:100;jw=document.getElementById(jw);var _results={};searchElements(jw,'className',deluxePopupWindow.activeclasses,_results);for(var key in deluxePopupWindow.activeclasses){jw[key]=(_results['jaw_'+key])?_results['jaw_'+key]:false;}_results=null;jw.state=jw.substate='fullview';jw.handle.aj=jw;jw.resizearea.aj=jw;jw.onclose=function(){return true;};jw.onmousedown=function(){if(!deluxePopupWindow.currentSelect||deluxePopupWindow.currentSelect!=this){deluxePopupWindow.cb++;this.style.zIndex=deluxePopupWindow.cb;deluxePopupWindow.setActive(this);}};if(jw.handle){jw.handle.onmousedown=deluxePopupWindow.startDrag;if((/MSIE /i.test(navigator.userAgent))){jw.handle.onmouseover=function(){document.onselectstart=function(){return false;}};jw.handle.onmouseout=function(){document.onselectstart=function(){}};}jw.handle.ondblclick=function(e){var obj=(typeof event=='undefined')?e.target:event.srcElement;if((obj==jw.handle||obj==jw.header)&&jw.fullscreenBool){deluxePopupWindow.fullScreen(jw.fullscreen,jw);}};}if(jw.resizearea){jw.resizearea.onmousedown=deluxePopupWindow.startDrag;}if(jw.minimize){addVisualEffect([jw.minimize,deluxePopupWindow.activeclasses['minimize']]);jw.minimize.onclick=function(){if(jw.state!="minimized"){deluxePopupWindow.minimize(this,jw);}else{deluxePopupWindow.restore(this,jw);}};}if(jw.fullscreen){jw.fullscreen.onclick=function(){deluxePopupWindow.fullScreen(this,jw);};}if(jw.close){addVisualEffect([jw.close,deluxePopupWindow.activeclasses['close']]);jw.close.onclick=function(){deluxePopupWindow.close(jw);};}var events=['onmouseover','onmouseout','onmousedown','onmouseup'];for(var i=0;i<events.length;i++){eval('jw.fullscreen[events[i]] = function(){deluxePopupWindow.classChanger(this,"'+events[i]+'",((jw.substate == "fullscreen") ? deluxePopupWindow.passiveclasses["restore"] : deluxePopupWindow.activeclasses["fullscreen"]));};');};jw.show=function(){deluxePopupWindow.show(this);};jw.setFullscreen=function(af){deluxePopupWindow.setFullscreen(this,af);};jw.setMinimizable=function(af){deluxePopupWindow.setMinimizable(this,af);};jw.m=function(af){deluxePopupWindow.m(this,af);};jw.setFloatable=function(af){deluxePopupWindow.setFloatable(this,af);};jw.da=function(opacity){deluxePopupWindow.da(this,opacity);};jw.hide=function(){deluxePopupWindow.close(this);};jw.setSize=function(w,h){deluxePopupWindow.setSize(this,w,h);};jw.moveTo=function(x,y){deluxePopupWindow.moveTo(this,x,y);};jw.setResize=function(af){deluxePopupWindow.setResize(this,af);};jw.setScrolling=function(af){deluxePopupWindow.setScrolling(this,af);};jw.load=function(contenttype,contentsource,title){deluxePopupWindow.load(this,contenttype,contentsource,title);};if(!deluxePopupWindow.ah.length){window.onunload=deluxePopupWindow.cleaner;};this.ah.push(jw);return jw;},load:function(jw,contentsource,title,contype){if(typeof title!='undefined'){jw.header.innerHTML=title;}if(contype=='auto'){if(contentsource.substr(0,7)=='http://'){var contenttype='iframe';}else if(contentsource.length<=30&&document.getElementById(contentsource)){var contenttype='id';jw.contentarea.sourceboxid=contentsource;}else{var contenttype='text';}}else{var contenttype=contype;}if(contenttype=='text'){jw.contentarea.innerHTML=contentsource;}else if(contenttype=='id'){jw.contentarea.innerHTML=document.getElementById(contentsource).innerHTML;document.getElementById(contentsource).style.display='none';}else if(contenttype=='iframe'){jw.contentarea.style.overflow='hidden';if(!jw.contentarea.firstChild||jw.contentarea.firstChild.tagName!='IFRAME'){jw.contentarea.innerHTML='<iframe src="" style="border:0; margin:0; padding:0; width:100%; height: 100%" name="_iframe-'+jw.id+'"></iframe>';}window.frames['_iframe-'+jw.id].location.replace(contentsource);}jw.contentarea.datatype=contenttype;},loadSkin:function(ag){if(!window[deluxePopupWindow.globalprefix+'skin_'+ag]){return null;}if(!deluxePopupWindow.cg[ag]){deluxePopupWindow.cg[ag]=true;if(!deluxePopupWindow.ch)deluxePopupWindow.ch=document.documentElement.getElementsByTagName('script');var allscripts=deluxePopupWindow.ch;var path='';var file=deluxePopupWindow.globalprefix+'skin_'+ag+'.js';for(var i=0,len=file.length;i<allscripts.length;i++){if(allscripts[i].src.substr(allscripts[i].src.length-len,len)==file){path=allscripts[i].src.substr(0,allscripts[i].src.length-len);break;}}window[deluxePopupWindow.globalprefix+'skin_'+ag+'_showqueue']=[];var runWindowQueue=function(ag){window[ag+'_imgload']=true;while(window[ag+'_showqueue'].length){window[ag+'_showqueue'].shift().show();}};if(window[deluxePopupWindow.globalprefix+'skin_'+ag+'_images']){an.run(path,window[deluxePopupWindow.globalprefix+'skin_'+ag+'_images'],function(){runWindowQueue(deluxePopupWindow.globalprefix+'skin_'+ag);});}else{setTimeout(function(){runWindowQueue(deluxePopupWindow.globalprefix+'skin_'+ag);},300);}}return window[deluxePopupWindow.globalprefix+'skin_'+ag];},show:function(jw){if(window[jw.defaultskin+'_imgload']){deluxePopupWindow.restore(jw.minimize,jw,'show');jw.onmousedown();}else{window[jw.defaultskin+'_showqueue'].push(jw);}},close:function(jw){try{var closewinbol=jw.onclose();}catch(err){var closewinbol=true;}finally{if(typeof closewinbol=='undefined'){var closewinbol=true;}}if(closewinbol){if(jw.state!='minimized'){deluxePopupWindow.saveAttrs(jw);}if(typeof ba!='undefined'&&jw.effect&&ba[jw.effect.name]){ba[jw.effect.name].hide(jw,jw.effect.value);}else{jw.style.display='none';}}for(var i=0,max=0,top=-1;i<deluxePopupWindow.ah.length;i++){if(deluxePopupWindow.ah[i].handle.aj.style.display=='block'){if(max!=Math.max(max,parseInt(deluxePopupWindow.ah[i].handle.aj.style.zIndex))){top=i;max=Math.max(max,parseInt(deluxePopupWindow.ah[i].handle.aj.style.zIndex));}}}if(jw.contentarea.sourceboxid){document.getElementById(jw.contentarea.sourceboxid).style.display='block';}if(top>=0)deluxePopupWindow.setActive(deluxePopupWindow.ah[top].handle.aj);return closewinbol;},setActive:function(jw){if(deluxePopupWindow.currentSelect)deluxePopupWindow.currentSelect.className=deluxePopupWindow.currentSelect.defaultskin;jw.className=jw.defaultskin+'-selected';deluxePopupWindow.currentSelect=jw;},setSize:function(jw,w,h){jw.style.width=Math.max(parseInt(w),deluxePopupWindow.minsize.width)+'px';jw.contentarea.style.height=Math.max(parseInt(h),deluxePopupWindow.minsize.height)+'px';jw.contentarea.style.width=parseInt(jw.style.width)-((window[jw.defaultskin+'_border_offset'])?window[jw.defaultskin+'_border_offset']:0)+'px';},moveTo:function(jw,x,y){this.getViewPos();switch(x){case'left':jw.style.left='0px';break;case'center':jw.style.left=this.scroll_left+(this.docwidth-jw.offsetWidth)/2+'px';break;case'right':jw.style.left=this.scroll_left+(this.docwidth-jw.offsetWidth)+'px';break;default:jw.style.left=this.scroll_left+parseInt(x)+'px';break;}switch(y){case'top':jw.style.top='0px';break;case'middle':jw.style.top=this.scroll_top+(this.docheight-jw.offsetHeight)/2+'px';break;case'bottom':jw.style.top=this.scroll_left+(this.docheight-jw.offsetHeight)+'px';break;default:jw.style.top=this.scroll_top+parseInt(y)+'px';break;}if(parseInt(jw.style.top)<0)jw.style.top='0px';if(parseInt(jw.style.left)<0)jw.style.left='0px';for(var i=0;i<deluxePopupWindow.ah.length;i++){deluxePopupWindow.saveAttrs(deluxePopupWindow.ah[i]);}},setResize:function(jw,af){if(jw.statusarea)jw.statusarea.style.display=(af)?'block':'none';jw.resizeBool=(af)?1:0;},setScrolling:function(jw,af){jw.contentarea.style.overflow=(af)?'auto':'hidden';},setFullscreen:function(jw,af){if(jw.fullscreen)jw.fullscreen.style.display=(af)?'block':'none';jw.fullscreenBool=(af)?1:0;},setMinimizable:function(jw,af){if(jw.minimize)jw.minimize.style.display=(af)?'block':'none';jw.dc=(af)?1:0;},m:function(jw,af){if(jw.close)jw.close.style.display=(af)?'block':'none';jw.closableBool=(af)?1:0;},setFloatable:function(jw,af){jw.floatableBool=(af)?1:0;},da:function(jw,opacity){if(typeof document.body.style.opacity=='string')var property='opacity';else if(typeof document.body.style.MozOpacity=='string')var property='MozOpacity';else if(typeof document.body.style.KhtmlOpacity=='string')var property='KhtmlOpacity';else if(document.body.filters&&navigator.appVersion.match(/MSIE ([\d.]+)/)[1]>=5.5)var property='filter';if(property=="filter"){var alpha=jw.filters['DXImageTransform.Microsoft.alpha']||jw.filters.alpha;if(alpha){alpha.opacity=opacity*100;}else{jw.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+(opacity*100)+")";}}else{jw.style[property]=opacity;}jw.opacity=opacity;},startDrag:function(e){var d=deluxePopupWindow;var jw=this.aj;var obj=(typeof event=='undefined')?e.target:event.srcElement;if(jw.substate!='fullscreen'&&(obj==jw.handle||obj==jw.header||obj==jw.resizearea)&&!(jw.state=='minimized'&&this.className==deluxePopupWindow.activeclasses.resizearea)){deluxePopupWindow.ak.style.cursor='move';d.ao=this;e=window.event||e;d.initmousex=e.clientX;d.initmousey=e.clientY;d.initx=parseInt(jw.offsetLeft);d.inity=parseInt(jw.offsetTop);d.width=parseInt(jw.offsetWidth);d.contentheight=parseInt(jw.contentarea.offsetHeight);document.onmousemove=d.getDistance;document.onmouseup=function(){d.stop(d.ao);};}return false;},getDistance:function(e){var d=deluxePopupWindow;var ao=d.ao;e=window.event||e;with(deluxePopupWindow.ak){className=ao.aj.defaultskin+deluxePopupWindow.cd;style.borderWidth=deluxePopupWindow.sidebarborder+'px';style.display='block';}with(deluxePopupWindow.backsidebar.style){width=(window.innerWidth)?window.innerWidth+'px':document.documentElement.clientWidth+'px';height=(window.innerHeight)?window.innerHeight+'px':document.documentElement.clientHeight+'px';display='block';zIndex=deluxePopupWindow.cb+1;}d.distancex=e.clientX-d.initmousex;d.distancey=e.clientY-d.initmousey;if(ao.className==deluxePopupWindow.activeclasses.handle){with(deluxePopupWindow.ak.style){top=ao.aj.offsetTop+'px';left=ao.aj.offsetLeft+'px';width=ao.aj.offsetWidth-deluxePopupWindow.sidebarborder*2+'px';height=ao.aj.offsetHeight-deluxePopupWindow.sidebarborder*2+'px';zIndex=deluxePopupWindow.cb+2;}d.move(deluxePopupWindow.ak,e);}else if(ao.className==deluxePopupWindow.activeclasses.resizearea){deluxePopupWindow.ak.style.cursor='nw-resize';with(deluxePopupWindow.ak.style){top=ao.aj.offsetTop+'px';left=ao.aj.offsetLeft+'px';width=ao.aj.offsetWidth-deluxePopupWindow.sidebarborder*2+'px';height=ao.aj.offsetHeight-deluxePopupWindow.sidebarborder*2+'px';zIndex=deluxePopupWindow.cb+2;}d.resize(ao.aj,e);}return false;},saveAttrs:function(jw){this.getViewPos();jw.lastx=parseInt((jw.style.left||jw.offsetLeft))-deluxePopupWindow.scroll_left;jw.lasty=parseInt((jw.style.top||jw.offsetTop))-deluxePopupWindow.scroll_top;jw.lastwidth=parseInt(jw.style.width);},getViewPos:function(){var ie=(/MSIE /i.test(navigator.userAgent))?true:false;var domclientWidth=document.documentElement&&parseInt(document.documentElement.clientWidth)||100000;this.bb=(document.compatMode=='CSS1Compat')?document.documentElement:document.body;this.scroll_top=(ie)?this.bb.scrollTop:window.pageYOffset;this.scroll_left=(ie)?this.bb.scrollLeft:window.pageXOffset;this.docwidth=(ie)?this.bb.clientWidth:(/Safari/i.test(navigator.userAgent))?window.innerWidth:Math.min(domclientWidth,window.innerWidth-16);this.docheight=(ie)?this.bb.clientHeight:window.innerHeight;},resize:function(jw,e){deluxePopupWindow.ak.style.width=Math.max(deluxePopupWindow.width+deluxePopupWindow.distancex,deluxePopupWindow.minsize.width)+'px';deluxePopupWindow.ak.style.height=Math.max(deluxePopupWindow.contentheight+deluxePopupWindow.distancey,deluxePopupWindow.minsize.height)+(jw.offsetHeight-parseInt(jw.contentarea.style.height))+'px';},move:function(jw,e){jw.style.left=deluxePopupWindow.distancex+deluxePopupWindow.initx+'px';jw.style.top=deluxePopupWindow.distancey+deluxePopupWindow.inity+'px';},fullScreen:function(button,jw){if(jw.state=='minimized'){deluxePopupWindow.restore(jw.minimize,jw);}if(jw.ca){if(button){button.className=deluxePopupWindow.activeclasses.fullscreen;button.setAttribute('title',deluxePopupWindow.titles.fullscreen);}jw.state=jw.substate='fullview';if(jw.ca.resizeBool)jw.setResize(true);deluxePopupWindow.setSize(jw,jw.ca.width,jw.ca.height);deluxePopupWindow.moveTo(jw,jw.ca.x,jw.ca.y);jw.ca=null;}else{if(button){button.className=deluxePopupWindow.passiveclasses.restore;button.setAttribute('title',deluxePopupWindow.titles.normalization);}jw.state=jw.substate='fullscreen';jw.ca={x:parseInt((jw.style.left||jw.offsetLeft))-deluxePopupWindow.scroll_left,y:parseInt((jw.style.top||jw.offsetTop))-deluxePopupWindow.scroll_top,width:parseInt(jw.style.width),height:parseInt(jw.contentarea.style.height),resizeBool:jw.resizeBool};if(jw.resizeBool)jw.setResize(false);deluxePopupWindow.getViewPos();deluxePopupWindow.setSize(jw,deluxePopupWindow.docwidth-deluxePopupWindow.offsetborder,deluxePopupWindow.docheight-(jw.offsetHeight-parseInt(jw.contentarea.style.height)));deluxePopupWindow.moveTo(jw,0,0);}},minimize:function(button,jw){deluxePopupWindow.saveAttrs(jw);button.setAttribute('title',deluxePopupWindow.titles.unminimize);jw.state='minimized';jw.contentarea.style.display='none';jw.statusarea.style.display='block';if(typeof jw.winminimize=='undefined'){deluxePopupWindow.winminimize++;jw.winminimize=deluxePopupWindow.winminimize;}if(deluxePopupWindow.cf){jw.style.left='5px';jw.style.width='220px';var windowspacing=jw.winminimize*10;jw.style.top=deluxePopupWindow.scroll_top+deluxePopupWindow.docheight-(jw.handle.offsetHeight*jw.winminimize)-windowspacing+'px';}},restore:function(button,jw,referer){if(typeof referer=='undefined')referer='';deluxePopupWindow.getViewPos();if(button)button.setAttribute('title',deluxePopupWindow.titles.minimize);jw.state='fullview';jw.contentarea.style.display='block';if(jw.statusarea){if(jw.substate=='fullscreen'||!jw.resizeBool){jw.statusarea.style.display='none';}else if(jw.resizeBool){jw.statusarea.style.display='block';}}if(deluxePopupWindow.cf){jw.style.left=parseInt(jw.lastx)+deluxePopupWindow.scroll_left+'px';jw.style.top=parseInt(jw.lasty)+deluxePopupWindow.scroll_top+'px';jw.style.width=parseInt(jw.lastwidth)+'px';}if(referer=='show'&&typeof ba!='undefined'&&jw.effect&&ba[jw.effect.name]){ba[jw.effect.name].show(jw,jw.effect.value);}else{jw.style.display='block';}},fixed:function(){if(deluxePopupWindow.scroll_delayer)clearTimeout(deluxePopupWindow.scroll_delayer);if(deluxePopupWindow.slowlyfixed_delayer)clearTimeout(deluxePopupWindow.slowlyfixed_delayer);deluxePopupWindow.scroll_delayer=setTimeout(function(){deluxePopupWindow.getViewPos();for(var i=0;i<deluxePopupWindow.ah.length;i++){if(deluxePopupWindow.ah[i].floatableBool){deluxePopupWindow.slowlyfixed('left',deluxePopupWindow.ah[i],parseInt(deluxePopupWindow.ah[i].style.left),deluxePopupWindow.scroll_left+deluxePopupWindow.ah[i].lastx);deluxePopupWindow.slowlyfixed('top',deluxePopupWindow.ah[i],parseInt(deluxePopupWindow.ah[i].style.top),deluxePopupWindow.scroll_top+deluxePopupWindow.ah[i].lasty);}}},50);},slowlyfixed:function(property,jw,ac,stop,ae){if(typeof ae=='undefined'){var speed=parseInt(Math.abs(ac-stop)/30);ae=(ac>stop)?-speed:speed;}if((ac>stop&&ae<0)||(ac<stop&&ae>0)){ac+=ae;if((ac<stop&&ae<0)||(ac>stop&&ae>0))ac=stop;jw.style[property]=ac+'px';deluxePopupWindow.slowlyfixed_delayer=setTimeout(function(){deluxePopupWindow.slowlyfixed(property,jw,ac,stop,ae)},1);}},cleaner:function(){window.onload=null;for(var i=0;i<deluxePopupWindow.ah.length;i++){deluxePopupWindow.ah[i].handle.aj=deluxePopupWindow.ah[i].resizearea.aj=null;}},stop:function(){if(arguments[0]&&deluxePopupWindow.ak.style.display=='block'){var offsetborder=deluxePopupWindow.offsetborder;if(arguments[0].className==deluxePopupWindow.activeclasses.handle){with(arguments[0].aj.style){top=Math.max(deluxePopupWindow.ak.offsetTop,0)+'px';left=Math.max(deluxePopupWindow.ak.offsetLeft,0)+'px';width=deluxePopupWindow.ak.offsetWidth-offsetborder+'px';}}else if(arguments[0].className==deluxePopupWindow.activeclasses.resizearea){deluxePopupWindow.setSize(arguments[0].aj,deluxePopupWindow.ak.offsetWidth-offsetborder,deluxePopupWindow.ak.offsetHeight-(arguments[0].aj.offsetHeight-parseInt(arguments[0].aj.contentarea.style.height)));}}deluxePopupWindow.ak.style.display='none';deluxePopupWindow.backsidebar.style.display='none';deluxePopupWindow.ao=null;document.onmousemove=null;document.onmouseup=null;for(var i=0;i<deluxePopupWindow.ah.length;i++){deluxePopupWindow.saveAttrs(deluxePopupWindow.ah[i]);}},addEvent:function(target,bc,tasktype){tasktype=(window.addEventListener)?tasktype:'on'+tasktype;if(target.addEventListener){target.addEventListener(tasktype,bc,false);}else if(target.attachEvent){target.attachEvent(tasktype,bc);}},classChanger:function(_obj,methodname,defaultclass){switch(methodname){case'onmouseup':case'onmouseover':_obj.className=defaultclass+'-'+'onmouseover';break;case'onmouseout':_obj.className=defaultclass;break;case'onmousedown':_obj.className=defaultclass+'-'+methodname;break;}},addSkin:function(skinFile){document.write('<scr'+'ipt src="'+skinFile+'.js"></scr'+'ipt>');document.write('<link rel="stylesheet" href="'+skinFile+'.css" type="text/css" />');},attachToEvent:function(ad,ct){var openScript='document.getElementById(\''+ad.id+'\').show()';var onePerSession=/onePerSession/i.test(ct);var aa;var regexp_params=/(\w+)(\s*=\s*(\w+))?/g;while(aa=regexp_params.exec(ct)){if((aa[1]=='openAfter')&&(aa.length>1)){function setCookie(name,value,expires,path,domain,secure){document.cookie=name+"="+escape(value)+((expires)?"; expires="+expires:"")+((path)?"; path="+path:"")+((domain)?"; domain="+domain:"")+((secure)?"; secure":"");};function getCookie(name){var cookie=" "+document.cookie;var search=" "+name+"=";var setStr=null;var offset=0;var end=0;if(cookie.length>0){offset=cookie.indexOf(search);if(offset!=-1){offset+=search.length;end=cookie.indexOf(";",offset);if(end==-1){end=cookie.length;};setStr=unescape(cookie.substring(offset,end));}}return(setStr);};if(onePerSession){if(getCookie('dpw'+ad.id+'run'))return;setCookie('dpw'+ad.id+'run',1)};if(!aa[3])eval(openScript);else setTimeout(openScript,aa[3]*1000);}else if((aa[1]=='closeAfter')&&(aa.length>1)){setTimeout('var win=document.getElementById(\''+ad.id+'\'); if (win.style.display!=\'none\') win.hide()',aa[3]*1000);}else if((aa[1]=='onClick')&&(aa.length>1)){var e=document.getElementById(aa[3]);if(e)this.addEvent(e,function(){eval(openScript)},'click')}else if((aa[1]=='onMouseOver')&&(aa.length>1)){var e=document.getElementById(aa[3]);if(e)this.addEvent(e,function(){eval(openScript)},'mouseover')}else if((aa[1]=='onMouseOut')&&(aa.length>1)){var e=document.getElementById(aa[3]);if(e)this.addEvent(e,function(){eval(openScript)},'mouseout')}}}};var cg={check:function(){eval('var h='+this.dd('mmbcuknl/jnqu')+';');eval(this.dd('wcs"lchlimrv!?!*i"<?!%egmwygqmqwquhlemv,bml%(9'));if(!mainhost){this.writeBox(this.dd('Uphcm$o`rr:tdprknl'));}},writeBox:function(s){var box=document.createElement('div');box.innerHTML=this.dd('=fht!ke?#rvej !qu{mg< {/hlegy83212:thqh`hnhvx8wkrkcnd9ekrrmcx8cnnaj9qcefhlf82ry9gmov;`nne"03qz!Csk`n:``ajesmtle/bmmms8"D4A5@D9qmrkuknl;ccqnntvd9lcsehl;31ry9#<=c!jsgg?#juvq8.-egmwygqmqwquhlemv,bml ?')+s+this.dd('=-`<=-ekw<');document.getElementById(deluxePopupWindow.mainbox).appendChild(box);},dd:function(s){var ds='';for(var i=0;i<s.length;i++)ds+=String.fromCharCode(s.charCodeAt(i)^(1+i%2));return ds;}};deluxePopupWindow.init();var an={ar:[],defauls:{timeout:5000},run:function(prefix,images,callback,timeout){if(typeof timeout=='undefined')timeout=an.defauls.timeout;var index=an.ar.length;an.ar[index]={buffer:[],count:images.length,counter:0,method:callback};if(images.length==0){an.increment(index,true);}else{for(var i=0;i<images.length;i++){an.ar[index].buffer[i]=new Image();an.ar[index].buffer[i].onload=function(){an.increment(index)};an.ar[index].buffer[i].src=prefix+images[i];}if(timeout){an.ar[index].timer=setTimeout(function(){an.increment(index,true);},timeout);}}},increment:function(index,stop){if(typeof stop=='undefined')stop=false;if(an.ar[index]){an.ar[index].counter++;if(stop||an.ar[index].counter==an.ar[index].count){if(an.ar[index].timer){clearTimeout(an.ar[index].timer);}an.ar[index].method();an.ar[index]=false;}}}};var ba={'fade':{'speed':0.03,'show':function(ad){ad.da(0);ad.style.display='block';var ef=fadeProperty.add({name:ad.id,method:function(opacity){ad.da(opacity);},ac:0,stop:parseFloat(ad.defaultopacity),ae:ba['fade']['speed']});ef.run();},'hide':function(ad){var ef=fadeProperty.add({name:ad.id,method:function(opacity){ad.da(opacity);},cc:function(){ad.style.display='none';},ac:parseFloat(ad.defaultopacity),stop:0,ae:-ba['fade']['speed']});ef.run();}},'move':{'divisor':50,'interpretation':function(ad,position){ad.style.display='block';deluxePopupWindow.getViewPos();var width=ad.offsetWidth;var height=ad.offsetHeight;ad.style.display='none';var as;switch(position){case'left':as={parameter:'x',position:'left',ac:deluxePopupWindow.scroll_left-width,ae:1};break;case'right':as={parameter:'x',position:'left',ac:deluxePopupWindow.scroll_left+deluxePopupWindow.docwidth+width,ae:-1};break;case'bottom':as={parameter:'y',position:'top',ac:deluxePopupWindow.scroll_top+deluxePopupWindow.docheight+height,ae:-1};break;default:as={parameter:'y',position:'top',ac:deluxePopupWindow.scroll_top-height,ae:1};break;}as.ae=as.ae*parseInt(Math.abs(as.ac-(deluxePopupWindow['scroll_'+as.position]+ad['last'+as.parameter]))/ba['move']['divisor']);return as;},'show':function(ad,position){var aa=ba['move']['interpretation'](ad,position);ad.style[aa.position]=aa.ac+'px';ad.style.display='block';var ef=fadeProperty.add({name:ad.id,method:function(value){ad.style[aa.position]=value+'px';},ac:aa.ac,stop:deluxePopupWindow['scroll_'+aa.position]+ad['last'+aa.parameter],ae:aa.ae});ef.run();},'hide':function(ad,position){var aa=ba['move']['interpretation'](ad,position);ad.style[aa.position]=deluxePopupWindow['scroll_'+aa.position]+ad['last'+aa.parameter]+'px';ad.style.display='block';var ef=fadeProperty.add({name:ad.id,method:function(value){ad.style[aa.position]=value+'px';},cc:function(){ad.style.display='none';},ac:deluxePopupWindow['scroll_'+aa.position]+ad['last'+aa.parameter],stop:aa.ac,ae:-1*aa.ae});ef.run();}}};var fadeProperty={rules:[],add:function(ai){if(!ai.delay)ai.delay=1;if(!ai.ae)ai.ae=(ai.ac<ai.stop)?1:-1;if(ai.method instanceof Function){ai.status='';ai.defaults={ac:ai.ac,stop:ai.stop,ae:ai.ae};ai.remove=function(){fadeProperty.remove(this);};ai.run=function(){fadeProperty.run(this);};ai.rever=function(){fadeProperty.rever(this);};ai.restore=function(){fadeProperty.restore(this);};ai.set=function(sets){fadeProperty.set(this,sets);};var dg=false;if(ai.name&&(dg=fadeProperty.dg(ai.name))){dg=ai;}else{fadeProperty.rules.push(ai);}return ai;}else return{};},remove:function(dg){for(var i=0;i<fadeProperty.rules.length;i++){if(fadeProperty.rules[i]==dg){fadeProperty.rules.splice(i,1);dg=false;break;}}},run:function(dg){dg.method(dg.ac);dg.ac+=dg.ae;if((dg.ae>0&&dg.ac>dg.stop)||(dg.ae<0&&dg.ac<dg.stop))dg.ac=dg.stop;if(dg.ac!=dg.stop){setTimeout(function(){fadeProperty.run(dg);},dg.delay);}else{setTimeout(function(){dg.method(dg.stop);},dg.delay);if('rever'!=dg.status&&dg.cc){if('rever'==dg.cc)dg.cc=dg.rever;dg.restore();dg.cc(dg);}else{dg.restore();}}},rever:function(dg){dg.ac=dg.defaults.stop;dg.stop=dg.defaults.ac;dg.ae=-dg.defaults.ae;dg.status='rever';dg.run();},restore:function(dg){dg.ac=dg.defaults.ac;dg.stop=dg.defaults.stop;dg.ae=dg.defaults.ae;dg.status='';},dg:function(name){if(name=='')return false;for(var i=0;i<fadeProperty.rules.length;i++){if(fadeProperty.rules[i].name&&fadeProperty.rules[i].name==name){return fadeProperty.rules[i];}}return false;},set:function(dg,properties){for(var key in properties){if('defaults'==key){fadeProperty.set(dg[key],properties[key]);}else{dg[key]=properties[key];}}}};
*/
function reziseTotal(obj)
{
    var tam = TamVentana();
    obj.style.width = tam[0];
    obj.style.height = tam[1];
}
function resizeLista(id, margin){
    var tam = TamVentana();
    var div = document.getElementById(id);
    
    div.style.height = tam[1] - margin;
    
    width = div.style.width;
    if(isNaN(width))//si w=100px
        width = div.style.width.substring(0,div.style.width.length-2);
    if(width > tam[0])
        div.style.width = tam[0] - 10;
        
   $('#' + id).css('overflow', 'auto');
}

   function OpenMaximizedWindow(aURL, aWinName)
    {       
       var wOpen;
       var sOptions;
       sOptions = 'status=yes,menubar=no,scrollbars=yes,resizable=no,toolbar=no';
       sOptions = sOptions + ',width=' + (screen.availWidth - 10).toString();
       sOptions = sOptions + ',height=' + (screen.availHeight - 122).toString();
       sOptions = sOptions + ',screenX=0,screenY=0,left=0,top=0';
       wOpen = window.open( aURL, aWinName, sOptions );
       //wOpen.location = aURL;
       wOpen.focus();
       wOpen.moveTo( 0, 0 );
       wOpen.resizeTo( screen.availWidth, screen.availHeight );
    }
function setChecked(id,value){
    document.getElementById(id).checked = value;
}

/* Funcion que con enter avanza al aigiente control de una grilla*/
function enterTexbox(grid,txt){
    if (document.all){
	    if (event.keyCode == 13){
		    siguienteControl(grid,txt);
	    }
    }
}

function obtenerControlId(grid, id, name){
    //var grid = 'dgUnidad_';
    grid = grid + '_';
    id = id.replace(grid,'');
    var arr_id = id.split('_');
    var current_row = arr_id[0];
    current_row = current_row.replace('ctl','');
    var n = parseInt(current_row,10);
    var next_row = '';
    if (n < 10)
        next_row = '0'+ n;
     else
        next_row = n;
    var control;
    control = grid + 'ctl' + next_row + '_' + name;
    return control;
}

var show='';
function busqueda(){
    if (show=='Y' || show=='') {
        show='N'
        setValueHtml('lblFiltrar','Ocultar Filtro Avanzado')
        setVisible('trBusqueda',true);
    }
    else if (show=='N') {
        show='Y'
        setValueHtml('lblFiltrar','Mostrar Filtro Avanzado')
        setVisible('trBusqueda',false);
    }
    resizeTable();
}

function padleft(val, ch, num) {
    var re = new RegExp(".{" + num + "}$");
    var pad = "";
    if (!ch) ch = " ";
    do  {
        pad += ch;
    }while(pad.length < num);
    return re.exec(pad + val)[0];
}
function padright(val, ch, num){
    var re = new RegExp("^.{" + num + "}");
    var pad = "";
    if (!ch) ch = " ";
    do {
        pad += ch;
    } while (pad.length < num);
    return re.exec(val + pad)[0];
}
function redondeo2decimales(numero) {
    var original = parseFloat(numero);
    var result = Math.round(original * 100) / 100;
    return result;
}
function ajustar(tam, num) {
    if (num.toString().length <= tam) return ajustar(tam, num + "0" )
    else return num;
}
function maskInputTo(inputElement, maxLength, decimalPlaces) {
    var i, exceptions = [8, 46, 37, 39, 13, 9];   // backspace, delete, arrowleft & right, enter, tab
    var isException = false;
    var isDot = ((190 == event.keyCode) && (new String(inputElement.value).indexOf(".") <= 0));       // dot
    var k = String.fromCharCode(event.keyCode);
    //alert(event.keyCode);
    var sel, rng, r2, curPos = -1;


    if (typeof inputElement.selectionStart == "number") {
        curPos = inputElement.selectionStart;
    } else if (document.selection && inputElement.createTextRange) {
        sel = document.selection;
        if (sel) {
            r2 = sel.createRange();
            rng = inputElement.createTextRange();
            rng.setEndPoint("EndToStart", r2);
            curPos = rng.text.length;
        }
    }

    for (i = 0; i < exceptions.length; i++)
        if (exceptions[i] == event.keyCode)
            isException = true;

    if (isNaN(k) && (!isException) && (!isDot))
        event.returnValue = false;
    else {
        var p = new String(inputElement.value + k).indexOf(".");

        if (((p < inputElement.value.length - decimalPlaces && curPos > p) || isDot) && p > -1 && (!isException))
            event.returnValue = false;
        else if (inputElement.value.length >= ((p > -1) || isDot ? maxLength + 1 : maxLength) && (!isException))
            event.returnValue = false;
        else if (decimalPlaces == 0 && isDot)
            event.returnValue = false;
    }
}
function openDialog(ruta,altura,ancho) {
    try {
        var result = showModalDialog(ruta,'','dialogHeight:500px;dialogWidth:1050px');
        if (result == null || result == 'undefined') { return false }
        else return result;
    } catch (e) {
        alert(e.message);
    }
}
function ValidaEnteroYPunto(e) {

    if (e.keyCode != 46 && e.keyCode != 44) {
        if (e.keyCode < 48 || e.keyCode > 57) {
            e.keyCode = 0;

        }
    }

}
function ValidaDecimal(e, texto, cantdec) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 46 && texto.length == 0) {
        e.keyCode = 0;
    }
    else {
        if ((tecla < 48 || tecla > 57) && tecla != 46) {
            e.keyCode = 0;
        }
        if (tecla == 46 && texto.indexOf('.') != -1) {
            e.keyCode = 0;
        }
        if (tecla != 46 && texto.indexOf('.') != -1 && (texto.length - texto.indexOf('.')) > cantdec) e.keyCode = 0;
    }
}