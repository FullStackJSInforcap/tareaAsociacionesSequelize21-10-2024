const Curso = require("./models/curso");
const Direccion = require("./models/direccion");
const Estudiante = require("./models/estudiante");

const findAllCursos = async () => {
    const cursos = await Curso.findAll();
    console.log(cursos.map(curso => curso.toJSON()));
}

const findAllEstudiantes = async () => {
    const estudiantes = await Estudiante.findAll();
    const estudiantesJson = estudiantes.map((estudiante) => {
        return estudiante.toJSON();
    });
    console.log(estudiantesJson);
}

const findByIdCurso = async (id) => {
    const curso = await Curso.findOne({
        where: {
            id
        },
        include: Estudiante
    });
    console.log(curso.toJSON());
}

const findByIdEstudiante = async (id) => {
    const estudiante = await Estudiante.findOne({
        where: {
            id
        }
    });
    console.log(estudiante.toJSON());
    const direccion = await estudiante.getDireccion();
    console.log(direccion.toJSON());
}

const findAllCursosEstudiantes = async () => {
    const cursos = await Curso.findAll({
        include: Estudiante
    });
    const cursosJson = cursos.map((curso) => {
        return curso.toJSON();
    });
    console.log(cursosJson);
}
