<%@ Control Language="C#" AutoEventWireup="true" CodeFile="UCFecha.ascx.cs" Inherits="UserControls_UCFecha" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<table cellpadding="0" cellspacing="0">
    <tr>
        <td><asp:TextBox ID="txtFecha" runat="server" Width="70px"></asp:TextBox></td>
        <td><img id="imgFec"  src="~/Imagenes/btn_calendario.png" alt="" runat="server" 
                style="cursor: hand" /></td>
        <td>
            <asp:RequiredFieldValidator ID="rfvFecha" runat="server" ErrorMessage="Seleccione Fecha"  ControlToValidate="txtFecha" >*</asp:RequiredFieldValidator>
        </td>
    </tr>
</table>
<asp:HiddenField ID="hdnFormat" runat="server" />
<cc1:MaskedEditExtender ID="MaskedEditExtender1" runat="server" Mask="99/99/9999" MaskType="Date" TargetControlID="txtFecha"></cc1:MaskedEditExtender>



