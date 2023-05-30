export default function updateStudentGradeByCity(func, city, newGrades) {
    const list = func();
    const nl = list
    .filter((obj, ) => obj.location === city )
    .map(student => {if (newGrades.studentsId === obj.id) obj.grade = newGrades.grade;
    else
})
}