using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Entidad;
using Negocio;
using System.Data;
public partial class frmReporte : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            fnCargar();
    }
    public void fnCargar()
    {
        DataTable dtSede = new AlumnoBL().fnSelSede();
        ddlSede.DataSource = dtSede;
        ddlSede.DataTextField = "Sede";
        ddlSede.DataValueField = "IdSede";
        ddlSede.DataBind();

        DataTable dtIglesia = new AlumnoBL().fnSelCurso(Convert.ToInt32(ddlSede.SelectedValue));
        ddlCurso.DataSource = dtIglesia;
        ddlCurso.DataTextField = "Curso";
        ddlCurso.DataValueField = "IdCurso";
        ddlCurso.DataBind();
    }
    protected void btnBuscar_Click(object sender, EventArgs e)
    {
        DataTable dt = new AlumnoBL().fnSelRpt(Convert.ToInt32(ddlSede.SelectedValue), Convert.ToInt32(ddlCurso.SelectedValue));
        gvLista.DataSource = dt;
        gvLista.DataBind();
    }
}