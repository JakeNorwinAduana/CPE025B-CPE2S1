class Tutoring {
    constructor() {
        this.students = [];
        this.teachers = [];
    }

    getStudentByName(name, surname) {
        return this.students.find(s => s.name === name && s.surname === surname);
    }

    getTeacherByName(name, surname) {
        return this.teachers.find(t => t.name === name && t.surname === surname);
    }

    addStudent(name, surname, email) {
        let student = new Student({name, surname, email});
        this.students.push(student);
    }

    addTeacher(name, surname, email) {
        let teacher = new Teacher({name, surname, email});
        this.teachers.push(teacher);
    }

    getStudentsForTeacher(teacher) {
        let result = [];

        for (let student of this.students) {
            let match = ExtendedUser.match(teacher, student);

            if (match.length > 0) {
                result.push(student);
            }
        }

        return result;
    }

    getTeacherForStudent(student) {
        let result = [];

        for (let teacher of this.teachers) {
            let match = ExtendedUser.match(teacher, student);

            if (match.length > 0) {
                result.push(teacher);
            }
        }

        return result;
    }
}