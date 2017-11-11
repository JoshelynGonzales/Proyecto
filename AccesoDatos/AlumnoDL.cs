using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Data;
using System.Data.SqlClient;
using Entidad;
namespace AccesoDatos
{
    public class AlumnoDL
    {
        public int fnInsAlumno(Alumno oEntidad)
        {
            int i = 0;
            try 
            {
                SqlConnection con = new SqlConnection(ClassConexion.Conexion);
                String SQL = "INSERT INTO Alumno(DNI,Nombres,Apellidos,FechaNacimiento,IdIglesia,IdSede,Observacion) Values ('" + oEntidad.DNI + "','" + oEntidad.Nombres + "','" + oEntidad.Apellidos + "','" + oEntidad.FechaNacimiento + "'," + oEntidad.IdIglesia + "," + oEntidad.IdSede + ",'" + oEntidad.Observacion + "')";
                SqlCommand cmd = new SqlCommand(SQL, con);
                cmd.CommandType = CommandType.Text;
                con.Open();                               
                 
                i = cmd.ExecuteNonQuery();
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return i;
        }
        public int fnInsAlumnoNota(Nota oEntidad)
        {
            int i = 0;
            try
            {
                SqlConnection con = new SqlConnection(ClassConexion.Conexion);
                String SQL = "INSERT INTO Nota(IdAlumno,IdTipoNota,IdCurso,Nota) Values (" + oEntidad.IdAlumno + "," + oEntidad.IdTipoNota + "," + oEntidad.IdCurso + "," + oEntidad.nNota + ")";
                SqlCommand cmd = new SqlCommand(SQL, con);
                cmd.CommandType = CommandType.Text;
                con.Open();

                i = cmd.ExecuteNonQuery();
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return i;
        }
        public DataTable fnSelNota(Int32 IdAlumno, Int32 IdCurso)
        {
            DataTable dt = new DataTable();
            try
            {               
                SqlConnection con = new SqlConnection(ClassConexion.Conexion);
                String SQL = "Select T1.IdNotas,T1.Nota,T2.Curso, Case T1.IdTipoNota When 1 Then 'P1' When 2 Then 'P2' When 3 Then 'P3' When 4 Then 'P4' When 5 Then 'Parcial' When 6 Then 'Final' End As TipoNota From Nota T1 Inner Join Curso T2 On T1.IdCurso = T2.IdCurso  Where T1.IdAlumno =" + IdAlumno + " And T1.IdCurso =" + IdCurso;
                SqlCommand cmd = new SqlCommand(SQL, con);
                cmd.CommandType = CommandType.Text;
                con.Open();

                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return dt;
        }
        public DataTable fnSelUsuario(String usuario, String clave)
        {
            DataTable dt = new DataTable();
            try
            {
                SqlConnection con = new SqlConnection(ClassConexion.Conexion);
                String SQL = "Select * From Coordinador Where Usuario ='" + usuario + "' And Clave = '" + clave + "' ";
                SqlCommand cmd = new SqlCommand(SQL, con);
                cmd.CommandType = CommandType.Text;
                con.Open();

                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return dt;
        }
        public DataTable fnSelAlumno()
        {
            DataTable dt = new DataTable();
            try
            {
                SqlConnection con = new SqlConnection(ClassConexion.Conexion);
                String SQL = "Select T1.IdAlumno,T1.DNI,T1.Nombres,T1.Apellidos,T1.FechaNacimiento,T2.Iglesia As IglesiaDsc, T3.Sede As SedeDsc From Alumno T1 Inner Join Iglesia T2 On T2.IdIglesia = T1.IdIglesia Inner Join Sede T3 On T3.IdSede = T1.IdSede ";
                SqlCommand cmd = new SqlCommand(SQL, con);
                cmd.CommandType = CommandType.Text;
                con.Open();

                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return dt;
        }
        public DataTable fnSelBuscarAlumno(Alumno oEntidad)
        {
            DataTable dt = new DataTable();
            try
            {
                SqlConnection con = new SqlConnection(ClassConexion.Conexion);
                String SQL = "Select * From Alumno Where DNI='" + oEntidad.DNI + "'";
                SqlCommand cmd = new SqlCommand(SQL, con);
                cmd.CommandType = CommandType.Text;
                con.Open();

                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return dt;
        }
        public DataTable fnSelCurso(Int32 IdSede)
        {
            DataTable dt = new DataTable();
            try
            {
                SqlConnection con = new SqlConnection(ClassConexion.Conexion);
                String SQL = "Select * From Curso Where IdSede = '" + IdSede + "'";
                SqlCommand cmd = new SqlCommand(SQL, con);
                cmd.CommandType = CommandType.Text;
                con.Open();

                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return dt;
        }
        public DataTable fnSelIglesia()
        {
            DataTable dt = new DataTable();
            try
            {
                SqlConnection con = new SqlConnection(ClassConexion.Conexion);
                String SQL = "Select * From Iglesia";
                SqlCommand cmd = new SqlCommand(SQL, con);
                cmd.CommandType = CommandType.Text;
                con.Open();

                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);                
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return dt;
        }
        public DataTable fnSelSede()
        {
            DataTable dt = new DataTable();
            try
            {
                SqlConnection con = new SqlConnection(ClassConexion.Conexion);
                String SQL = "Select * From Sede";
                SqlCommand cmd = new SqlCommand(SQL, con);
                cmd.CommandType = CommandType.Text;
                con.Open();

                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return dt;
        }
        public DataTable fnSelRpt(Int32 IdSede,Int32 IdCurso)
        {
            DataTable dt = new DataTable();
            try
            {
                SqlConnection con = new SqlConnection(ClassConexion.Conexion);
                String SQL = "Select Distinct T3.Nombres, T3.Apellidos  From Nota T1 Inner Join Curso T2 On T1.IdCurso = T2.IdCurso Inner Join Alumno T3 On T3.IdAlumno = T1.IdAlumno Where T3.IdSede =" + IdSede + " And T2.IdCurso =" + IdCurso;
                SqlCommand cmd = new SqlCommand(SQL, con);
                cmd.CommandType = CommandType.Text;
                con.Open();

                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return dt;
        }
    }
}
