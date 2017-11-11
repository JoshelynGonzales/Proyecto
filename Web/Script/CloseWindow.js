document.onkeydown = keyDown;
//chrome = (navigator.appName = "Netscape") ? true : false; //firefox, safito, chrome
//firefox = (navigator.appName = "Netscape") ? true : false; //firefox, safito, chrome
//safito = (navigator.appName = "Netscape") ? true : false; //firefox, safito, chrome
//explorer = (navigator.appName = "Microsoft Internet Explorer") ? true : false; //explorer
//opera = (navigator.appName = "Opera") ? true : false; //opera

function keyDown(e) {
    var tecla, res = true;

    explorer = (navigator.appName == "Microsoft Internet Explorer") ? true : false; //explorer
    if (explorer) tecla = event.keyCode; //explorer, chrome, opera, safito.
    if (!explorer) tecla = e.which; //firefox,  chrome, opera, safito.

    switch (tecla) {
        case 27://ESC
            if (confirm("Esta seguro de cerrar la ventana."))
                window.close();
            break;
    }
    return res;
}  