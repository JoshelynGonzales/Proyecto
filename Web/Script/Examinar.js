function fnLoadExaminar(ibtnOpen, fi, hd, ibtnDelete)
  {
    fi.disabled = false;
    var navegador = navigator.appName;
    if (navegador == "Microsoft Internet Explorer") 
    { 
        fi.style.display = 'none';
        fi.click();
        hd.value = fi.value;
        fi.disabled = true;
        return true;
    }
    else 
    {
        if(fi.style.display == 'none')
        {
            fi.style.display = 'block';
            ibtnOpen.src = '../Imagenes/guardar.bmp';
            ibtnOpen.title='Guardar';

            ibtnDelete.src = '../Imagenes/cancelar.bmp'
            ibtnDelete.title='Cancelar';
            return false;
        }
        else
        {
            fi.style.display = 'none';
            ibtnOpen.src = '../Imagenes/abrir.bmp';
            ibtnOpen.title='Abrir';

            ibtnDelete.src = '../Imagenes/eliminar.bmp'
            hd.value = fi.value;
            return true;
        }
    }
  }
  function fnCancelExaminar(ibtnCancel, fi, hd, ibtnSave)
  { 
    var navegador = navigator.appName;
    if (navegador == "Microsoft Internet Explorer") 
    { 
        return true;
    }
    else 
    { 
        if(fi.style.display == 'block')
        {
            fi.style.display = 'none';
            hd.value = '';
            fi.value = '';
            ibtnSave.src = '../Imagenes/abrir.bmp'
            ibtnSave.title='Abrir';

            ibtnCancel.src = '../Imagenes/eliminar.bmp'
            ibtnCancel.title='Eliminar';
            return false;
        }
       return true;
    }
  }
