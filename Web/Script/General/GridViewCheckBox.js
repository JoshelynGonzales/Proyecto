function GridViewCBoxSelectAll(CheckBoxHeader,Grilla,ColNumCBox)
{
    //obteniendo referencia del control GridView
    var grid = document.getElementById(Grilla);
    //variable para contener la celda de la Grilla
    var cell;
    if (grid.rows.length > 0)
    {
        //comienza a partir del 1 de bucle. filas [0] puntos a la cabecera.
        for (i=1; i<grid.rows.length; i++)
        {
            //obtener la referencia de la primera columna
            cell = grid.rows[i].cells[ColNumCBox];
            if (cell.childNodes[ColNumCBox].type =="checkbox")
            {
                cell.childNodes[ColNumCBox].checked = document.getElementById(CheckBoxHeader).checked;
            }
        }
    }
}