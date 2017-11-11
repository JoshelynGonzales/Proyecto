<%@ Page Title="" Language="C#" MasterPageFile="~/Mp_Principal.master" AutoEventWireup="true" CodeFile="frmReporte.aspx.cs" Inherits="frmReporte" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cph_contenedor" Runat="Server">
     <asp:UpdatePanel ID="UpdatePanel2" runat="server">
    <ContentTemplate>    
   <table class="contenido" style="width:100%">
      <tr>
            <td id="titulo_scc" align="left" ><h3>
                <asp:Image ID="Image1" runat="server" Height="22px" ImageUrl="Pictures/papelylapiz.jpg" Width="22px" />
                REPORTE DE SEDE</h3></td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td colspan="3">
                <cc1:TabContainer ID="tbUsuario" runat="server" ActiveTabIndex="0" 
                    Width="100%">
                    <cc1:TabPanel runat="server" HeaderText="TabPanel1" ID="TabPanel1"><HeaderTemplate>REPORTE</HeaderTemplate><ContentTemplate><table style="width:100%;"><tr><td class="titulo_b" align="left">►REPORTE SEDES</td></tr><tr><td 
                                class="filtros_a"><asp:UpdatePanel ID="UpdatePanel1" runat="server"><ContentTemplate><table style="width:100%;"><tr><td colspan="2"><asp:Label ID="lblEmpresa" runat="server" Font-Bold="True" Font-Italic="True" 
                                            Text="INFORMACIÓN"></asp:Label></td><td>&nbsp;</td><td  align="left">&#160;</td></tr><tr><td>
                            <asp:Label ID="Label3" runat="server" Text="Sede CML"></asp:Label>
                            </td><td align="left">
                                <asp:DropDownList ID="ddlSede" runat="server" Width="250px">
                                </asp:DropDownList>
                            <asp:Button ID="btnBuscar" runat="server" CssClass="Buscar" OnClick="btnBuscar_Click" Text="Aceptar          " />
                            </td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td>
                            <asp:Label ID="Label9" runat="server" Text="Curso"></asp:Label>
                            </td><td align="left">
                                <asp:DropDownList ID="ddlCurso" runat="server" Width="250px">
                                </asp:DropDownList>
                            </td><td>&#160;</td>
             <td align="left">&#160;</td></tr><tr><td>&nbsp;</td><td align="left">&nbsp;</td><td>&#160;</td><td align="left">&#160;</td></tr><tr><td colspan="4"></td></tr><tr><td colspan="4"><asp:GridView ID="gvLista" runat="server" AutoGenerateColumns="False" 
                                                ScrollHeight="" ScrollWidth="" Width="100%" EnableModelValidation="True"><AlternatingRowStyle CssClass="GridView_Alternating_Row" /><Columns><asp:BoundField DataField="Nombres" HeaderText="Nombre" /><asp:BoundField DataField="Apellidos" HeaderText="Apellido" /></Columns><HeaderStyle CssClass="GridView_Header_Row" /><RowStyle CssClass="GridView_Row" /></asp:GridView></td></tr></table></ContentTemplate></asp:UpdatePanel></td></tr><tr><td class="titulo_b" align="center"><asp:Button ID="btnLimpiar" runat="server" CssClass="BorrarFiltro" 
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

