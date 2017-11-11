using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;


using System.Data;
using Entidad;
using Negocio;
public partial class frmAlumnoMnt : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            try
            {
                fnCargar();
                fnAlumno();
            }
            catch (Exception ex)
            {
                Formato.SetMensaje(lblMensaje, TipoMensaje.ERROR, ex.Message);
            }
        }
    }
    public void fnAlumno()
    {
        gvLista.DataSource = new AlumnoBL().fnSelAlumno();
        gvLista.DataBind();
    }
    public void fnCargar()
    {
        DataTable dtSede = new AlumnoBL().fnSelSede();
        ddlSede.DataSource = dtSede;
        ddlSede.DataTextField = "Sede";
        ddlSede.DataValueField = "IdSede";
        ddlSede.DataBind();

        DataTable dtIglesia = new AlumnoBL().fnSelIglesia();
        ddlIglesia.DataSource = dtIglesia;
        ddlIglesia.DataTextField = "Iglesia";
        ddlIglesia.DataValueField = "IdIglesia";
        ddlIglesia.DataBind();
    }
    public void fnGetAlumno()
    {
        DataTable dt = new AlumnoBL().fnSelBuscarAlumno(new Alumno() {
            DNI = txtDNI.Text,
        });
        if (dt.Rows.Count > 0)
        {
            txtRazonSocial.Text = dt.Rows[0]["Nombres"].ToString();
            txtApellidos.Text = dt.Rows[0]["Apellidos"].ToString();
            txtFecha.Text = dt.Rows[0]["FechaNacimiento"].ToString();
            ddlIglesia.SelectedValue = dt.Rows[0]["IdIglesia"].ToString();
            ddlSede.SelectedValue = dt.Rows[0]["IdSede"].ToString();
            txtObservacion.Text = dt.Rows[0]["Observacion"].ToString();
        }
        else
            Formato.SetMensaje(lblMensaje, TipoMensaje.ERROR, "No existe alumno");
    }
    protected void btnGuardar_Click(object sender, EventArgs e)
    {
        try 
        {
            Alumno oEntidad = new Alumno();
            DataTable dt = new AlumnoBL().fnSelBuscarAlumno(new Alumno()
            {
                DNI = txtDNI.Text,
            });
            if (dt.Rows.Count == 1)
            {
                Formato.SetMensaje(lblMensaje, TipoMensaje.ERROR, "Alumno ya existe");
                return;
            }
            oEntidad.DNI = txtDNI.Text;
            oEntidad.Nombres = txtRazonSocial.Text;
            oEntidad.Apellidos = txtApellidos.Text;
            oEntidad.FechaNacimiento = txtFecha.Text;
            oEntidad.IdIglesia = Convert.ToInt32(ddlIglesia.SelectedValue);
            oEntidad.IdSede = Convert.ToInt32(ddlSede.SelectedValue);
            oEntidad.Observacion = txtObservacion.Text == "" ? "" : txtObservacion.Text;

            int i = new AlumnoBL().fnInsAlumno(oEntidad);
            if(i == 1)
            {
                Formato.SetMensaje(lblMensaje, TipoMensaje.EXITO, "Alumno registrado");
            }
            else
                Formato.SetMensaje(lblMensaje, TipoMensaje.ERROR, "Alumno error");

            fnAlumno();

        }
        catch (Exception ex)
        {
            Formato.SetMensaje(lblMensaje, TipoMensaje.ERROR, ex.Message);
        }
    }
    protected void btnEditar_Click(object sender, ImageClickEventArgs e)
    {
       
       
    }
    protected void btnEliminar_Click(object sender, ImageClickEventArgs e)
    {
         
    }
    protected void btnVolver_Click(object sender, EventArgs e)
    {
        Response.Redirect("frmMain.aspx");
    }
    protected void btnAgregar_Click(object sender, EventArgs e)
    {
          
    }
    protected void btnContacto_Click(object sender, EventArgs e)
    {
        

    }


    protected void btnBuscar_Click(object sender, EventArgs e)
    {
        fnGetAlumno();
    }

    protected void btnGuardar_Click1(object sender, EventArgs e)
    {

    }
}