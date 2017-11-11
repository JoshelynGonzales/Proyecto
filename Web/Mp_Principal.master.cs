using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Xml.Linq;
using System.Text;

public partial class Templates_Mp_Principal : System.Web.UI.MasterPage
{
    #region UpdatePogress
    private void RegistrarCliente()
    {
        if ((!this.Page.ClientScript.IsClientScriptBlockRegistered("__RegistrarClienteMaster__")))
        {
            StringBuilder sbScript = new StringBuilder();
            sbScript.AppendLine(string.Empty);
            sbScript.AppendLine("function adjustDivs()");
            sbScript.AppendLine("{");
            sbScript.AppendLine("var df = document.getElementById('" + this.upg_Progreso.ClientID + "');");
            sbScript.AppendLine("      dfs = df.style;");
            sbScript.AppendLine("      dfs.position='absolute';");
            sbScript.AppendLine("      df.style.position = 'absolute';");
            sbScript.AppendLine("      dfs.zIndex=20000;");
            sbScript.AppendLine("      df.style.zIndex = 20000;");
            sbScript.AppendLine("      df.style.left = (document.documentElement.scrollLeft+40) + '%';");
            sbScript.AppendLine("      df.style.top = (document.documentElement.scrollTop+250) + 'px';");
            sbScript.AppendLine("}");
            sbScript.AppendLine();
            sbScript.AppendLine("window.onload = adjustDivs;");
            sbScript.AppendLine("window.onresize = adjustDivs;");
            sbScript.AppendLine("window.onscroll = adjustDivs;");
            this.Page.ClientScript.RegisterStartupScript(Page.GetType(), "__RegistrarClienteMaster__", sbScript.ToString(), true);
        }
    }
    #endregion
    protected void Page_Load(object sender, EventArgs e)
    {
        //Page.Title = "ERP";
        //if (Session["UsuarioSession"] == null)
        //{
        //    Response.Redirect("IniciarSesion.aspx");
        //}
    }
    protected void Page_Init(object sender, EventArgs e)
    {
        RegistrarCliente();
    }

    
}
