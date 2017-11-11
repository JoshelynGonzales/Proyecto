//Pintado de Eventro Grilla
var lastColorUsed;
function GrillaChangeBackColor(row, highlight) 
{ 
    if (highlight) 
    { 
        lastColorUsed = row.style.backgroundColor; 
        row.style.backgroundColor = '#FFFFCC';//'pink'; AliceBlue #FFFFC0
    } 
    else
    {
        row.style.backgroundColor = lastColorUsed; 
    }
}
function GridViewOptionalSelect(spanChk)
{
    var ContePrinNom='';
    var GridviewNom='';
    var CurrentRdbID = spanChk.id;
    //
    //Verificando si esta dentro la grilla o boton esta dentro de un content************
    var ConteGridview = CurrentRdbID.split("_");
    if (CurrentRdbID.indexOf('ctl00')!=-1)
    {
        ContePrinNom=ConteGridview[0] + '_' + ConteGridview[1];
        GridviewNom=ConteGridview[2];
    }
    else
    {
        GridviewNom=ConteGridview[0];
    }
    //**********************************************************************************
	var Parent = document.getElementById(ContePrinNom + '_' + GridviewNom);				
	for(i=0;i< Parent.rows.length;i++)
	{
	    if (Parent.rows[i].cells[0]!=null && Parent.rows[i].cells[0]!=Object)
	    {
	        var tr = Parent.rows[i];
	        var td = tr.childNodes[0];
	        var item =  td.firstChild;
	        if(item.id != CurrentRdbID && item.type=="radio")
	        {		   
	            if(item.checked)
	            {	
	                item.checked = false;
	                //if (SelectbackgroundColor!='')
	                //{
	                    //item.parentElement.parentElement.style.backgroundColor=SelectbackgroundColor;
	                    item.parentElement.parentElement.style.fontWeight='normal';
	                //}
	            }
	        }
	    }
	}
	var IsChecked = spanChk.checked;
    if(IsChecked)
	{
	    //SelectbackgroundColor=spanChk.parentElement.parentElement.style.backgroundColor;
	    //spanChk.parentElement.parentElement.style.backgroundColor='#CAE4FF';
	    spanChk.parentElement.parentElement.style.fontWeight='bold';
	}	
}
function GridViewOptionalSelectItem(ControlGridView,ColNumRadio,ColNumData)
{
    var ValorResultado='';
    Parent = document.getElementById(ControlGridView);
	for(i=1;i< Parent.rows.length;i++)
	{
        var tr = Parent.rows[i];
        var td = tr.childNodes[ColNumRadio];
        var item =  td.firstChild;
        if(item.type=="radio")
        {   
            if(item.checked)
            {	
                if (ColNumData.constructor == Array)
                {
                    for(ia=0;ia<ColNumData.length;ia++)
                    {
                        ValorResultado +=Parent.rows[i].cells[ColNumData[ia]].firstChild.data + '|';
                    }
                }
                else
                {
                    ValorResultado=Parent.rows[i].cells[ColNumData].firstChild.data;
                }
                return ValorResultado
            }
        }
	}
	return ValorResultado
}
//
//Opcional
//	    if (Parent.rows[i].cells[ColNumData]!=null && Parent.rows[i].cells[ColNumData]!=Object)
//	    {
//Pintado de Eventro Grilla
//var oldgridSelectedColor;
//function ConsetMouseOverColor(element)
//{
//	oldgridSelectedColor = element.style.backgroundColor;
//	element.style.backgroundColor='LightGoldenrodYellow';
//	element.style.cursor='hand';
//}
//function ConsetMouseOutColor(element)
//{
//	element.style.backgroundColor=oldgridSelectedColor;
//}
//
//function GridViewOptionalSelect(spanChk)
//{
//    var ContePrinNom='';
//    var GridviewNom='';
//    var OptionNom='';
//    var CurrentRdbID = spanChk.id;
//    var ControlCheck=document.getElementById(CurrentRdbID);
//    //
//    //Verificando si esta dentro la grilla o boton esta dentro de un content************
//    var ConteGridview = CurrentRdbID.split("_");
//    if (CurrentRdbID.indexOf('ctl00')!=-1)
//    {
//        ContePrinNom=ConteGridview[0] + '_' + ConteGridview[1];
//        GridviewNom=ConteGridview[2];
//        ControlNom=ConteGridview[4];
//    }
//    else
//    {
//        GridviewNom=ConteGridview[0];
//    }
//    //**********************************************************************************
//    var TargetBaseControl = document.getElementById(ContePrinNom + '_' + GridviewNom);
//    var TargetChildControl = OptionNom;
//    var Inputs = TargetBaseControl.getElementsByTagName("input");
//    for(var i = 0; i < Inputs.length; ++i)
//    {
//        if(Inputs[i].type == 'radio' && Inputs[i].id.indexOf(TargetChildControl,0) >= 0)
//        {
//            if(Inputs[i].checked==true)
//            {
//                Inputs[i].checked = false;
//                Inputs[i].style.fontWeight='normal';
//            }
//        }
//    }
//	var IsChecked = spanChk.checked;
//    if(IsChecked==false)
//	{
//	    spanChk.checked = true;
//	    spanChk.parentElement.parentElement.style.fontWeight='bold';
//	}	
//}











