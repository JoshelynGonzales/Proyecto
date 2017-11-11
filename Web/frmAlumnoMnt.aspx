<%@ Page Title="" Language="C#" MasterPageFile="~/Mp_Principal.master" AutoEventWireup="true" CodeFile="frmAlumnoMnt.aspx.cs" Inherits="frmAlumnoMnt" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">  
    <script language="javascript"  type="text/javascript">
    //************************************************************************************************************//      
            function isNumberKey(evt) {
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57))
                    return false;
                return true;
            }     
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cph_contenedor" Runat="Server">
    <asp:UpdatePanel ID="UpdatePanel2" runat="server">
    <ContentTemplate>    
   <table class="contenido" style="width:100%">
      <tr>
            <td id="titulo_scc" align="left" ><h3>
                <asp:Image ID="Image1" runat="server" Height="22px" ImageUrl="Pictures/papelylapiz.jpg" Width="22px" />
                ALUMNO</h3></td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td colspan="3">
                <cc1:TabContainer ID="tbUsuario" runat="server" ActiveTabIndex="0" 
                    Width="100%">
                    <cc1:TabPanel runat="server" HeaderText="TabPanel1" ID="TabPanel1"><HeaderTemplate>Administrar</HeaderTemplate><ContentTemplate><table style="width:100%;"><tr><td class="titulo_b" align="left">►INFORMACIÓN ALUMNO</td></tr><tr><td class="filtros_a"><asp:UpdatePanel ID="UpdatePanel1" runat="server"><ContentTemplate><table style="width: 100%;"><tr><td colspan="2"><asp:Label ID="lblEmpresa" runat="server" Font-Bold="True" Font-Italic="True" Text="INFORMACIÓN"></asp:Label></td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td><asp:Label ID="Label1" runat="server" Text="DNI"></asp:Label></td><td align="left"><asp:TextBox ID="txtDNI" runat="server" Width="250px" MaxLength="8" onkeypress="return isNumberKey(event)"></asp:TextBox><asp:Button ID="btnBuscar" runat="server" CssClass="Buscar" OnClick="btnBuscar_Click" Text="Buscar           " /></td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td><asp:Label ID="Label3" runat="server" Text="Nombres"></asp:Label></td><td align="left"><asp:TextBox ID="txtRazonSocial" runat="server" Width="250px"></asp:TextBox></td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td><asp:Label ID="Label9" runat="server" Text="Apellidos"></asp:Label></td><td align="left"><asp:TextBox ID="txtApellidos" runat="server" Width="250px"></asp:TextBox></td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td><asp:Label ID="Label4" runat="server" Text="Fecha Nac."></asp:Label></td><td align="left"><asp:TextBox ID="txtFecha" runat="server" Width="250px"></asp:TextBox>
                        <cc1:CalendarExtender ID="CalendarExtender1" runat="server" PopupButtonID="txtFecha" TargetControlID="txtFecha" Format="dd/MM/yyyy"></cc1:CalendarExtender>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       </td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td><asp:Label ID="Label10" runat="server" Text="Iglesia Local"></asp:Label></td><td align="left"><asp:DropDownList ID="ddlIglesia" runat="server" Width="250px"></asp:DropDownList></td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td><asp:Label ID="Label11" runat="server" Text="Sede de CML"></asp:Label></td><td align="left"><asp:DropDownList ID="ddlSede" runat="server" Width="250px"></asp:DropDownList></td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td><asp:Label ID="Label12" runat="server" Text="Otra denominacion"></asp:Label></td><td align="left"><asp:TextBox ID="txtObservacion" runat="server" Width="250px"></asp:TextBox></td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td>&#160;</td><td align="left">&#160;</td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td colspan="4"></td></tr><tr><td colspan="4">
                        <asp:GridView ID="gvLista" runat="server" AutoGenerateColumns="False" EnableModelValidation="True" ScrollHeight="" ScrollWidth="" Width="100%" ><AlternatingRowStyle CssClass="GridView_Alternating_Row" /><Columns>
                        <asp:BoundField DataField="DNI" HeaderText="DNI" />
                        <asp:BoundField DataField="Nombres" HeaderText="Nombre" /><asp:BoundField DataField="Apellidos" HeaderText="Apellidos" /><asp:BoundField DataField="FechaNacimiento" HeaderText="Fecha Nacimiento" /><asp:BoundField DataField="SedeDsc" HeaderText="Sede" /><asp:BoundField DataField="IglesiaDsc" HeaderText="Iglesia" /><asp:TemplateField HeaderText=""><ItemTemplate><asp:Label ID="lblIdDetalle" runat="server" Text='<%# Eval("IdAlumno") %>' Visible="False"></asp:Label><asp:ImageButton ID="btnEditar" runat="server" CommandArgument='<%# Eval("IdAlumno") %>' height="16px" ImageUrl="Imagenes/view_details.png" onclick="btnEditar_Click" width="16px" /><asp:ImageButton ID="btnEliminar" runat="server" CommandArgument='<%# Eval("IdAlumno") %>' height="16px" ImageUrl="Imagenes/cont_eliminar.png" onclick="btnEliminar_Click" width="16px" /></ItemTemplate><ItemStyle HorizontalAlign="Center" /></asp:TemplateField></Columns><HeaderStyle CssClass="GridView_Header_Row" /><RowStyle CssClass="GridView_Row" />
                        </asp:GridView></td></tr></table></ContentTemplate></asp:UpdatePanel></td></tr><tr><td class="titulo_b" align="center"><asp:Button ID="btnGuardar" runat="server" Text="Guardar" CssClass="Grabar" OnClick="btnGuardar_Click" />
                                                                        <onclick="btnGuardar_Click" /><asp:Button ID="btnLimpiar" runat="server" CssClass="BorrarFiltro" 
                                                                        Text="Limpiar" /><asp:Button ID="btnVolver" runat="server" CssClass="Aceptar" 
                                                                        onclick="btnVolver_Click" Text="Volver" /></td></tr><tr><td align="center"></td></tr></table></ContentTemplate></cc1:TabPanel>
                </cc1:TabContainer>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="lblMensaje" runat="server"></asp:Label>
            </td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
    </table>
     
    </ContentTemplate>
    </asp:UpdatePanel>
   <input id="hIdCliente" runat="server" type="hidden" style="width: 1px" />
   <input id="BD" runat="server" type="hidden" style="width: 1px" />
   <input id="Id" runat="server" type="hidden" style="width: 1px" />
    
</asp:Content>

