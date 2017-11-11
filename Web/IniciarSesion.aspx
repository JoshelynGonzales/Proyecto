<%@ Page Language="C#" AutoEventWireup="true" CodeFile="IniciarSesion.aspx.cs" Inherits="IniciarSesion" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Acceso Usuarios Autorizados</title>
    <link href="App_Themes/Default/Default.css" rel="stylesheet" type="text/css" />    
    <style type="text/css">
        .style1
        {
            width: 100%;
        }
        .style2
        {
            width: 22px;
        }
        .style5
        {
            color: #415699;
            font-family: Trebuchet MS;
            font-size: 11px;
            padding-left: 5px;
            height: 30px;
        }
        .style6
        {
            height: 30px;
        }
    </style>
    </head>
<body>
    <form id="form1" runat="server">
    <div style="margin-left:20%;margin-top:150px;margin-right:20%" align="center">
    <asp:Image ID="Image2" runat="server" ImageUrl="~/Imagenes/12744700_683097441833360_6629205475293559824_n.jpg" Width="250px" Height="200px" />
        <table cellpadding="0" width="450">
            <tr>
                <td class="TituloAzul">
                    <table border="0" cellpadding="0" cellspacing="0" class="style1">
                        <tr>
                            <td class="style2">
                                <asp:Image ID="Image1" runat="server" ImageUrl="~/Imagenes/Diseño/login.png" />
                            </td>
                            <td>
                    Ingrese sus credenciales</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table class="contenido"  width="100%" cellpadding="0" cellspacing="2" border="0">
                        <tr>
                            <td align="center">
                    <table cellpadding="0" cellspacing="2" border="0" style="width: 48%">
                        <tr>
                            <td class="style5" align="left">
                                Usuario</td>
                            <td align="left" class="style6">
                                <asp:TextBox ID="txtCuenta" runat="server" Width="150px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="style5" align="left">
                                Contraseña</td>
                            <td align="left" class="style6">
                                <asp:TextBox ID="txtpassword" runat="server" TextMode="Password" Width="150px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;</td>
                            <td>
                                <table width="100%" cellpadding="0" cellspacing="2" border="0">
                                    <tr>
                                        <td style="width:110px">
                                            <asp:ImageButton ID="ibtnLogin" runat="server" 
                                                ImageUrl="~/Imagenes/btn_acceder_on.png" onclick="ibtnLogin_Click"/>
                                        </td>
                                        <td style="width:110px">
                                            &nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="lblmensaje" runat="server" Height="100%" Width="100%"></asp:Label>
                            </td>
                        </tr>
                        </table>
                </td>
            </tr>
            <tr>
                <td>
                    &nbsp;</td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