//function CheckOtherIsChecked(spanChk)
//{
//    var IsChecked = spanChk.checked;
//    if(IsChecked)
//	{
////		     spanChk.parentElement.parentElement.style.backgroundColor='#228b22';  // grdEmployees.SelectedItemStyle.BackColor
////		     spanChk.parentElement.parentElement.style.color='white'; // grdEmployees.SelectedItemStyle.ForeColor
//         spanChk.parentElement.parentElement.style.fontWeight='bold';
//	}	
//    var CurrentRdbID = spanChk.id;	   
//    var Chk = spanChk;
//	Parent = Chk.form.elements;	
//	for(i=0;i<Parent.length;i++)
//	{		   
//	    if(Parent[i].id != CurrentRdbID && Parent[i].type=="radio")
//	    {		   
//	        if(Parent[i].checked)
//	        {	
//	            Parent[i].checked = false;
////		            Parent[i].parentElement.parentElement.style.backgroundColor='white'; //grdEmployees.ItemStyle.BackColor
////		            Parent[i].parentElement.parentElement.style.color='black'; //grdEmployees.ItemStyle.ForeColor
//                Parent[i].parentElement.parentElement.style.fontWeight='normal';
//	        }
//	    }
//	    else
//	    {
//	        alert(Parent[i].type);
//	    }
//	}
//}
//	function CheckOtherIsCheckedByGVID(spanChk)
//{		
//    var IsChecked = spanChk.checked;	    
//    if(IsChecked)
//	{
//	 spanChk.parentElement.parentElement.style.backgroundColor='#228b22';  // grdEmployees.SelectedItemStyle.BackColor
//	 spanChk.parentElement.parentElement.style.color='white'; // grdEmployees.SelectedItemStyle.ForeColor
//	}			 
//	
//    var CurrentRdbID = spanChk.id;	   
//    var Chk = spanChk;
//	//Parent = Chk.form.elements;	
//	Parent = document.getElementById('grvdetalle');
//	//alert(Parent.rows.length)
//	var items = Parent.getElementsByTagName('input');		
//	
//	for(i=0;i<items.length;i++)
//	{		   
//	    if(items[i].id != CurrentRdbID && items[i].type=="radio")
//	    {		   
//	        if(items[i].checked)
//	        {	
//	            items[i].checked = false;
//	            items[i].parentElement.parentElement.style.backgroundColor='white'; //grdEmployees.ItemStyle.BackColor
//	            items[i].parentElement.parentElement.style.color='black'; //grdEmployees.ItemStyle.ForeColor
//	        }
//	    }
//	}
//}





//function GrillaMarcarRow(Grilla,row)
//{
//    var Parent = document.getElementById(Grilla);	
//	for(i=0;i< Parent.rows.length;i++)
//	{
//	    if (Parent.rows[i].cells[0]!=null && Parent.rows[i].cells[0]!=Object)
//	    {
//	        var tr = Parent.rows[i];
//	        Parent.rows[i].style.fontWeight='normal';
//	    }
//	}
//	row.style.backgroundColor = '#FFFFC0';
//	return false;
//    //row.style.fontWeight = 'bold';//'pink'; AliceBlue #FFFFC0
//}