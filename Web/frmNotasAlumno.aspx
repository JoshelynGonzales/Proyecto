<%@ Page Title="" Language="C#" MasterPageFile="~/Mp_Principal.master" AutoEventWireup="true" CodeFile="frmNotasAlumno.aspx.cs" Inherits="frmNotasAlumno" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
     <SCRIPT language=Javascript>
      function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : evt.keyCode;
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;    
         return true;
      }
   </SCRIPT>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cph_contenedor" Runat="Server">
      <asp:UpdatePanel ID="UpdatePanel2" runat="server">
    <ContentTemplate>    
   <table class="contenido" style="width:100%">
      <tr>
            <td id="titulo_scc" align="left" ><h3>
                <asp:Image ID="Image1" runat="server" Height="22px" ImageUrl="Pictures/papelylapiz.jpg" Width="22px" />
                NOTA DE ALUMNO</h3></td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td colspan="3">
                <cc1:TabContainer ID="tbUsuario" runat="server" ActiveTabIndex="0" 
                    Width="100%">
                    <cc1:TabPanel runat="server" HeaderText="TabPanel1" ID="TabPanel1"><HeaderTemplate>Administrar</HeaderTemplate><ContentTemplate><table style="width:100%;"><tr><td class="titulo_b" align="left">►INFORMACIÓN NOTAS DE ALUMNO</td></tr><tr><td 
                                class="filtros_a"><asp:UpdatePanel ID="UpdatePanel1" runat="server"><ContentTemplate><table style="width:100%;"><tr><td colspan="2"><asp:Label ID="lblEmpresa" runat="server" Font-Bold="True" Font-Italic="True" 
                                            Text="INFORMACIÓN"></asp:Label></td><td>&nbsp;</td><td  align="left">&#160;</td></tr><tr><td>&nbsp;</td><td align="left">
                            <asp:HiddenField ID="hfIdAlumno" runat="server" />
                            </td><td>&#160;</td><td align="left">&#160;</td></tr>
                            <tr>
                                <td>
                                    <asp:Label ID="Label1" runat="server" Text="DNI" ></asp:Label>
                                </td>
                                <td align="left">
                                    <asp:TextBox ID="txtDNI" runat="server" Width="250px" onkeypress="return isNumberKey(event)"></asp:TextBox>
                                    <asp:Button ID="btnBuscar" runat="server" CssClass="Buscar" OnClick="btnBuscar_Click" Text="Buscar           " />
                                </td>
                                <td>&nbsp;</td>
                                <td align="left">&nbsp;</td>
                            </tr>
                            <tr><td><asp:Label ID="Label3" runat="server" Text="Nombres"></asp:Label></td><td align="left"><asp:TextBox ID="txtRazonSocial" runat="server" Width="250px"></asp:TextBox></td><td>&#160;</td>
             <td align="left">&#160;</td></tr><tr><td><asp:Label ID="Label9" runat="server" Text="Apellidos"></asp:Label></td><td align="left"><asp:TextBox ID="txtApellidos" runat="server" Width="250px"></asp:TextBox></td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td><asp:Label ID="Label4" runat="server" Text="Tipo Nota"></asp:Label></td><td align="left">
                            
                            <asp:DropDownList ID="ddlTipoNota" runat="server" Width="250px">                               
                            </asp:DropDownList>                            
                            </td><td>&#160;</td><td align="left">&#160;</td></tr>                            
                            <tr>
                                

                                <td>
                                    

                                    <asp:Label ID="Label13" runat="server" Text="Curso"></asp:Label>
                                    

                                </td>
                                

                                <td align="left">
                                    

                                    <asp:DropDownList ID="ddlCurso" runat="server" Width="250px">
                                        

                                    </asp:DropDownList>
                                    

                                </td>
                                

                                <td>&nbsp;</td>
                                

                                <td align="left">&nbsp;</td>
                                

                            </tr>
                            

                            <tr><td>
                                <asp:Label ID="Label12" runat="server" Text="Nota"></asp:Label>
                                </td><td align="left">
                                

                                <asp:TextBox ID="txtNota" runat="server" Width="250px"></asp:TextBox>
                                

                                </td><td>
                                    

                                    &#160;</td><td align="left">&#160;</td></tr><tr><td>&#160;</td><td align="left">
                            

                            <asp:Button ID="btnAgregar" runat="server" CssClass="Agregar" Text="Añadir                " OnClick="btnAgregar_Click" />
                            
                            </td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td colspan="4"></td></tr><tr><td colspan="4"><asp:GridView ID="gvLista" runat="server" AutoGenerateColumns="False" 
                                                ScrollHeight="" ScrollWidth="" Width="100%" EnableModelValidation="True"><AlternatingRowStyle CssClass="GridView_Alternating_Row" /><Columns><asp:BoundField DataField="Curso" HeaderText="Curso" /><asp:BoundField DataField="TipoNota" HeaderText="Tipo Nota" /><asp:BoundField DataField="Nota" HeaderText="Nota" /><asp:TemplateField HeaderText=""><ItemTemplate><asp:Label ID="lblIdDetalle" runat="server" Text='<%# Eval("IdNotas") %>' 
                                                                Visible="False"></asp:Label><asp:ImageButton ID="btnEditar" runat="server" 
                                                                CommandArgument='<%# Eval("IdNotas") %>' height="16px" 
                                                                ImageUrl="Imagenes/view_details.png"  width="16px" /><asp:ImageButton ID="btnEliminar" runat="server" 
                                                                CommandArgument='<%# Eval("IdNotas") %>' height="16px" 
                                                                ImageUrl="Imagenes/cont_eliminar.png"  width="16px" /></ItemTemplate><ItemStyle HorizontalAlign="Center" /></asp:TemplateField></Columns><HeaderStyle CssClass="GridView_Header_Row" /><RowStyle CssClass="GridView_Row" /></asp:GridView></td></tr></table></ContentTemplate></asp:UpdatePanel></td></tr><tr><td class="titulo_b" align="center"><asp:Button ID="btnLimpiar" runat="server" CssClass="BorrarFiltro" 
                                                                        Text="Limpiar" /><asp:Button ID="btnVolver" runat="server" CssClass="Aceptar" 
                                                                         Text="Volver" /></td></tr><tr><td align="center"></td></tr></table></ContentTemplate></cc1:TabPanel>
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

