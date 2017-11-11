function valFecha(oTxt) {
    var bOk = true;
    if (oTxt.value != "__/__/____") {
        formato = document.getElementById(oTxt.id.replace(/txtFecha/, "hdnFormat")).value;
        var formatoSplit = formato.split("/", 3);
        var dia = 01;
        var mes = 01;
        var anho = 2001;
        for (i = 0; i < formatoSplit.length; i++) {
            if (formatoSplit[i] == 'dd')
                dia = oTxt.value.split("/")[0];
            else if (formatoSplit[i] == 'MM')
                mes = oTxt.value.split("/")[1];
            else if (formatoSplit[i] == 'yyyy')
                anho = oTxt.value.split("/")[2];
        }

        //var d = new Date(anho,mes-1,dia);

        bOk = bOk && (valDia(dia, mes, anho));
        bOk = bOk && (valMes(mes));
        bOk = bOk && (valAno(anho));
        //bOk = bOk && (valSep(oTxt));
        if (!bOk) {
            alert("Fecha inválida");
            oTxt.value = "";
            oTxt.focus();
        }
    }
}
function valDia(dia, mes, anho) {
    var bOk = false;
    bOk = bOk || ((dia >= 1) && (dia <= finMes(mes, anho)));
    return bOk;
}

function valMes(mes) {
    var bOk = false;
    var nMes = parseInt(mes, 10);
    bOk = bOk || ((mes >= 1) && (mes <= 12));
    return bOk;
}

function valAno(anho) {
    var bOk = true;
    bOk = bOk && (anho.length == 4);

    if (bOk) {
        for (var i = 0; i < anho.length; i++) {
            bOk = bOk && esDigito(anho.charAt(i));
        }
    }
    return bOk;
}
function valSep(oTxt) {
    var bOk = false;
    bOk = bOk || ((oTxt.value.charAt(2) == "/") && (oTxt.value.charAt(5) == "/"));
    return bOk;
}
function esDigito(sChr) {
    var sCod = sChr.charCodeAt(0);
    return ((sCod > 47) && (sCod < 58));
}
function finMes(mes, anho) {
    var nMes = parseInt(mes, 10);
    var nRes = 0;
    switch (nMes) {
        case 1: nRes = 31; break;
        case 2:
            if (parseInt(anho) % 4 == 0) {
                nRes = 29;
            }
            else {
                nRes = 28;
            }

            break;
        case 3: nRes = 31; break;
        case 4: nRes = 30; break;
        case 5: nRes = 31; break;
        case 6: nRes = 30; break;
        case 7: nRes = 31; break;
        case 8: nRes = 31; break;
        case 9: nRes = 30; break;
        case 10: nRes = 31; break;
        case 11: nRes = 30; break;
        case 12: nRes = 31; break;
    }
    return nRes;
}