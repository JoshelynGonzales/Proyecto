using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Entidad;
using Negocio;
using System.Data;
public partial class IniciarSesion : System.Web.UI.Page
{    
    protected void Page_Load(object sender, EventArgs e)
    {
        txtCuenta.Focus();
    }
    protected void ibtnLogin_Click(object sender, ImageClickEventArgs e)
    {
        try
        {
            DataTable dt = new AlumnoBL().fnSelUsuario(txtCuenta.Text, txtpassword.Text);
            if (dt.Rows.Count == 1)
            {
                Session["Usuario"] = dt;
                Response.Redirect("Main.aspx", false);
            }
            else
                Formato.SetMensaje(lblmensaje, TipoMensaje.ERROR, "Usuario / Clave incorreta \n");
        }
        catch (Exception ex)
        {
            Formato.SetMensaje(lblmensaje, TipoMensaje.ERROR, "Estamos experimentando problemas al procesar su solicitud, por favor intente mas tarde \n" + ex.Message);
        }
    }
}