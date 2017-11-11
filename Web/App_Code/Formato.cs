using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.IO.Compression;
using System.Web.UI.WebControls;
using System.Web;
using System.Security.Cryptography;


  public class Formato
  {

    public static void ZarCompresion(string strNombreArchivo, string strDestino)
    {
      FileStream fsArchivo;
      try
      {
        // Leemos el archivo a comprimir
        fsArchivo = new FileStream(strNombreArchivo, FileMode.Open, FileAccess.Read, FileShare.Read);
        //Definimos el buffer con el tamaño del archivo
        byte[] btBuffer = new byte[fsArchivo.Length];
        //Almacenamos los bytes del archivo en el buffer
        int intCount = fsArchivo.Read(btBuffer, 0, btBuffer.Length);
        fsArchivo.Close();
        //Definimos el nuevo stream que nos va a permitir grabar el zip
        FileStream fsSalida = new FileStream(strDestino, FileMode.Create, FileAccess.Write);
        //Rutina de compresion usando GZipStream
        GZipStream gzsArchivo = new GZipStream(fsSalida, CompressionMode.Compress, true);
        //Escribimos el resultado
        gzsArchivo.Write(btBuffer, 0, btBuffer.Length);
        gzsArchivo.Close();
        //Cerramos el archivo
        fsSalida.Flush();
        fsSalida.Close();
      }
      catch (Exception ex)
      { throw ex; }
    }

    public static void ZarDescompresion(string strNombreArchivo, string strDestino)
    {
      FileStream fsArchivo;
      try
      {
        //Leemos archivo a descomprimir
        fsArchivo = new FileStream(strNombreArchivo, FileMode.Open, FileAccess.Read, FileShare.Read);
        GZipStream gzsArchivo = new GZipStream(fsArchivo, CompressionMode.Decompress);

        //Codigo implementado para conocer las dimensiones que va a tener nuestro buffer, acumulativo.
        int offset = 0;
        int intCountBytes = 0;
        byte[] btSmallBuffer = new byte[100];
        while (true)
        {
          int bytesRead = gzsArchivo.Read(btSmallBuffer, 0, 100);
          if (bytesRead == 0)
          {
            break;
          }
          offset += bytesRead;
          intCountBytes += bytesRead;
        }
        //Creamos el buffer con el tamaño requerido
        byte[] buffer = new byte[intCountBytes];

        //Leemos el contenido del archivo comprimido al buffer
        fsArchivo = new FileStream(strNombreArchivo, FileMode.Open, FileAccess.Read, FileShare.Read);
        gzsArchivo = new GZipStream(fsArchivo, CompressionMode.Decompress);
        int intCount = gzsArchivo.Read(buffer, 0, intCountBytes);
        gzsArchivo.Close();

        //Escribimos la salida a un nuevo archivo, ya descomprimido
        FileStream fsSalida = new FileStream(strDestino, FileMode.Create, FileAccess.Write);
        fsSalida.Write(buffer, 0, intCountBytes);
        fsSalida.Flush();
        fsSalida.Close();
      }
      catch (Exception ex)
      { throw ex; }
    }
   
    public static void SetMensaje(Label lblerror, TipoMensaje tipo, string mensaje)
    {
      if (mensaje.Trim() == string.Empty)
      {
        lblerror.Visible = false;
      }
      else
      {
        lblerror.Visible = true;
        switch (tipo)
        {
          case (TipoMensaje.ERROR):
            lblerror.CssClass = "Error";
            break;
          case (TipoMensaje.EXITO):
            lblerror.CssClass = "Exito";
            break;
        }
        lblerror.Text = mensaje.Trim();
      }
    }

    public static void SinTag(TextBox txtControl)
    {
      txtControl.Attributes.Add("onKeypress", "SinTag();");
    }

    public static string ObtenerIPCliente(HttpRequest request)
    { return request.UserHostAddress; }

    public static string Encriptar(string dato)
    {
      UnicodeEncoding parser = new UnicodeEncoding();
      byte[] original = parser.GetBytes(dato);
      MD5CryptoServiceProvider Hash = new MD5CryptoServiceProvider();
      byte[] encriptado = Hash.ComputeHash(original);
      return Convert.ToBase64String(encriptado);
    }    
  }  
