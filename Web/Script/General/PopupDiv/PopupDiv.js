// Archivo JScript
function getBrowserHeight(screen) 
{
    var intH = 0;
    var intW = 0;
    if (screen == 1)
    {
        intH = 100;
		intW = 100;
     }
     else
     {
        intH = (parseInt(document.body.clientHeight) + parseInt(30))  ;
		intW = (parseInt(document.body.clientWidth)  + parseInt(20))  ;
     }
    return{width: parseInt(intW), height: parseInt(intH)};
}
function PDivMostrar(DivMascara,DivHijo,screen) 
{
    var shadow = document.getElementById(DivMascara);
    if (shadow!=null)
    {
        var question = document.getElementById(DivHijo);
        var bws = getBrowserHeight(screen);
        if (screen==1) //Tamaño del Screean
        {
            shadow.style.width = parseInt(bws.width) + '%' ;
            shadow.style.height = parseInt(bws.height) + '%';
        }
        else //Tamaño del Body
        {
            if (parseInt(bws.height)< 800)
            {
                    shadow.style.height = 100 + '%';
                    shadow.style.width = 100 + '%';
            }
            else
            {
                    shadow.style.height = parseInt(bws.height) + 'px';
                    shadow.style.width = 100 + '%';
            }
        }
        shadow.style.display = 'block';question.style.display = 'block';
        question.style.top = 50+'%';
        question.style.left = 50+'%';
        question.style.marginTop =  (document.documentElement.scrollTop+document.body.scrollTop) - parseInt(question.offsetHeight / 2) + "px";
        question.style.marginLeft =  (document.documentElement.scrollLeft+document.body.scrollLeft) - parseInt(question.offsetWidth / 2) + "px";
        shadow = null;
        question = null;
    }
}
//function PDivMostrarReturnFalse(DivMascara,DivHijo,screen)
//{
//    PDivMostrar(DivMascara,DivHijo,screen);
//    return false;
//}

function PDivOcultar(DivMascara,DivHijo) 
{
    var shadow = document.getElementById(DivMascara);
    var question = document.getElementById(DivHijo);
    shadow.style.display = 'none';
    question.style.display = 'none';
    shadow = null;question = null;
    return false
}

//function InmovilizarDivScrool(ControlDiv)
//{
//    var question = document.getElementById(ControlDiv);
//    question.style.marginTop =  (document.documentElement.scrollTop+document.body.scrollTop) - parseInt(question.offsetHeight / 2) + "px";
//    question.style.marginLeft = (document.documentElement.scrollLeft+document.body.scrollLeft) - parseInt(question.offsetWidth / 2) + "px";
//}
//window.onload=window.onresize=window.onscroll=divscrool();

