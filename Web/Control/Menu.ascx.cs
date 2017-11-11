using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

using System.Data;
using Entidad;
using Negocio;
public partial class Controles_Menu : System.Web.UI.UserControl
{

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
             
            if (Session["Usuario"] != null)
            {
                DataTable obj = (DataTable)Session["Usuario"];

                lblCargo.Text = "<b>Coordinador:</b> " + obj.Rows[0]["Nombre"].ToString();
                lblUsuario.Text = "<b>Usuario:</b> " + obj.Rows[0]["Usuario"].ToString();
                lblFacultad.Text = "<b>DNI:</b> " + obj.Rows[0]["DNI"].ToString();       
            } 

            //DataTable dtMenu = _Seguridad_BL.Menu_Asignado(obj_Seguridad);

            //foreach (DataRow drMenuItem in dtMenu.Rows)
            //{
            //    //esta condicion indica q son elementos padre.
            //    MenuItem mnuMenuItem = new MenuItem();
            //    mnuMenuItem.Value = drMenuItem["nid_menu"].ToString();
            //    mnuMenuItem.Text = drMenuItem["no_menu"].ToString();
            //    //agregamos el Item al menu
            //    mnuMenu.Items.Add(mnuMenuItem);
            //    //hacemos un llamado al metodo recursivo encargado de generar el arbol del menu.
            //    obj_Seguridad.Co_usuario = Session["Co_usuario"].ToString();
            //    obj_Seguridad.Nid_menu = Convert.ToInt32(mnuMenuItem.Value);
            //    DataTable dtSubMenu = _Seguridad_BL.Sub_Menu_Asignado(obj_Seguridad);
            //    AddMenuItem(mnuMenuItem, dtSubMenu);
            //}  
        }
            
    }

    void AddMenuItem(MenuItem MnuMenuItem, DataTable DtMenuItems)
    {
        foreach (DataRow drMenuItem in DtMenuItems.Rows)
        {
            if (drMenuItem["nid_menu"].ToString().Equals(MnuMenuItem.Value))
            {
                MenuItem mnuNewMenuItem = new MenuItem();
                mnuNewMenuItem.Value = drMenuItem["nid_opcion"].ToString();
                mnuNewMenuItem.Text = drMenuItem["no_opcion"].ToString();
                mnuNewMenuItem.NavigateUrl = drMenuItem["url_pagina"].ToString();
                //Agregamos el Nuevo MenuItem al MenuItem que viene de un nivel superior.
                MnuMenuItem.ChildItems.Add(mnuNewMenuItem);
            }
        }
    }
    protected void lnkCerrarSesion_Click(object sender, EventArgs e)
    {
        FormsAuthentication.SignOut();
        Session.Abandon();
        FormsAuthentication.RedirectToLoginPage();
    }
}
