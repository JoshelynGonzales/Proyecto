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
using System.Globalization;

public partial class UserControls_UCFecha : System.Web.UI.UserControl
{
    #region Properties ---------
    public DateTime Value
    {
        get
        {
            if (this.txtFecha.Text != string.Empty)
            {
                IFormatProvider culture = new CultureInfo("es-PE", true);
                return DateTime.Parse(this.txtFecha.Text, culture, DateTimeStyles.None);
            }
            else
            {
                return DateTime.MinValue;
            }
        }
        set
        {
            if (value != DateTime.MinValue)
            {
                IFormatProvider culture = new CultureInfo("es-PE", true);
                this.txtFecha.Text = value.ToString(culture);
            }
            else
            {
                this.txtFecha.Text = string.Empty;
            }
        }
    }
    public TextBox TxtFecha { get { return txtFecha; } }
    public HtmlImage ImageFecha { get { return imgFec; } }
    public bool Validar
    {
        get { return rfvFecha.Enabled; }
        set
        {
            rfvFecha.Enabled = value;
            if (value) rfvFecha.Display = ValidatorDisplay.Static;
            else rfvFecha.Display = ValidatorDisplay.Dynamic;
        }
    }
    public string ValidationGroup { get { return rfvFecha.ValidationGroup; } set { rfvFecha.ValidationGroup = value; } }
    public string ErrorMessage { get { return rfvFecha.ErrorMessage; } set { rfvFecha.ErrorMessage = value; } }
    #endregion
    #region Events -------------
    protected void Page_Load(object sender, EventArgs e)
    {
        //imgFec.Attributes.Add("onclick", "popUpCalendar(this, " + this.txtFecha.ClientID + ", 'dd/mm/yyyy')");
        //CalendarExtender1.Format = new CultureInfo("es-PE", true).DateTimeFormat.ShortDatePattern;
        //hdnFormat.Value = CalendarExtender1.Format;
        MaskedEditExtender1.CultureName = new CultureInfo("es-PE", true).Name;
    }
    #endregion
}
