<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Menu.ascx.cs" Inherits="Controles_Menu" %>
<link href="../Style/General.css" rel="stylesheet" type="text/css" />
<link href="../Style/estilos.css" rel="stylesheet" type="text/css" />
 <script language="javascript" type="text/javascript">
     function AbrirPopup() {
         openVentanaConScroll('../Popup/VerHorarioxLaboratorio.aspx', 950, 800, 'VerHorarioxLaboratorio');         
     }
       </script>
<table style="width: 100%">
    <tr>
        <td style="width: 60%;" valign="middle" class="titulo_b">
            <table>
            <tr>
                <td>
                    <asp:Label ID="lblCargo" runat="server" CssClass="textsimple"></asp:Label>
                </td>
                <td style="width:10px;">
                </td>            
                <td>
                    <asp:Label ID="lblLaboratorio" runat="server" CssClass="textsimple"></asp:Label>
                </td>
                
                <td>
                    &nbsp;</td>
                
                <td>
                    <asp:Label ID="lblFacultad" runat="server"></asp:Label>
                </td>
                
            </tr>
            </table>
                        
        </td>
      
        <td align="right" style="width: 40%; height: 20px;" 
            valign="middle" class="titulo_b">
            <table>
            <tr>
            <td> &nbsp;</td>
                <td style="width:10px;">
                </td>  
            <td> <asp:Label ID="lblUsuario" runat="server" CssClass="textsimple"></asp:Label></td>
            </tr>
            
            </table>
        
        </td>
           
    </tr>
    <tr>
        <td style="width: 60%;" valign="top">
            <asp:Menu ID="Admin" runat="server" BackColor="#084B8A" DynamicHorizontalOffset="2"
                Font-Names="Verdana" Font-Size="1em" ForeColor="White" Orientation="Horizontal"
                StaticSubMenuIndent="10px">
                <StaticSelectedStyle BackColor="#507CD1" />
                <StaticMenuItemStyle CssClass="TextoMenu" HorizontalPadding="5px" VerticalPadding="2px" />
                <DynamicHoverStyle BackColor="#A9D0F5" ForeColor="#045FB4" />
                <DynamicMenuStyle BackColor="#045FB4" CssClass="TextoMenu" />
                <DynamicSelectedStyle BackColor="#507CD1" />
                <DynamicMenuItemStyle CssClass="Textomenu" HorizontalPadding="5px" VerticalPadding="2px" />
                <Items>
                    <asp:MenuItem Text="Mantenimiento" Value="Mantenimiento">
                        <asp:MenuItem 
                            Text="Alumno" Value="Usuario" 
                            NavigateUrl="~/frmAlumnoMnt.aspx">
                            <asp:MenuItem Text="Notas" Value="Notas" NavigateUrl="~/frmNotasAlumno.aspx"></asp:MenuItem>
                        </asp:MenuItem>
                    </asp:MenuItem>
                    <asp:MenuItem Text="Reportes" NavigateUrl="~/frmReporte.aspx" Value="Reportes">
                    </asp:MenuItem>
                </Items>
                <StaticHoverStyle BackColor="#045FB4" BorderColor="White" BorderStyle="Solid" BorderWidth="0"
                    ForeColor="White" />
            </asp:Menu>
        </td>
        <td align="right" style="width: 40%; height: 44px;" valign="top">
            <asp:LinkButton ID="lnkCerrarSesion"  runat="server" BackColor="White" Font-Bold="True"
                Font-Names="Arial" Font-Size="X-Small" ForeColor="#3399FF" Height="20px" 
                onclick="lnkCerrarSesion_Click">Cerrar Sesión</asp:LinkButton>            
        </td>
    </tr>
</table>
