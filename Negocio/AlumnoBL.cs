using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Entidad;
using AccesoDatos;
using System.Data;
namespace Negocio
{
    public class AlumnoBL
    {
        AlumnoDL oAlumnoDL = new AlumnoDL();

        public int fnInsAlumno(Alumno oEntidad)
        {
            return oAlumnoDL.fnInsAlumno(oEntidad);
        }
        public DataTable fnSelUsuario(String usuario, String clave)
        {
            return oAlumnoDL.fnSelUsuario(usuario, clave);
        }
        public DataTable fnSelAlumno()
        {
            return oAlumnoDL.fnSelAlumno();
        }
        public DataTable fnSelBuscarAlumno(Alumno oEntidad)
        {
            return oAlumnoDL.fnSelBuscarAlumno(oEntidad);
        }
        public DataTable fnSelIglesia()
        {
            return oAlumnoDL.fnSelIglesia();
        }
        public DataTable fnSelSede()
        {
            return oAlumnoDL.fnSelSede();
        }
        public DataTable fnSelCurso(Int32 IdSede)
        {
            return oAlumnoDL.fnSelCurso(IdSede);
        }
        public int fnInsAlumnoNota(Nota oEntidad)
        {
            return oAlumnoDL.fnInsAlumnoNota(oEntidad);
        }
        public DataTable fnSelNota(Int32 IdAlumno,Int32 IdCurso)
        {
            return oAlumnoDL.fnSelNota(IdAlumno, IdCurso);
        }
        public DataTable fnSelRpt(Int32 IdSede, Int32 IdCurso)
        {
            return oAlumnoDL.fnSelRpt(IdSede, IdCurso);
        }
    }
}
