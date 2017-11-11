using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Data;
using Entidad;
using Negocio;
public partial class frmNotasAlumno : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            TipoNota();
        }
    }
    public void TipoNota()
    {
        TipoNota oTipoNota = new TipoNota();
        List<TipoNota> oLst = new List<TipoNota>();
        oLst.Add(new TipoNota() { IdTipo = 1,Tipo ="P1" });
        oLst.Add(new TipoNota() { IdTipo = 2, Tipo = "P2" });
        oLst.Add(new TipoNota() { IdTipo = 3, Tipo = "P3" });
        oLst.Add(new TipoNota() { IdTipo = 4, Tipo = "P4" });
        oLst.Add(new TipoNota() { IdTipo = 5, Tipo = "Parcial" });
        oLst.Add(new TipoNota() { IdTipo = 6, Tipo = "Final" });

        ddlTipoNota.DataSource = oLst;
        ddlTipoNota.DataTextField = "Tipo";
        ddlTipoNota.DataValueField = "IdTipo";
        ddlTipoNota.DataBind();
    }
    public void fnCargar()
    {
        DataTable dt = new AlumnoBL().fnSelBuscarAlumno(new Alumno()
        {
            DNI = txtDNI.Text,
        });
        if (dt.Rows.Count > 0)
        {
            hfIdAlumno.Value = dt.Rows[0]["IdAlumno"].ToString();
            txtRazonSocial.Text = dt.Rows[0]["Nombres"].ToString();
            txtApellidos.Text = dt.Rows[0]["Apellidos"].ToString();
            
            DataTable dtIglesia = new AlumnoBL().fnSelCurso(Convert.ToInt32(dt.Rows[0]["IdSede"].ToString()));
            ddlCurso.DataSource = dtIglesia;
            ddlCurso.DataTextField = "Curso";
            ddlCurso.DataValueField = "IdCurso";
            ddlCurso.DataBind();
        }
        else
            Formato.SetMensaje(lblMensaje, TipoMensaje.ERROR, "No existe alumno");
       
    }
    public void fnMostrarNotas(Int32 IdAlumno,Int32 IdCurso)
    {
        DataTable dt = new AlumnoBL().fnSelNota(IdAlumno, IdCurso);
        gvLista.DataSource = dt;
        gvLista.DataBind();
    }
    protected void btnBuscar_Click(object sender, EventArgs e)
    {
        fnCargar();
    }
    protected void btnAgregar_Click(object sender, EventArgs e)
    {
        try
        {
            int i = new AlumnoBL().fnInsAlumnoNota(new Nota()
            {
                IdAlumno = Convert.ToInt32(hfIdAlumno.Value),
                IdTipoNota = Convert.ToInt32(ddlTipoNota.SelectedValue),
                IdCurso = Convert.ToInt32(ddlCurso.SelectedValue),
                nNota = Convert.ToInt32(txtNota.Text)
            });
            if (i == 1)
            {
                fnMostrarNotas(Convert.ToInt32(hfIdAlumno.Value), Convert.ToInt32(ddlCurso.SelectedValue));
                Formato.SetMensaje(lblMensaje, TipoMensaje.EXITO, "Nota agregada");
            }
        }
        catch (Exception ex)
        {
            Formato.SetMensaje(lblMensaje, TipoMensaje.ERROR, ex.Message);
        }
    }
}
public class TipoNota
{
    public Int32 IdTipo { get; set; }
    public String Tipo { get; set; }
}