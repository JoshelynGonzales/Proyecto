function getValues(obj) {
    var getstr = "";
    for (var i = 0; i < obj.childNodes.length; i++) {
        if (obj.childNodes[i].tagName == "INPUT") {
            if (obj.childNodes[i].type == "text") {
                getstr += obj.childNodes[i].name + "=" + obj.childNodes[i].value + "&";
            }
            if (obj.childNodes[i].type == "checkbox") {
                if (obj.childNodes[i].checked) {
                    getstr += obj.childNodes[i].name + "=" + obj.childNodes[i].value + "&";
                } else {
                    getstr += obj.childNodes[i].name + "=&";
                }
            }
            if (obj.childNodes[i].type == "radio") {
                if (obj.childNodes[i].checked) {
                    getstr += obj.childNodes[i].name + "=" + obj.childNodes[i].value + "&";
                }
            }
        }
        if (obj.childNodes[i].tagName == "SELECT") {
            var sel = obj.childNodes[i];
            getstr += sel.name + "=" + sel.options[sel.selectedIndex].value + "&";
        }

        if (obj.childNodes[i].tagName == "FIELDSET" || obj.childNodes[i].tagName == "DIV" || obj.childNodes[i].tagName == "UL" || obj.childNodes[i].tagName == "LI") {
            getstr += getValues(obj.childNodes[i]);
        }
    }
    return getstr;
}
