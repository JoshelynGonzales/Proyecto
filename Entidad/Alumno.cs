using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Entidad
{
    public class Alumno
    {
        public Int32 IdAlumno { get; set; }
        public String DNI { get; set; }
        public String Nombres { get; set; }
        public String Apellidos { get; set; }
        public String Observacion { get; set; }
        public String FechaNacimiento { get; set; }
        public Int32 IdIglesia { get; set; }
        public Int32 IdSede { get; set; }
    }
}
